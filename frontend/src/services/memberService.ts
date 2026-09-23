import { members } from '../data/members'
import type { Member } from '../types/member'

export const memberService = {
  async getMembers(): Promise<Member[]> {
    return members
  },
}
