const posts = window.NAQSH_BLOG_POSTS || []
const slug = window.location.pathname.split('/').filter(Boolean).pop()
const post = posts.find((item) => item.slug === slug)

const article = document.querySelector('#article')

function shareText() {
  return `${post.title} - ${window.location.href}`
}

function heroImageMarkup() {
  if (!post.image) return `<div class="article-cover visual ${post.gradient || 'blue'}" aria-hidden="true"></div>`

  return `
    <figure class="article-cover visual ${post.gradient || 'blue'}">
      <img src="${post.image}" alt="${post.imageAlt || `${post.title} article cover`}" onerror="this.hidden=true; this.parentElement.classList.add('is-fallback')" />
    </figure>
  `
}

function renderNotFound() {
  document.title = 'Post not found | Naqsh Blog'
  article.innerHTML = `
    <div class="article-shell">
      <a class="back-link" href="/blog/">Back to Blog</a>
      <div class="article-head">
        <p class="eyebrow">Naqsh Blog</p>
        <h1>Post not found.</h1>
        <p class="subtitle">This article may have moved or the URL may be incorrect.</p>
      </div>
    </div>
  `
}

function renderPost() {
  if (!post) {
    renderNotFound()
    return
  }

  document.title = `${post.title} | Naqsh Blog`
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute('content', post.excerpt)

  article.innerHTML = `
    <div class="article-shell">
      <a class="back-link" href="/blog/">Back to Blog</a>
      <header class="article-head">
        <div class="meta">
          <span>${post.category}</span>
          <span>${post.date}</span>
          <span>${post.readTime}</span>
        </div>
        <h1>${post.title}</h1>
        <p class="subtitle">${post.excerpt}</p>
      </header>
      ${heroImageMarkup()}
      <div class="article-content">
        ${post.content
          .map(
            (block) => `
              <section>
                <h2>${block.heading}</h2>
                <p>${block.body}</p>
              </section>
            `,
          )
          .join('')}
      </div>
      <div class="share-row" aria-label="Share this article">
        <a class="share-button" target="_blank" rel="noreferrer" href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}">Facebook</a>
        <a class="share-button" target="_blank" rel="noreferrer" href="https://wa.me/?text=${encodeURIComponent(shareText())}">WhatsApp</a>
        <button class="share-button" type="button" id="copyLink">Copy link</button>
      </div>
      <aside class="cta-panel">
        <p class="eyebrow">Work with Naqsh</p>
        <h2>Need a website like this?</h2>
        <p>Start a project with Naqsh and build a fast, polished digital presence shaped around your goals.</p>
        <a class="cta-button" href="/#contact">Start a Project</a>
      </aside>
    </div>
  `

  document.querySelector('#copyLink')?.addEventListener('click', async (event) => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      event.currentTarget.textContent = 'Copied'
      setTimeout(() => {
        event.currentTarget.textContent = 'Copy link'
      }, 1000)
    } catch {
      event.currentTarget.textContent = 'Copy failed'
    }
  })
}

renderPost()
