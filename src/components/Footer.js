import React from "react";

const Footer = ({openMenu}) => {
    return (
        <footer className={`footer ${openMenu ? 'hidden' : ''}`}>
            
        </footer>
    )
}

export default Footer;