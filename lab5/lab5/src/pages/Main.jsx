import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux'
import { ADD, ADD_TO_CHART, REMOVE_FROM_CHART } from "./Actions";
import {Button, Navbar, Nav, Container, Form, Modal} from 'react-bootstrap';
import axios from 'axios';
import {selectToken, selectFlag1, selectFlag2} from "./userReducer";
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import styled from "styled-components";


const Styles = styled.div`
  a, .navbar-brand, .navbar-nav, .nav-link{
    color: #adb1b8;
    &:hover{
      color: white;
    }
  }
`

function Main () {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [foods, setFoods] = useState([])  
  const [id, setId] = useState();
  const newToken = useSelector(selectToken)
  const flag1 = useSelector(selectFlag1);
  const flag2 = useSelector(selectFlag2);

  const [baby_food_name, setName] = useState();
  const [composition, setComposition] = useState();
  const [availab, setAvailable] = useState();
  const [price, setPrice] = useState();
  const [min_price, setMin] = useState();
  const [max_price, setMax] = useState();

  const [info, setInfo] = useState();


  const handleClose2 = async ()=> {
    setShow2(false);
    await fetch(`http://127.0.0.1:8000/stocks/${getInterval(min_price, max_price, info)}`, {
        method: 'GET',
        headers:{
            "Authorization": "Token "+newToken,
        }
    })
        .then(response => response.json())
        .then((result) => {
            setFoods(result);
        })
}
const handleClose3 = async ()=> {
    const formData = new FormData()
    formData.append('baby_food_name', baby_food_name)
    formData.append('composition', composition)
    formData.append('available', availab)
    formData.append('price', price)
    setShow3(false);
    await axios(`http://127.0.0.1:8000/stocks/`, {
        method: 'POST',
        data: formData,
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": "Token "+newToken,
        }

    })
        .then(response => response.json())
        .then((result) => {
            setFoods(result);
        })
}
const handleClose4 = async ()=> {
    setShow4(false);
    await fetch(`http://127.0.0.1:8000/stocks/${id}/`, {
        method: 'DELETE',
        headers:{
            "Authorization": "Token "+newToken,
        }
    })
    await fetch(`http://127.0.0.1:8000/stocks/`, {
        method: 'GET',
        headers:{
            "Authorization": "Token "+newToken,
        }
    })
        .then(response => response.json())
        .then((result) => {
            setFoods(result);
        })
}
const handleClose5 = async ()=> {
    const formData = new FormData()
    formData.append('baby_food_name', baby_food_name)
    formData.append('composition', composition)
    formData.append('available', availab)
    formData.append('price', price)
    setShow5(false);
    await axios(`http://127.0.0.1:8000/stocks/${id}/`, {
        method: 'PUT',
        data: formData,
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": "Token "+newToken,
        }

    })
        .then(async () => {
    await fetch(`http://127.0.0.1:8000/stocks/`, {
        method: 'GET',
        headers:{
            "Authorization": "Token "+newToken,
        }
    })
        .then(response => response.json())
        .then((result) => {
            setFoods(result);
        })
})}
const handleShow2 = ()=> setShow2(true);
const handleShow3 = ()=> setShow3(true);
const handleShow4 = ()=> setShow4(true);
const handleShow5 = ()=> setShow5(true);
const handleClose = ()=> setShow(false);
const handleShow = ()=> setShow(true);
const Input1 = async (event) => {
    setMin(event.target.value);
}
const Input2 = async (event) => {
    setMax(event.target.value)
}
const Input3 = async (event) => {
    setInfo(event.target.value)
}
const Input31 = async (event) => {
    setName(event.target.value);
}
const Input32 = async (event) => {
    setComposition(event.target.value)
}
const Input33 = async (event) => {
    setAvailable(event.target.value)
}
const Input34 = async (event) => {
    setPrice(event.target.value)
}
const Input41 = async (event) => {
    setId(event.target.value)
}

function getInterval (min_price, max_price, info) {
  if (min_price && max_price && value) {
      return `?price_min=${min_price}&price_max=${max_price}&baby_food_name=${info}`
  }
  if (min_price && max_price ) {
      return `?price_min=${min_price}&price_max=${max_price}`
  }
  if (min_price && info) {
      return `?price_min=${min_price}&baby_food_name=${info}`
  }
  if (max_price && info) {
      return `?price_max=${max_price}&baby_food_name=${info}`
  }
  if (min_price) {
      return `?price_min=${min_price}`
  }
  if (max_price) {
      return `?price_max=${max_price}`
  }
  if (info) {
      return `?baby_food_name=${info}`
  }
  return ('')

}

useEffect(() => {
  fetch(`http://127.0.0.1:8000/stocks/${getInterval(min_price, max_price, value)}`, {
    method: 'GET',
    headers:{
        "Authorization": "Token "+"2b50f880c689f7f092fb1e5284f9d862d620da1a",
    }
})
      .then(response => response.json())
      .then((result) => {
          setFoods(result);
      })
}, []);

const params = useParams();
const fId = params.id

  
    const dispatch = useDispatch()
    const{
    value,
    userValue,
    sum
    } = useSelector((state)=> state.basket);
  


  return (
    <div>
    <div>
      <Styles>
        <Navbar classname="nav" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <NavLink to="/food">Главная</NavLink>
        {' | '}
          <div>
            <NavLink to='/'>Войти </NavLink>
            <NavLink to='/'> Выйти</NavLink>
          </div>
        </Navbar>
      </Styles>
        <h2>Список товаров детского питания</h2>
        <Nav>
        <Container>
            <Button variant="primary" className="me-2" disabled={flag1} onClick={handleShow}>Показать корзину</Button>
            <Button variant="primary" className="me-2" onClick={handleShow2}>Фильтр</Button>
            <Button variant="primary" className="me-2" disabled={flag2} onClick={handleShow3}>Добавить запись</Button>
            <Button variant="primary" className="me-2" disabled={flag2} onClick={handleShow4}>Удалить запись</Button>
            <Button variant="primary" disabled={flag2} onClick={handleShow5}>Изменить запись</Button>
        </Container>
        </Nav>
        <ul>
        {
            Object.entries(foods).map(([fId,food]) => (    
            <li key={fId}  >
                <Link to={`/food/${food.pk}`} onClick={(e) => {
                        dispatch({
                       type:ADD,
                      payload: food
                     })}}>
                {food.baby_food_name}
                </Link>
                <div>{food.price} руб.</div>
                <Button onClick={(e) =>{dispatch({
                       type:ADD_TO_CHART,
                      payload: {name:food.baby_food_name, price:food.price}
                     })}}
                     onMouseUp={()=>{}}>В корзину</Button>
                <Button
             onClick={(e) => {
                        dispatch({
                       type:REMOVE_FROM_CHART,
                      payload: {name: food.baby_food_name, price: food.price}
                     });}
            }>Удалить</Button>
            </li>
            ))
        }
        </ul>
        <div>Сумма:{sum}</div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Корзина</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="fromBasicEmail">
                        <Form.Label><ul>
                            {userValue.map(food =>
                                <Form.Group >
                                    <Form.Label>Название: {food.name}</Form.Label>
                                    <br/><Form.Label>Цена: {food.price}</Form.Label>
                                    <br/><Button value={food.id} onClick ={
                                    (e)=> {
                                        dispatch({
                                          type:REMOVE_FROM_CHART,
                                          payload: food});
                                    }}>Удалить</Button>
                                </Form.Group>)}
                        </ul></Form.Label>
                        <br/><Form.Label>Стоимость: {sum}</Form.Label>
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>
        <Modal show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                    <Modal.Title>Фильтр</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control type="text" className="input" placeholder='Фильтр минимальной цены' onChange={Input1}/>
                        <Form.Control type="text" className="input" placeholder='Фильтр максимальной цены' onChange={Input2}/>
                        <Form.Control type="text" className="input" placeholder="Фильтр названия" onChange={Input3}/>
                        <Form.Group>
                            <Button variant="primary" onClick={handleClose2}>Ok</Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
            <Modal show={show3} onHide={handleClose3}>
                <Modal.Header closeButton>
                    <Modal.Title>Добавление</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control type="text" className="input" placeholder='Название детского питания' onChange={Input31}/>
                        <Form.Control type="text" className="input" placeholder='Состав' onChange={Input32}/>
                        <Form.Control type="text" className="text" placeholder="Доступен?" onChange={Input33}/>
                        <Form.Control type="text" className="input" placeholder="Цена" onChange={Input34}/>
                        <Form.Group>
                            <Button variant="primary" onClick={handleClose3}>Ok</Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
            <Modal show={show4} onHide={handleClose4}>
                <Modal.Header closeButton>
                    <Modal.Title>Удаление</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control type="text" className="input" placeholder='Номер детского питания для удаления' onChange={Input41}/>
                        <Form.Group>
                            <Button variant="primary" onClick={handleClose4}>Ok</Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
            <Modal show={show5} onHide={handleClose5}>
                <Modal.Header closeButton>
                    <Modal.Title>Изменение</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control type="text" className="input" placeholder='id' onChange={Input41}/>
                        <Form.Control type="text" className="input" placeholder='Название детского питания' onChange={Input31}/>
                        <Form.Control type="text" className="input" placeholder='Состав' onChange={Input32}/>
                        <Form.Control type="chechbox" placeholder="Доступен?" onChange={Input33}/>
                        <Form.Control type="text" className="input" placeholder="Цена" onChange={Input34}/>
                        <Form.Group>
                            <Button variant="primary" onClick={handleClose5}>Ok</Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
    </div>
    </div>
  )
}

export default Main;