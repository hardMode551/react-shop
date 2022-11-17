import React from 'react'
import { Link } from 'react-router-dom';

const WorkInProgress = () => {
  return (
    <section>
      <div className="not-found-page workInProgressPage">
      <p>Данный отдел в разработке, возвращайтесь позже и волшебники всё сделают</p>
      <img src="../images/cat-vzux.png" alt="cat" />
      <Link to="/">
        <button>На главную</button>
      </Link>
    </div>
    </section>
  )
}

export default WorkInProgress;