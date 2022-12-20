import { ADD} from "./Actions"


const add = (item) => {
  return {
    type: ADD,
    payload: item,
  }
}

export default add;