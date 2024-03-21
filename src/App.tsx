import { Suspense, lazy } from "react"
import { Route, Routes } from "react-router-dom"
import { MainLayout } from "./layouts/MainLayout"

const Home = lazy(() => import("./pages/Home/Home"))
const Cart = lazy(() => import("./pages/Cart/Cart"))

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <Suspense fallback={null}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/cart"
          element={
            <Suspense fallback={null}>
              <Cart />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}

export default App
