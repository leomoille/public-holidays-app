import "./App.css";
import CountryPicker from "./components/CountryPicker";
import HolidaysList from "./components/HolidaysList";

function App() {
  return (
    <main className="paper container container-sm">
      <h1>Holidays</h1>

      <CountryPicker />
      <HolidaysList />
    </main>
  );
}

export default App;
