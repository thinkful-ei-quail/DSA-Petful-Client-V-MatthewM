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
    render()
    {
        return(<div className="queue">
                
                <h3>Up next.</h3>
                <ol><this.populate/></ol>

            </div>)
    }
}