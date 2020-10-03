import React from 'react';
import context from '../context/context';

export default class AdoptionQueue extends React.Component
{
    static contextType = context;
    populate = ()=>
    {
        const people = this.context.people;
        let html = [];  
        if(people)
        {
            for(const person in people)
            {   
                html.push(<li key={person}>{people[person]}</li>)
            }
        }
        
        return html
    }
    adoptBothButton = () => {
        const cats = this.context.pets[0];
        const dogs = this.context.pets[1];
        console.log(cats)
        if ((cats !== undefined && cats.length > 0) && (dogs !== undefined && dogs.length > 0)) {
            return (
                <button onClick={(e) => {
                    e.preventDefault();
                    this.context.adoptAnimal('both');
                }}>
                    Adopt Both
                </button>
            )
        } else {
            return <></>
        }
    }
    render()
    {
        return(<div className="queue">
                
                <div><this.adoptBothButton/></div>
                <h3>Up next.</h3>
                <ol><this.populate/></ol>

            </div>)
    }
}