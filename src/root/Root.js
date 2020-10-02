import apiServices from '../apiServices/apiServices';
import React from 'react';
import context from '../context/context';
const api = new apiServices();


export default class Root extends React.Component {
  state = {
    people:[],
    pets:[],
  }
  updateData(stData)
  {
    this.setState(stData)
  }
  async addPerson(person)
  {
    const people = await api.addPerson(person);
    console.log(people);
    this.setState({people})
  }
  async adoptAnimal(type)
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
    console.log(this.state);
  }

  render()
  {
    const contextData = {
            
    }
    return (<context.Provider value={contextData}>
            <div>
              <h1>Petful</h1>
              <button onClick={()=>{
                this.adoptAnimal("dog");
              }}>Adopt Animal</button>
              <button onClick={()=>{
                this.addPerson("joe");
              }}>add person</button>
            </div>
          </context.Provider>)
  }
  
}

