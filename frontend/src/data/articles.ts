import { images } from './images'
import type { Article } from '../types/article'

export const articles: Article[] = [
  {
    id: 'a1',
    title: '10 RULES TO BUILD A WILDLY SUCCESSFUL BUSINESS',
    slug: '10-rules-to-build-a-wildly-successful-business',
    excerpt: 'You can edit all of this text and replace it with anything you have to say on your blog.',
    content: [
      'Mladi autori najčešće počinju od malih scena, čitaonica, učionica i improvizovanih prostora u kojima se prvi put čuje njihov glas.',
      'KUUM zato insistira na programima u kojima učesnici nisu samo publika, već saradnici. Radionice, razgovori i otvoreni pozivi stvaraju okolnosti u kojima ideja može da poraste u predstavu, film, pesmu ili javni razgovor.',
      'Prostor za kulturu nije luksuz. On je način da se mladi ljudi sretnu, prepoznaju i zajedno nauče kako se odgovorno govori o svetu u kojem žive.',
    ],
    coverImage: images.blog,
    author: 'Redakcija KUUM-a',
    publishedAt: '2020-06-16',
    category: 'KUUM Blog',
  },
  {
    id: 'a2',
    title: '9 STEPS TO STARTING A BUSINESS',
    slug: '9-steps-to-starting-a-business',
    excerpt: 'Kratak blog zapis namenjen budućim programima, vestima i najavama KUUM-a.',
    content: [
      'Savremena omladinska scena u Beogradu ne može se svesti na jedan žanr. Ona se kreće između pozorišta, muzike, filma, razgovora i digitalnih formata.',
      'Najvažnija promena poslednjih godina jeste spremnost mladih autora da sami organizuju događaje i publiku uključe u proces, a ne samo u završni proizvod.',
      'Takav rad traži upornost, dobru komunikaciju i partnerski odnos sa institucijama, školama, nezavisnim centrima i lokalnom zajednicom.',
    ],
    coverImage: images.blogAlt,
    author: 'Redakcija KUUM-a',
    publishedAt: '2020-04-15',
    category: 'KUUM Blog',
  },
  {
    id: 'a3',
    title: '7 BIG THINGS A START-UP MUST HAVE TO SUCCEED',
    slug: '7-big-things-a-start-up-must-have-to-succeed',
    excerpt: 'Primer blog objave koji čuva strukturu originalnog KUUM sajta.',
    content: [
      'Poetsko veče počinje mnogo pre prvog izlaska pred publiku. Počinje izborom teme i pitanjem kakav razgovor želimo da otvorimo.',
      'U KUUM-u pokušavamo da spojimo autore koji prvi put nastupaju sa onima koji već imaju scensko iskustvo. Tako se pravi program koji ima energiju otkrića i sigurnost dobre pripreme.',
      'Publika na kraju ne pamti samo pojedinačnu pesmu, već atmosferu večeri i osećaj da je prisustvovala nečemu neposrednom.',
    ],
    coverImage: images.about,
    author: 'Redakcija KUUM-a',
    publishedAt: '2020-03-04',
    category: 'KUUM Blog',
  },
  {
    id: 'a4',
    title: 'HOW TO MAKE EXTRA MONEY',
    slug: 'how-to-make-extra-money',
    excerpt: 'Još jedan primer zapisa iz postojeće blog strukture, spreman za kasniji unos pravog sadržaja.',
    content: [
      'Ovaj tekst je placeholder koji prati postojeću SITE123 strukturu bloga.',
      'Kasnije može biti zamenjen pravim tekstovima o događajima, projektima i kulturnoj sceni mladih.',
    ],
    coverImage: images.history,
    author: 'Redakcija KUUM-a',
    publishedAt: '2020-01-15',
    category: 'KUUM Blog',
  },
]
