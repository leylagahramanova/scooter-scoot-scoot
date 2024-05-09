import React from 'react'
import Layout from '../components/Layout'
import Banner from '../components/locationpage/Banner/Banner'
import City from '../components/locationpage/City/City'
import Local from '../components/locationpage/Local/Local'
function Location() {
  return (
<Layout><Banner/><Local/><City/></Layout>
  )
}

export default Location