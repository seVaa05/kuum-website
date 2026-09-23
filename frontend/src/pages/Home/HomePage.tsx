import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ArticleCard } from '../../components/cards/ArticleCard'
import { EventCard } from '../../components/cards/EventCard'
import { PartnerLogo } from '../../components/cards/PartnerLogo'
import { PodcastCard } from '../../components/cards/PodcastCard'
import { ProjectCard } from '../../components/cards/ProjectCard'
import { Container } from '../../components/common/Container'
import { ErrorState } from '../../components/common/ErrorState'
import { InfiniteMarquee } from '../../components/common/InfiniteMarquee'
import { LoadingState } from '../../components/common/LoadingState'
import { SectionTitle } from '../../components/common/SectionTitle'
import { images } from '../../data/images'
import { usePageTitle } from '../../hooks/usePageTitle'
import { articleService } from '../../services/articleService'
import { eventService } from '../../services/eventService'
import { partnerService } from '../../services/partnerService'
import { podcastService } from '../../services/podcastService'
import { projectService } from '../../services/projectService'
import type { Article } from '../../types/article'
import type { KuumEvent } from '../../types/event'
import type { Partner } from '../../types/partner'
import type { PodcastEpisode } from '../../types/podcast'
import type { Project } from '../../types/project'

export function HomePage() {
  usePageTitle('KUUM | Početna')
  const [data, setData] = useState<{ articles: Article[]; events: KuumEvent[]; episodes: PodcastEpisode[]; projects: Project[]; partners: Partner[] }>()
  const [error, setError] = useState(false)

  useEffect(() => {
    Promise.all([
      articleService.getArticles(),
      eventService.getEvents(),
      podcastService.getEpisodes(),
      projectService.getProjects(),
      partnerService.getPartners(),
    ])
      .then(([articles, events, episodes, projects, partners]) => setData({ articles, events, episodes, projects, partners }))
      .catch(() => setError(true))
  }, [])

  if (error) return <ErrorState />
  if (!data) return <LoadingState />

  const upcoming = data.events.filter((event) => new Date(event.startDate) >= new Date()).slice(0, 3)
  const past = data.events.filter((event) => new Date(event.startDate) < new Date()).slice(0, 1)

  return (
    <>
      <section className="hero-section">
        <Container className="hero-grid">
          <div>
            <h1>KUUM</h1>
            <p className="hero-kicker">Kulturno-umetničko udruženje mladih</p>
            <p className="hero-subtitle">Organizuj i stvaraj !</p>
            <div className="button-row">
              <Link className="button" to="/kontakt">Pridruži nam se</Link>
              <Link className="button button--outline" to="/o-nama">O nama</Link>
            </div>
          </div>
          <img className="hero-logo" src={images.logo} alt="KUUM logo" />
        </Container>
      </section>

      <section className="section home-about">
        <Container className="narrow centered">
          <h2>O nama</h2>
          <span className="section-rule" aria-hidden="true" />
          <p>Kulturno-umetničko udruženje mladih (KUUM) postoji od 2023. godine i okuplja mlade umetnike kreativce pod parolom „organizuj i stvaraj“.</p>
          <p>Naša filozofija je da sami organizujemo događaje i kreiramo platformu na kojoj možemo stvarati i prikazivati svoju umetnost. Bilo da se radi o umetničkim projektima, kulturnim manifestacijama ili inovativnim idejama, KUUM pruža prostor za sve mlade koji žele da se izraze, stvaraju i inspirišu.</p>
          <p>Ako imaš ideje i energiju za akciju, KUUM je pravo mesto za tebe!</p>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionTitle title="KUUM Blog" />
          <div className="site123-blog-list">{data.articles.slice(0, 4).map((article) => <ArticleCard key={article.id} article={article} />)}</div>
        </Container>
      </section>

      <section className="section section--dark compact-section">
        <Container>
          <SectionTitle title="KUP - Kulturno-umetnički Podcast" />
          <div className="podcast-strip">
            {data.episodes.slice(0, 1).map((episode) => <PodcastCard key={episode.id} episode={episode} />)}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionTitle title="Događaji" action={<div className="tabs"><span>All Events</span></div>} />
          <div className="grid grid--3">{upcoming.map((event) => <EventCard key={event.id} event={event} />)}</div>
          {past.length > 0 && <div className="grid grid--2 past-events">{past.map((event) => <EventCard key={event.id} event={event} />)}</div>}
        </Container>
      </section>

      <section className="section section--dark cta-section site123-join">
        <Container className="centered">
          <h2>Pridruži nam se!</h2>
          <p>Uskoro ćemo vršiti prijem novih članova!</p>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionTitle title="Projekti" action={<div className="tabs"><span>All</span></div>} />
          <div className="project-list">{data.projects.map((project) => <ProjectCard key={project.id} project={project} />)}</div>
        </Container>
      </section>

      <section className="section section--partners">
        <Container>
          <SectionTitle title="Prijatelji KUUM-a" />
        </Container>
        <InfiniteMarquee className="partners-marquee" label="Prijatelji KUUM-a">
          {data.partners.map((partner) => <PartnerLogo key={partner.id} partner={partner} />)}
        </InfiniteMarquee>
      </section>
    </>
  )
}
