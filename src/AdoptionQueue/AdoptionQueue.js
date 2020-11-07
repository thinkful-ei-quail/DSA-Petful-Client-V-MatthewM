import React from 'react';
import context from '../context/context';
require('./AdoptionQueue.css')

export default class AdoptionQueue extends React.Component
{
    static contextType = context;
    constructor()
    {
        super();
        this.people = null
        setInterval(()=>{
            if(!this.people)
            {
                this.people = this.getRandomPeople();
            }
            if(this.context.people.length < 5)
            {
                this.context.addPerson(this.grabPerson());
                this.context.addPerson(this.grabPerson());
            }
            if(this.context.people)
            {
                if(this.people.includes(this.context.people[0]))
                {
                    
                    let randomType = (Math.random() > 0.5)? 'cat' : 'dog';
                    this.context.adoptAnimal(randomType);
                    if(!this.people.includes(this.context.people[1]))
                    {
                        this.context.updateData({canAdopt:true})
                        //console.log(this.context.canAdopt);
                    }
                    else
                    {
                        this.context.updateData({canAdopt:false})
                        //console.log(this.context.canAdopt);
                    }
                }
                else{
                    this.context.updateData({canAdopt:true})
                    //console.log(this.context.canAdopt);
                }
                
            }
            
        }, 3000)
    }
    getRandomPeople = ()=>{
        return this.context.randomPeople
    }
    grabPerson()
    {
        const person = this.people.shift();
        this.people.push(person);
        return person;
    }
    populate = ()=>
    {
        const people = this.context.people;
        let html = [];  
        if(people)
        {
            for(const person in people)
            {   
                html.push(<li key={person}>{people[person]}</li>);
            }
        }
        
        return html;
    }
    adoptBothButton = () => {
        const cats = this.context.pets[0];
        const dogs = this.context.pets[1];
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
        return(
            <div className="queue">
                <h3>Up next.</h3>
                <ol><this.populate/></ol>
                <div><this.adoptBothButton/></div>
            </div>)
    }
}