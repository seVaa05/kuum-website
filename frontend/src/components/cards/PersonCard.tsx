import type { Member } from '../../types/member'

export function PersonCard({ member }: { member: Member }) {
  return (
    <article className="person-card">
      <img src={member.photo} alt={`${member.firstName} ${member.lastName}`} />
      <div>
        <h3>{member.firstName} {member.lastName}</h3>
        <span className="card-rule" aria-hidden="true" />
        <p className="tag">{member.role}</p>
        <p>{member.biography}</p>
      </div>
    </article>
  )
}
