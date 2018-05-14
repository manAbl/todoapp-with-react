import React from 'react'
import '../styles/appbar-styles.css'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <div className="box">
    <p> Show: </p>
      {' '}
    <div className="btn">
      <FilterLink filter="SHOW_ALL">
        All
      </FilterLink>
    </div>
    <div className="btn">
      <FilterLink filter="SHOW_ACTIVE">
        Active
      </FilterLink>
    </div>
    <div className="btn">
      <FilterLink filter="SHOW_COMPLETED">
        Completed
      </FilterLink>
    </div>
  </div>
)

export default Footer
