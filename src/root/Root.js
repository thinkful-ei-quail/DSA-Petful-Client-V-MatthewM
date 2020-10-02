import apiServices from '../apiServices/apiServices';
import React from 'react';
import context from '../context/context';
import PublicRoute from '../utils/PublicRoute';
import AdoptionPage from '../AdoptionPage/AdoptionPage';
import LandingPage from '../LandingPage/LandingPage';
const api = new apiServices();


export default class Root extends React.Component {
  state = {
    people:[],
    pets:[],
  }
  updateData = (stData)=>
  {
    this.setState(stData)
  }
  addPerson = async(person)=>
  {
    const people = await api.addPerson(person);
    console.log(people);
    this.setState({people})
  }
  adoptAnimal = async(type)=>
  {
    const stData = await api.Delete(type);
    console.log(stData);
    this.setState({stData})
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
      pets:this.state.pets
            
    }
    return (<context.Provider value={contextData}>
            <div id="App">
              <PublicRoute exact path="/" Component={LandingPage} />
              <PublicRoute path="/adoption" Component={AdoptionPage}/>
            </div>
          </context.Provider>)
  }
  
}

