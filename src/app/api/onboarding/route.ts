import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { db } from "@/db";
import { organizations } from "@/db/schema/organization";
import { z } from "zod";

const onboardingSchema = z.object({
  companyName: z.string().min(1),
  industry: z.string().min(1),
  googleBusinessProfileUrl: z.string().url(),
  timezone: z.string().min(1),
});

export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const validatedData = onboardingSchema.parse(body);

    // Create organization
    const [organization] = await db
      .insert(organizations)
      .values({
        name: validatedData.companyName,
        industry: validatedData.industry,
        googleBusinessProfileUrl: validatedData.googleBusinessProfileUrl,
        timezone: validatedData.timezone,
        ownerId: session.user.id,
      })
      .returning();

    return NextResponse.json(
      { success: true, organization },
      { status: 201 }
    );
  } catch (error) {
    console.error("Onboarding error:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid data", details: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
