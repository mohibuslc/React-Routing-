import React from 'react';
import {Link} from "react-router-dom";

const Friends = (props) => {

    const {name, email, id}=props.fd;

    const friendsSty ={

        border: '1px solid purple',
        margin:'20px',
        padding:'20px',
        borderRadius:'20px'
    }
    return (
        <div style={friendsSty}>
            <h1>Friend ID <Link to ={`/friend/${id}`}>Show Details:{id}</Link> </h1>
            <p>Friend name: {name}</p>
            
            <p>Email Address: {email}</p>
            
        </div>
    );
};

export default Friends;