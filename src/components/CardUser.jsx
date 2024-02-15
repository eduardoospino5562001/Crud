import React from 'react';
import './styles/cardUser.css';

const CardUser = ({ user, deleteUser, seteditUser, setisOpen }) => {

  const handleDelete = () => {
    deleteUser('/users', user.id);
  }

  const handleEdit = () => {
    seteditUser(user);
    setisOpen(true);
  }

  return (
    <article className="article-container">
      <h3 className="article-header">{user.first_name} {user.last_name}</h3>
      <ul className="article-list">
        <li className="article-list-item"><span>correo: </span><span>{user.email}</span></li>
        <li className="article-list-item"><span>cumpleaños: </span><span>{user.birthday}</span></li>
      </ul>
      <div>
        <button className="article-button" onClick={handleDelete}>
          <ion-icon name="trash-outline"></ion-icon>
        </button>
        <button className="article-button" onClick={handleEdit}>
          <ion-icon name="create-outline"></ion-icon>
        </button>
      </div>
    </article>
  )
}

export default CardUser;
