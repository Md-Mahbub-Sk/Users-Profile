import React from 'react';

const Information = (props) => {
    const request = props.getrequest;
    let totalGetRequest ="";
    for (let i = 0; i < request.length; i++) {
        const element = request[i];
        totalGetRequest += element.name  +  " ";
    }
  
   
    return (
        <div>
            <h2>Request Number: {request.length}</h2>
            <h2>{request.length} person has been Requesting..</h2>
            <h2 style={{textTransform:"capitalize"}}>who send to you friend request : {totalGetRequest}</h2>

            
        </div>
    );
};

export default Information;