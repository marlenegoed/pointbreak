import { Search } from "./components/Search";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-wave">
      <header className="p-4">
        <p>pointbreak</p>
      </header>
      <main className="flex flex-col gap-2 items-center">
        <h1 className="text-center my-auto">
          Bereit für die nächste Session? Gib deinen Ort ein:
        </h1>
        <Search />
      </main>
      <footer className="mt-auto p-4">
        <p className="text-center">Powered by Open-Meteo API</p>
      </footer>
    </div>
  );
}

export default App;
