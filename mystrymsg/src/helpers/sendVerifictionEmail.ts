import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/Verification";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Mystry Message | Verification Code',
      react: VerificationEmail({ username, otp: verifyCode })
    });
    return { success: true, message: "Verficaton email sent successfully" }

  } catch (emailError) {
    console.error("Error sending verificataion email", emailError)
    return { success: false, message: "Failed to send verification email" }
  }
}