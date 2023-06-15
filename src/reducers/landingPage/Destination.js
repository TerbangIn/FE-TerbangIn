import { GET_FLIGHT } from "../../actions/destinationAction";

const initialState = {
    flightDestinationData: []
}

const flightDestination = (state = initialState, action) => {
    switch (action.type) {
        case GET_FLIGHT:
            return {
                ...state,
                flightDestinationData: action.payload.data
            }
        default:
            return state
    }
}

export default flightDestination;