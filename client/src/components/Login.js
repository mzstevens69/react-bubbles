import React, {useState} from "react";
import axiosWithAuth from '../utils/axiosWithAuth'

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [data, setData] = useState({
    username: '',
    password: ''
  })
  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }
  const handleLoginSubmit = e => {
    e.preventDefault()
    axiosWithAuth()
      .post('/login', data)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        props.history.push('/bubblepage');
      })
      .catch(err => console.log(err))
  }
  return (
    <div className='form-wrapper'>
      <h1>Welcome to the Bubble App!</h1>
      <h2> Login  here</h2>
      <form onSubmit={handleLoginSubmit}>
        <input
          type='text'
          name='username'
          value={data.username}
          onChange={handleChange}
          placeholder='USERNAME'
          />
          <br/>
         <input 
          type='password'
          name='password'
          value={data.password}
          onChange={handleChange}
          placeholder='PASSWORD'
         />
        <button type='submit'>Log Me In</button>
      </form>
      
    </div>
  );
};

export default Login;
