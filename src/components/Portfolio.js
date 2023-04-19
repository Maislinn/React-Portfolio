function Portfolio() {
    return (
        <div className="jumbotron shadow-sm">
            <h1 className="display-4"><i className="fas fa-briefcase"></i> Portfolio</h1>
            <hr className="my-4" />
            <div className="row">
                <div className="col-md-6 mt-3">
                    <div className="card">
                        <img src={require('./PROJECT-HERD.png')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">HERD Project</h5>
                            <p className="card-text">HERD. is a full stack web application that allows ranchers to create a unique secure account to track their livestock. Ranchers can add and update detailed information on their cattle including their tagIDs, last known location, age, family relations, and vaccine status.</p>
                            <a href="https://cattle-tracker.herokuapp.com/" className="btn btn-primary">View Project</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mt-3">
                    <div className="card">
                        <img src={require('./Pet-Pal-Image.png')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Pet Pal Project 3</h5>
                            <p className="card-text">Pet Pal is a full stack MERN application that connects pet owners to pet sitters. This application also features Vite React Node.js Apollo Express MongoDB and Stripe Payment API. </p>
                            <a href="https://github.com/Maislinn/Project3_MERN" className="btn btn-primary">View Project</a>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    );
}

export default Portfolio;