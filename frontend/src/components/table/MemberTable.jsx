"use client";

import React, { useMemo, useState } from "react";
import {
  MoreVertical,
  Eye,
  Pencil,
  Trash2,
  UserCheck,
  UserX,
} from "lucide-react";

import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
} from "./core";

import SearchBar from "../ui/SearchBar";
import StatusFilter from "../ui/StatusFilter";
import DateFilter from "../ui/DateFilter";

const DUMMY_MEMBERS = [
  {
    id: "mem_001",
    adminId: "admin_001",
    name: "Rahul Sharma",
    mobileNumber: "9876543210",
    email: "rahul@gmail.com",
    gender: "MALE",
    dateOfBirth: "1995-04-12",
    address: "Sector 5, Jaipur",
    city: "Jaipur",
    state: "Rajasthan",
    pincode: "302001",
    status: "ACTIVE",
    createdAt: "2026-08-28T10:30:00",
  },
  {
    id: "mem_002",
    adminId: "admin_001",
    name: "Priya Singh",
    mobileNumber: "9876501234",
    email: "priya@gmail.com",
    gender: "FEMALE",
    dateOfBirth: "1998-07-20",
    address: "Vaishali Nagar",
    city: "Jaipur",
    state: "Rajasthan",
    pincode: "302021",
    status: "ACTIVE",
    createdAt: "2026-08-27T12:15:00",
  },
  {
    id: "mem_003",
    adminId: "admin_002",
    name: "Amit Verma",
    mobileNumber: "9988776655",
    email: "amit@gmail.com",
    gender: "MALE",
    dateOfBirth: "1992-02-15",
    address: "Malviya Nagar",
    city: "Jaipur",
    state: "Rajasthan",
    pincode: "302017",
    status: "INACTIVE",
    createdAt: "2026-08-26T09:45:00",
  },
  {
    id: "mem_004",
    adminId: "admin_002",
    name: "Neha Gupta",
    mobileNumber: "9123456789",
    email: "neha@gmail.com",
    gender: "FEMALE",
    dateOfBirth: "2000-11-05",
    address: "Mansarovar",
    city: "Jaipur",
    state: "Rajasthan",
    pincode: "302020",
    status: "ACTIVE",
    createdAt: "2026-08-25T16:20:00",
  },
  {
    id: "mem_005",
    adminId: "admin_003",
    name: "Vikas Kumar",
    mobileNumber: "9012345678",
    email: "vikas@gmail.com",
    gender: "MALE",
    dateOfBirth: "1990-08-18",
    address: "Civil Lines",
    city: "Jaipur",
    state: "Rajasthan",
    pincode: "302006",
    status: "SUSPENDED",
    createdAt: "2026-08-24T11:10:00",
  },
  {
    id: "mem_006",
    adminId: "admin_003",
    name: "Anjali Mehta",
    mobileNumber: "9090909090",
    email: "anjali@gmail.com",
    gender: "FEMALE",
    dateOfBirth: "1997-03-25",
    address: "C-Scheme",
    city: "Jaipur",
    state: "Rajasthan",
    pincode: "302001",
    status: "ACTIVE",
    createdAt: "2026-08-23T14:40:00",
  },
];

const formatDate = (date) => {
  if (!date) return "-";

  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const getStatusClass = (status) => {
  switch (status) {
    case "ACTIVE":
      return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400";

    case "INACTIVE":
      return "bg-muted text-muted-foreground";

    case "SUSPENDED":
      return "bg-red-500/10 text-red-600 dark:text-red-400";

    default:
      return "bg-muted text-foreground";
  }
};

export default function MemberTable() {
  const [members] = useState(DUMMY_MEMBERS);

  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");

  const [openAction, setOpenAction] = useState(null);

  const filteredMembers = useMemo(() => {
    return members.filter((member) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        !search ||
        member.name.toLowerCase().includes(searchText) ||
        member.mobileNumber
          .toLowerCase()
          .includes(searchText) ||
        member.email?.toLowerCase().includes(searchText) ||
        member.city?.toLowerCase().includes(searchText) ||
        member.state?.toLowerCase().includes(searchText) ||
        member.id.toLowerCase().includes(searchText);

      const matchesStatus =
        !status || member.status === status;

      let matchesDate = true;

      if (date) {
        const memberDate = new Date(member.createdAt)
          .toISOString()
          .split("T")[0];

        matchesDate = memberDate === date;
      }

      return (
        matchesSearch &&
        matchesStatus &&
        matchesDate
      );
    });
  }, [members, search, status, date]);

  const total = filteredMembers.length;

  const totalPages = Math.max(
    1,
    Math.ceil(total / rowsPerPage)
  );

  const paginatedMembers = filteredMembers.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handleSearch = (value) => {
    setSearch(value);
    setPage(1);
  };

  const handleStatusChange = (value) => {
    setStatus(value);
    setPage(1);
  };

  const handleDateChange = (value) => {
    setDate(value);
    setPage(1);
  };

  const handleRowsPerPageChange = (value) => {
    setRowsPerPage(Number(value));
    setPage(1);
  };

  const clearFilters = () => {
    setSearch("");
    setStatus("");
    setDate("");
    setPage(1);
  };

  return (
    <div className="space-y-4">

      {/* =========================
          FILTERS
      ========================== */}

      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">

        <div className="flex flex-1 flex-col gap-3 sm:flex-row">

          <SearchBar
            value={search}
            onChange={handleSearch}
            placeholder="Search members..."
          />

          <StatusFilter
            value={status}
            onChange={handleStatusChange}
            options={[
              {
                value: "ACTIVE",
                label: "Active",
              },
              {
                value: "INACTIVE",
                label: "Inactive",
              },
              {
                value: "SUSPENDED",
                label: "Suspended",
              },
            ]}
          />

          <DateFilter
            value={date}
            onChange={handleDateChange}
          />

        </div>

        {(search || status || date) && (
          <button
            type="button"
            onClick={clearFilters}
            className="
              h-10
              rounded-xl
              border
              border-border
              px-4
              text-sm
              font-medium
              text-muted-foreground
              transition
              hover:bg-secondary
              hover:text-foreground
            "
          >
            Clear Filters
          </button>
        )}

      </div>

      {/* =========================
          TABLE
      ========================== */}

      <div className="overflow-hidden rounded-2xl border border-border bg-background">

        <Table>

          <TableHeader>

            <TableRow>

              <TableCell
                header
                className="w-12.5"
              >
                #
              </TableCell>

              <TableCell header>
                Member
              </TableCell>

              <TableCell header>
                Mobile
              </TableCell>

              <TableCell header>
                Gender
              </TableCell>

              <TableCell header>
                City
              </TableCell>

              <TableCell header>
                Status
              </TableCell>

              <TableCell header>
                Joined
              </TableCell>

              <TableCell
                header
                align="right"
              >
                Actions
              </TableCell>

            </TableRow>

          </TableHeader>

          <TableBody>

            {paginatedMembers.length === 0 ? (

              <TableRow>

                <TableCell
                  colSpan={8}
                  align="center"
                  className="py-14"
                >
                  <div className="text-sm text-muted-foreground">
                    No members found.
                  </div>
                </TableCell>

              </TableRow>

            ) : (

              paginatedMembers.map(
                (member, index) => (

                  <TableRow
                    key={member.id}
                  >

                    {/* INDEX */}

                    <TableCell>
                      {(page - 1) *
                        rowsPerPage +
                        index +
                        1}
                    </TableCell>

                    {/* MEMBER */}

                    <TableCell>

                      <div>
                        <p className="font-medium text-foreground">
                          {member.name}
                        </p>

                        <p className="text-xs text-muted-foreground">
                          {member.email || "-"}
                        </p>
                      </div>

                    </TableCell>

                    {/* MOBILE */}

                    <TableCell>

                      <span className="text-sm text-foreground">
                        {member.mobileNumber}
                      </span>

                    </TableCell>

                    {/* GENDER */}

                    <TableCell>

                      <span className="text-sm text-muted-foreground">
                        {member.gender
                          ? member.gender
                              .replaceAll("_", " ")
                          : "-"}
                      </span>

                    </TableCell>

                    {/* CITY */}

                    <TableCell>

                      <div>
                        <p className="text-sm text-foreground">
                          {member.city || "-"}
                        </p>

                        <p className="text-xs text-muted-foreground">
                          {member.state || ""}
                        </p>
                      </div>

                    </TableCell>

                    {/* STATUS */}

                    <TableCell>

                      <span
                        className={`
                          inline-flex
                          rounded-full
                          px-2.5
                          py-1
                          text-xs
                          font-medium
                          ${getStatusClass(
                            member.status
                          )}
                        `}
                      >
                        {member.status}
                      </span>

                    </TableCell>

                    {/* CREATED */}

                    <TableCell>

                      <span className="text-sm text-muted-foreground">
                        {formatDate(
                          member.createdAt
                        )}
                      </span>

                    </TableCell>

                    {/* ACTIONS */}

                    <TableCell align="right">

                      <div className="relative inline-flex">

                        <button
                          type="button"
                          onClick={() =>
                            setOpenAction(
                              openAction ===
                                member.id
                                ? null
                                : member.id
                            )
                          }
                          className="
                            flex
                            h-8
                            w-8
                            items-center
                            justify-center
                            rounded-lg
                            text-muted-foreground
                            transition
                            hover:bg-secondary
                            hover:text-foreground
                          "
                        >
                          <MoreVertical
                            size={17}
                          />
                        </button>

                        {openAction ===
                          member.id && (

                          <>

                            <div
                              className="fixed inset-0 z-10"
                              onClick={() =>
                                setOpenAction(null)
                              }
                            />

                            <div
                              className="
                                absolute
                                right-0
                                top-9
                                z-20
                                w-44
                                overflow-hidden
                                rounded-xl
                                border
                                border-border
                                bg-background
                                p-1
                                shadow-xl
                              "
                            >

                              {/* VIEW */}

                              <button
                                type="button"
                                onClick={() => {
                                  console.log(
                                    "View member:",
                                    member
                                  );
                                  setOpenAction(
                                    null
                                  );
                                }}
                                className="
                                  flex
                                  w-full
                                  items-center
                                  gap-2
                                  rounded-lg
                                  px-3
                                  py-2
                                  text-left
                                  text-sm
                                  hover:bg-secondary
                                "
                              >
                                <Eye size={15} />
                                View Details
                              </button>

                              {/* EDIT */}

                              <button
                                type="button"
                                onClick={() => {
                                  console.log(
                                    "Edit member:",
                                    member
                                  );
                                  setOpenAction(
                                    null
                                  );
                                }}
                                className="
                                  flex
                                  w-full
                                  items-center
                                  gap-2
                                  rounded-lg
                                  px-3
                                  py-2
                                  text-left
                                  text-sm
                                  hover:bg-secondary
                                "
                              >
                                <Pencil size={15} />
                                Edit Member
                              </button>

                              {/* STATUS */}

                              <button
                                type="button"
                                onClick={() => {
                                  console.log(
                                    "Toggle status:",
                                    member
                                  );
                                  setOpenAction(
                                    null
                                  );
                                }}
                                className="
                                  flex
                                  w-full
                                  items-center
                                  gap-2
                                  rounded-lg
                                  px-3
                                  py-2
                                  text-left
                                  text-sm
                                  hover:bg-secondary
                                "
                              >
                                {member.status ===
                                "ACTIVE" ? (
                                  <>
                                    <UserX
                                      size={15}
                                    />
                                    Deactivate
                                  </>
                                ) : (
                                  <>
                                    <UserCheck
                                      size={15}
                                    />
                                    Activate
                                  </>
                                )}
                              </button>

                              {/* DELETE */}

                              <button
                                type="button"
                                onClick={() => {
                                  console.log(
                                    "Delete member:",
                                    member
                                  );
                                  setOpenAction(
                                    null
                                  );
                                }}
                                className="
                                  flex
                                  w-full
                                  items-center
                                  gap-2
                                  rounded-lg
                                  px-3
                                  py-2
                                  text-left
                                  text-sm
                                  text-destructive
                                  hover:bg-destructive/10
                                "
                              >
                                <Trash2 size={15} />
                                Delete Member
                              </button>

                            </div>

                          </>

                        )}

                      </div>

                    </TableCell>

                  </TableRow>

                )
              )

            )}

          </TableBody>

          <tfoot>

            <tr>

              <td colSpan={8}>

                <TablePagination
                  page={page}
                  totalPages={totalPages}
                  totalRows={total}
                  selectedRows={0}
                  rowsPerPage={rowsPerPage}
                  onPageChange={setPage}
                  onRowsPerPageChange={
                    handleRowsPerPageChange
                  }
                />

              </td>

            </tr>

          </tfoot>

        </Table>

      </div>

    </div>
  );
}