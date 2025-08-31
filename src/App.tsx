import { Search } from "./components/Search";

function App() {
  return (
    <div className="font-merriweather flex flex-col h-screen bg-gradient">
      <header className="text-white p-6">
        <p className="text-xl">pointbreak</p>
      </header>
      <main className="flex flex-col items-center px-6 h-[calc(100dvh_-_4.75rem)]">
        <h1 className="text-center  text-white sm:text-3xl text-xl drop-shadow-sm sm:leading-12 leading-8 mb-8">
          Bereit für deine nächste Session?
          <br />
          Gib einen Ort ein und checke das Wetter.
        </h1>
        <Search />
      </main>
      <footer className="mt-auto p-4 absolute bottom-0 w-full backdrop-blur-lg z-10">
        <p className="text-center text-white/60">Powered by Open-Meteo API</p>
      </footer>
    </div>
  );
}

export default App;
