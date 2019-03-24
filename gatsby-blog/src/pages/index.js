import React from 'react'
import { graphql, Link } from 'gatsby'
import Header from '../components/Header'
import './styles.css'

const Layout = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <div>
      <Header />
      <div className='container'>
        {edges.map(edge => {
          const { frontmatter } = edge.node
          console.log(data.file)
          return (
            <div key={frontmatter.path}>
              <Link to={frontmatter.path}>
                <img src={data.file.childImageSharp.fixed.src} />
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "heads.jpeg" }) {
      childImageSharp {
        fixed(width: 700, height: 700) {
          base64
          width
          height
          src
          srcSet
        }
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`

export default Layout
