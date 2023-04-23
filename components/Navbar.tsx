import React from 'react'
import NavbarItem from './NavbarItem'
import { BsChevronDown, BsSearch, BsBell } from 'react-icons/bs'
import MobileMenu from './MobileMenu'
import AccountMenu from './AccountMenu';
import Link from 'next/link';




const TOP_OFFSET = 66;
const Navbar = () => {

    const [showMobileMenu, setShowMobileMenu] = React.useState(false);
    const [showProfileMenu, setShowProfileMenu] = React.useState(false);
    const [showBackground, setShowBackground] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= TOP_OFFSET) {
                setShowBackground(true)
            } else {
                setShowBackground(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    const toggleMobileMenu = React.useCallback(() => {
        setShowMobileMenu((current) => !current)
    }, [])

    
    
    const toggleProfileMenu = React.useCallback(() => {
        setShowProfileMenu((current) => !current)
    }, [])

    
  return (
    <nav className='w-full fixed z-40'>
        <div className={`px-4 md:px-16 py-6 flex items-center transition duration-500 ${showBackground ? 'bg-zinc-900 bg-opacity-90' : ''}`}>
           <Link href="/">
            <img src="/images/logo.png" alt="Logo" className='cursor-pointer h-7' />
           </Link>
            <div className='ml-8 gap-7 hidden lg:flex'>
             <Link href='/'>
                <NavbarItem label='Home'/>
             </Link>
             <Link href="#movie">
                <NavbarItem label='Series'/>
             </Link>
                <Link href="#movie">
                <NavbarItem label='Films'/>
                </Link>
                <Link href='#movie'>
                <NavbarItem label='New & Popular'/>
                </Link>
                <Link href='#my-list'>
                <NavbarItem label='My List'/>
                </Link>
            </div>
            <div onClick={toggleMobileMenu} className='lg:hidden flex items-center gap-2 ml-8 cursor-pointer relative'>
                <p className='text-white text-sm'>Browse</p>
                <BsChevronDown className={`text-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`}/>
                <MobileMenu visible={showMobileMenu} />
            </div>
            <div className='flex ml-auto gap-7 items-center'>
                <div className='text-gray-200 hover:text-gray-300  cursor-pointer transition'>
                    <BsSearch />
                </div>
                <div className='text-gray-200 hover:text-gray-300  cursor-pointer transition'>
                    <BsBell />
                </div>
                <div onClick={toggleProfileMenu} className='flex items-center gap-2 cursor-pointer relative'>
                    <div className='w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden'>
                        <img src="/images/default-blue.png" alt="Profile" />
                    </div>
                        <BsChevronDown className={`text-white transition ${showProfileMenu ? 'rotate-180' : 'rotate-0'}`}/>
                            <AccountMenu visible={showProfileMenu} />
                </div>
            </div>
        </div>
        
    </nav>
  )
}

export default Navbar