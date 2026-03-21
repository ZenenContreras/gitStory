import { Routes, Route } from "react-router"
import LandingLayout from "../layouts/LandingLayout"


import LandingPage from "../pages/landingPage"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingLayout />}>
        <Route index element={<LandingPage />}></Route>
      </Route>
    </Routes>
  )
}

export default AppRoutes