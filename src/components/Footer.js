import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            {/* Add content here, like a logo or site name */}
            <strong>CraveCart</strong>
          </Link>
          <span className="text-muted">© 2024 CraveCart, Inc</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          {/* Add footer links here */}
          <li className="ms-3"><Link to="/about" className="text-muted">About</Link></li>
          <li className="ms-3"><Link to="/contact" className="text-muted">Contact</Link></li>
          <li className="ms-3"><Link to="/privacy" className="text-muted">Privacy</Link></li>
        </ul>
      </footer>
    </div>
  )
}
