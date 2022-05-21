import React from 'react'
import '../Component/Footer.css'


const date=new Date()
export default function Footer() {
  return (
    <footer>
      <p> Copyright {date.getFullYear()}. </p>
    </footer>
  )
}
