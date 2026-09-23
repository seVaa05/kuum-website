import { AtSign, BriefcaseBusiness, Camera, Music2, Video, X } from 'lucide-react'
import type { ReactNode } from 'react'
import { socialLinks } from '../../data/socialLinks'

interface SocialLinksProps {
  variant?: 'contact' | 'footer'
}

const iconMap: Record<string, ReactNode> = {
  instagram: <Camera size={20} aria-hidden="true" />,
  tiktok: <Music2 size={20} aria-hidden="true" />,
  facebook: <AtSign size={20} aria-hidden="true" />,
  x: <X size={20} aria-hidden="true" />,
  youtube: <Video size={20} aria-hidden="true" />,
  linkedin: <BriefcaseBusiness size={20} aria-hidden="true" />,
}

export function SocialLinks({ variant = 'contact' }: SocialLinksProps) {
  return (
    <div className={`social-links social-links--${variant}`}>
      {socialLinks.map((link) => (
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
