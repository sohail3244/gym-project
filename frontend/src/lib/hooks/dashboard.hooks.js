
import {
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import api from "../api";

// --------------------------------------------------------------------------
// Dashboard Query Keys
// --------------------------------------------------------------------------

const DASHBOARD_QUERY_KEYS = {
  all: ["dashboard"],

  summary: () => [
    ...DASHBOARD_QUERY_KEYS.all,
    "summary",
  ],

  stats: () => [
    ...DASHBOARD_QUERY_KEYS.all,
    "stats",
  ],

  recentPayments: () => [
    ...DASHBOARD_QUERY_KEYS.all,
    "recent-payments",
  ],

  recentSubscriptions: () => [
    ...DASHBOARD_QUERY_KEYS.all,
    "recent-subscriptions",
  ],
};

// --------------------------------------------------------------------------
// Get Dashboard Summary
// GET /api/v1/dashboard
// --------------------------------------------------------------------------

export const useDashboard = (options = {}) => {
  return useQuery({
    queryKey: DASHBOARD_QUERY_KEYS.summary(),

    queryFn: async () => {
      const response = await api.get("/dashboard");

      return response.data;
    },

    staleTime: 30 * 1000,

    ...options,
  });
};

// --------------------------------------------------------------------------
// Get Dashboard Stats
// GET /api/v1/dashboard/stats
// --------------------------------------------------------------------------

export const useDashboardStats = (options = {}) => {
  return useQuery({
    queryKey: DASHBOARD_QUERY_KEYS.stats(),

    queryFn: async () => {
      const response = await api.get("/dashboard/stats");

      return response.data;
    },

    staleTime: 30 * 1000,

    ...options,
  });
};

// --------------------------------------------------------------------------
// Get Recent Payments
// GET /api/v1/dashboard/recent-payments
// --------------------------------------------------------------------------

export const useRecentPayments = (options = {}) => {
  return useQuery({
    queryKey: DASHBOARD_QUERY_KEYS.recentPayments(),

    queryFn: async () => {
      const response = await api.get(
        "/dashboard/recent-payments"
      );

      return response.data;
    },

    staleTime: 30 * 1000,

    ...options,
  });
};

// --------------------------------------------------------------------------
// Get Recent Subscriptions
// GET /api/v1/dashboard/recent-subscriptions
// --------------------------------------------------------------------------

export const useRecentSubscriptions = (options = {}) => {
  return useQuery({
    queryKey: DASHBOARD_QUERY_KEYS.recentSubscriptions(),

    queryFn: async () => {
      const response = await api.get(
        "/dashboard/recent-subscriptions"
      );

      return response.data;
    },

    staleTime: 30 * 1000,

    ...options,
  });
};

// --------------------------------------------------------------------------
// Dashboard Query Helpers
// --------------------------------------------------------------------------

export const useDashboardActions = () => {
  const queryClient = useQueryClient();

  // Refresh all dashboard queries
  const refreshDashboard = () => {
    return queryClient.invalidateQueries({
      queryKey: DASHBOARD_QUERY_KEYS.all,
    });
  };

  // Refresh dashboard summary
  const refreshDashboardSummary = () => {
    return queryClient.invalidateQueries({
      queryKey: DASHBOARD_QUERY_KEYS.summary(),
    });
  };

  // Refresh dashboard stats
  const refreshDashboardStats = () => {
    return queryClient.invalidateQueries({
      queryKey: DASHBOARD_QUERY_KEYS.stats(),
    });
  };

  // Refresh recent payments
  const refreshRecentPayments = () => {
    return queryClient.invalidateQueries({
      queryKey: DASHBOARD_QUERY_KEYS.recentPayments(),
    });
  };

  // Refresh recent subscriptions
  const refreshRecentSubscriptions = () => {
    return queryClient.invalidateQueries({
      queryKey: DASHBOARD_QUERY_KEYS.recentSubscriptions(),
    });
  };

  // Clear dashboard cache
  const clearDashboardCache = () => {
    return queryClient.removeQueries({
      queryKey: DASHBOARD_QUERY_KEYS.all,
    });
  };

  return {
    refreshDashboard,
    refreshDashboardSummary,
    refreshDashboardStats,
    refreshRecentPayments,
    refreshRecentSubscriptions,
    clearDashboardCache,
  };
};

// --------------------------------------------------------------------------
// Export Query Keys
// --------------------------------------------------------------------------

export { DASHBOARD_QUERY_KEYS };
