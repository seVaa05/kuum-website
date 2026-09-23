import { Mail, Send } from 'lucide-react'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { Container } from '../../components/common/Container'
import { SectionTitle } from '../../components/common/SectionTitle'
import { SocialLinks } from '../../components/common/SocialLinks'
import { images } from '../../data/images'
import { usePageTitle } from '../../hooks/usePageTitle'
import { contactService } from '../../services/contactService'
import type { ContactMessage } from '../../types/contact'

export function ContactPage() {
  usePageTitle('KUUM | Kontakt')
  const [form, setForm] = useState<ContactMessage>({ name: '', phone: '', email: '', message: '' })
  const [status, setStatus] = useState<string>()
  const [errors, setErrors] = useState<Partial<Record<keyof ContactMessage, string>>>({})

  const update = (field: keyof ContactMessage, value: string) => setForm((current) => ({ ...current, [field]: value }))

  const submit = async (event: FormEvent) => {
    event.preventDefault()
    const nextErrors: Partial<Record<keyof ContactMessage, string>> = {}
    if (!form.name.trim()) nextErrors.name = 'Unesite ime.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = 'Unesite ispravan email.'
    if (form.message.trim().length < 10) nextErrors.message = 'Poruka treba da ima najmanje 10 karaktera.'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return
    await contactService.sendMessage(form)
    setStatus('Poruka je uspešno poslata. Ovo je trenutno demo forma.')
    setForm({ name: '', phone: '', email: '', message: '' })
  }

  return (
    <>
      <section className="section section--soft contact-intro">
        <Container className="split split--image">
          <div>
            <h2>KUUM - Kulturno-umetničko udruženje mladih</h2>
            <span className="section-rule" aria-hidden="true" />
            <p>Beograd, Srbija</p>
            <p>Za saradnju, članstvo, predloge programa i pitanja o događajima možete nam pisati putem forme ili direktno na email.</p>
          </div>
          <img className="contact-logo" src={images.logo} alt="KUUM logo" />
        </Container>
      </section>
      <section className="section">
        <Container>
          <SectionTitle title="KONTAKT" />
        </Container>
        <Container className="contact-grid">
          <div className="contact-info">
            <p>Beograd, Srbija</p>
            <a className="contact-email" href="mailto:kuum.bg@gmail.com"><Mail size={22} aria-hidden="true" /> kuum.bg@gmail.com</a>
            <SocialLinks />
          </div>
          <form className="contact-form" onSubmit={submit} noValidate>
            <div className="form-row">
              <label>Ime<input value={form.name} onChange={(event) => update('name', event.target.value)} />{errors.name && <span>{errors.name}</span>}</label>
              <label>Telefon<input value={form.phone} onChange={(event) => update('phone', event.target.value)} /></label>
            </div>
            <label>Email address<input type="email" value={form.email} onChange={(event) => update('email', event.target.value)} />{errors.email && <span>{errors.email}</span>}</label>
            <label>Message<textarea rows={8} value={form.message} onChange={(event) => update('message', event.target.value)} />{errors.message && <span>{errors.message}</span>}</label>
            <button className="button" type="submit"><Send size={18} /> CONTACT US</button>
            {status && <p className="success-message" role="status">{status}</p>}
          </form>
        </Container>
      </section>
      <section className="map-section" aria-label="Google mapa">
        <iframe
          title="Google mapa"
          src="https://www.google.com/maps?q=Belgrade%2C%20Serbia&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  )
}
