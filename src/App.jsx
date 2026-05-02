import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./Component/Layout/Layout";
import HomePage from "./Pages/HomePage";
import ShopPage from "./Pages/ShopPage";
import Cart from "./Component/Home/Cart";
import Registration from "./Component/Home/Registration";
import Login from "./Component/Home/Login";
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/registration"element={<Registration/>}/>
      <Route path="/login"element={<Login/>}/>
      <Route path="/"element={<Layout/>}>
      <Route index element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
   </BrowserRouter>,
    </>
  )
}

export default App
