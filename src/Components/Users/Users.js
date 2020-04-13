import React from 'react';
import fakeData from '../../fakeData/UserData';
import {useState} from 'react';
import Profile from '../Profile/Profile';
import './Users.css';
import Information from '../Information/Information';

const Users = () => {
    const users = fakeData.slice(0,15);
    
    const [user,setUser] = useState(users);
    const [getrequest,setGetrequest] = useState([]);
    
   
    const handleFriendRequest = (user) =>{
        
        const newGetrequest = [...getrequest,user];
        setGetrequest(newGetrequest);
      
        
    }
    return (
        <div className="user-wrap">
            
            <div>
                {
                    user.map(user => <Profile handleFriendRequest={handleFriendRequest} profile={user}></Profile>)
                }
            </div>
            <div>
                
                <Information  getrequest={getrequest}></Information>
                
            </div>
        </div>
    );
};

export default Users;