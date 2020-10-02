import React from 'react'
import {Route} from 'react-router-dom'

export default function PublicRoute({ Component, ...props})
{
    return(
        <Route {...props} render={componentProps => (<Component {...componentProps}/>)}/>
    )
}