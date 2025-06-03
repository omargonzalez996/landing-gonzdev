import { useEffect, useState } from "react";

import data from "./data/data.json";

import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  const [language, setLanguage] = useState("es");
  const [currentData, setCurrentData] = useState(data[language]);

  useEffect(() => {
    console.log("language change")
  }, [language]);

  return (
    <main className="flex flex-col w-screen min-h-dvh justify-start items-center bg-neutral box-border">
      <Hero heroData={currentData.hero} />
      <Services servicesData={currentData.services} />
      <About aboutData={currentData.about} />
      <Footer footerData={currentData.footer} />
    </main>
  );
}

export default App;
