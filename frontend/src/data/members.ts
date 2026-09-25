import { images } from './images'
import type { Member } from '../types/member'

export const members: Member[] = [
  { id: 'm1', firstName: 'Anja', lastName: 'Milić', photo: images.people, role: 'Osnivačica', biography: 'Bavi se produkcijom kulturnih programa i radom sa mladim autorima.', group: 'OSNIVACI' },
  { id: 'm2', firstName: 'Nikola', lastName: 'Radović', photo: images.people, role: 'Osnivač', biography: 'Zainteresovan za nezavisni film, omladinske festivale i edukativne programe.', group: 'OSNIVACI' },
  { id: 'm9', firstName: 'Iva', lastName: 'Stefanović', photo: images.people, role: 'Osnivačica', biography: 'Radi na programima koji povezuju književnost, film i mladu publiku.', group: 'OSNIVACI' },
  { id: 'm11', firstName: 'Mateja', lastName: 'Jovanović', photo: images.people, role: 'Predsednik', biography: '', group: 'PREDSEDNIK' },
  { id: 'm12', firstName: 'Nikola', lastName: 'Masal', photo: images.people, role: 'Član umetničkog saveta', biography: '', group: 'UMETNICKI_SAVET' },
  { id: 'm13', firstName: 'Jovana', lastName: 'Nedeljković', photo: images.people, role: 'Član umetničkog saveta', biography: '', group: 'UMETNICKI_SAVET' },
  { id: 'm14', firstName: 'Maša', lastName: 'Kotaranin', photo: images.people, role: 'Član umetničkog saveta', biography: '', group: 'UMETNICKI_SAVET' },
  { id: 'm15', firstName: 'Jovana', lastName: 'Dautović', photo: images.people, role: 'Član umetničkog saveta', biography: '', group: 'UMETNICKI_SAVET' },
  { id: 'm16', firstName: 'Božidar', lastName: 'Lipovac', photo: images.people, role: 'Član umetničkog saveta', biography: '', group: 'UMETNICKI_SAVET' },
  { id: 'm17', firstName: 'Una', lastName: 'Ninić', photo: images.people, role: 'Član umetničkog saveta', biography: '', group: 'UMETNICKI_SAVET' },
  { id: 'm18', firstName: 'Jelena', lastName: 'Gavrilović', photo: images.people, role: 'Član umetničkog saveta', biography: '', group: 'UMETNICKI_SAVET' },
  { id: 'm19', firstName: 'Olivera', lastName: 'Nikolić', photo: images.people, role: 'Član umetničkog saveta', biography: '', group: 'UMETNICKI_SAVET' },
  { id: 'm3', firstName: 'Sara', lastName: 'Jovanović', photo: images.people, role: 'Predsednica udruženja', biography: 'Koordinira programe, partnere i strateški razvoj udruženja.', group: 'UPRAVNI_ODBOR' },
  { id: 'm4', firstName: 'Luka', lastName: 'Pavlović', photo: images.people, role: 'Programski urednik', biography: 'Uređuje filmske i književne programe, sa fokusom na mlade stvaraoce.', group: 'UPRAVNI_ODBOR' },
  { id: 'm5', firstName: 'Mila', lastName: 'Kostić', photo: images.people, role: 'Koordinatorka radionica', biography: 'Razvija edukativne formate iz pozorišta, govora i javnog nastupa.', group: 'UPRAVNI_ODBOR' },
  { id: 'm10', firstName: 'Viktor', lastName: 'Savić', photo: images.people, role: 'Producent programa', biography: 'Povezuje događaje, tehničku produkciju i komunikaciju sa saradnicima.', group: 'UPRAVNI_ODBOR' },
  { id: 'm6', firstName: 'Teodora', lastName: 'Simić', photo: images.people, role: 'Članica', biography: 'Učestvuje u organizaciji događaja i komunikaciji sa publikom.', group: 'CLANOVI' },
  { id: 'm7', firstName: 'Ognjen', lastName: 'Petrović', photo: images.people, role: 'Član', biography: 'Pomaže u video produkciji i dokumentovanju programa.', group: 'CLANOVI' },
  { id: 'm8', firstName: 'Nina', lastName: 'Vasić', photo: images.people, role: 'Članica', biography: 'Radi na vizuelnim materijalima i društvenim mrežama.', group: 'CLANOVI' },
]
