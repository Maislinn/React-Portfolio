function Header(props) {
    const { activeTab, setActiveTab } = props;

    // get nav item classes
    function getNavItemClass(tabName) {
        return `nav-item ${activeTab == tabName && 'active'}`;
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Maislinn Helfer</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto">
                    <li className={getNavItemClass('about')}>
                        <a onClick={() => setActiveTab('about')} className="nav-link" href="#">About me <span className="sr-only">(current)</span></a>
                    </li>
                    <li className={getNavItemClass('portfolio')}>
                        <a onClick={() => setActiveTab('portfolio')} className="nav-link" href="#">Portfolio</a>
                    </li>
                    <li className={getNavItemClass('contact')}>
                        <a onClick={() => setActiveTab('contact')} className="nav-link" href="#">Contact</a>
                    </li>
                    <li className={getNavItemClass('resume')}>
                        <a onClick={() => setActiveTab('resume')} className="nav-link" href="#">Resume</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;