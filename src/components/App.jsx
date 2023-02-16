import React, { useState } from 'react'
import data from '../assets/data';
import { List } from './List'

export const App = () => {

  const [people, setPeople] = useState(data);

  const setPeopleFunc = () => {
    setPeople([]);
  }

  return (
    <>
      <main>
        <section className='container'>
          <h3>{people.length} birthdays today</h3>
          <List people={people} />
          <button onClick={setPeopleFunc}>clear all</button>
        </section>
      </main>
    </>
  )
}