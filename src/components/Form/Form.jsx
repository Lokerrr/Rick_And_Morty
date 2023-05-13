import { useState } from 'react'
import validation from './validation'

const Form = ({ login }) => {
    const [errors, setErrors] = useState({})
    const [userData, setUserData] = useState({
        email: '',
        password: ''
     })

     const handleChange = (event) => {
        setUserData({
            ...userData, 
            [event.target.name]: event.target.value
        })

        const validateErrors = validation({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validateErrors)
     }

     const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
     };

    return (
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="email"> Email: </label>
            <input type="text" name='email' value={userData.email} onChange={handleChange}/>
            <p>{errors.email}</p>
            </div>

            <div>
            <label htmlFor="password"> Password: </label>
            <input type="password" name='password' value={userData.password} onChange={handleChange}/>
            <p>{errors.password}</p>
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Form;