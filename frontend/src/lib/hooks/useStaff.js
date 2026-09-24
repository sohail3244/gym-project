import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import api from "../api";

/* =========================================
   QUERY KEYS
========================================= */

export const STAFF_QUERY_KEYS = {
  all: ["staff"],

  lists: () => [...STAFF_QUERY_KEYS.all, "list"],

  list: (params = {}) => [
    ...STAFF_QUERY_KEYS.lists(),
    params,
  ],

  details: () => [...STAFF_QUERY_KEYS.all, "detail"],

  detail: (staffId) => [
    ...STAFF_QUERY_KEYS.details(),
    staffId,
  ],
};

/* =========================================
   GET ALL STAFF
========================================= */

export const useStaff = (params = {}) => {
  return useQuery({
    queryKey: STAFF_QUERY_KEYS.list(params),

    queryFn: async () => {
      const response = await api.get("/staff", {
        params,
      });

      return response.data;
    },

    staleTime: 30 * 1000,

    placeholderData: (previousData) => previousData,
  });
};

/* =========================================
   GET STAFF BY ID
========================================= */

export const useStaffById = (staffId) => {
  return useQuery({
    queryKey: STAFF_QUERY_KEYS.detail(staffId),

    queryFn: async () => {
      const response = await api.get(
        `/staff/${staffId}`
      );

      return response.data;
    },

    enabled: Boolean(staffId),

    staleTime: 30 * 1000,
  });
};

/* =========================================
   CREATE STAFF
========================================= */

export const useCreateStaff = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await api.post(
        "/staff",
        data
      );

      return response.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: STAFF_QUERY_KEYS.lists(),
      });
    },
  });
};

/* =========================================
   UPDATE STAFF
========================================= */

export const useUpdateStaff = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ staffId, data }) => {
      const response = await api.patch(
        `/staff/${staffId}`,
        data
      );

      return response.data;
    },

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: STAFF_QUERY_KEYS.lists(),
      });

      queryClient.invalidateQueries({
        queryKey: STAFF_QUERY_KEYS.detail(
          variables.staffId
        ),
      });
    },
  });
};

/* =========================================
   UPDATE STAFF STATUS
========================================= */

export const useUpdateStaffStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ staffId, status }) => {
      const response = await api.patch(
        `/staff/${staffId}/status`,
        {
          status,
        }
      );

      return response.data;
    },

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: STAFF_QUERY_KEYS.lists(),
      });

      queryClient.invalidateQueries({
        queryKey: STAFF_QUERY_KEYS.detail(
          variables.staffId
        ),
      });
    },
  });
};

/* =========================================
   DELETE STAFF
========================================= */

export const useDeleteStaff = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (staffId) => {
      const response = await api.delete(
        `/staff/${staffId}`
      );

      return response.data;
    },

    onSuccess: (_, staffId) => {
      queryClient.invalidateQueries({
        queryKey: STAFF_QUERY_KEYS.lists(),
      });

      queryClient.removeQueries({
        queryKey: STAFF_QUERY_KEYS.detail(staffId),
      });
    },
  });
};

/* =========================================
   STAFF ACTIONS
========================================= */

export const useStaffActions = () => {
  const queryClient = useQueryClient();

  return {
    refreshStaff: () =>
      queryClient.invalidateQueries({
        queryKey: STAFF_QUERY_KEYS.lists(),
      }),

    refreshStaffMember: (staffId) =>
      queryClient.invalidateQueries({
        queryKey: STAFF_QUERY_KEYS.detail(staffId),
      }),

    clearStaffCache: () =>
      queryClient.removeQueries({
        queryKey: STAFF_QUERY_KEYS.all,
      }),
  };
};