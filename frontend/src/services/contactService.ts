import type { ContactMessage } from '../types/contact'

export const contactService = {
  async sendMessage(message: ContactMessage): Promise<{ ok: true }> {
    void message
    await new Promise((resolve) => window.setTimeout(resolve, 450))
    return { ok: true }
  },
}
