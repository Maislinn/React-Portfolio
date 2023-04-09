function Portfolio() {
    return (
        <div className="jumbotron shadow-sm">
            <h1 className="display-4"><i className="fas fa-briefcase"></i> Portfolio</h1>
            <hr className="my-4" />
            <div className="row">
                <div className="col-md-6 mt-3">
                    <div className="card">
                        <img src="./assets/PROJECT-HERD.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">HERD Project</h5>
                            <p className="card-text">HERD. is a full stack web application that allows ranchers to create a unique secure account to track their livestock. Ranchers can add and update detailed information on their cattle including their tagIDs, last known location, age, family relations, and vaccine status.</p>
                            <a href="https://cattle-tracker.herokuapp.com/" className="btn btn-primary">View Project</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mt-3">
                    <div className="card">
                        <img src="./assets/HTML-Portfolio-project.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">HTML Portfolio Project</h5>
                            <p className="card-text">As a practice using basic HTML & CSS - I was asked to make a general portfolio - this is that portfolio.</p>
                            <a href="https://maislinn.github.io/Advanced_CSS_Challenge-_Professional_Portfolio/" className="btn btn-primary">View Project</a>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    );
}

export default Portfolio;