import { useState, useEffect } from "react";

export default function CountryPicker({value, onChange}) {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://openholidaysapi.org/countries")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Chargement...</p>;

  return (
    <select value={value} onChange={e => onChange(e.target.value)}>
      {countries.map((c) => (
        <option key={c.isoCode} value={c.isoCode}>{c.name[0].text}</option>
      ))}
    </select>
  );
}
