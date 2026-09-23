import { SocialLinks } from '../common/SocialLinks'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <h2>KUUM</h2>
          <p>Kulturno-umetničko udruženje mladih</p>
        </div>
        <div className="footer-quote">
          <p>„Kultura povezuje ljude.“</p>
          <span aria-hidden="true" />
        </div>
        <div className="footer-nav-social">
          <SocialLinks variant="footer" />
          <p>Copyright © 2026 All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
