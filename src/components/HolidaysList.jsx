import { useState, useEffect } from "react";
import HolidaysListItem from "./HolidaysListItem";

export default function HolidaysList({ value }) {
  const [holidays, setHolidays] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://openholidaysapi.org/PublicHolidays?countryIsoCode=${value}&validFrom=2025-01-01&validTo=2025-12-31`
    )
      .then((res) => res.json())
      .then((data) => {
        setHolidays(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [value]);

  if (loading) return <p>Chargement...</p>;

  return (
    <ul>
      {holidays.map((holiday) => {
        const key =
          holiday.publicHolidayId ??
          holiday.id ??
          holiday.date ??
          holiday.localName ??
          JSON.stringify(holiday);
        return <HolidaysListItem key={key} value={holiday} />;
      })}
    </ul>
  );
}
