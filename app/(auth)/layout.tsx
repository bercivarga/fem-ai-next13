import {ReactNode} from "react";

export default function AuthLayout(
    {
        children,
}: {
  children: ReactNode
}) {
    return (
        <main className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                {children}
            </div>
        </main>
    )
}