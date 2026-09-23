export function ErrorState({ message = 'Došlo je do greške pri učitavanju.' }: { message?: string }) {
  return <div className="state-box state-box--error" role="alert">{message}</div>
}
