import React from 'react'
import Layout from '../Components/Layout'
import Sidebar from '../Components/Sidebar'
import HomeFeed from '../Components/HomeFeed'
import ExploreBar from '../Components/ExploreBar'
const Home = () => {
  return (
    <div>
      <Layout title="Home / Twitter">
       <div className='h-screen flex flex-row'>
       <Sidebar />

       <div className="flex-1">
        <HomeFeed/>
       </div>
       <ExploreBar/>

       </div>
        

      </Layout>
    </div>
  )
}

export default Home
