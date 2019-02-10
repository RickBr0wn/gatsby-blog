import React from 'react'
import { graphql, Link } from 'gatsby'

export const Template = ({ data, pageContext }) => {
  const { next, prev } = pageContext
  const { markdownRemark } = data
  const title = markdownRemark.frontmatter.title
  const html = markdownRemark.html

  return (
    <>
      <h1 style={{ fontFamily: 'avenir' }}>{title}</h1>
      <div
        className='blogpost'
        style={{ fontFamily: 'avenir' }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <div style={{ marginBottom: '1rem', fontFamily: 'avenir' }}>
        {next && <Link to={next.frontmatter.path}>next</Link>}
      </div>
      <div style={{ marginBottom: '1rem', fontFamily: 'avenir' }}>
        {prev && <Link to={prev.frontmatter.path}>prev</Link>}
      </div>
    </>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default Template
