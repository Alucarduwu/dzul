import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ListCard from './ListCard';
import { Spinner } from 'react-bootstrap';

function Call_ListCards(){
    const [userData, setUserData]= useState({})
    useEffect(()=>{
        const getUsers = async () =>{
            await axios.get("http://localhost/any/public/api/student_index")
            .then(function (response) {
                //handle success
                console.log(userData);
                setUserData(response.data)
            })
            .catch(function (error) {
                //handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
        }
        getUsers()
    }, [])

    if (!userData.length) return
    <Spinner animation="border" role="status">
        <span className='visually-hidden'>Loading...</span>
    </Spinner>

    return (
        <>
        {userData.map((user)=>(
            <ListCard key={user.id} name={user.first_name} name2={user.last_name} email={user.email} semester={user.semester}/>
        ))}
        </>
    );
}
    
export default Call_ListCards;