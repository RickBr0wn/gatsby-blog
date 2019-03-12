import React from 'react'
import { graphql, Link } from 'gatsby'
import Header from '../components/Header'
import './styles.css'
import natoursImage from './2019-02-26-natours/natours.png'

const Layout = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <div>
      <Header />
      <div className='container'>
        {edges.map(edge => {
          const { frontmatter } = edge.node
          return (
            <div key={frontmatter.path} style={{ background: natoursImage }}>
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
            image {
              id
            }
          }
        }
      }
    }
  }
`

export default Layout
