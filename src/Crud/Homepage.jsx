import React from 'react'
import style from "./homepage.module.css"
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <section id={style.nav}>
        <Link to="/" >CREATE-USER</Link>
        <Link to= "/users">USERS</Link>
    </section>
  )
}
export default Homepage
