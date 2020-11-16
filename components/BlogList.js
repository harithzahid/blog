import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

const BlogList = ({ allBlogs }) => {
  function truncateSummary(content) {
    return content.slice(0, 200).trimEnd()
  }

  function reformatDate(fullDate) {
    const date = new Date(fullDate)
    return date.toDateString().slice(4)
  }

  return (
    <>
      <ul className="list">
        {allBlogs.length > 1 &&
          allBlogs.map(post => (
            <Link key={post.slug} href={{ pathname: `/blog/${post.slug}` }}>
              <a>
                <li>
                  <div className="blog__info">
                    <h2>{post.frontmatter.title}</h2>
                    <h3> {reformatDate(post.frontmatter.date)}</h3>
                    <p>
                      <ReactMarkdown
                        source={truncateSummary(post.markdownBody)}
                      />
                    </p>
                  </div>
                </li>
              </a>
            </Link>
          ))}
      </ul>
      <style jsx>
        {`
          ul {
            width: 100%;
            max-width: 600px;
            display: flex;
            flex-direction: column;
            margin: auto;
          }
          li {
            margin: 20px;
          }
        `}
      </style>
    </>
  )
}

export default BlogList
