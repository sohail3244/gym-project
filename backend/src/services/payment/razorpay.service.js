import Razorpay from "razorpay";
import crypto from "crypto";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export const createRazorpayOrder = async ({
  amount,
  receipt,
  notes = {},
}) => {
  if (!amount || Number(amount) <= 0) {
    throw new Error("Invalid payment amount");
  }

  const order = await razorpay.orders.create({
    amount: Math.round(Number(amount) * 100),
    currency: "INR",
    receipt,
    notes,
  });

  return order;
};

export const verifyRazorpaySignature = ({
  orderId,
  paymentId,
  signature,
}) => {
  if (!orderId || !paymentId || !signature) {
    throw new Error("Razorpay verification data is missing");
  }

  const generatedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(`${orderId}|${paymentId}`)
    .digest("hex");

  return crypto.timingSafeEqual(
    Buffer.from(generatedSignature),
    Buffer.from(signature)
  );
};

export default razorpay;