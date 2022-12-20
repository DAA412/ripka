import React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Registratiom.css";
import "bootstrap/dist/css/bootstrap.min.css"

import { Link, Redirect } from 'react-router-dom';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux"
import {selectToken, setTokenAction, setFlag1Action, setFlag2Action} from "./userReducer";



function Auth (){
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [user, setUser] = useState(0);
    const [token, setToken]=useState('');
    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');

    const dispatch = useDispatch();
    const newToken = useSelector(selectToken);


    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
  );

    const flager = async ()=> {
      dispatch(setFlag1Action(true));
      dispatch(setFlag2Action(true));
  }


    async function Authorization1(e){
          const formData = new FormData()
          formData.append('username', username)
          formData.append('password', password)
          console.log(password,username)

        // Вызов API login
        e.preventDefault();
        await axios(`http://127.0.0.1:8000/auth/token/login/`, {
          method: 'POST',
          data: formData,
        })
            .then((result) => {

              console.log(result.data.auth_token);
                setToken(result.data.auth_token);
                dispatch(setTokenAction(result.data.auth_token));
                if(result.data.auth_token=="2b50f880c689f7f092fb1e5284f9d862d620da1a"){
                    dispatch(setFlag2Action(false));
                } else
                    dispatch(setFlag2Action(true));
                console.log()
                dispatch(setFlag1Action(false));
                setIsSubmitted(true);
                console.log("Token", newToken);
                return result;
            })
        .then(async (result) => {
        await axios(`http://127.0.0.1:8000/auth/users/me/`, {
          method: 'GET',
          headers:{
            "Authorization": "Token "+result.data.auth_token,
          }
        })
            .then((result) => {
              setUser(result.data.id);
              console.log(result.data.id);
              console.log(user);
          })})}

  const errors = {
    pass: "Неверно введен пароль"
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      Authorization1(e);

  };

    return(
        <div className="logIN" >
           { isSubmitted ? <div>User is successfully logged in<Redirect to="/food" /></div> :
        <Form className="form" onSubmit={(e) => Authorization1(e)}>
            <Form.Group className="form-body" id='mini'>
              <Form.Group className="header" >Вход</Form.Group>
                <Form.Group className="input">
                    <Form.Control  value ={username} type="text" id="username" className="form__input" name="c" required placeholder="Логин" onChange={(e)=>setUsername(e.currentTarget.value)}/>
                </Form.Group>
                <Form.Group className="input">
                    {renderErrorMessage("pass")}
                    <Form.Control value={password} type="password"  id="password" name="pass" required placeholder="Пароль" onChange={(e)=>setPassword(e.currentTarget.value)}/>
                </Form.Group>
                <Form.Group className="footer">
                  <Link to='/reg'>
                  <Button type="submit" class="btn" id='invite' >Ещё не с нами? Зарегистрироваться!</Button>
                  </Link>
                  </Form.Group>
                  <div>
                    <Button onClick={(e)=>handleSubmit(e)} type="submit" class="btn" id='vhod' >Войти</Button>
                    <Link to='/food'>
                      <Button onClick={flager} type="submit" class="btn" id='invite' >Войти как гость</Button>
                    </Link>
                  </div>
            </Form.Group>
        </Form>}
        
        </div>
      )     

}
 export default Auth;