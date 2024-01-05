import React from 'react'

export default function Projects() {
  const footballLeagueVideo = () =>{
    return(
        <div>
            <h2>Football League</h2>
            <video width='640' height='360' controls>
                <source src="./FootballLeague.mp4" type="video/mp4"/>
            </video>
        </div>
    )
  }
  const youtubeWatchListVideo = () =>{
    return(
        <div>
            <h2>Youtube Watch List</h2>
            <video width='640' height='360' controls>
                <source src="./YoutubeWatchList.mp4" type="video/mp4"/>
            </video>
        </div>
    )
  }
  const passwordManagerVideo = () =>{
    return(
        <div>
            <h2>Password Manager</h2>
            <video width='640' height='360' controls>
                <source src="./PasswordManager.mp4" type="video/mp4"/>
            </video>
        </div>
    )
  }

    return(
    <div>
        <div className='projects'>
            <h1>Projects</h1>
            {footballLeagueVideo()}
            {passwordManagerVideo()}
            {youtubeWatchListVideo()}
        </div>

    </div>
  )
}

// Phase 2 - Youtube Watch list
// Phase 3 - command line
// Phase 4 - football

// Add descriptions and what techs I used to create the software