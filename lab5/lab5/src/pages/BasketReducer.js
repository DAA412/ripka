import { ADD_TO_CHART, REMOVE_FROM_CHART} from "./Actions";

const initialState = {
  value: 0,
  userValue: [],
  sum: 0
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CHART:
      return {
        userValue:  state.userValue.concat(action.payload),
        value: state.userValue.push(action.payload),
        sum: state.sum + parseInt(action.payload.price)
      }
    case REMOVE_FROM_CHART:
      
      return { 
        userValue:  state.userValue.filter(basket => basket.name !==action.payload.name), 
        value: state.userValue.filter(basket => basket.name !==action.payload.name).length,
        sum:  state.sum - parseInt(action.payload.price)*state.userValue.filter(basket => basket.name ===action.payload.name).length
        //sum: sum.state - action.payload.price
      }
   
    default:
      return state;
  }
};

export default basketReducer;