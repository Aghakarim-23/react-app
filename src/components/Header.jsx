import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='h-[4rem] flex  items-center bg-amber-400 '>
        <nav className='w-full flex justify-between px-3'>
            <Link to="/first">Başlıq</Link>
            <Link to="/second">Məzmun</Link>
            <Link to="/third">Sonuncu səhifə</Link>
        </nav>
    </div>
  )
}

export default Header