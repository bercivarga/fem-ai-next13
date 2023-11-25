import {SignUp} from "@clerk/nextjs";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Sign up',
    description: 'Create an account',
}

export default function SignUpPage() {
  return (
      <SignUp path="/sign-up" signInUrl="/sign-in" routing="path" />
  )
}