export function LoadingState({ label = 'Učitavanje sadržaja...' }: { label?: string }) {
  return <div className="state-box" role="status">{label}</div>
}
