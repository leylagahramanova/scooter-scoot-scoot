import React from 'react'
import Layout from '../components/Layout'
import Banner from '../components/careerspage/Banner/Banner'
import Join from '../components/careerspage/Join/Join'
import Job from '../components/careerspage/Job/Job'
import Missiones from '../components/careerspage/Missiones/Missiones'
function Careers() {
  return (
  <Layout><Banner/><Missiones/><Join/><Job/></Layout>
  )
}

export default Careers