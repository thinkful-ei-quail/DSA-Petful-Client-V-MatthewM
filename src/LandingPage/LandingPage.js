import React from 'react';
import './LandingPage.css'

export default class LandingPage extends React.Component {

  render() {
    return (

        <>
        <section className='LandingPage'>
        <div className='imgContainer'>
          <img className='LPimg' src='https://i.pinimg.com/originals/12/05/a8/1205a86aa7226702b62569d0d0bb43fa.jpg' alt='The Petful Homepage' />

        </div>
        <div className='infoContainer'>
          <p>Welcome to Petful! At Petful we follow an efficient and safe process to ensure that all pets get adopted.</p>
          <hr />
          <p>
            The adoption process is simple. Pets are put into an adoption queue when they arrive.
            Adopters place their name at the end of the adoption queue, and get to adopt when their name is at the front.
            Then adopters can only adopt the pet at the front of the queue for cats and/or dogs.
            Adopters can adopt a Cat, a Dog, or one of each.
          </p>
        </div>
        <div>
          <a href="/adoption" ><input type='button' value='Adopt Now' /></a>
        </div>
      </section>
      </>
  
    )
  }
}