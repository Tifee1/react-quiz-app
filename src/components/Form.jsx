import useApp from './context'

const Form = () => {
  const cat = [
    { value: 9, label: 'general knowledge' },
    { value: 11, label: 'entertainment: films' },
    { value: 12, label: 'entertainment: music' },
    { value: 14, label: 'entertainment: television' },
    { value: 15, label: 'entertainment video games' },
    { value: 17, label: 'science and nature' },
    { value: 18, label: 'science: computers' },
    { value: 19, label: 'science: mathematics' },
    { value: 21, label: 'sports' },
    { value: 23, label: 'history' },
    { value: 24, label: 'politics' },
    { value: 27, label: 'celebrities' },
  ]
  const diff = ['easy', 'medium', 'hard']

  const { difficulty, amount, error, category, changeFilter, submit } = useApp()

  return (
    <main className='container max-w-6xl mx-auto px-7 mt-4 text-center'>
      <h2 className='font-bold'>welcome to ultimate quiz app</h2>
      <p className='text-xl my-3'>Select quiz category and difficulty</p>
      <form onSubmit={(e) => submit(e)}>
        <div className='md:grid md:grid-cols-2 xl:grid-cols-3 md:place-content-center'>
          <div className='form-control'>
            <label
              htmlFor='category'
              className='block capitalize text-xl pb-2 '
            >
              select category
            </label>
            <select
              id='category'
              value={category}
              onChange={(e) => changeFilter(e)}
              className='border border-[#292929] rounded-md px-3 py-[2px] h-10 capitalize'
            >
              {cat.map((item, index) => {
                return (
                  <option value={item.value} key={index}>
                    {item.label}
                  </option>
                )
              })}
            </select>
          </div>{' '}
          <div className='form-control'>
            <label htmlFor='amount' className='block capitalize text-xl pb-2 '>
              total questions
            </label>
            <input
              type='number'
              id='amount'
              max='50'
              value={amount}
              onChange={(e) => changeFilter(e)}
              className='border border-[#292929] rounded-md px-3 py-[2px] h-10'
            />
          </div>
          <div className='form-control'>
            <label
              htmlFor='difficulty'
              className='block capitalize text-xl pb-2 '
            >
              select difficulty
            </label>
            <select
              id='difficulty'
              value={difficulty}
              onChange={(e) => changeFilter(e)}
              className='border border-[#292929] rounded-md px-3 py-[2px] h-10 capitalize'
            >
              {diff.map((item, index) => {
                return (
                  <option value={item} key={index}>
                    {item}
                  </option>
                )
              })}
            </select>
          </div>
        </div>
        {error && (
          <div className='form-control text-red-600 capitalize'>
            cant generate questions, please try another option
          </div>
        )}
        <button
          type='submit'
          className='bg-[#292929] text-grey px-10 py-3 my-3 uppercase rounded-md tracking-[5px] text-xl hover:bg-[#292929]/60 transition-all duration-[0.3s] ease-linear'
        >
          start
        </button>
      </form>
    </main>
  )
}
export default Form
