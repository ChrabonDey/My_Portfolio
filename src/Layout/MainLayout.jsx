import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import Loader from "../components/Loader";

const MainLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000); // Wait 1 second before removing the loader
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div>
      <div >
        <Navbar />
      </div>
      <div >
        <Outlet />
      </div>
       <div >
       <Footer />
       </div>
    </div>
  );
};

export default MainLayout;
