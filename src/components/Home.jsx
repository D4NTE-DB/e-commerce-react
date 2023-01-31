import React from 'react';
import { useSelector } from 'react-redux';
import userNameSlice from '../store/slices/userName.slice';

const Home = () => {

    const userName = useSelector((state) => state.userName)

    return (
        <div>
           <h2>Home</h2> 
           <h2>{userName}</h2>
        </div>
    );
};

export default Home;