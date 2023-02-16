import React, { useState } from 'react'
import { List } from './List'

export const App = () => {

  const [people, setPeople] = useState([]);

  const setPeopleFunc = () => {
    setPeople([]);
  }

  return (
    <>
      <main>
        <section>
          <h3>{people.length} birthdays today</h3>
          <List people={people} />
          <button className='btn btn-primary' onClick={setPeopleFunc}>clear all</button>
        </section>
      </main>
    </>
  )
}