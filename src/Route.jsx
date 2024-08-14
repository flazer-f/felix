import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import { NotificationProvider } from './components/NotificationContext';



function Route() {
  return (
    <>
      <NotificationProvider>
        <Header />
        <ScrollToTop />
        <Outlet />
        <Footer />
      </NotificationProvider>
    </>
  );
}
export default Route;
