import './MobileNav.css'
export const MobileNav = ({isOpen, toggleMenu}) => {
    return (
        <>
            <div className={`mobile-menu ${isOpen ? "active" : ""}`}
                 onClick={toggleMenu}>
                <div className={'mobile-menu-container'}>
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
                </div>
            </div>
        </>
    )
}


