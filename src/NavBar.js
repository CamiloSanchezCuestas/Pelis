import {useRef} from "react";


function NavBar(){
    const navRef = useRef();
    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return(
        <div class="first">

        <nav ref={navRef}>
                <a href="/BlogList">Inicio</a>
                <a href="/BlogList">BLOG LIST</a>
                <a href="/FavoriteView">FAVORITE</a>
                <a href="#">EN LISTA DE ESPERA</a>
                <button className="nb ncb" onClick={showNavBar}>
                </button>
            </nav>
            <button className="nb" onClick={showNavBar}>

            </button>

    </div>
    )
}

export {NavBar};