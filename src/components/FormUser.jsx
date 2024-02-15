import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './styles/formUser.css';

const FormUser = ({createUser, editUser, updateUser, seteditUser, isOpen, setisOpen}) => {


    const {handleSubmit, register, reset} = useForm();

   // console.log(editUser);

    useEffect(() => {
      reset(editUser);
    }, [editUser]);
    
    const submit = (data) => {
        if (editUser) {
            updateUser('/users', editUser.id, data);
            seteditUser();
        }else {
            createUser('/users', data);
        }
        reset({ 
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: '',
        });
        setisOpen(false);
    }

    const handleClose = () =>{
        setisOpen(false);
    }

  return (
    <div className={`form_background ${isOpen&&'able'} `}>
        
        <form className='form_container' onSubmit={handleSubmit(submit)}>
            <div className='form_close' onClick={handleClose}>
            <ion-icon name="close-circle-outline"></ion-icon>
            </div>
            <h2 className='form_title'>Nuevo Usuario</h2>
            <div className='form_item'>
                <label htmlFor="email">Email</label>
                <input {...register('email')} id='email' type="text" />
            </div>
            <div className='form_item'>
                <label htmlFor="password">password</label>
                <input {...register('password')} id='password' type="password" />
            </div>
            <div className='form_item'>
                <label htmlFor="fist_name">fist_name</label>
                <input {...register('first_name')} id='fist_name' type="text" />
            </div>
            <div className='form_item'>
                <label htmlFor="last_name">last_name</label>
                <input {...register('last_name')} id='last_name' type="text" />
            </div>
            <div className='form_item'>
                <label htmlFor="birthady">birthady</label>
                <input {...register('birthday')} id='birthady' type="date" />
            </div>
            <button className='form_btn'>Submit</button>
        </form>
    </div>
  )
}

export default FormUser;