import './Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';
import {Reorder} from "@mui/icons-material";
import {useState} from "react";
import {MobileNav} from "../MobileNav/MobileNav.jsx";

export default function Navbar () {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);

    }

    return(
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>

       <nav className={'nav-wrapper'}>
           <div className={'nav-content'}>
               <img className={'logo'} src={'src/assets/Profile/Rames Updated.png'} alt={'logo'}/>

               <ul>
                   <li>
                       <a className={'menu-item'}>Home</a>
                   </li>
                   <li>
                       <a className={'menu-item'}>Skills</a>
                   </li>
                   <li>
                       <a className={'menu-item'}>Work Experience</a>
                   </li>
                   <li>
                       <a className={'menu-item'}>Contact Me</a>
                   </li>
                   <button className={'contact-btn'} onClick={()=>{}}>
                       Hire Me
                   </button>
               </ul>

               <button className={'menu-btn'} onClick={toggleMenu}>
                 <Reorder/>
                   {openMenu ? "" : "" }
               </button>
           </div>
       </nav>
        </>
    )
}
