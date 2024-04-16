import React from 'react'
import './FavoritesPage.css'
import Navbar from '../../components/navbar/Navbar.jsx'
import Event from '../../components/event/Event.jsx'


function FavoritesPage({userProfile, setUserProfile}) {
  return (
    <div className='favoritesPage'>
      <Navbar show="noshow" userProfile={userProfile} setUserProfile={setUserProfile}/>
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />

    </div>
  )
}

export default FavoritesPage