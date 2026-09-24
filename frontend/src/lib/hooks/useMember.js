import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../api";

export const MEMBER_QUERY_KEYS = {
  all: ["members"],

  lists: () => [...MEMBER_QUERY_KEYS.all, "list"],

  list: (params = {}) => [
    ...MEMBER_QUERY_KEYS.lists(),
    params,
  ],

  details: () => [...MEMBER_QUERY_KEYS.all, "detail"],

  detail: (id) => [
    ...MEMBER_QUERY_KEYS.details(),
    id,
  ],
};

/**
 * Get all members
 *
 * GET /members
 *
 * Query params:
 * {
 *   search,
 *   status,
 *   page,
 *   limit
 * }
 */
export const useMembers = (params = {}) => {
  return useQuery({
    queryKey: MEMBER_QUERY_KEYS.list(params),

    queryFn: async () => {
      const response = await api.get("/members", {
        params,
      });

      return response.data;
    },

    staleTime: 30 * 1000,

    placeholderData: (previousData) => previousData,
  });
};

/**
 * Get member by ID
 *
 * GET /members/:id
 */
export const useMember = (memberId) => {
  return useQuery({
    queryKey: MEMBER_QUERY_KEYS.detail(memberId),

    queryFn: async () => {
      const response = await api.get(
        `/members/${memberId}`
      );

      return response.data;
    },

    enabled: Boolean(memberId),

    staleTime: 30 * 1000,
  });
};

/**
 * Create member
 *
 * POST /members
 */
export const useCreateMember = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await api.post(
        "/members",
        data
      );

      return response.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: MEMBER_QUERY_KEYS.lists(),
      });
    },
  });
};

/**
 * Update member
 *
 * PATCH /members/:id
 */
export const useUpdateMember = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ memberId, data }) => {
      const response = await api.patch(
        `/members/${memberId}`,
        data
      );

      return response.data;
    },

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: MEMBER_QUERY_KEYS.lists(),
      });

      queryClient.invalidateQueries({
        queryKey: MEMBER_QUERY_KEYS.detail(
          variables.memberId
        ),
      });
    },
  });
};

/**
 * Update member status
 *
 * PATCH /members/:id/status
 *
 * Payload:
 * {
 *   status: "ACTIVE" | "INACTIVE" | "SUSPENDED"
 * }
 */
export const useUpdateMemberStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ memberId, status }) => {
      const response = await api.patch(
        `/members/${memberId}/status`,
        {
          status,
        }
      );

      return response.data;
    },

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: MEMBER_QUERY_KEYS.lists(),
      });

      queryClient.invalidateQueries({
        queryKey: MEMBER_QUERY_KEYS.detail(
          variables.memberId
        ),
      });
    },
  });
};

/**
 * Delete member
 *
 * DELETE /members/:id
 */
export const useDeleteMember = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (memberId) => {
      const response = await api.delete(
        `/members/${memberId}`
      );

      return response.data;
    },

    onSuccess: (_, memberId) => {
      queryClient.invalidateQueries({
        queryKey: MEMBER_QUERY_KEYS.lists(),
      });

      queryClient.removeQueries({
        queryKey: MEMBER_QUERY_KEYS.detail(memberId),
      });
    },
  });
};

/**
 * Common member cache actions
 */
export const useMemberActions = () => {
  const queryClient = useQueryClient();

  return {
    refreshMembers: () =>
      queryClient.invalidateQueries({
        queryKey: MEMBER_QUERY_KEYS.lists(),
      }),

    refreshMember: (memberId) =>
      queryClient.invalidateQueries({
        queryKey: MEMBER_QUERY_KEYS.detail(memberId),
      }),

    clearMemberCache: () =>
      queryClient.removeQueries({
        queryKey: MEMBER_QUERY_KEYS.all,
      }),
  };
};