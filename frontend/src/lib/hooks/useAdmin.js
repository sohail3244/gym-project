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

/*
|--------------------------------------------------------------------------
| Register Admin
|--------------------------------------------------------------------------
*/

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

/*
|--------------------------------------------------------------------------
| Get All Admins
|--------------------------------------------------------------------------
*/

export const useAdmins = (params = {}) => {
  return useQuery({
    queryKey: ADMIN_QUERY_KEYS.list(params),

    queryFn: async () => {
      const response = await api.get(
        "/admins",
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

/*
|--------------------------------------------------------------------------
| Get Single Admin
|--------------------------------------------------------------------------
*/

export const useAdmin = (adminId) => {
  return useQuery({
    queryKey:
      ADMIN_QUERY_KEYS.detail(adminId),

    queryFn: async () => {
      const response = await api.get(
        `/admins/${adminId}`
      );

      return response.data;
    },

    enabled: Boolean(adminId),

    staleTime: 30 * 1000,
  });
};

/*
|--------------------------------------------------------------------------
| Admin Query Helpers
|--------------------------------------------------------------------------
*/

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

export { ADMIN_QUERY_KEYS };