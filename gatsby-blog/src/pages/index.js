import React from 'react'
import { graphql, Link } from 'gatsby'
import Header from '../components/Header'
import './styles.css'
import natoursImage from './2019-02-26-natours/images/natours.png'

const Layout = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <div>
      <Header />
      <div className='container'>
        {edges.map(edge => {
          const { frontmatter } = edge.node
          console.log(`./${frontmatter.image.relativePath}`)
          return (
            <div key={frontmatter.path}>
              <img src={`./${frontmatter.image.relativePath}`} />
              <img src={natoursImage} />
              <Link to={frontmatter.path}>{frontmatter.title} </Link>
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
            image {
              relativePath
            }
          }
        }
      }
    }
  }
`

export default Layout
