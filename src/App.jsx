import { useEffect, useState } from 'react';
import './App.css';
import useCrud from './hooks/useCrud';

function App() {
  const url = "https://users-crud.academlo.tech/";
  const [users, getUsers, createUser, deleteUser, updateUser] = useCrud(url);

  useEffect(() => {
   getUsers('/users/');
  }, []);
  console.log(users);
  
  return (
   <div>
    <h1>Crud de usuarios</h1>
   </div>
  )
}

export default App;
