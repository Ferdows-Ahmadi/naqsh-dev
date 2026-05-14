// Naqsh static blog data.
// To add a future post:
// 1. Add a new object to BLOG_POSTS with a unique slug.
// 2. Add a cover image to `public/images/blog/` and set `image` below, for example:
//    image: '/images/blog/my-article-cover.jpg'
//    Recommended size: 1200x630 or similar landscape ratio, optimized for web.
//    Dark/cinematic technology visuals work best with the current Naqsh style.
// 3. Add the article content in the `content` array below.
// 4. Create `public/blog/<slug>/index.html` by copying one existing post folder's index.html.
// The post page reads the slug from the URL and loads the matching object from this file.
window.NAQSH_BLOG_POSTS = [
  {
    title: 'Why Every Student Developer Needs a Portfolio Website',
    slug: 'why-every-student-developer-needs-a-portfolio',
    date: 'May 14, 2026',
    category: 'Student Developers',
    excerpt:
      'A short guide on how a simple personal website can help students show skills, projects, and credibility.',
    readTime: '5 min read',
    featured: true,
    gradient: 'blue',
    image: '/images/blog/student-portfolio.svg',
    imageAlt: 'Dark cinematic desk with a laptop showing code and web portfolio planning icons',
    content: [
      {
        heading: 'A portfolio turns practice into proof',
        body:
          'Many student developers learn by building small projects, solving class assignments, and experimenting late at night. The problem is that most of this work stays invisible. A portfolio website gives your work a clear home and turns practice into proof that other people can quickly understand.',
      },
      {
        heading: 'Your website explains more than a CV',
        body:
          'A CV can list skills, but a portfolio can show how you think. You can explain what you built, which tools you used, what problem the project solves, and what you learned. This helps teachers, employers, clients, and collaborators understand your level more honestly.',
      },
      {
        heading: 'Start simple and improve over time',
        body:
          'A strong student portfolio does not need to be complicated. Start with your name, a short introduction, three projects, contact links, and a clean design. As your skills grow, your website can grow with you.',
      },
      {
        heading: 'Credibility is built before opportunity arrives',
        body:
          'When someone hears about you, they should be able to find a polished digital presence. A portfolio website helps you look prepared before an internship, freelance project, scholarship, or collaboration appears.',
      },
    ],
  },
  {
    title: 'Static Website vs WordPress: Which One Should You Choose?',
    slug: 'static-website-vs-wordpress-which-one-should-you-choose',
    date: 'May 14, 2026',
    category: 'Web Strategy',
    excerpt:
      'A practical comparison for small businesses deciding between fast static websites and content-managed WordPress sites.',
    readTime: '6 min read',
    featured: false,
    gradient: 'green',
    image: '/images/blog/static-vs-wordpress.svg',
    imageAlt: 'Static website and WordPress comparison with modern browser windows',
    content: [
      {
        heading: 'The right choice depends on how often content changes',
        body:
          'Static websites are excellent for landing pages, portfolios, studio websites, and business sites where content changes occasionally. WordPress is useful when a team needs to publish frequently, manage many authors, or edit pages without touching code.',
      },
      {
        heading: 'Static websites are fast and secure by default',
        body:
          'Because static sites do not need a database or server-side login, they are usually faster to load and easier to host. They also have a smaller attack surface, which is important for businesses that need reliability without constant maintenance.',
      },
      {
        heading: 'WordPress gives non-technical teams more control',
        body:
          'WordPress is still a strong option when content editing is the main workflow. It can be the right choice for magazines, large blogs, and teams that need plugins, roles, and admin dashboards.',
      },
      {
        heading: 'Choose based on business workflow, not hype',
        body:
          'If you need speed, simplicity, and a premium presentation, static may be enough. If you need frequent publishing and a full admin experience, WordPress may fit better. The best website is the one your team can actually maintain.',
      },
    ],
  },
  {
    title: 'What Makes a Business Website Feel Professional?',
    slug: 'what-makes-a-business-website-feel-professional',
    date: 'May 14, 2026',
    category: 'Business Websites',
    excerpt:
      'Professional websites are not only about visuals. They combine clarity, speed, trust, mobile experience, and focused content.',
    readTime: '5 min read',
    featured: false,
    gradient: 'red',
    image: '/images/blog/professional-business-website.svg',
    imageAlt: 'Premium business website mockup on a laptop with trust and responsive design markers',
    content: [
      {
        heading: 'Clarity beats decoration',
        body:
          'A professional business website quickly answers three questions: who you are, what you offer, and how someone can contact you. Beautiful visuals matter, but they must support clarity instead of hiding the message.',
      },
      {
        heading: 'Mobile experience shapes first impressions',
        body:
          'Many visitors will open your site on a phone first. Buttons should be easy to tap, text should be readable, and sections should flow naturally. A website that feels cramped on mobile immediately loses trust.',
      },
      {
        heading: 'Trust is built through details',
        body:
          'Consistent spacing, clean typography, fast loading, strong contrast, working links, and honest project descriptions all send a message. These details show that the business cares about quality.',
      },
      {
        heading: 'Professional does not mean complicated',
        body:
          'The best business websites often feel simple, but that simplicity is carefully designed. Every section should have a purpose, and every interaction should make the visitor more confident.',
      },
    ],
  },
]
