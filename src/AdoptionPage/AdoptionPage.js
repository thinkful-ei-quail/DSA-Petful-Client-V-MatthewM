import React from 'react';
import context from '../context/context';
import AdoptionQueue from '../AdoptionQueue/AdoptionQueue';
import Dogs from '../Pets/Dogs';
import Cats from '../Pets/Cats';
require('./AdoptionPage.css');
export default class AdoptionPage extends React.Component
{
    static contextType = context;
    render()
    {
        return(<>
            <div className="petHolder">
                <AdoptionQueue/>
                <Cats/>
                <Dogs/>
            </div>
        </>);
    }

}