import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to your account",
};

export default function SignInPage() {
  return <SignIn path="/sign-in" signUpUrl="/sign-up" routing="path" />;
}
