import { ADD_FAV, REMOVE_FAV } from "./action-types"

const initialState = {
    myFavorites: [],
    allCharacters: [],
};

const reducer = (state = initialState, { type, payload }) => {
    switch(type){
        case ADD_FAV:
            let copy1 = state.allCharacters
            copy1.push(payload)
            return {
                ...state,
                myFavorites: copy1,
                allCharacters: copy1
            }
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(fav => fav.id !== payload)
            }

        case "FILTER":
            let copy3 = state.allCharacters.filter(char => {
                return char.gender === payload
            })
            return {
                ...state,
                myFavorites: copy3
            }
        case "ORDER": 
        let copy4 = state.allCharacters
        let order = copy4.sort((a,b) => {
            if(payload === 'A'){
                return a.id - b.id
            } else if (payload === 'D'){
                return b.id - a.id
            } else {
                return 0;
            }
        })
        return {
            ...state,
            myFavorites: order
        }
        default: 
        return {...state}
    }
};

export default reducer