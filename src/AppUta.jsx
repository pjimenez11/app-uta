import "./App.css";
import Header from "./components/header/Header";
import AppRoutes from "./AppRoutes";
import { Footer } from "./components/Footer";


function AppUta() {
  return (
    <>
      <Header />
      <main className="h-screen z-0 pt-[96px]">
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
}

export default AppUta;
