import type { ReactNode } from 'react'
import { socialLinks } from '../../data/socialLinks'

interface SocialLinksProps {
  variant?: 'contact' | 'footer'
}

const iconMap: Record<string, ReactNode> = {
  instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  ),
  tiktok: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 4v10.2a4.3 4.3 0 1 1-4.3-4.3c.35 0 .7.04 1.03.13v3.2a1.72 1.72 0 1 0 1.13 1.62V4h2.14c.38 2.35 1.92 3.85 4 4.2v3.05c-1.55-.05-2.9-.58-4-1.55Z" fill="currentColor" stroke="none" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.2 8.2V6.7c0-.72.48-.9.82-.9H17V3h-2.7c-3 0-3.67 2.25-3.67 3.68V8.2H8.7v3.16h1.93V21h3.57v-9.64h2.42L16.95 8.2Z" fill="currentColor" stroke="none" />
    </svg>
  ),
  x: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 4l16 16M20 4 4 20" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="6.5" width="18" height="11" rx="3" />
      <path d="m10.5 9.5 5 2.5-5 2.5Z" fill="currentColor" stroke="none" />
    </svg>
  ),
}

const visibleSocialIds = ['instagram', 'tiktok', 'facebook', 'x', 'youtube']

export function SocialLinks({ variant = 'contact' }: SocialLinksProps) {
  const visibleLinks = socialLinks.filter((link) => visibleSocialIds.includes(link.id))

  return (
    <div className={`social-links social-links--${variant}`}>
      {visibleLinks.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`KUUM ${link.label}`}
          title={link.label}
        >
          {iconMap[link.id] ?? link.label.charAt(0)}
        </a>
      ))}
    </div>
  )
}
