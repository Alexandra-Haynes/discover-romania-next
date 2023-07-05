import HomePage from "@/components/HomePage";
import About from "@/components/About";

import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import HeroVideo from "../components/HeroVideo";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main >
        <HomePage />
        {/* <HeroVideo /> */}
        {/* <About /> */}
      </main>
      <footer>
        <Footer />
        </footer>
    </>
  );
}
