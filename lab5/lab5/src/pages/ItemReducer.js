import { ADD} from "./Actions";

const initialState = {
  userItem: {},
 
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        userItem: action.payload, 
    }
   
    default:
      return state;
  }
};

export default itemReducer;