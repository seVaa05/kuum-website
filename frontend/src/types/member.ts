export type MemberGroup = 'OSNIVACI' | 'PREDSEDNIK' | 'UMETNICKI_SAVET' | 'UPRAVNI_ODBOR' | 'CLANOVI'

export interface Member {
  id: string
  firstName: string
  lastName: string
  photo: string
  role: string
  biography: string
  group: MemberGroup
}
