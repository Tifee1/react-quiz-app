import useApp from './context'

const Modal = () => {
  const { closeModal, correct, numOfQues } = useApp()

  return (
    <div className='bg-[rgba(0,0,0,.75)] w-full h-full fixed top-0 left-0 flex justify-center items-center z-[999] opacity-1'>
      <div className=' bg-white absolute w-[90vw] max-w-3xl rounded-lg p-[3rem] text-center'>
        <h1 className='font-bold'>congrats!</h1>
        <p className='text-2xl capitalize my-6'>
          you scored {((correct / numOfQues) * 100).toFixed(2)}%
        </p>
        <button
          className='bg-[#292929] block  mx-auto my-4 px-4 py-3 w-[300px] rounded-xl text-grey text-2xl hover:bg-[#292929]/70 transition-all duration-[0.3s] ease-linear capitalize'
          onClick={closeModal}
        >
          play again
        </button>
      </div>
    </div>
  )
}
export default Modal
