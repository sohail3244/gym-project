import PaymentService from "../services/payment.service.js";

export const createPayment = async (req, res) => {
  try {
    const {
      userId,
      subscriptionId,
      amount,
      currency,
      paymentMethod,
      transactionId,
      gatewayOrderId,
      gatewayPaymentId,
      gatewaySignature,
      status,
    } = req.body;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "User ID is required",
      });
    }

    if (!subscriptionId) {
      return res.status(400).json({
        success: false,
        message:
          "Subscription ID is required",
      });
    }

    if (
      amount === undefined ||
      amount === null
    ) {
      return res.status(400).json({
        success: false,
        message: "Payment amount is required",
      });
    }

    if (!paymentMethod) {
      return res.status(400).json({
        success: false,
        message:
          "Payment method is required",
      });
    }

    const validMethods = [
      "ONLINE",
      "CASH",
      "BANK_TRANSFER",
      "UPI",
      "CARD",
    ];

    if (!validMethods.includes(paymentMethod)) {
      return res.status(400).json({
        success: false,
        message: "Invalid payment method",
      });
    }

    if (
      status &&
      ![
        "PENDING",
        "SUCCESS",
        "FAILED",
        "REFUNDED",
      ].includes(status)
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid payment status",
      });
    }

    const payment =
      await PaymentService.createPayment({
        userId,
        subscriptionId,
        amount,
        currency,
        paymentMethod,
        transactionId,
        gatewayOrderId,
        gatewayPaymentId,
        gatewaySignature,
        status,
      });

    return res.status(201).json({
      success: true,
      message: "Payment created successfully",
      data: {
        payment,
      },
    });
  } catch (error) {
    console.error(
      "Create Payment Error:",
      error
    );

    return res.status(400).json({
      success: false,
      message:
        error.message ||
        "Failed to create payment",
    });
  }
};

export const getPayments = async (req, res) => {
  try {
    const {
      status,
      paymentMethod,
      userId,
      subscriptionId,
      search,
    } = req.query;

    const payments =
      await PaymentService.getPayments({
        status,
        paymentMethod,
        userId,
        subscriptionId,
        search,
      });

    return res.status(200).json({
      success: true,
      message:
        "Payments fetched successfully",
      data: {
        payments,
      },
    });
  } catch (error) {
    console.error(
      "Get Payments Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        error.message ||
        "Failed to fetch payments",
    });
  }
};

export const getPaymentById = async (
  req,
  res
) => {
  try {
    const { id } = req.params;

    const payment =
      await PaymentService.getPaymentById(id);

    return res.status(200).json({
      success: true,
      message:
        "Payment fetched successfully",
      data: {
        payment,
      },
    });
  } catch (error) {
    console.error(
      "Get Payment Error:",
      error
    );

    return res.status(404).json({
      success: false,
      message:
        error.message ||
        "Payment not found",
    });
  }
};

export const updatePaymentStatus = async (
  req,
  res
) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({
        success: false,
        message: "Payment status is required",
      });
    }

    const validStatuses = [
      "PENDING",
      "SUCCESS",
      "FAILED",
      "REFUNDED",
    ];

    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid payment status",
      });
    }

    const payment =
      await PaymentService.updatePaymentStatus(
        id,
        status
      );

    return res.status(200).json({
      success: true,
      message:
        "Payment status updated successfully",
      data: {
        payment,
      },
    });
  } catch (error) {
    console.error(
      "Update Payment Status Error:",
      error
    );

    return res.status(400).json({
      success: false,
      message:
        error.message ||
        "Failed to update payment status",
    });
  }
};

export const deletePayment = async (
  req,
  res
) => {
  try {
    const { id } = req.params;

    const result =
      await PaymentService.deletePayment(id);

    return res.status(200).json({
      success: true,
      message: result.message,
      data: {
        id: result.id,
      },
    });
  } catch (error) {
    console.error(
      "Delete Payment Error:",
      error
    );

    return res.status(400).json({
      success: false,
      message:
        error.message ||
        "Failed to delete payment",
    });
  }
};