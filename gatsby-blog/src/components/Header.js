import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import profilePicture from '../images/profile.jpg'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '5rem 0'
  },
  p: {
    marginTop: 0,
    opacity: 0.5
  },
  img: {
    height: '100px',
    width: '100px',
    borderRadius: '50%'
  },
  h2: {
    marginBottom: 0
  }
}

const TitleAndDescription = ({ data }) => {
  const { container, img, p, h2 } = styles
  const { title, description } = data.site.siteMetadata
  return (
    <div style={container}>
      <img style={img} src={profilePicture} alt='Rick Brown`s face' />
      <h2 style={h2}>{title}</h2>
      <p style={p}>{description}</p>
    </div>
  )
}

const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => <TitleAndDescription data={data} />}
    />
  )
}

export default Header
