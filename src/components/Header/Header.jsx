import React from 'react'
import "./Header.css" 

function Header() {
    return(
        <div className="header">
            <nav className="menuNav">
                <ul className="menu">
                    <li><a href="#" className="menuItem">Inicio</a></li>
                    <li><a href="#" className="menuItem">Sobre</a></li>
                    <li><a href="#" className="menuItem">Resumo</a></li>
                    <li><a href="#" className="menuItem">Portifólio</a></li>
                    <li><a href="#" className="menuItem">Contato</a></li>
                </ul>
            </nav>
        </div>
        
        
    )
}

export default Header