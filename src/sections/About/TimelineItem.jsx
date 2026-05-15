// sections/About/TimelineItem.jsx

export function TimelineItem({ item }) {
  return (
    <div className="tl-item">
      <div className="tl-year">{item.year}</div>

      <div>
        <div className="tl-role">{item.role}</div>

        <div className="tl-company">{item.company}</div>
      </div>
    </div>
  )
}
