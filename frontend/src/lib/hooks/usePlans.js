"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../api";

/* =========================================================
   GET ALL PLANS
========================================================= */

export const usePlans = (params = {}) => {
  return useQuery({
    queryKey: ["plans", params],
    queryFn: async () => {
      const response = await api.get("/plans", {
        params,
      });

      return response.data;
    },
  });
};

/* =========================================================
   GET PLAN BY ID
========================================================= */

export const usePlan = (id) => {
  return useQuery({
    queryKey: ["plan", id],
    queryFn: async () => {
      const response = await api.get(`/plans/${id}`);

      return response.data;
    },
    enabled: !!id,
  });
};

/* =========================================================
   CREATE PLAN
========================================================= */

export const useCreatePlan = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await api.post("/plans", data);

      return response.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["plans"],
      });
    },
  });
};

/* =========================================================
   UPDATE PLAN
========================================================= */

export const useUpdatePlan = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, data }) => {
      const response = await api.put(`/plans/${id}`, data);

      return response.data;
    },

    onSuccess: (response, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["plans"],
      });

      queryClient.invalidateQueries({
        queryKey: ["plan", variables.id],
      });
    },
  });
};

/* =========================================================
   UPDATE PLAN STATUS
========================================================= */

export const useUpdatePlanStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, status }) => {
      const response = await api.patch(`/plans/${id}/status`, {
        status,
      });

      return response.data;
    },

    onSuccess: (response, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["plans"],
      });

      queryClient.invalidateQueries({
        queryKey: ["plan", variables.id],
      });
    },
  });
};

/* =========================================================
   DELETE PLAN
========================================================= */

export const useDeletePlan = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id) => {
      const response = await api.delete(`/plans/${id}`);

      return response.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["plans"],
      });
    },
  });
};