"use client";

import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import api from "../api";

// --------------------------------------------------------------------------
// Payment Query Keys
// --------------------------------------------------------------------------

export const PAYMENT_QUERY_KEYS = {
  all: ["payments"],

  lists: () => [
    ...PAYMENT_QUERY_KEYS.all,
    "list",
  ],

  list: (params) => [
    ...PAYMENT_QUERY_KEYS.lists(),
    params,
  ],

  details: () => [
    ...PAYMENT_QUERY_KEYS.all,
    "detail",
  ],

  detail: (id) => [
    ...PAYMENT_QUERY_KEYS.details(),
    id,
  ],
};

// --------------------------------------------------------------------------
// Verify Registration Payment - Public
// --------------------------------------------------------------------------

const verifyRegistrationPayment = ({
  razorpayOrderId,
  razorpayPaymentId,
  razorpaySignature,
}) => {
  const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!API_BASE_URL) {
    throw new Error(
      "NEXT_PUBLIC_API_BASE_URL is not configured."
    );
  }

  const form = document.createElement("form");

  form.method = "POST";

  form.action =
    `${API_BASE_URL}/payments/registration/verify`;

  form.style.display = "none";

  const fields = {
    razorpayOrderId,
    razorpayPaymentId,
    razorpaySignature,
  };

  Object.entries(fields).forEach(
    ([name, value]) => {
      const input =
        document.createElement("input");

      input.type = "hidden";
      input.name = name;
      input.value = value || "";

      form.appendChild(input);
    }
  );

  document.body.appendChild(form);

  form.submit();
};

export const useVerifyRegistrationPayment = () => {
  return useMutation({
    mutationFn: verifyRegistrationPayment,
  });
};

// --------------------------------------------------------------------------
// Create Payment
// --------------------------------------------------------------------------

export const useCreatePayment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await api.post(
        "/payments",
        data
      );

      return response.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: PAYMENT_QUERY_KEYS.lists(),
      });
    },
  });
};

// --------------------------------------------------------------------------
// Get All Payments
// --------------------------------------------------------------------------

export const usePayments = (params = {}) => {
  return useQuery({
    queryKey: PAYMENT_QUERY_KEYS.list(params),

    queryFn: async () => {
      const response = await api.get(
        "/payments",
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

// --------------------------------------------------------------------------
// Get Single Payment
// --------------------------------------------------------------------------

export const usePayment = (paymentId) => {
  return useQuery({
    queryKey:
      PAYMENT_QUERY_KEYS.detail(paymentId),

    queryFn: async () => {
      const response = await api.get(
        `/payments/${paymentId}`
      );

      return response.data;
    },

    enabled: Boolean(paymentId),

    staleTime: 30 * 1000,
  });
};

// --------------------------------------------------------------------------
// Payment Query Helpers
// --------------------------------------------------------------------------

export const usePaymentActions = () => {
  const queryClient = useQueryClient();

  const refreshPayments = () => {
    return queryClient.invalidateQueries({
      queryKey: PAYMENT_QUERY_KEYS.lists(),
    });
  };

  const refreshPayment = (paymentId) => {
    return queryClient.invalidateQueries({
      queryKey:
        PAYMENT_QUERY_KEYS.detail(paymentId),
    });
  };

  const clearPaymentCache = () => {
    return queryClient.removeQueries({
      queryKey: PAYMENT_QUERY_KEYS.all,
    });
  };

  return {
    refreshPayments,
    refreshPayment,
    clearPaymentCache,
  };
};

// --------------------------------------------------------------------------
// Update Payment Status
// --------------------------------------------------------------------------

export const useUpdatePaymentStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      paymentId,
      status,
    }) => {
      const response = await api.patch(
        `/payments/${paymentId}/status`,
        {
          status,
        }
      );

      return response.data;
    },

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey:
          PAYMENT_QUERY_KEYS.lists(),
      });

      queryClient.invalidateQueries({
        queryKey:
          PAYMENT_QUERY_KEYS.detail(
            variables.paymentId
          ),
      });
    },
  });
};

// --------------------------------------------------------------------------
// Delete Payment
// --------------------------------------------------------------------------

export const useDeletePayment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (paymentId) => {
      const response = await api.delete(
        `/payments/${paymentId}`
      );

      return response.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey:
          PAYMENT_QUERY_KEYS.lists(),
      });
    },
  });
};

// --------------------------------------------------------------------------
// Download Payment Receipt
// --------------------------------------------------------------------------

export const useDownloadPaymentReceipt = () => {
  return useMutation({
    mutationFn: async (paymentId) => {
      if (!paymentId) {
        throw new Error(
          "Payment ID is required"
        );
      }

      const response = await api.get(
        `/payments/${paymentId}/receipt`,
        {
          responseType: "blob",
        }
      );

      const blob = new Blob(
        [response.data],
        {
          type: "application/pdf",
        }
      );

      const url =
        window.URL.createObjectURL(blob);

      const link =
        document.createElement("a");

      link.href = url;

      link.download =
        `payment-receipt-${paymentId}.pdf`;

      document.body.appendChild(link);

      link.click();

      link.remove();

      window.URL.revokeObjectURL(url);

      return true;
    },
  });
};