import React from 'react';

// Dumb/Stateless component for the Header
const Header = (props) => (

    <header className="header">
        <div>
            <img className="logo" alt="niseko central logo" src="https://www.nisekocentral.com/assets/img/niseko-central-logo.png" />
        </div>
        <div className="title">
            { props.title }
        </div>
    </header>

)

// Export the component so that it can be imported and used by any other component
export default Header;