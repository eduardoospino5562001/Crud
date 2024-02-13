import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const FormUser = ({createUser, editUser, updateUser, seteditUser}) => {

    const {handleSubmit, register, reset} = useForm();

    console.log(editUser);

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
        })
    }

  return (
    <div>
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <label htmlFor="email">Email</label>
                <input {...register('email')} id='email' type="text" />
            </div>
            <div>
                <label htmlFor="password">password</label>
                <input {...register('password')} id='password' type="password" />
            </div>
            <div>
                <label htmlFor="fist_name">fist_name</label>
                <input {...register('first_name')} id='fist_name' type="text" />
            </div>
            <div>
                <label htmlFor="last_name">last_name</label>
                <input {...register('last_name')} id='last_name' type="text" />
            </div>
            <div>
                <label htmlFor="birthady">birthady</label>
                <input {...register('birthday')} id='birthady' type="date" />
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default FormUser;