import './Profile.css'

const Profile = () => {
    return (
        <section className={'profile-container'}>
            <div className={'profile-content'}>
                <h2>Building Digital Experience That Inspire </h2>
                <p>Passionate Fullstack Developer | Transforming Ideas into Seamless and Visually Stunning Web & Mobile
                    Solutions </p>
            </div>
            <div className={'profile-img'}>

                <div>

                    <img src={'src/assets/Profile/IMG_4991.jpeg'} alt={'icon 2'}/>
                </div>
                <div>
                    <div className={'tech-icon'}>
                        <img src={'./src/assets/Profile/react.svg'} alt={'icon'}/>
                    </div>
                    <div className={'tech-icon'}>
                        <img src={'src/assets/Profile/icons8-java-logo.svg'} alt={'icon 3'}/>
                    </div>
                    <div className={'tech-icon'}>
                        <img src={'src/assets/Profile/icons8-spring-boot.svg'} alt={'icon 3'}/>
                    </div>
                    <div className={'tech-icon'}>
                        <img src={'src/assets/Profile/icons8-html-logo.svg'} alt={'icon 5'}/>
                    </div>
                    <div className={'tech-icon'}>
                        <img src={'src/assets/Profile/icons8-css-logo.svg'} alt={'icon 5'}/>
                    </div>
                    <div className={'tech-icon'}>
                        <img src={'src/assets/Profile/icons8-javascript.gif'} alt={'icon 4'}/>
                    </div>
                    <div className={'tech-icon'}>
                        <img src={'src/assets/Profile/icons8-aws-logo.svg'} alt={'icon 4'}/>
                    </div>
                    <div className={'tech-icon'}>
                        <img src={'src/assets/Profile/icons8-figma.svg'} alt={'icon 5'}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile;
