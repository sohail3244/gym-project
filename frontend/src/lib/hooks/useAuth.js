"use client";

import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import api from "../api";

export const AUTH_QUERY_KEYS = {
  me: ["auth", "me"],
};

export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ username, password }) => {
      const response = await api.post(
        "/auth/login",
        {
          username,
          password,
        }
      );

      return response.data;
    },

    onSuccess: async (data) => {
      console.log("LOGIN SUCCESS:", data);

      await queryClient.invalidateQueries({
        queryKey: AUTH_QUERY_KEYS.me,
      });
    },

    onError: (error) => {
      console.error(
        "LOGIN ERROR:",
        error?.response?.data || error
      );
    },
  });
};

export const useRegisterAdmin = () => {
  return useMutation({
    mutationFn: async (payload) => {
      const response = await api.post(
        "/auth/register",
        payload
      );

      return response.data;
    },
  });
};

export const useMe = () => {
  return useQuery({
    queryKey: AUTH_QUERY_KEYS.me,

    queryFn: async () => {
      const response = await api.get(
        "/auth/me"
      );

      return response.data;
    },

    staleTime: 0,
    retry: false,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    refetchOnMount: true,
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const response = await api.post(
        "/auth/logout"
      );

      return response.data;
    },

    onSuccess: () => {
      queryClient.removeQueries({
        queryKey: AUTH_QUERY_KEYS.me,
      });
    },
  });
};

export const useAuth = () => {
  const meQuery = useMe();
  const loginMutation = useLogin();
  const registerMutation = useRegisterAdmin();
  const logoutMutation = useLogout();

  return {
    user: meQuery.data?.data?.user || null,

    isAuthenticated:
      !!meQuery.data?.data?.user,

    isLoading: meQuery.isLoading,

    isFetching: meQuery.isFetching,

    login: loginMutation.mutate,

    loginAsync: loginMutation.mutateAsync,

    isLoginLoading:
      loginMutation.isPending,

    loginError:
      loginMutation.error,

    loginData:
      loginMutation.data,

    register:
      registerMutation.mutate,

    registerAsync:
      registerMutation.mutateAsync,

    isRegisterLoading:
      registerMutation.isPending,

    registerError:
      registerMutation.error,

    registerData:
      registerMutation.data,

    logout:
      logoutMutation.mutate,

    logoutAsync:
      logoutMutation.mutateAsync,

    isLogoutLoading:
      logoutMutation.isPending,

    logoutError:
      logoutMutation.error,

    refetchUser:
      meQuery.refetch,
  };
};