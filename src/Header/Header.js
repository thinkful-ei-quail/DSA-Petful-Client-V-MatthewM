import React from 'react';
import context from '../context/context';
require('./Header.css');

export default class Header extends React.Component
{
    static contextType = context;
    
    render()
    {
        return(
        <header>
            <h1>Petful</h1>
            <form onSubmit={(e)=>{
                    e.preventDefault();
                    const input = e.currentTarget.person;
                    const person = input.value;
                    input.value = "";
                    this.context.addPerson(person);

                }}>
                    <input type="text" id='person'/>
                    <button>Add Adopter</button>
            </form>
        </header>)
    }
}