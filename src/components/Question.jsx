import { useEffect } from 'react'
import useApp from './context'
import Modal from './Modal'

const Question = () => {
  const { ques, index, next, modal, setCorrect, numOfQues } = useApp()

  const { ans, nul, quest } = ques[index]
  const all = [...ans]

  const check = (select) => {
    if (select === nul) {
      setCorrect((old) => old + 1)
    }
    next()
  }

  const rand = Math.floor(Math.random() * 4)
  if (rand === 3) {
    all.push(nul)
  } else {
    all.push(all[rand])
    all[rand] = nul
  }

  return (
    <>
      {modal && <Modal />}

      <article className='bg-white/80 px-10 lg:px-20 py-7 w-[90vw] max-w-5xl mx-auto'>
        <h4 className='text-right text-xl mb-5'>
          question {index + 1} of {numOfQues}
        </h4>
        <h2 className='mb-10' dangerouslySetInnerHTML={{ __html: quest }} />
        {all.map((item, index) => {
          return (
            <button
              className='bg-[#292929] block my-4 px-4 py-2 w-full max-w-[60%] rounded-xl text-grey text-2xl hover:bg-[#292929]/70 transition-all duration-[0.3s] ease-linear'
              key={index}
              onClick={(e) => {
                check(e.target.textContent)
              }}
              dangerouslySetInnerHTML={{ __html: item }}
            />
          )
        })}
        <button
          className='bg-[#292929] block mt-20 my-4 ml-auto px-4 py-3 w-[300px] rounded-xl text-grey text-2xl hover:bg-[#292929]/70 transition-all duration-[0.3s] ease-linear capitalize'
          onClick={next}
        >
          skip question
        </button>
      </article>
    </>
  )
}
export default Question
