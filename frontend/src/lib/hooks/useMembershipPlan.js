import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import api from "../api";

/*
|--------------------------------------------------------------------------
| QUERY KEYS
|--------------------------------------------------------------------------
*/

export const MEMBERSHIP_PLAN_QUERY_KEYS = {
  all: ["membership-plans"],

  lists: () => [
    ...MEMBERSHIP_PLAN_QUERY_KEYS.all,
    "list",
  ],

  list: (params = {}) => [
    ...MEMBERSHIP_PLAN_QUERY_KEYS.lists(),
    params,
  ],

  details: () => [
    ...MEMBERSHIP_PLAN_QUERY_KEYS.all,
    "detail",
  ],

  detail: (id) => [
    ...MEMBERSHIP_PLAN_QUERY_KEYS.details(),
    id,
  ],
};

/*
|--------------------------------------------------------------------------
| GET MEMBERSHIP PLANS
|--------------------------------------------------------------------------
*/

export const useMembershipPlans = (params = {}) => {
  return useQuery({
    queryKey: MEMBERSHIP_PLAN_QUERY_KEYS.list(params),

    queryFn: async () => {
      const response = await api.get("/membership-plans", {
        params,
      });

      return response.data;
    },

    staleTime: 30 * 1000,

    placeholderData: (previousData) => previousData,
  });
};

/*
|--------------------------------------------------------------------------
| GET MEMBERSHIP PLAN BY ID
|--------------------------------------------------------------------------
*/

export const useMembershipPlan = (planId) => {
  return useQuery({
    queryKey: MEMBERSHIP_PLAN_QUERY_KEYS.detail(planId),

    queryFn: async () => {
      const response = await api.get(
        `/membership-plans/${planId}`
      );

      return response.data;
    },

    enabled: Boolean(planId),

    staleTime: 30 * 1000,
  });
};

/*
|--------------------------------------------------------------------------
| CREATE MEMBERSHIP PLAN
|--------------------------------------------------------------------------
*/

export const useCreateMembershipPlan = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await api.post(
        "/membership-plans",
        data
      );

      return response.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: MEMBERSHIP_PLAN_QUERY_KEYS.lists(),
      });
    },
  });
};

/*
|--------------------------------------------------------------------------
| UPDATE MEMBERSHIP PLAN
|--------------------------------------------------------------------------
*/

export const useUpdateMembershipPlan = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ planId, data }) => {
      const response = await api.patch(
        `/membership-plans/${planId}`,
        data
      );

      return response.data;
    },

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: MEMBERSHIP_PLAN_QUERY_KEYS.lists(),
      });

      queryClient.invalidateQueries({
        queryKey:
          MEMBERSHIP_PLAN_QUERY_KEYS.detail(
            variables.planId
          ),
      });
    },
  });
};

/*
|--------------------------------------------------------------------------
| UPDATE MEMBERSHIP PLAN STATUS
|--------------------------------------------------------------------------
*/

export const useUpdateMembershipPlanStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ planId, status }) => {
      const response = await api.patch(
        `/membership-plans/${planId}/status`,
        {
          status,
        }
      );

      return response.data;
    },

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: MEMBERSHIP_PLAN_QUERY_KEYS.lists(),
      });

      queryClient.invalidateQueries({
        queryKey:
          MEMBERSHIP_PLAN_QUERY_KEYS.detail(
            variables.planId
          ),
      });
    },
  });
};

/*
|--------------------------------------------------------------------------
| DELETE MEMBERSHIP PLAN
|--------------------------------------------------------------------------
*/

export const useDeleteMembershipPlan = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (planId) => {
      const response = await api.delete(
        `/membership-plans/${planId}`
      );

      return response.data;
    },

    onSuccess: (_, planId) => {
      queryClient.invalidateQueries({
        queryKey: MEMBERSHIP_PLAN_QUERY_KEYS.lists(),
      });

      queryClient.removeQueries({
        queryKey:
          MEMBERSHIP_PLAN_QUERY_KEYS.detail(planId),
      });
    },
  });
};

/*
|--------------------------------------------------------------------------
| PLAN ACTIONS
|--------------------------------------------------------------------------
*/

export const useMembershipPlanActions = () => {
  const queryClient = useQueryClient();

  return {
    refreshMembershipPlans: () =>
      queryClient.invalidateQueries({
        queryKey:
          MEMBERSHIP_PLAN_QUERY_KEYS.lists(),
      }),

    refreshMembershipPlan: (planId) =>
      queryClient.invalidateQueries({
        queryKey:
          MEMBERSHIP_PLAN_QUERY_KEYS.detail(
            planId
          ),
      }),

    clearMembershipPlanCache: () =>
      queryClient.removeQueries({
        queryKey:
          MEMBERSHIP_PLAN_QUERY_KEYS.all,
      }),
  };
};