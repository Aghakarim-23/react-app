import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className=' flex  items-center bg-amber-400 '>
        <nav className='w-[9rem] flex flex-col gap-8 px-3'>
            <Link to="/first">Başlıq</Link>
            <Link to="/second">Məzmun</Link>
            <Link to="/third">Sonuncu səhifə</Link>
        </nav>
    </div>
  )
}

export default Nav