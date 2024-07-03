import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className="page-item">
                  <Link className="page-link" to="/page1">1</Link></li>
                <li className="page-item">
                  <Link className="page-link" to="/page2">2</Link></li>     
            </ul>
        </nav>
    </>
  )
}
