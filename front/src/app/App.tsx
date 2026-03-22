import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import TestBack from "./components/TestBack";

export default function App() {
  return (
    <div className="size-full">
      <TestBack/>
      <Header />
      <main>
        <Hero />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
