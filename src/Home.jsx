import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import axios from 'axios';
import UserCard from './Components/UserCard';


const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setUsers(res.data)})
      .catch(err => console.error(err));
  }, []);

  return (
    <Container sx={{ py: 2 }}>
      {users?.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </Container>
  );
};

export default Home;
