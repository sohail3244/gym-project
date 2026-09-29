"use client";



import {
useMutation,
useQuery,
useQueryClient,
} from "@tanstack/react-query";
import api from "../api";



/* -------------------------------------------------------------------------- /
/ Admin Profile Query Keys /
/ -------------------------------------------------------------------------- */



export const ADMIN_PROFILE_QUERY_KEYS = {
all: ["profile"],



profile: () => [
...ADMIN_PROFILE_QUERY_KEYS.all,
"profile",
],



business: () => [
...ADMIN_PROFILE_QUERY_KEYS.all,
"business",
],
};



/* -------------------------------------------------------------------------- /
/ Get Admin Profile /
/ GET /profile/profile /
/ -------------------------------------------------------------------------- */



export const useAdminProfile = () => {
return useQuery({
queryKey: ADMIN_PROFILE_QUERY_KEYS.profile(),

queryFn: async () => {
  const response = await api.get(
    "/profile/profile"
  );

  return response.data;
},

staleTime: 30 * 1000,


});
};



/* -------------------------------------------------------------------------- /
/ Update Admin Profile /
/ PATCH /profile/profile /
/ -------------------------------------------------------------------------- */



export const useUpdateAdminProfile = () => {
const queryClient = useQueryClient();



return useMutation({
mutationFn: async (data) => {
const response = await api.patch(
"/profile/profile",
data
);

  return response.data;
},

onSuccess: () => {
  queryClient.invalidateQueries({
    queryKey: ADMIN_PROFILE_QUERY_KEYS.profile(),
  });
},


});
};



/* -------------------------------------------------------------------------- /
/ Get Business Details /
/ GET /profile/business /
/ -------------------------------------------------------------------------- */



export const useAdminBusiness = () => {
return useQuery({
queryKey: ADMIN_PROFILE_QUERY_KEYS.business(),

queryFn: async () => {
  const response = await api.get(
    "/profile/business"
  );

  return response.data;
},

staleTime: 30 * 1000,


});
};



/* -------------------------------------------------------------------------- /
/ Update Business Details /
/ PATCH /profile/business /
/ -------------------------------------------------------------------------- */



export const useUpdateAdminBusiness = () => {
const queryClient = useQueryClient();



return useMutation({
mutationFn: async (data) => {
const response = await api.patch(
"/profile/business",
data
);

  return response.data;
},

onSuccess: () => {
  queryClient.invalidateQueries({
    queryKey: ADMIN_PROFILE_QUERY_KEYS.business(),
  });

  // Profile response may also contain business information
  queryClient.invalidateQueries({
    queryKey: ADMIN_PROFILE_QUERY_KEYS.profile(),
  });
},


});
};



/* -------------------------------------------------------------------------- /
/ Admin Profile Query Helpers /
/ -------------------------------------------------------------------------- */



export const useAdminProfileActions = () => {
const queryClient = useQueryClient();



const refreshProfile = () => {
return queryClient.invalidateQueries({
queryKey: ADMIN_PROFILE_QUERY_KEYS.profile(),
});
};



const refreshBusiness = () => {
return queryClient.invalidateQueries({
queryKey: ADMIN_PROFILE_QUERY_KEYS.business(),
});
};



const refreshAll = () => {
return queryClient.invalidateQueries({
queryKey: ADMIN_PROFILE_QUERY_KEYS.all,
});
};



const clearProfileCache = () => {
return queryClient.removeQueries({
queryKey: ADMIN_PROFILE_QUERY_KEYS.all,
});
};



return {
refreshProfile,
refreshBusiness,
refreshAll,
clearProfileCache,
};
};