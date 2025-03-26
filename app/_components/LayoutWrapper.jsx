"use client"

import { usePathname } from "next/navigation";
import Navbar from "./navbar";
import Footer from "./footer";
import Navtop from "./navtop";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith("/admin");
  const isLoginPage = pathname.startsWith("/auth/login");
  const shouldHideLayout = isAdminPage || isLoginPage;

  {/** AOS ANIMATIONS*/}
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {!shouldHideLayout && <Navtop />}
      {!shouldHideLayout && <Navbar />}
      {children}
      {!shouldHideLayout && <Footer />}
    </>
  );
}
