import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "../pages/routes"

export function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
