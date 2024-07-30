import React, { useContext } from 'react'
import { Routes } from 'react-router-dom'
import { SampleContext } from '../../contexts/SampleContext/SampleContext'

const secretNumber = useContext(SampleContext)

export const Home = () => {
  return (
    <>
    <div>Home <h1>{secretNumber}</h1></div>
    </>
  )
}
