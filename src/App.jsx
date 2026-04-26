import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./Component/Layout/Layout";
import HomePage from "./Pages/HomePage";
import ShopPage from "./Pages/ShopPage";
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/"element={<Layout/>}>
      <Route index element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      </Route>
    </Routes>
   </BrowserRouter>,
    </>
  )
}

export default App
