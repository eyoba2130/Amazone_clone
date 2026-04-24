import React from 'react'
import { IoMdMenu } from "react-icons/io";
import './LowerHeader.css'

export default function Lowerheader() {
  return (
      <div className="lower-header">
          <ul>
              <li>
                  <span><IoMdMenu /></span>
                  <p>All</p>
              </li>
              <li>Amazon Haul</li>
              <li>Best Sellers</li>
              <li>Our Deals</li>
              <li>New Releases</li>
              <li>Amazon Basics</li>
              <li>Books</li>
          </ul>
    </div>
  )
}

