import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import SearchPage from "./pages/SearchPage";
import RecipePage from "./pages/RecipePage";
import AppLayout from "./layouts/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<HomePage />} />
          <Route path="add" element={<AddPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="search/:id" element={<RecipePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
