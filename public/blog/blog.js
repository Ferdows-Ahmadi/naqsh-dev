const posts = window.NAQSH_BLOG_POSTS || []
const grid = document.querySelector('#blogGrid')

function postUrl(post) {
  return `/blog/${post.slug}/`
}

function coverMarkup(post) {
  if (!post.image) return `<div class="visual ${post.gradient || 'blue'}" aria-hidden="true"></div>`

  return `
    <div class="visual ${post.gradient || 'blue'}">
      <img src="${post.image}" alt="${post.imageAlt || `${post.title} article cover`}" loading="lazy" onerror="this.hidden=true; this.parentElement.classList.add('is-fallback')" />
    </div>
  `
}

function renderPosts() {
  grid.innerHTML = posts
    .map(
      (post) => `
        <article class="blog-card">
          ${coverMarkup(post)}
          <div class="card-body">
            <div class="meta">
              <span>${post.category}</span>
            </div>
            <h2>${post.title}</h2>
            <p>${post.excerpt}</p>
            <div class="card-foot">
              <span>${post.date}</span>
              <span>${post.readTime}</span>
            </div>
            <a class="read-more" href="${postUrl(post)}" aria-label="Read more: ${post.title}">Read more</a>
          </div>
        </article>
      `,
    )
    .join('')
}

renderPosts()
