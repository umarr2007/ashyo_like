import "./App.css";
import HeaderBottom from "./components/HeaderBottom";
import Header from "./components/HeaderTop";
import Brend from "./components/Company";
import Hero from "./pages/Hero";
import ProductAll from "./pages/ProductAll";
import Products from "./components/Products";
import { Routes, Route } from "react-router-dom";
import Tovar from "./components/Tovar";
import Naushnik from "./components/Naushnik";

function App() {
  return (
    <>
      <Header />
      <HeaderBottom />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Brend />
              <Products />
              <Products />
              <Products />
              <Tovar />
              <Products />
              <Naushnik />
              <Products />
            </>
          }
        />
        <Route path="/products" element={<ProductAll />} />
      </Routes>
    </>
  );
}
export default App;