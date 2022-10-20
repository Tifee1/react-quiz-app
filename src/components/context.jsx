import React, { useContext, useReducer, useState } from 'react'
import reducer from './reducer'
import axios from 'axios'

const Context = React.createContext()

const initial = {
  amount: 10,
  difficulty: 'easy',
  category: 21,
  ques: [],
  home: true,
  modal: false,
  error: false,
  numOfQues: 0,
}

const baseURL = 'https://opentdb.com/api.php?type=multiple'

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initial)
  const [index, setIndex] = useState(0)
  const [correct, setCorrect] = useState(0)

  const fetchData = async (url) => {
    dispatch({ type: 'SET_LOADING' })
    const resp = await axios(url)
    const data = await resp.data.results
    if (data.length > 1) {
      console.log(resp.data)
      const newData = data.map((item) => {
        return {
          quest: item.question,
          ans: item.incorrect_answers,
          nul: item.correct_answer,
        }
      })
      dispatch({ type: 'SET_DATA', payload: newData })
    } else {
      dispatch({ type: 'SET_ERROR' })
    }
  }

  const changeFilter = (e) => {
    const name = e.target.id
    const value = e.target.value
    dispatch({ type: 'CHANGE_FILTER', payload: { name, value } })
  }

  const next = () => {
    let num = index + 1
    if (num > state.numOfQues - 1) {
      num = state.numOfQues - 1
      dispatch({ type: 'OPEN_MODAL' })
    }
    setIndex(num)
  }

  const submit = (e) => {
    e.preventDefault()
    fetchData(
      `${baseURL}&amount=${state.amount}&difficulty=${state.difficulty}&category=${state.category}`
    )
  }
  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' })
    setIndex(0)
    setCorrect(0)
  }

  return (
    <Context.Provider
      value={{
        ...state,
        index,
        changeFilter,
        submit,
        next,
        closeModal,
        correct,
        setCorrect,
        setIndex,
      }}
    >
      {children}
    </Context.Provider>
  )
}

const useApp = () => {
  return useContext(Context)
}
export default useApp
