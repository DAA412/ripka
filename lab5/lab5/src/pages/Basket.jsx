import { React} from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
  


  function Basket (){

    const{
        value
        } = useSelector((state)=> state.item);

    return(
      <div>
<div></div>
      </div>
    );
  };

  export default Basket;