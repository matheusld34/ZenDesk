import { DashboardHeader } from "@/app/dashboard/components/header";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <DashboardHeader />
            {children}
        </>
    )
}