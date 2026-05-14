const posts = window.NAQSH_BLOG_POSTS || []
const grid = document.querySelector('#blogGrid')

function postUrl(post) {
  return `/blog/${post.slug}/`
}

function renderPosts() {
  grid.innerHTML = posts
    .map(
      (post) => `
        <article class="blog-card">
          <div class="visual ${post.gradient || 'blue'}" aria-hidden="true"></div>
          <div class="card-body">
            <div class="meta">
              <span>${post.category}</span>
              <span>${post.date}</span>
              <span>${post.readTime}</span>
            </div>
            <h2>${post.title}</h2>
            <p>${post.excerpt}</p>
            <a class="read-more" href="${postUrl(post)}" aria-label="Read more: ${post.title}">Read more</a>
          </div>
        </article>
      `,
    )
    .join('')
}

renderPosts()
