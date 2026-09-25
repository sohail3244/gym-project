"use client";

import { useMutation } from "@tanstack/react-query";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL;

const verifyRegistrationPayment = ({
  razorpayOrderId,
  razorpayPaymentId,
  razorpaySignature,
}) => {
  if (!API_BASE_URL) {
    throw new Error(
      "NEXT_PUBLIC_API_BASE_URL is not configured."
    );
  }

  const form =
    document.createElement("form");

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

export const useVerifyRegistrationPayment =
  () => {
    return useMutation({
      mutationFn:
        verifyRegistrationPayment,
    });
  };