import Buscador from "./_buscador";
import Logo from "./_logo";
import PerfilUsuario from "./_perfilUsuario";
import './Header.css';


const Header = () => {
    return (
        <div className="header">
            
            <section className="navegacion">
                <Logo />
                <PerfilUsuario usuario="Fran" />
            </section>

            <Buscador />
        </div>
    )
}

export default Header