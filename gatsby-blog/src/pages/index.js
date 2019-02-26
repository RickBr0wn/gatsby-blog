import React from 'react'
import { graphql, Link } from 'gatsby'
import Header from '../components/Header'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'avenir'
  },
  item: {
    marginBottom: '1rem',
    padding: '10px',
    border: '1px solid #000'
  }
}

const Layout = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <div>
      <Header />
      <div style={styles.container}>
        {edges.map(edge => {
          const { frontmatter } = edge.node
          return (
            <div key={frontmatter.path} style={styles.item}>
              <Link to={frontmatter.path}>{frontmatter.title}</Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export const query = graphql`
  query HomepageQuery {
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
