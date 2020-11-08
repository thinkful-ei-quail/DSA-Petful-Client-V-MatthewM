import React from 'react';
import context from '../context/context';


export default class Dogs extends React.Component
{
    static contextType = context;
    Dog(dog, index = 0)
    {
        if(dog)
        {
            const {age, breed, description, gender, imageURL, name, story} = dog
            if(!this.context.canAdopt)
            {
                
                return(
                <div style={{opacity:`${(1 - (index/4)) * ((1 - (index/4)) > 0)}`}}>
                    <img src={imageURL} style={{width:`${400 - index * 25}px`}} alt={description}></img>
                    <ol>
                        <li>Name:{name}</li>
                        <li>Age:{age}</li>
                        <li>Breed:{breed}</li>
                        <li>Gender:{gender}</li>
                        <li>Description:{description}</li>
                        
                    </ol>
                <p>{story}</p>
                </div>)
            }
            else
            {
                return(
                    <button onClick={async (e) => {
                        e.preventDefault();
                        if(this.context.randomPeople.includes(this.context.people[0]))
                        {
                            await this.context.updateData({canAdopt:false});
                        }
                        else
                        {   
                            await this.context.updateData({canAdopt:true});
                        }
                        if(this.context.canAdopt)
                        {
                            await this.context.adoptAnimal("dog");    
                        }
                        else
                        {
                            console.log(`Sorry, can't`)
                        }
                        if(this.context.randomPeople.includes(this.context.people[0]))
                        {
                            await this.context.updateData({canAdopt:false});
                        }
                        else
                        {   
                            await this.context.updateData({canAdopt:true});
                        }
                        
                        
    
                    }}>
                        <img src={imageURL} alt={description}></img>
                        <ol>
                            <li>Name:{name}</li>
                            <li>Age:{age}</li>
                            <li>Breed:{breed}</li>
                            <li>Gender:{gender}</li>
                            <li>Description:{description}</li>
                        </ol>
                    </button>)
            }
            
            
        }
        return <></>
        
    }
    populate=()=>
    {
        const html = [];
        const dogs = this.context.pets[1];
        if(dogs)
        {
            
            html.push(<div className="dog" key={0}>{this.Dog(dogs[0],0)}</div>)
        }
        return html;
    }
    render()
    {
        return(<div className='dogs'><this.populate/></div>)
    }
}