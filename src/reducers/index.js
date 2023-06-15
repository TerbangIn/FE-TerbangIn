import { combineReducers } from "redux";
import FlightDestinationReducer from "./landingPage/Destination";
import modalPassengerReducer from "./landingPage/Passenger";

export default combineReducers({
    FlightDestinationReducer,
    modalPassengerReducer
});