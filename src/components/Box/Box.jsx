import React from 'react';
import Form from '../Form/Form'; 


const Box = () => {
    const BoxStyle = {
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center',
        minWidth: '50%', 
        padding: '3rem', 
        border: 'solid 1px black'
    }
    return (
        <> 
            < div style={BoxStyle}>
                <h1> Wine Log </h1> 
            </div> 
            <div style={BoxStyle}>
                <Form /> 
            </div> 
    
        </>
    )
}

export default Box; 
