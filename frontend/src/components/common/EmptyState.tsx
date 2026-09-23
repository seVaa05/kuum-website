export function EmptyState({ title = 'Nema sadržaja', text = 'Sadržaj će uskoro biti dodat.' }: { title?: string; text?: string }) {
  return (
    <div className="state-box">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}
