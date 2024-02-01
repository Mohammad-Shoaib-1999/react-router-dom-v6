import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

import {
  HomePage,
  LoginPage,
  SignupPage,
  ProductsPage,
  ProductDetailsPage,
  AboutUsPage,
  NoMatch,
  Posts,
  PostLists,
  Post,
} from "./routes/Routes.js";

function App() {
  return (
    <BrowserRouter>
      <nav className="m-3">
        <Link to="/" className="p-4">
          Home
        </Link>
        <Link to="/about" className="p-4">
          About
        </Link>
        <Link to="/posts" className="p-4">
          Posts
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="/posts" element={<Posts />}>
          <Route index element={<PostLists />} />
          <Route path=":slug" element={<Post />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
