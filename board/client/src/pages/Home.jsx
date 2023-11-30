import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>홈페이지</h1>
            <Link to="/boards">게시판</Link>
        </div>
      )
}

export default Home