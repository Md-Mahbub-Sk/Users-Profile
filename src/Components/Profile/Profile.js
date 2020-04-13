import React from 'react';
import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus,faAddressBook,faDollarSign,faLocationArrow, faEnvelope,faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
const Profile = (props) => {
    const {name,id,address,username,email,Salary,phone,img,fburl} = props.profile;
    return (
        <div className="profile-wrap">
            <div className="img">
                <img src={img} alt=""/>
            </div>
            <div className="profile">
                <h1>Name: {name}</h1>
                <h2><FontAwesomeIcon icon={faAddressBook} />  Address:{address.Upazilla}-{address.zipcode}</h2>
                <h2>Facebook Id: <a href={fburl} target="_blank">{id}</a></h2>
                <h3>Facebook UserName: {username}</h3>
                <h2><FontAwesomeIcon icon={faEnvelope} /> Email Address: {email}  <a href="mailto:skmahbubkr786@gmail.com"> <button className="mailBtn" type="button"> Send <FontAwesomeIcon icon={faLocationArrow} /></button></a></h2>
                <h3>Salary: <FontAwesomeIcon icon={faDollarSign} /> {Salary}</h3>
                <h4><FontAwesomeIcon icon={faPhoneAlt} /> Phone Number: {phone}</h4>
                <button onClick={() => props.handleFriendRequest(props.profile)} className="requestBtn"><FontAwesomeIcon icon={faUserPlus} /> send friend request</button>
                
            
            </div>
        </div>
    );
};

export default Profile;