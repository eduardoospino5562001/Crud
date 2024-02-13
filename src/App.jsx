import { useEffect, useState } from 'react';
import './App.css';
import useCrud from './hooks/useCrud';
import FormUser from './components/FormUser';
import CardUser from './components/CardUser';

function App() {

  const [editUser, seteditUser] = useState();
  const url = "https://users-crud.academlo.tech/";
  const [users, getUsers, createUser, deleteUser, updateUser] = useCrud(url);

  useEffect(() => {
   getUsers('/users/');
  }, []);
 // console.log(users);
  
  
  return (
   <div>
    <h1>Crud de usuarios</h1>
    <FormUser 
      createUser={createUser}
      editUser={editUser}
      updateUser={updateUser}
      seteditUser={seteditUser}
    />
    <div>
      {
        users?.map(user => (
          <CardUser
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            seteditUser={seteditUser}
          />
        )) 
      }
    </div>
   </div>
  )
}

export default App;
