import apiServices from '../apiServices/apiServices';
import React from 'react';
import context from '../context/context';
import PublicRoute from '../utils/PublicRoute';
import AdoptionPage from '../AdoptionPage/AdoptionPage';
import LandingPage from '../LandingPage/LandingPage';
import Header from '../Header/Header';
const api = new apiServices();


export default class Root extends React.Component {
  state = {
    people:[],
    pets:[],
    //For Adding new random people. Sent to the queue on the back end.
    randomPeople:[
      'Laurence Perkins',
      'Giles Vargas',
      'Sierra Alford',
      'Everett Rangel',
      'Habiba Mosley',
      'Safah Zuniga',
      'Leilani Burt',
      'Shyla Velazquez',
      'Roza Patel',
      'Kien Olson' 
  ],
    canAdopt:false
  }
  updateData = (stData)=>
  {
    this.setState(stData)
  }
  addPerson = async(person)=>
  {
    const people = await api.addPerson(person);
    //console.log(people);
    this.setState({people})
  }
  adoptAnimal = async(type)=>
  {
    const stData = await api.Delete(type);
    //console.log(stData);
    if (stData === 'Aint no average Joes here') {
      // Error handler?
    } else {
      this.setState(stData)
    }
  }
  async componentDidMount()
  {
    const pets = await api.getPets();
    const people = await api.getPeople();
    this.updateData({pets:pets,people:people})
   //console.log(this.state);
  }

  render()
  {
    const contextData = {
      adoptAnimal:this.adoptAnimal,
      addPerson:this.addPerson,
      updateData:this.updateData,
      people:this.state.people,
      pets:this.state.pets,
      randomPeople:this.state.randomPeople,
      canAdopt:this.state.canAdopt
            
    }
    return (<context.Provider value={contextData}>
        
              <Header/>
              <PublicRoute exact path="/" Component={LandingPage} />
              <PublicRoute path="/adoption" Component={AdoptionPage}/>
        
          </context.Provider>)
  }
  
}

