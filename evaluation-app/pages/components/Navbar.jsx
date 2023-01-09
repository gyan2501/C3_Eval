import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div style={{ height:"50px",display:"flex", justifyContent:"space-evenly"}}>

<div><Link href="/">HOME</Link></div>
<div><Link href="/projects">PROJECTS</Link></div>

    </div>
  )
}

export default Navbar;