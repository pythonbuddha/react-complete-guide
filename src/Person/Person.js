import React from 'react';

//ECMAScript 6 - ES6 style is required for this project

const person = (props) => {

    //
    return (
        <div>
            <p>I am {props.name} and I am {props.age} years old!</p> 
            <p>{props.children}</p>          
        </div>        
    )
};

export default person;