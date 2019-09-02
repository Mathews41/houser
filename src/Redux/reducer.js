const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
    img: '',
    mortgage: 0,
    rent: 0,

}

const UPDATE_STEPONE = 'UPDATE_STEPONE'
const UPDATE_STEPTWO = 'UPDATE_STEPTWO'
const UPDATE_STEPTHREE = 'UPDATE_STEPTHREE'
const CANCEL_BUTTON = ' CANCEL_BUTTON'

export default function reducer(state = initialState, action){
    switch(action.type){
        case UPDATE_STEPONE:
            return Object.assign({}, state, action.payload)
    
    case UPDATE_STEPTWO:
            return Object.assign({}, state, action.payload)
    
    case UPDATE_STEPTHREE:
            return Object.assign({}, state, action.payload)
    
    case CANCEL_BUTTON:
            return Object.assign({}, state, action.payload)
            default:
                return state ;
    }
}
export function updateStepOne(everything){
    return {
        type: UPDATE_STEPONE,
        payload: everything
    }
}
export function updateStepTwo(img){
    return {
        type: UPDATE_STEPTWO,
        payload: img
    }
}
export function updateStepThree(everything){
    return {
        type: UPDATE_STEPTHREE,
        payload: everything
    }
}
export function clearEverything(){
    return {
        type: CANCEL_BUTTON,
        payload: initialState
    }
}
