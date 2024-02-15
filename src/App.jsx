import { useEffect, useState } from 'react';
import './App.css';
import useCrud from './hooks/useCrud';
import FormUser from './components/FormUser';
import CardUser from './components/CardUser';

function App() {

  const [editUser, seteditUser] = useState();
  const [isOpen, setisOpen] = useState(false);
  const url = "https://users-crud.academlo.tech/";
  const [users, getUsers, createUser, deleteUser, updateUser] = useCrud(url);

  useEffect(() => {
   getUsers('/users/');
  }, []);
 // console.log(users);
  
  const handleOpen = () => {
    setisOpen(true);
  }
  
  return (
   <div class="header-container">
    <h1 class="title__U">Usuarios</h1>
    <button className='title' onClick={handleOpen}>+ Crear nuevo usuario</button>
    <FormUser 
      createUser={createUser}
      editUser={editUser}
      updateUser={updateUser}
      seteditUser={seteditUser}
      isOpen={isOpen}
      setisOpen={setisOpen}
    />
    <div>
      {
        users?.map(user => (
          <CardUser
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            seteditUser={seteditUser}
            setisOpen={setisOpen}
          />
        )) 
      }
    </div>
   </div>
  )
}

export default App;
