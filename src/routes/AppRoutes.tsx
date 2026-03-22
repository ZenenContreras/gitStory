import { Routes, Route } from "react-router"
import LandingLayout from "../layouts/LandingLayout.tsx"
import LandingPage from "../pages/LandingPage.tsx"

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