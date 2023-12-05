import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

// Handles the process between creating a new user in Clerk
// and creating a new user entry in the PostgreSQL database.
async function createNewUser() {
  const user = await currentUser();

  if (!user) {
    // For now, this edge case isn't handled, nor is it likely to happen.
    throw new Error("No user found");
  }

  const match = await prisma.user.findUnique({
    where: {
      clerkId: user.id,
    },
  });

  if (!match) {
    const newUser = await prisma.user.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
      },
    });
  }

  redirect("/journal");
}

// This could also be turned into a serverless function / api route,
// but for practice's sake this isn't necessary.
export default async function NewUserPage() {
  await createNewUser();

  return (
    <main className="w-screen h-screen flex bg-gray-900">
      <span className="block self-center text-2lg text-white">
        ⏳ Creating your account...
      </span>
    </main>
  );
}
