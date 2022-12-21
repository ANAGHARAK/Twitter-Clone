import React from 'react'
import Layout from '../Components/Layout'
import Sidebar from '../Components/Sidebar'
import ExploreBar from '../Components/ExploreBar'
import ProfileInfo from '../Components/ProfileInfo'
import profileData from "../data/profileData.json"
import TweetCard from '../Components/TweetCard'
import tweetData from "../data/tweets.json";
const Profile = () => {
  const profile=profileData;

  const allTweets = tweetData.map((item)=>{
    return <TweetCard key={item.id} tweetData={item} />;
  });
  return (
    <Layout title="Anagha / Twitter">
       <div className='h-screen flex flex-row'>
       <Sidebar />

       <div className="flex-1">
        <ProfileInfo profile={profile} />
       </div>
       <ExploreBar/>

       </div>
        

      </Layout>
  )
}

export default Profile
