import React from "react";
import { NavLink, useParams } from "react-router-dom";
import {  useSelector} from 'react-redux'
import { Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  a, .navbar-brand, .navbar-nav, .nav-link{
    color: #adb1b8;
    &:hover{
      color: white;
    }
  }
`

function Description(){
 const {fId} = useParams

    const{
    userItem
    } = useSelector((state)=> state.item);

    return(
<div>
    <div>
      <Styles>
        <Navbar classname="nav" collapseOnSelect expand="lg" bg="dark" variant="dark">
          <NavLink to="/food">Главная</NavLink>
          {' | '}
          <NavLink to={`/food/${fId}`}>{userItem.baby_food_name}</NavLink>
        </Navbar>
      </Styles>
      </div>
    <div>
      <h2>{userItem.baby_food_name}</h2>
      <div>{userItem.composition}</div>
      <div>{userItem.price} {" "}руб.</div>
    </div>
</div>
    )
};

export default Description;