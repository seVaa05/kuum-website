import { SocialLinks } from '../common/SocialLinks'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <h2>KUUM</h2>
          <p>Copyright © 2026 All rights reserved</p>
          <p>Powered By KUUM</p>
        </div>
        <div className="footer-nav-social">
          <SocialLinks variant="footer" />
        </div>
      </div>
    </footer>
  )
}
