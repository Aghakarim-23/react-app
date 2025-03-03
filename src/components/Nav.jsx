import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className=' flex  items-center bg-amber-400 '>
        <nav className='w-[9rem] flex flex-col '>
            <Link className='w-full py-4 text-center border-white border-1 bg-gray-500' to="/first">Başlıq</Link>
            <Link className='w-full py-4 text-center border-white border-1 bg-gray-500' to="/second">Məzmun</Link>
            <Link className='w-full py-4 text-center border-white border-1 bg-gray-500' to="/third">Sonuncu səhifə</Link>
        </nav>
    </div>
  )
}

export default Nav