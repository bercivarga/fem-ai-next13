import Link from "next/link";
import { auth } from "@clerk/nextjs";
import Button from "@/components/ui/Button";

export default async function Home() {
  const { userId } = await auth();

  const getStartedHref = userId ? "/journal" : "/new-user";

  return (
    <main className="relative p-8 md:p-24 bg-gray-900 text-white flex min-h-screen flex-col items-start justify-center">
      <div
        className={
          "z-10 w-full h-full absolute left-0 top-0 opacity-30 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"
        }
      />
      <div className={"z-20 flex flex-col gap-4"}>
        <h1>Welcome to MOOD</h1>
        <p>
          A place to share your thoughts and feelings.
          <br />
          Get started by signing in or creating an account.
        </p>
        <div className={"flex gap-2"}>
          <Link href={getStartedHref}>
            <Button>Get started</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
