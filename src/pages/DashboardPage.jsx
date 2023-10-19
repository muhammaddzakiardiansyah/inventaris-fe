import { useEffect } from "react"
import Dashboard from "../layouts/Dashboard"
import DashboardCard01 from "../partials/dashboard/DashboardCard01"
import DashboardCard02 from "../partials/dashboard/DashboardCard02"
import DashboardCard12 from "../partials/dashboard/DashboardCard12"
import DashboardCard13 from "../partials/dashboard/DashboardCard13"

const DashboardPage = () => {

    useEffect(() => {
        document.title = "Dashboard"; // Set the desired title
    }, []);

    return (
        <Dashboard>
            <div className="grid grid-cols-12 gap-6">
              <DashboardCard01 />
              <DashboardCard02 />
              <DashboardCard12 />
              <DashboardCard13 />
            </div>
        </Dashboard>
    )
}

export default DashboardPage;