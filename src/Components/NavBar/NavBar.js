import React, { useEffect, useState } from 'react'
import { logoImg, avatarImg } from '../Constants';
import useMediaQuery from '../MediaQuery/UseMediaQuery';
import './NavBar.css'

function NavBar() {

    const [scrolled, setScrolled] = useState(false);
    const [sideNav, setSideNav] = useState(false);
    const [styleNav, setStyleNav] = useState({width: '0'});

    // STYLE ============ //
    const is1024px = useMediaQuery('(min-width: 1024px)');
    const is1023px = useMediaQuery('(max-width: 1023px)');
    const is600px = useMediaQuery('(max-width: 600px)');

    const navBarBgStyle = {
        background: is1024px ? 
                        scrolled ? 
                            '#111' 
                            : 'linear-gradient(360deg, transparent, rgba(37,37,37,.60), rgba(37, 37, 37, 1))' 
                    : is1023px && sideNav === true ? 
                        '#111' 
                        : 'hsla(0, 0%, 0%, 0.6)'
    }
    // STYLE ============ //

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        return ()=> window.removeEventListener('scroll', handleScroll);
    },[])   

    function handleScroll(){
        if(window.pageYOffset > 10){
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    function openCloseNav() {
        setSideNav(!sideNav);
        setStyleNav({width: sideNav ? '0' : is600px ? '75%' : '40%'});
    }
    
    const [menuListElements,setMenuListElements] = useState([]);
    useEffect(()=>{
        const list = ['My List','Thrillers','Hindi Movies & TV','Children & Family','International Movies & TV','Malayalam-Language Movies','Action','Anime','Comedies','Fantasy','Sci-Fi','Tamil-Language Movies','Made in India','Hollywood','Bollywood']
        list.map((item,index)=> setMenuListElements(prevList => [...prevList,<h1 key={index}>{item}</h1>]))
    },[])

    return (
        <div className='navbar' style={navBarBgStyle}>
            <div className="left-section">
                <div className="sideMenu">
                    <div className="menu-btn">
                        <div id="mySidenav" className="sidenav" style={styleNav}>
                            <div className="top-div">
                                <div className="profile">
                                    <div className="prof-img">
                                        <img src={avatarImg} alt="" />
                                    </div>
                                    <div className="name">
                                        <h2>User</h2>
                                        <p>Switch Profiles</p>
                                    </div>
                                </div>
                                <h1>Account</h1>
                                <h1>Help Centre</h1>
                                <h1>Sign out of Netflix</h1>
                            </div>
                            <hr />
                            <div className="bottom-div">
                                <span>Home</span>
                                {menuListElements}
                            </div>
                        </div>
                    {sideNav && <div className="close-div" onClick={openCloseNav}></div>}
                </div>
                {is1023px && <img src="https://img.icons8.com/ios-glyphs/60/FFFFFF/menu--v1.png" alt='' onClick={openCloseNav}/>}
                </div>
                <div className="logo">
                    <img src={logoImg} className="logo-img" alt="" />
                </div>
                <div className="list">
                    <ul>
                        <li><span>Home</span></li>
                        <li>TV Shows</li>
                        <li>Movies</li>
                        <li>News & Popular</li>
                        <li>My List</li>
                        <li>Browse by Language</li>
                    </ul>
                </div>
            </div>
            <div className="right-section">
                <img src="https://img.icons8.com/ios/50/FFFFFF/search--v1.png" alt=''/>
                <img src="https://img.icons8.com/material-outlined/24/FFFFFF/filled-appointment-reminders.png" alt=''/>
                <img src={avatarImg} className="avatar-img" alt="" />
                <img className='arrow' src="https://img.icons8.com/material-rounded/24/FFFFFF/give-way.png" alt=''/>
            </div>
            <input type="text" className='search-box' placeholder='Search'/>
        </div>
    )
}

export default NavBar
