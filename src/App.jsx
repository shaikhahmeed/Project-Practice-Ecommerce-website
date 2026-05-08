import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./Component/Layout/Layout";
import HomePage from "./Pages/HomePage";
import ShopPage from "./Pages/ShopPage";
import Registration from "./Component/Home/Registration";
import Login from "./Component/Home/Login";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import Contact from "./Pages/Contact";
import Deals from "./Pages/Deals";
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
      <Route path="/About" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/deals" element={<Deals />} />
      </Route>
    </Routes>
   </BrowserRouter>,
    </>
  )
}

export default App
