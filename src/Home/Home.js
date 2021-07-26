import React from 'react';
import Friends from '../Friends/Friends';
import {useState, useEffect} from 'react';



const Home = () => {
    const [ friends, setFriends]=useState([]);
useEffect(()=>{
  const url ='https://jsonplaceholder.typicode.com/users';
  fetch(url)
  .then (res=> res.json())
  .then (data => setFriends(data))

})

    return (
        <div>
            
                <h1>Friends: {friends.length}</h1>
                {

                friends.map(fd => <Friends fd={fd}></Friends>)
                }
        </div>
    );
};

export default Home;