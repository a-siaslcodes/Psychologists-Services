import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import PsychologistsPage from "./pages/PsychologistsPage/PsychologistsPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";

import { useEffect } from "react";
import { initializeAuthListener } from "./redux/auth/operations.js";
import { store } from "./redux/store.js";

function App() {
  useEffect(() => {
    store.dispatch(initializeAuthListener());
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/psychologists" element={<PsychologistsPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="favorites" element={<FavoritesPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
