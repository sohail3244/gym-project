import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import api from "../api";

const ADMIN_QUERY_KEYS = {
  all: ["admins"],

  lists: () => [...ADMIN_QUERY_KEYS.all, "list"],

  list: (params) => [
    ...ADMIN_QUERY_KEYS.lists(),
    params,
  ],

  details: () => [...ADMIN_QUERY_KEYS.all, "detail"],

  detail: (id) => [
    ...ADMIN_QUERY_KEYS.details(),
    id,
  ],
};

/* -------------------------------------------------------------------------- */
/* Register Admin - Public Registration                                       */
/* -------------------------------------------------------------------------- */

export const useRegisterAdmin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await api.post(
        "/admin/register",
        data
      );

      return response.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ADMIN_QUERY_KEYS.lists(),
      });
    },
  });
};

/* -------------------------------------------------------------------------- */
/* Create Admin - Super Admin                                                 */
/* -------------------------------------------------------------------------- */

export const useCreateAdmin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await api.post(
        "/admin",
        data
      );

      return response.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ADMIN_QUERY_KEYS.lists(),
      });
    },
  });
};

/* -------------------------------------------------------------------------- */
/* Get All Admins                                                             */
/* -------------------------------------------------------------------------- */

export const useAdmins = (params = {}) => {
  return useQuery({
    queryKey: ADMIN_QUERY_KEYS.list(params),

    queryFn: async () => {
      const response = await api.get(
        "/admin",
        {
          params,
        }
      );

      return response.data;
    },

    staleTime: 30 * 1000,

    placeholderData: (previousData) =>
      previousData,
  });
};

/* -------------------------------------------------------------------------- */
/* Get Single Admin                                                           */
/* -------------------------------------------------------------------------- */

export const useAdmin = (adminId) => {
  return useQuery({
    queryKey: ADMIN_QUERY_KEYS.detail(adminId),

    queryFn: async () => {
      const response = await api.get(
        `/admin/${adminId}`
      );

      return response.data;
    },

    enabled: Boolean(adminId),

    staleTime: 30 * 1000,
  });
};

/* -------------------------------------------------------------------------- */
/* Admin Query Helpers                                                        */
/* -------------------------------------------------------------------------- */

export const useAdminActions = () => {
  const queryClient = useQueryClient();

  const refreshAdmins = () => {
    return queryClient.invalidateQueries({
      queryKey: ADMIN_QUERY_KEYS.lists(),
    });
  };

  const refreshAdmin = (adminId) => {
    return queryClient.invalidateQueries({
      queryKey:
        ADMIN_QUERY_KEYS.detail(adminId),
    });
  };

  const clearAdminCache = () => {
    queryClient.removeQueries({
      queryKey: ADMIN_QUERY_KEYS.all,
    });
  };

  return {
    refreshAdmins,
    refreshAdmin,
    clearAdminCache,
  };
};

/* -------------------------------------------------------------------------- */
/* Update Admin                                                               */
/* -------------------------------------------------------------------------- */

export const useUpdateAdmin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      adminId,
      data,
    }) => {
      const response = await api.put(
        `/admin/${adminId}`,
        data
      );

      return response.data;
    },

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ADMIN_QUERY_KEYS.lists(),
      });

      queryClient.invalidateQueries({
        queryKey:
          ADMIN_QUERY_KEYS.detail(
            variables.adminId
          ),
      });
    },
  });
};

/* -------------------------------------------------------------------------- */
/* Change Admin Status                                                        */
/* -------------------------------------------------------------------------- */

export const useChangeAdminStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      adminId,
      status,
    }) => {
      const response = await api.patch(
        `/admin/${adminId}/status`,
        {
          status,
        }
      );

      return response.data;
    },

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ADMIN_QUERY_KEYS.lists(),
      });

      queryClient.invalidateQueries({
        queryKey:
          ADMIN_QUERY_KEYS.detail(
            variables.adminId
          ),
      });
    },
  });
};

export { ADMIN_QUERY_KEYS };