import { partners } from '../data/partners'
import type { Partner } from '../types/partner'

export const partnerService = {
  async getPartners(): Promise<Partner[]> {
    return partners
  },
}
