import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { onAuthStateChanged } from "firebase/auth";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Player from "./pages/Player";
import { auth } from "./firebase";
import { ToastContainer } from "react-toastify";
const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!authChecked) {
        if (user) {
          console.log("Logged In");
          if (location.pathname === "/login") {
            navigate("/");
          }
        } else {
          console.log("Logged Out");
          if (location.pathname !== "/login") {
            navigate("/login");
          }
        }
        setAuthChecked(true);
      }
    });

    return () => unsubscribe();
  }, [navigate, location.pathname, authChecked]);

  // if (!authChecked) {
  //   return <div className="loading-screen">Loading...</div>;
  // }

  return (
    <div>
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </div>
  );
};

export default App;
