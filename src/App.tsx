import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Base } from "./pages/Base";
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { Product } from "./pages/Product";
import { NotFound } from "./pages/NotFound";
import { Contact } from "./pages/Contact";

export function WebsiteRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="/shop/:product" element={<Product />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
