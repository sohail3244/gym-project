import prisma from "../prisma/prisma.js";

/**
 * Create Attendance
 */
export const createAttendance = async (adminId, data) => {
  const {
    staffId,
    attendanceDate,
    checkIn,
    checkOut,
    status,
    notes,
  } = data;

  if (!staffId) {
    throw new Error("Staff ID is required");
  }

  if (!attendanceDate) {
    throw new Error("Attendance date is required");
  }

  // Check staff belongs to logged-in admin
  const staff = await prisma.staff.findFirst({
    where: {
      id: staffId,
      adminId: adminId,
    },
  });

  if (!staff) {
    throw new Error("Staff not found or does not belong to this admin");
  }

  // Prevent duplicate attendance for same staff/date
  const existingAttendance = await prisma.staffAttendance.findUnique({
    where: {
      staffId_attendanceDate: {
        staffId,
        attendanceDate: new Date(attendanceDate),
      },
    },
  });

  if (existingAttendance) {
    throw new Error("Attendance already exists for this staff on this date");
  }

  const attendance = await prisma.staffAttendance.create({
    data: {
      adminId,
      staffId,
      attendanceDate: new Date(attendanceDate),
      checkIn: checkIn ? new Date(checkIn) : null,
      checkOut: checkOut ? new Date(checkOut) : null,
      status: status || "PRESENT",
      notes: notes || null,
    },
    include: {
      staff: {
        select: {
          id: true,
          name: true,
          mobileNumber: true,
          staffType: true,
          designation: true,
        },
      },
    },
  });

  return attendance;
};


/**
 * Get All Attendance
 */
export const getAllAttendance = async (adminId, filters = {}) => {
  const {
    staffId,
    status,
    date,
    startDate,
    endDate,
    page = 1,
    limit = 20,
  } = filters;

  const pageNumber = Math.max(Number(page), 1);
  const limitNumber = Math.min(Math.max(Number(limit), 1), 100);

  const skip = (pageNumber - 1) * limitNumber;

  const where = {
    staff: {
      adminId,
    },
  };

  if (staffId) {
    where.staffId = staffId;
  }

  if (status) {
    where.status = status;
  }

  if (date) {
    const selectedDate = new Date(date);

    if (Number.isNaN(selectedDate.getTime())) {
      throw new Error("Invalid date");
    }

    selectedDate.setHours(0, 0, 0, 0);

    const nextDate = new Date(selectedDate);
    nextDate.setDate(nextDate.getDate() + 1);

    where.attendanceDate = {
      gte: selectedDate,
      lt: nextDate,
    };
  }

  if (startDate || endDate) {
    where.attendanceDate = {};

    if (startDate) {
      const start = new Date(startDate);

      if (Number.isNaN(start.getTime())) {
        throw new Error("Invalid start date");
      }

      start.setHours(0, 0, 0, 0);

      where.attendanceDate.gte = start;
    }

    if (endDate) {
      const end = new Date(endDate);

      if (Number.isNaN(end.getTime())) {
        throw new Error("Invalid end date");
      }

      end.setHours(23, 59, 59, 999);

      where.attendanceDate.lte = end;
    }
  }

  const [attendance, total] = await prisma.$transaction([
    prisma.attendance.findMany({
      where,
      skip,
      take: limitNumber,
      orderBy: {
        attendanceDate: "desc",
      },
      include: {
        staff: {
          select: {
            id: true,
            name: true,
            mobileNumber: true,
            designation: true,
            status: true,
          },
        },
      },
    }),

    prisma.attendance.count({
      where,
    }),
  ]);

  return {
    attendance,
    pagination: {
      page: pageNumber,
      limit: limitNumber,
      total,
      totalPages: Math.ceil(total / limitNumber),
    },
  };
};


/**
 * Get Attendance By ID
 */
export const getAttendanceById = async (adminId, attendanceId) => {
  const attendance = await prisma.attendance.findFirst({
    where: {
      id: attendanceId,
      staff: {
        adminId,
      },
    },
    include: {
      staff: {
        select: {
          id: true,
          name: true,
          mobileNumber: true,
          email: true,
          designation: true,
          status: true,
        },
      },
    },
  });

  if (!attendance) {
    throw new Error("Attendance not found");
  }

  return attendance;
};


/**
 * Update Attendance
 */
export const updateAttendance = async (
  adminId,
  attendanceId,
  data
) => {
  const existingAttendance = await prisma.attendance.findFirst({
    where: {
      id: attendanceId,
      staff: {
        adminId,
      },
    },
  });

  if (!existingAttendance) {
    throw new Error("Attendance not found");
  }

  const updateData = {};

  if (data.status !== undefined) {
    updateData.status = data.status;
  }

  if (data.checkIn !== undefined) {
    updateData.checkIn = data.checkIn
      ? new Date(data.checkIn)
      : null;
  }

  if (data.checkOut !== undefined) {
    updateData.checkOut = data.checkOut
      ? new Date(data.checkOut)
      : null;
  }

  if (data.notes !== undefined) {
    updateData.notes = data.notes || null;
  }

  if (data.attendanceDate !== undefined) {
    const date = new Date(data.attendanceDate);

    if (Number.isNaN(date.getTime())) {
      throw new Error("Invalid attendance date");
    }

    date.setHours(0, 0, 0, 0);

    updateData.attendanceDate = date;
  }

  const attendance = await prisma.attendance.update({
    where: {
      id: attendanceId,
    },
    data: updateData,
    include: {
      staff: {
        select: {
          id: true,
          name: true,
          mobileNumber: true,
          designation: true,
          status: true,
        },
      },
    },
  });

  return attendance;
};


/**
 * Delete Attendance
 */
export const deleteAttendance = async (
  adminId,
  attendanceId
) => {
  const existingAttendance = await prisma.attendance.findFirst({
    where: {
      id: attendanceId,
      staff: {
        adminId,
      },
    },
  });

  if (!existingAttendance) {
    throw new Error("Attendance not found");
  }

  await prisma.attendance.delete({
    where: {
      id: attendanceId,
    },
  });

  return {
    message: "Attendance deleted successfully",
  };
};


/**
 * Get Staff Attendance
 */
export const getStaffAttendance = async (
  adminId,
  staffId,
  filters = {}
) => {
  const staff = await prisma.staff.findFirst({
    where: {
      id: staffId,
      adminId,
    },
  });

  if (!staff) {
    throw new Error("Staff not found");
  }

  const {
    startDate,
    endDate,
    page = 1,
    limit = 30,
  } = filters;

  const pageNumber = Math.max(Number(page), 1);
  const limitNumber = Math.min(Math.max(Number(limit), 1), 100);

  const skip = (pageNumber - 1) * limitNumber;

  const where = {
    staffId,
  };

  if (startDate || endDate) {
    where.attendanceDate = {};

    if (startDate) {
      const start = new Date(startDate);

      if (Number.isNaN(start.getTime())) {
        throw new Error("Invalid start date");
      }

      start.setHours(0, 0, 0, 0);

      where.attendanceDate.gte = start;
    }

    if (endDate) {
      const end = new Date(endDate);

      if (Number.isNaN(end.getTime())) {
        throw new Error("Invalid end date");
      }

      end.setHours(23, 59, 59, 999);

      where.attendanceDate.lte = end;
    }
  }

  const [attendance, total] = await prisma.$transaction([
    prisma.attendance.findMany({
      where,
      skip,
      take: limitNumber,
      orderBy: {
        attendanceDate: "desc",
      },
    }),

    prisma.attendance.count({
      where,
    }),
  ]);

  return {
    staff,
    attendance,
    pagination: {
      page: pageNumber,
      limit: limitNumber,
      total,
      totalPages: Math.ceil(total / limitNumber),
    },
  };
};


/**
 * Attendance Summary
 */
export const getAttendanceSummary = async (
  adminId,
  filters = {}
) => {
  const { staffId, startDate, endDate } = filters;

  const where = {
    staff: {
      adminId,
    },
  };

  if (staffId) {
    where.staffId = staffId;
  }

  if (startDate || endDate) {
    where.attendanceDate = {};

    if (startDate) {
      const start = new Date(startDate);

      if (Number.isNaN(start.getTime())) {
        throw new Error("Invalid start date");
      }

      start.setHours(0, 0, 0, 0);

      where.attendanceDate.gte = start;
    }

    if (endDate) {
      const end = new Date(endDate);

      if (Number.isNaN(end.getTime())) {
        throw new Error("Invalid end date");
      }

      end.setHours(23, 59, 59, 999);

      where.attendanceDate.lte = end;
    }
  }

  const records = await prisma.attendance.findMany({
    where,
    select: {
      status: true,
    },
  });

  const summary = {
    total: records.length,
    present: 0,
    absent: 0,
    halfDay: 0,
    leave: 0,
  };

  for (const record of records) {
    if (record.status === "PRESENT") {
      summary.present++;
    }

    if (record.status === "ABSENT") {
      summary.absent++;
    }

    if (record.status === "HALF_DAY") {
      summary.halfDay++;
    }

    if (record.status === "LEAVE") {
      summary.leave++;
    }
  }

  return summary;
};