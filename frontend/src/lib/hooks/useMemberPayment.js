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

export const MEMBER_PAYMENT_QUERY_KEYS = {
  all: ["member-payments"],

  lists: () => [
    ...MEMBER_PAYMENT_QUERY_KEYS.all,
    "list",
  ],

  list: (params = {}) => [
    ...MEMBER_PAYMENT_QUERY_KEYS.lists(),
    params,
  ],

  details: () => [
    ...MEMBER_PAYMENT_QUERY_KEYS.all,
    "detail",
  ],

  detail: (id) => [
    ...MEMBER_PAYMENT_QUERY_KEYS.details(),
    id,
  ],

  byMember: (memberId) => [
    ...MEMBER_PAYMENT_QUERY_KEYS.all,
    "member",
    memberId,
  ],

  summary: (params = {}) => [
    ...MEMBER_PAYMENT_QUERY_KEYS.all,
    "summary",
    params,
  ],
};

/*
|--------------------------------------------------------------------------
| GET ALL MEMBER PAYMENTS
|--------------------------------------------------------------------------
|
| Supported query params:
| memberId
| membershipId
| status
| paymentMethod
| fromDate
| toDate
| search
|
*/

export const useMemberPayments = (params = {}) => {
  return useQuery({
    queryKey: MEMBER_PAYMENT_QUERY_KEYS.list(params),

    queryFn: async () => {
      const response = await api.get("/member-payments", {
        params,
      });

      return response.data;
    },

    staleTime: 30 * 1000,

    placeholderData: (previousData) =>
      previousData,
  });
};

/*
|--------------------------------------------------------------------------
| GET MEMBER PAYMENT BY ID
|--------------------------------------------------------------------------
*/

export const useMemberPayment = (paymentId) => {
  return useQuery({
    queryKey:
      MEMBER_PAYMENT_QUERY_KEYS.detail(paymentId),

    queryFn: async () => {
      const response = await api.get(
        `/member-payments/${paymentId}`
      );

      return response.data;
    },

    enabled: Boolean(paymentId),

    staleTime: 30 * 1000,
  });
};

/*
|--------------------------------------------------------------------------
| GET PAYMENTS BY MEMBER
|--------------------------------------------------------------------------
*/

export const usePaymentsByMember = (memberId) => {
  return useQuery({
    queryKey:
      MEMBER_PAYMENT_QUERY_KEYS.byMember(memberId),

    queryFn: async () => {
      const response = await api.get(
        `/member-payments/member/${memberId}`
      );

      return response.data;
    },

    enabled: Boolean(memberId),

    staleTime: 30 * 1000,
  });
};

/*
|--------------------------------------------------------------------------
| GET PAYMENT SUMMARY
|--------------------------------------------------------------------------
|
| Supported query params:
| memberId
| fromDate
| toDate
|
*/

export const usePaymentSummary = (params = {}) => {
  return useQuery({
    queryKey:
      MEMBER_PAYMENT_QUERY_KEYS.summary(params),

    queryFn: async () => {
      const response = await api.get(
        "/member-payments/summary",
        {
          params,
        }
      );

      return response.data;
    },

    staleTime: 30 * 1000,
  });
};

/*
|--------------------------------------------------------------------------
| CREATE MEMBER PAYMENT
|--------------------------------------------------------------------------
*/

export const useCreateMemberPayment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await api.post(
        "/member-payments",
        data
      );

      return response.data;
    },

    onSuccess: (data, variables) => {
      /*
      | Refresh all payment lists
      */
      queryClient.invalidateQueries({
        queryKey:
          MEMBER_PAYMENT_QUERY_KEYS.lists(),
      });

      /*
      | Refresh specific member payments
      */
      if (variables?.memberId) {
        queryClient.invalidateQueries({
          queryKey:
            MEMBER_PAYMENT_QUERY_KEYS.byMember(
              variables.memberId
            ),
        });
      }

      /*
      | Refresh payment summary
      */
      queryClient.invalidateQueries({
        queryKey:
          MEMBER_PAYMENT_QUERY_KEYS.all,
      });
    },
  });
};

/*
|--------------------------------------------------------------------------
| UPDATE MEMBER PAYMENT
|--------------------------------------------------------------------------
*/

export const useUpdateMemberPayment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      paymentId,
      data,
    }) => {
      const response = await api.patch(
        `/member-payments/${paymentId}`,
        data
      );

      return response.data;
    },

    onSuccess: (response, variables) => {
      /*
      | Refresh payment list
      */
      queryClient.invalidateQueries({
        queryKey:
          MEMBER_PAYMENT_QUERY_KEYS.lists(),
      });

      /*
      | Refresh payment detail
      */
      queryClient.invalidateQueries({
        queryKey:
          MEMBER_PAYMENT_QUERY_KEYS.detail(
            variables.paymentId
          ),
      });

      /*
      | Refresh all payment-related queries
      */
      queryClient.invalidateQueries({
        queryKey:
          MEMBER_PAYMENT_QUERY_KEYS.all,
      });
    },
  });
};

/*
|--------------------------------------------------------------------------
| UPDATE MEMBER PAYMENT STATUS
|--------------------------------------------------------------------------
*/

export const useUpdateMemberPaymentStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      paymentId,
      status,
    }) => {
      const response = await api.patch(
        `/member-payments/${paymentId}/status`,
        {
          status,
        }
      );

      return response.data;
    },

    onSuccess: (response, variables) => {
      /*
      | Refresh payment lists
      */
      queryClient.invalidateQueries({
        queryKey:
          MEMBER_PAYMENT_QUERY_KEYS.lists(),
      });

      /*
      | Refresh payment detail
      */
      queryClient.invalidateQueries({
        queryKey:
          MEMBER_PAYMENT_QUERY_KEYS.detail(
            variables.paymentId
          ),
      });

      /*
      | Refresh summaries
      */
      queryClient.invalidateQueries({
        queryKey:
          MEMBER_PAYMENT_QUERY_KEYS.all,
      });
    },
  });
};

/*
|--------------------------------------------------------------------------
| DELETE MEMBER PAYMENT
|--------------------------------------------------------------------------
*/

export const useDeleteMemberPayment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (paymentId) => {
      const response = await api.delete(
        `/member-payments/${paymentId}`
      );

      return response.data;
    },

    onSuccess: (response, paymentId) => {
      /*
      | Refresh payment lists
      */
      queryClient.invalidateQueries({
        queryKey:
          MEMBER_PAYMENT_QUERY_KEYS.lists(),
      });

      /*
      | Remove deleted payment detail
      */
      queryClient.removeQueries({
        queryKey:
          MEMBER_PAYMENT_QUERY_KEYS.detail(
            paymentId
          ),
      });

      /*
      | Refresh all payment-related data
      */
      queryClient.invalidateQueries({
        queryKey:
          MEMBER_PAYMENT_QUERY_KEYS.all,
      });
    },
  });
};

/*
|--------------------------------------------------------------------------
| PAYMENT ACTIONS
|--------------------------------------------------------------------------
*/

export const useMemberPaymentActions = () => {
  const queryClient = useQueryClient();

  return {
    /*
    | Refresh payment list
    */
    refreshMemberPayments: () =>
      queryClient.invalidateQueries({
        queryKey:
          MEMBER_PAYMENT_QUERY_KEYS.lists(),
      }),

    /*
    | Refresh one payment
    */
    refreshMemberPayment: (paymentId) =>
      queryClient.invalidateQueries({
        queryKey:
          MEMBER_PAYMENT_QUERY_KEYS.detail(
            paymentId
          ),
      }),

    /*
    | Refresh payments of one member
    */
    refreshPaymentsByMember: (memberId) =>
      queryClient.invalidateQueries({
        queryKey:
          MEMBER_PAYMENT_QUERY_KEYS.byMember(
            memberId
          ),
      }),

    /*
    | Refresh payment summary
    */
    refreshPaymentSummary: () =>
      queryClient.invalidateQueries({
        queryKey:
          MEMBER_PAYMENT_QUERY_KEYS.all,
      }),

    /*
    | Clear complete payment cache
    */
    clearMemberPaymentCache: () =>
      queryClient.removeQueries({
        queryKey:
          MEMBER_PAYMENT_QUERY_KEYS.all,
      }),
  };
};
