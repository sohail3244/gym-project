import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import api from "../api";

/* =========================================================
   QUERY KEYS
========================================================= */

export const PLAN_QUERY_KEYS = {
  all: ["plans"],

  lists: () => [...PLAN_QUERY_KEYS.all, "list"],

  list: (params = {}) => [
    ...PLAN_QUERY_KEYS.lists(),
    params,
  ],

  details: () => [...PLAN_QUERY_KEYS.all, "detail"],

  detail: (id) => [
    ...PLAN_QUERY_KEYS.details(),
    id,
  ],
};


/* =========================================================
   GET ALL PLANS
   GET /plans
========================================================= */

export const usePlans = (params = {}) => {
  return useQuery({
    queryKey: PLAN_QUERY_KEYS.list(params),

    queryFn: async () => {
      const response = await api.get("/plans", {
        params,
      });

      return response.data;
    },

    staleTime: 30 * 1000,

    placeholderData: (previousData) => previousData,
  });
};


/* =========================================================
   GET PLAN BY ID
   GET /plans/:id
========================================================= */

export const usePlan = (planId) => {
  return useQuery({
    queryKey: PLAN_QUERY_KEYS.detail(planId),

    queryFn: async () => {
      const response = await api.get(
        `/plans/${planId}`
      );

      return response.data;
    },

    enabled: Boolean(planId),

    staleTime: 30 * 1000,
  });
};


/* =========================================================
   CREATE PLAN
   POST /plans
========================================================= */

export const useCreatePlan = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await api.post(
        "/plans",
        data
      );

      return response.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: PLAN_QUERY_KEYS.lists(),
      });
    },
  });
};


/* =========================================================
   UPDATE PLAN
   PATCH /plans/:id
========================================================= */

export const useUpdatePlan = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      planId,
      data,
    }) => {
      const response = await api.patch(
        `/plans/${planId}`,
        data
      );

      return response.data;
    },

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: PLAN_QUERY_KEYS.lists(),
      });

      queryClient.invalidateQueries({
        queryKey: PLAN_QUERY_KEYS.detail(
          variables.planId
        ),
      });
    },
  });
};


/* =========================================================
   UPDATE PLAN STATUS
   PATCH /plans/:id/status
========================================================= */

export const useUpdatePlanStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      planId,
      status,
    }) => {
      const response = await api.patch(
        `/plans/${planId}/status`,
        {
          status,
        }
      );

      return response.data;
    },

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: PLAN_QUERY_KEYS.lists(),
      });

      queryClient.invalidateQueries({
        queryKey: PLAN_QUERY_KEYS.detail(
          variables.planId
        ),
      });
    },
  });
};


/* =========================================================
   DELETE PLAN
   DELETE /plans/:id
========================================================= */

export const useDeletePlan = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (planId) => {
      const response = await api.delete(
        `/plans/${planId}`
      );

      return response.data;
    },

    onSuccess: (_, planId) => {
      queryClient.invalidateQueries({
        queryKey: PLAN_QUERY_KEYS.lists(),
      });

      queryClient.removeQueries({
        queryKey: PLAN_QUERY_KEYS.detail(planId),
      });
    },
  });
};


/* =========================================================
   PLAN ACTIONS
========================================================= */

export const usePlanActions = () => {
  const queryClient = useQueryClient();

  const refreshPlans = () => {
    return queryClient.invalidateQueries({
      queryKey: PLAN_QUERY_KEYS.lists(),
    });
  };

  const refreshPlan = (planId) => {
    return queryClient.invalidateQueries({
      queryKey: PLAN_QUERY_KEYS.detail(planId),
    });
  };

  const clearPlanCache = () => {
    return queryClient.removeQueries({
      queryKey: PLAN_QUERY_KEYS.all,
    });
  };

  return {
    refreshPlans,
    refreshPlan,
    clearPlanCache,
  };
};