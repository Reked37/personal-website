import React from 'react'
import FootballVideo from './videos/FootballVideo.mp4'
import YoutubeVideo from './videos/YoutubeWatchList.mp4'
import PasswordVideo from './videos/PasswordManager.mp4'

export default function Projects() {
  const FootballLeague = () =>{
    return(
        <div className='football'>
            <h2 className='sub-title'>Football League</h2>
            <video width='640' height='360' controls>
                <source src={FootballVideo} type="video/mp4"/>
            </video>
            <div>
                <h3 className='description'> Description</h3>
                <li>Implemented RESTful APIs to facilitate data interactions.</li>
                <li>Utilized React.js to build and modularized structure, with each feature encapsulated in its component
                for enhanced code organizations and streamlined debugging.</li>
                <li>Employed Redux to manage the application state effectively, ensuring optimal data flow and real-time updates.</li>
                <li>Deployed the entire application, including database and APIs, on Render, ensuring accessibility and reliability.</li>
            </div>
        </div>
    )
  }
  const YoutubeWatchList = () =>{
    return(
        <div className='youtube'>
            <h2 className='sub-title'>Youtube Watch List</h2>
            <video width='640' height='360' controls>
                <source src={YoutubeVideo} type="video/mp4"/>
            </video>
            <div>
                <h3 className='description'>Description</h3>
                <li>Implemented state management using useState and useEffect to fetch and handle data from APIs, ensuring real-time updates and dynamic content rendering.</li>
                <li>Utilized React.js to create modular components that receive state through props. INcorporated callback functions to enable user interactions and data manipulation, with changes on the screen.</li>
                <li>Implemented fetch requests to the backend for seamless data synchronization, ensuring user changes are reflected even after a page reloads.</li>
                <li>Employed React Router Dom's NavLink for efficient and intuituve website navigation, enhancing the user experience.</li><br/><br/><br/>
            </div>
        </div>
    )
  }
  const PasswordManager = () =>{
    return(
        <div className='password'>
            <h2 className='sub-title'>Password Manager</h2>
            <video width='640' height='360' controls>
                <source src={PasswordVideo} type="video/mp4"/>
            </video>
            <div>
                <h3 className='description'>Description</h3>
                <li>Defined tables in models.py file using SQLAlchemy to establish a database schema for storing user credentials.</li>
                <li>Implemented functionality for users to add, edit, and delete entries seamlessly, enhancing the application's versatility.</li>
                <li>Employed a while loop for recursion to keep the application open until the user exits.</li>
                <li>Implemented if and else if statements to provide a user-friendly branching system, allowing users to navigate different pathways based on their actions.</li>
            </div>
        </div>
    )
  }

    return(
    <div>
        <div className='projects'>
            <h1>Projects</h1>
            {FootballLeague()}<br/>
            {PasswordManager()}<br/>
            {YoutubeWatchList()}
        </div>

    </div>
  )
}

// Phase 2 - Youtube Watch list
// Phase 3 - command line
// Phase 4 - football

// Add descriptions and what techs I used to create the software