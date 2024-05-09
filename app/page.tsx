import React from 'react'
import Banner from '@/app/components/mainpage/Banner/Banner'
import Layout from '@/app/components/Layout'
import Steps from '@/app/components/mainpage/Steps/Steps'
import Plus from '@/app/components/mainpage/Plus/Pluses'
function Home() {
  return (
        <Layout>
        <Banner />
        <Steps/>
        <Plus/>
        </Layout>
            
  )
}

export default Home