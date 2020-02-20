import api from './api'
export const ACTION_TYPE = {
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
  FETCH_ALL: "FETCH_ALL"
}

export const fetchAll = () => dispatch => {
  //get api req
  api.employee().fetchAll()
    .then(
      response => {
        console.log(response +"res")
        dispatch({
          type: ACTION_TYPE.FETCH_ALL,
          payload: response.data
        })
      }
    )
    .catch(err =>console.log(err))

}
//dispath(create())