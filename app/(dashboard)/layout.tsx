import { UserButton } from "@clerk/nextjs";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen w-screen relative flex">
      <aside className="w-[320px] flex flex-col justify-between p-4 bg-purple-200">
        <nav>Dashboard nav</nav>
        <UserButton afterSignOutUrl="/" signInUrl="/sign-in" />
      </aside>
      <div className="w-full flex flex-col bg-purple-100">
        {/* TODO: refactor into separate components with some shared container styling for consistency */}
        <header className="p-4">Dashboard header</header>
        <main className="p-4 flex-1">{children}</main>
        <footer className="p-4">Dashboard footer</footer>
      </div>
    </div>
  );
}
