export default function HolidaysListItem({value}) {
    return (
        <li>{value.startDate}, {value.name[0].text}</li>
    )
}
