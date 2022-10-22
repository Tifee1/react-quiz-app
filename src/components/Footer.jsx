const Footer = () => {
  return (
    <footer className='bg-[#292929] text-grey text-center capitalize py-4 text-xl'>
      developed by{' '}
      <a
        href='https://github.com/tifee1'
        target='_blank'
        className='font-black uppercase text-white'
      >
        tifee
      </a>
      <span className='text-white'> &copy; {new Date().getFullYear()}</span>
    </footer>
  )
}
export default Footer
