import type { Partner } from '../../types/partner'

export function PartnerLogo({ partner }: { partner: Partner }) {
  return (
    <a className="partner-logo" href={partner.website} target="_blank" rel="noreferrer">
      <img src={partner.logo} alt="" />
      <span>{partner.name}</span>
    </a>
  )
}
