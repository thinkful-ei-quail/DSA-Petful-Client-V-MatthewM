import React from 'react';
import context from '../context/context';


export default class Cats extends React.Component
{
    static contextType = context;
    Cat(cat, index = 0)
    {
        if(cat)
        {
            const {age, breed, description, gender, imageURL, name, story} = cat
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
                            await this.context.adoptAnimal("cat");  
                        }
                        else
                        {
                            console.log(`Sorry, can't`)
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
        const cats = this.context.pets[0];
        if(cats)
        {
            for(const cat in cats)
            {
                html.push(<div className="cat" key={cat}>{this.Cat(cats[cat],cat)}</div>)
            }
        }
        return html;
    }
    render()
    {
        return(<div className='cats'><this.populate/></div>)
    }
}