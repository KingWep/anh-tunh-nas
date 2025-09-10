import React from 'react'
import Card_Blog from './Card_Blog'

export default function () {
  return (
    <>
        <div className=' gap-5 px-5 grid lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 pt-5 pb-14 md:pb-20 md:pt-10 m-auto'>
            <Card_Blog/>
            <Card_Blog/>
            <Card_Blog/>
            <Card_Blog/>
            <Card_Blog/>
        </div>
    </>
  )
}
