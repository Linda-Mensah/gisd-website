import { NextRequest, NextResponse } from "next/server";
import {
  getApplicantEmailTemplate,
  getAdminEmailTemplate,
} from "@/lib/email/templates";
import { sendEmail } from "@/lib/email/send-emails";
import { applyFormSchema } from "@/lib/validations/apply-form";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = applyFormSchema.safeParse(body);

    if (!validatedData.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: validatedData.error.format() },
        { status: 400 },
      );
    }

    const data = validatedData.data;

    // Send confirmation email to applicant
    const applicantEmailResult = await sendEmail({
      to: data.email,
      subject: "Application Received - Ghana Institute of Social Democracy",
      html: getApplicantEmailTemplate({
        firstName: data.firstName,
        lastName: data.lastName,
        selectedCourses: data.selectedCourses,
      }),
    });

    if (!applicantEmailResult.success) {
      console.error(
        "Failed to send applicant email:",
        applicantEmailResult.error,
      );
    }

    // Send notification email to admin
    const adminEmailResult = await sendEmail({
      to: process.env.ADMIN_EMAIL || "admin@gisd.edu.gh",
      subject: "New GISD Application Submitted",
      html: getAdminEmailTemplate(data),
    });

    if (!adminEmailResult.success) {
      console.error("Failed to send admin email:", adminEmailResult.error);
    }

    // Here you would typically save to database
    // For now, we'll just return success

    return NextResponse.json(
      { message: "Application submitted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Application submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
