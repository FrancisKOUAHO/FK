const Hamburger = ({showNavbar, handleShowNavbar}: any) => {


    return (
        <div className={`hidden ${showNavbar ? 'hambuger_menu' : ''}`}>
            <div onClick={handleShowNavbar}>
                <img src="/icons/close.svg" alt="" width={30}/>
            </div>

            <ul>
                <li><a href="#home">Accueil</a></li>
                <li><a href="#skills">Compétences</a></li>
                <li><a href="#projects">Projets</a></li>
                <li><a href="#about">À propos</a></li>
                <li>
                    <a href="https://www.linkedin.com/in/francis-kouaho/" target="_blank">
                        <img src="/icons/LinkedIn.svg" alt="" width={25}/>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/KouahoFrancis" target="_blank">
                        <img src="/icons/twitter.svg" alt="" width={25}/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Hamburger