import { useState } from "react";
import "./App.css";
import CountryPicker from "./components/CountryPicker";
import HolidaysList from "./components/HolidaysList";

function App() {
  const [country, setCountry] = useState('NL')

  return (
    <main className="paper container container-sm">
      <h1>Holidays</h1>
      <CountryPicker value={country} onChange={setCountry} />
      <HolidaysList value={country} />
    </main>
  );
}

export default App;
