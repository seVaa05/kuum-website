import { useEffect, useState } from 'react'
import { PersonCard } from '../../components/cards/PersonCard'
import { Container } from '../../components/common/Container'
import { InfiniteMarquee } from '../../components/common/InfiniteMarquee'
import { LoadingState } from '../../components/common/LoadingState'
import { PageHeader } from '../../components/common/PageHeader'
import { SectionTitle } from '../../components/common/SectionTitle'
import { images } from '../../data/images'
import { usePageTitle } from '../../hooks/usePageTitle'
import { memberService } from '../../services/memberService'
import type { Member } from '../../types/member'

export function PeoplePage() {
  usePageTitle('KUUM | Ljudi')
  const [members, setMembers] = useState<Member[]>()

  useEffect(() => {
    memberService.getMembers().then(setMembers)
  }, [])

  if (!members) return <LoadingState />

  const president = members.find((member) => member.group === 'PREDSEDNIK')
  const artisticCouncil = members.filter((member) => member.group === 'UMETNICKI_SAVET')
  const regularMembers = members.filter((member) => member.group === 'CLANOVI')

  return (
    <>
      <PageHeader title="LJUDI KUUM-A" description="Udruženje čine ljudi koji pišu, režiraju, vode programe, organizuju događaje i grade publiku." />
      <section className="section section--history">
        <Container className="split split--image">
          <div>
            <SectionTitle title="Istorijat" />
            <p>Kulturno-umetničko udruženje mladih nastalo je kao prostor za ljude koji žele da organizuju, stvaraju i pokažu svoj rad publici.</p>
            <p>Programi KUUM-a povezuju književnost, film, pozorište, razgovore, radionice i događaje koji pripadaju mladima.</p>
          </div>
          <div className="history-media">
            <img src={images.history} alt="KUUM istorijat" />
            <img className="history-logo" src={images.logo} alt="KUUM logo" />
          </div>
        </Container>
      </section>
      <section className="section people-section">
        <Container>
          <SectionTitle title="PREDSEDNIK" />
          {president && (
            <div className="president-feature">
              <PersonCard member={president} />
            </div>
          )}
        </Container>
      </section>
      <section className="section section--dark people-section">
        <Container>
          <SectionTitle title="UMETNIČKI SAVET" />
          <div className="people-grid artistic-council-grid">{artisticCouncil.map((member) => <PersonCard key={member.id} member={member} />)}</div>
        </Container>
      </section>
      <section className="section people-section">
        <Container>
          <SectionTitle title="NAŠI ČLANOVI" />
        </Container>
        <InfiniteMarquee className="members-marquee" label="Naši članovi">
          {regularMembers.map((member) => <PersonCard key={member.id} member={member} />)}
        </InfiniteMarquee>
      </section>
    </>
  )
}
