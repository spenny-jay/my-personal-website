const iconPath = require('../../assets/logo.png');
function NavigationBar() {
  return (
    <header>
        <nav className="navbar-container">
            <div className="navbar__right">
                <img src={iconPath} alt="Logo"/>
            </div>
            <div className="navbar__left">
                <a href="#about" className="link">About</a>
                <a href="#experience" className="link">Experience</a>
                <a href="#prof" className="link">Proficiencies</a>
                <a href="#contact" className="contact-btn">Contact</a>
            </div>
        </nav>
    </header>
  );
}

export default NavigationBar;