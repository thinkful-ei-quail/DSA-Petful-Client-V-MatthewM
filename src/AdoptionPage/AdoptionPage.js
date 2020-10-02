import React from 'react';
import context from '../context/context';
export default class AdoptionPage extends React.Component
{
    static contextType = context;
    render()
    {
        return(<>
            <h1>Petful</h1>
            <button onClick={()=>{
                this.context.adoptAnimal("dog");
            }}>Adopt Animal</button>
            <button onClick={()=>{
                this.context.addPerson("joe");
            }}>add person</button>
        </>);
    }

}