import Image from "next/image";
import {Header} from './components/header';
import { Hero } from "./components/hero";
import { Projects } from './components/projects';
import{ Experience } from './components/experience';
import { Education } from "./components/education"; 
import { About } from "./components/about";
import {Contact} from "./components/contact";
import { Footer } from "./components/footer";
export default function Home() {
  return (
      <main className="min-h-screen bg-background">
        <Header/>
        <Hero/>
        <Experience/>
        <Projects/>
        <Education/>
        <About/>
        <Contact/>
        <Footer/>
    </main>
  );
}
