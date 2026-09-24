import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import api from "../api";

/* =========================================================
   QUERY KEYS
========================================================= */

export const ATTENDANCE_QUERY_KEYS = {
  all: ["attendance"],

  lists: () => [
    ...ATTENDANCE_QUERY_KEYS.all,
    "list",
  ],

  list: (params = {}) => [
    ...ATTENDANCE_QUERY_KEYS.lists(),
    params,
  ],

  details: () => [
    ...ATTENDANCE_QUERY_KEYS.all,
    "detail",
  ],

  detail: (attendanceId) => [
    ...ATTENDANCE_QUERY_KEYS.details(),
    attendanceId,
  ],

  staff: () => [
    ...ATTENDANCE_QUERY_KEYS.all,
    "staff",
  ],

  staffAttendance: (staffId, params = {}) => [
    ...ATTENDANCE_QUERY_KEYS.staff(),
    staffId,
    params,
  ],

  summaries: () => [
    ...ATTENDANCE_QUERY_KEYS.all,
    "summary",
  ],

  summary: (params = {}) => [
    ...ATTENDANCE_QUERY_KEYS.summaries(),
    params,
  ],
};


/* =========================================================
   GET ALL ATTENDANCE
   GET /attendance
========================================================= */

export const useAttendance = (params = {}) => {
  return useQuery({
    queryKey: ATTENDANCE_QUERY_KEYS.list(params),

    queryFn: async () => {
      const response = await api.get("/attendance", {
        params,
      });

      return response.data;
    },

    staleTime: 30 * 1000,

    placeholderData: (previousData) => previousData,
  });
};


/* =========================================================
   GET ATTENDANCE BY ID
   GET /attendance/:id
========================================================= */

export const useAttendanceById = (attendanceId) => {
  return useQuery({
    queryKey: ATTENDANCE_QUERY_KEYS.detail(
      attendanceId
    ),

    queryFn: async () => {
      const response = await api.get(
        `/attendance/${attendanceId}`
      );

      return response.data;
    },

    enabled: Boolean(attendanceId),

    staleTime: 30 * 1000,
  });
};


/* =========================================================
   CREATE ATTENDANCE
   POST /attendance
========================================================= */

export const useCreateAttendance = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await api.post(
        "/attendance",
        data
      );

      return response.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ATTENDANCE_QUERY_KEYS.lists(),
      });

      queryClient.invalidateQueries({
        queryKey: ATTENDANCE_QUERY_KEYS.summaries(),
      });

      queryClient.invalidateQueries({
        queryKey: ATTENDANCE_QUERY_KEYS.staff(),
      });
    },
  });
};


/* =========================================================
   UPDATE ATTENDANCE
   PUT /attendance/:id
========================================================= */

export const useUpdateAttendance = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      attendanceId,
      data,
    }) => {
      const response = await api.put(
        `/attendance/${attendanceId}`,
        data
      );

      return response.data;
    },

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ATTENDANCE_QUERY_KEYS.lists(),
      });

      queryClient.invalidateQueries({
        queryKey: ATTENDANCE_QUERY_KEYS.detail(
          variables.attendanceId
        ),
      });

      queryClient.invalidateQueries({
        queryKey: ATTENDANCE_QUERY_KEYS.summaries(),
      });

      queryClient.invalidateQueries({
        queryKey: ATTENDANCE_QUERY_KEYS.staff(),
      });
    },
  });
};


/* =========================================================
   DELETE ATTENDANCE
   DELETE /attendance/:id
========================================================= */

export const useDeleteAttendance = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (attendanceId) => {
      const response = await api.delete(
        `/attendance/${attendanceId}`
      );

      return response.data;
    },

    onSuccess: (_, attendanceId) => {
      queryClient.invalidateQueries({
        queryKey: ATTENDANCE_QUERY_KEYS.lists(),
      });

      queryClient.removeQueries({
        queryKey: ATTENDANCE_QUERY_KEYS.detail(
          attendanceId
        ),
      });

      queryClient.invalidateQueries({
        queryKey: ATTENDANCE_QUERY_KEYS.summaries(),
      });

      queryClient.invalidateQueries({
        queryKey: ATTENDANCE_QUERY_KEYS.staff(),
      });
    },
  });
};


/* =========================================================
   GET STAFF ATTENDANCE
   GET /attendance/staff/:staffId
========================================================= */

export const useStaffAttendance = (
  staffId,
  params = {}
) => {
  return useQuery({
    queryKey:
      ATTENDANCE_QUERY_KEYS.staffAttendance(
        staffId,
        params
      ),

    queryFn: async () => {
      const response = await api.get(
        `/attendance/staff/${staffId}`,
        {
          params,
        }
      );

      return response.data;
    },

    enabled: Boolean(staffId),

    staleTime: 30 * 1000,

    placeholderData: (previousData) => previousData,
  });
};


/* =========================================================
   GET ATTENDANCE SUMMARY
   GET /attendance/summary
========================================================= */

export const useAttendanceSummary = (
  params = {}
) => {
  return useQuery({
    queryKey:
      ATTENDANCE_QUERY_KEYS.summary(params),

    queryFn: async () => {
      const response = await api.get(
        "/attendance/summary",
        {
          params,
        }
      );

      return response.data;
    },

    staleTime: 30 * 1000,
  });
};


/* =========================================================
   ATTENDANCE ACTIONS
========================================================= */

export const useAttendanceActions = () => {
  const queryClient = useQueryClient();

  return {
    refreshAttendance: () =>
      queryClient.invalidateQueries({
        queryKey: ATTENDANCE_QUERY_KEYS.lists(),
      }),

    refreshAttendanceDetail: (attendanceId) =>
      queryClient.invalidateQueries({
        queryKey:
          ATTENDANCE_QUERY_KEYS.detail(
            attendanceId
          ),
      }),

    refreshStaffAttendance: (staffId) =>
      queryClient.invalidateQueries({
        queryKey:
          ATTENDANCE_QUERY_KEYS.staffAttendance(
            staffId
          ),
      }),

    refreshAttendanceSummary: () =>
      queryClient.invalidateQueries({
        queryKey:
          ATTENDANCE_QUERY_KEYS.summaries(),
      }),

    clearAttendanceCache: () =>
      queryClient.removeQueries({
        queryKey: ATTENDANCE_QUERY_KEYS.all,
      }),
  };
};