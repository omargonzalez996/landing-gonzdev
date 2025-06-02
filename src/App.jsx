import { useEffect, useState } from "react";

import data from "./data/data.json";

import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  const [language, setLanguage] = useState("es");
  const [currentData, setCurrentData] = useState(data[language]);

  useEffect(() => {
    console.log("language change")
  }, [language]);

  return (
    <>
      <main className="flex flex-col w-dvw h-dvh justify-start items-center bg-slate-950">
        <content className="flex flex-col w-full">
          <Hero heroData={currentData.hero} />
          <About aboutData={currentData.about} />
        </content>
      </main>
    </>
  );
}

export default App;
