import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import { Outlet } from "react-router-dom"

export const MainLayout = () => {
  return (
    <div className="content">
      <Header />

      <div className="page-content">
        <Outlet />
      </div>

      <Footer />
    </div>
  )
}
