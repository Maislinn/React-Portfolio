function Footer() {
    return (
        <footer className="page-footer font-small blue py-5 bg-light">
            {/* Row for social links */}
            <div className="container-fluid text-center">
                <div className="row">
                    <div className="col-md-12">
                        <a href="https://github.com/Maislinn" className="btn btn-primary btn-lg mx-1" role="button" aria-pressed="true"><i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/maislinn-helfer/" className="btn btn-primary btn-lg mx-1" role="button" aria-pressed="true"><i className="fab fa-linkedin"></i></a>
                        <a href="https://twitter.com/DecentralizedMH" className="btn btn-primary btn-lg mx-1" role="button" aria-pressed="true"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>
            {/* Display copyright year centered */}
            <div className="container-fluid text-center">
                <p>© {new Date().getFullYear()} All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;