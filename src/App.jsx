import Header from "./components/Header";
import HomePage from "./pages/HomePage/HomePage";
// import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./styles.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/categories/:categoryName" element={<CategoriesPage />} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
