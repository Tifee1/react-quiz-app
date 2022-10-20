const reducer = (state, action) => {
  if (action.type === 'CHANGE_FILTER') {
    const name = action.payload.name
    const value = action.payload.value
    return { ...state, [name]: value }
  }
  if (action.type === 'SET_DATA') {
    return {
      ...state,
      ques: action.payload,
      loading: false,
      home: false,
      numOfQues: action.payload.length,
    }
  }
  if (action.type === 'SET_LOADING') {
    return { ...state, error: false, loading: true }
  }
  if (action.type === 'SET_ERROR') {
    return { ...state, error: true, loading: false }
  }
  if (action.type === 'OPEN_MODAL') {
    return { ...state, modal: true }
  }
  if (action.type === 'CLOSE_MODAL') {
    return { ...state, modal: false, ques: [], home: true, numOfQues: 0 }
  }
  throw new Error(`no matching '${action.type}' action type`)
}
export default reducer
