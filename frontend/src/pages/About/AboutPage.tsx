import { useEffect, useState } from 'react'
import { PersonCard } from '../../components/cards/PersonCard'
import { Container } from '../../components/common/Container'
import { LoadingState } from '../../components/common/LoadingState'
import { PageHeader } from '../../components/common/PageHeader'
import { SectionTitle } from '../../components/common/SectionTitle'
import { images } from '../../data/images'
import { usePageTitle } from '../../hooks/usePageTitle'
import { memberService } from '../../services/memberService'
import type { Member } from '../../types/member'

export function AboutPage() {
  usePageTitle('KUUM | O Nama')
  const [members, setMembers] = useState<Member[]>()

  useEffect(() => {
    memberService.getMembers().then(setMembers)
  }, [])

  if (!members) return <LoadingState />

  return (
    <>
      <PageHeader title="O NAMA" description="Kulturno-umetničko udruženje mladih postoji od 2023. godine i okuplja mlade umetnike kreativce pod parolom „organizuj i stvaraj“." />
      <section className="section section--history">
        <Container className="split split--image">
          <div>
            <SectionTitle title="Istorijat" />
            <p>KUUM je pokrenut kao inicijativa koja povezuje mlade autore, producente, glumce, pesnike, filmske entuzijaste i publiku. Ideja je jednostavna: kultura postaje dostupnija kada je prave ljudi kojima je namenjena.</p>
            <p>Od prvih susreta i radionica, program se razvijao kroz festivale, poetske večeri, kvizove, tribine i podcast.</p>
          </div>
          <img src={images.history} alt="Vizuel KUUM istorijata" />
        </Container>
      </section>
      <section className="section">
        <Container>
          <SectionTitle title="OSNIVAČI" />
          <div className="people-grid founders-grid">{members.filter((member) => member.group === 'OSNIVACI').map((member) => <PersonCard key={member.id} member={member} />)}</div>
        </Container>
      </section>
      <section className="section section--dark">
        <Container>
          <SectionTitle title="UPRAVNI ODBOR" />
          <div className="people-grid board-grid">{members.filter((member) => member.group === 'UPRAVNI_ODBOR').map((member) => <PersonCard key={member.id} member={member} />)}</div>
        </Container>
      </section>
    </>
  )
}
