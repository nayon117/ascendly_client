import DashboardSidebar from "@/component/dashboard/DashboardSidebar";

const DashboardLayout = ({children}) => {
    return (
        <div className="flex min-h-screen overflow-hidden">
            <DashboardSidebar />
            <div className="flex-1">{children}</div>
        </div>
    )
}
export default DashboardLayout;
