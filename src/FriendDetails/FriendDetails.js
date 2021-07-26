import React from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {

    const {friendID} = useParams();

    return (
        <div>
           <h1>This is friend Details : {friendID}</h1> 
        </div>
    );
};

export default FriendDetails;