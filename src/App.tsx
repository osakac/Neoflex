import { Suspense, lazy } from "react"
import { Route, Routes } from "react-router-dom"
import Loader from "./components/Loader/Loader"
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
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/cart"
          element={
            <Suspense fallback={<Loader />}>
              <Cart />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}

export default App
