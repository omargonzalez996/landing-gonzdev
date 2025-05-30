import Hero from "./components/Hero";
function App() {
  return (
    <>
      <main className="flex flex-col w-dvw h-dvh bg-slate-950 justify-start items-center p-10">
        <content className="flex flex-col w-full my-10">
          <Hero />
        </content>
      </main>
    </>
  );
}

export default App;
