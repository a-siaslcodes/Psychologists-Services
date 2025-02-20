import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import PsychologistsPage from "./pages/PsychologistsPage/PsychologistsPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";

import { useEffect } from "react";
import { initializeAuthListener } from "./redux/auth/operations";
import { store } from "./redux/store";

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
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
