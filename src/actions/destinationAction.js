import axios from 'axios';
import Cookies from 'universal-cookie';
export const GET_FLIGHT = "GET_FLIGHT";


export const getFlight = () => {
    return(dispatch) => {
        // get data from API
        const cookies = new Cookies()
        const token = cookies.get("token")

        axios.get('https://be-tiketku-production.up.railway.app/api/v1/flight', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(function (response) {
            console.log(response.data)
            dispatch({
                type: GET_FLIGHT,
                payload: {
                    data: response.data
                }
            })
        })
        .catch(function (error) {
            console.log(error.message)
            dispatch({
                type: GET_FLIGHT,
                payload: {
                    data: []
                }
            })
        })
    }
}