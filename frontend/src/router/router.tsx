import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { BlogDetailsPage } from '../pages/BlogDetails/BlogDetailsPage'
import { BlogPage } from '../pages/Blog/BlogPage'
import { ContactPage } from '../pages/Contact/ContactPage'
import { EventDetailsPage } from '../pages/EventDetails/EventDetailsPage'
import { EventsPage } from '../pages/Events/EventsPage'
import { HomePage } from '../pages/Home/HomePage'
import { NotFoundPage } from '../pages/NotFound/NotFoundPage'
import { PeoplePage } from '../pages/People/PeoplePage'
import { PodcastDetailsPage } from '../pages/PodcastDetails/PodcastDetailsPage'
import { PodcastsPage } from '../pages/Podcasts/PodcastsPage'
import { ProjectDetailsPage } from '../pages/ProjectDetails/ProjectDetailsPage'
import { ProjectsPage } from '../pages/Projects/ProjectsPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'blog', element: <BlogPage /> },
      { path: 'blog/:slug', element: <BlogDetailsPage /> },
      { path: 'podcast', element: <PodcastsPage /> },
      { path: 'podcast/:slug', element: <PodcastDetailsPage /> },
      { path: 'dogadjaji', element: <EventsPage /> },
      { path: 'dogadjaji/:slug', element: <EventDetailsPage /> },
      { path: 'projekti', element: <ProjectsPage /> },
      { path: 'projekti/:slug', element: <ProjectDetailsPage /> },
      { path: 'ljudi', element: <PeoplePage /> },
      { path: 'kontakt', element: <ContactPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
