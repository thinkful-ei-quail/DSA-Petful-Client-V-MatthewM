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
            if(index > 0)
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
                    <button onClick={(e) => {
                        e.preventDefault();
                        this.context.adoptAnimal("dog");
    
                    }}>
                        <img src={imageURL} style={{width:`${400 - index * 5}px`}} alt={description}></img>
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
            for(const dog in dogs)
            {
                html.push(<div className="dog" key={dog}>{this.Dog(dogs[dog],dog)}</div>)
            }
        }
        return html;
    }
    render()
    {
        return(<div className='dogs'><this.populate/></div>)
    }
}