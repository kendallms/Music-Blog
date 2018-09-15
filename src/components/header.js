import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div
    style={{
      alignItems: 'center',
      backgroundColor: '#ffffff',
      marginBottom: '1.45rem',
      boxShadow: '0 3px 5px rgba(57, 63, 72, 0.3)'
    }}
  >
    <div
      style={{
        alignItems: 'center',
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            alignItems: 'center',
            color: '#ddc8c4',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
