import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from "../actions/types"
import { v1 as uuidv1 } from "uuid";
const initialState = {
    items: [
        { id: uuidv1(), name:'Etlog'},
        { id: uuidv1(), name:'Pan'},
        { id: uuidv1(), name:'Rice'},
        { id: uuidv1(), name:'Banana'},
        { id: uuidv1(), name:'Juice'},
        { id: uuidv1(), name:'Coke'},
        { id: uuidv1(), name:'Sprite'},
    ]
}
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return  {
          ...state
      }; 
    case DELETE_ITEM:
      return  {
          ...state,
          items: state.items.filter(item => item.id !== action.payload)
      }; 
    case ADD_ITEM:
      return  {
          ...state,
          items: [action.payload, ...state.items]
      }; 
    default:
      return state;
  }

}