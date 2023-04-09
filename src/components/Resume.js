import resume from '../assets/resume.pdf';

function Resume() {
    return (
        <div className="jumbotron shadow-sm">
            <h1 className="display-4"><i className="fas fa-file"></i> Resume</h1>
            <hr className="my-4" />
            {/* bootstrap progress bars for Javascript, HTML, CSS and React skills */}
            <p className='display-4 mt-5'>Skills</p>
            <div className="row">
                <div className="col-md-6">
                    <h3>JavaScript</h3>
                    <div className="progress">
                        <div className="progress-bar bg-success" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                    </div>

                    <h3>HTML</h3>
                    <div className="progress">
                        <div className="progress-bar bg-success" role="progressbar" style={{ width: '97%' }} aria-valuenow="97" aria-valuemin="0" aria-valuemax="100">97%</div>
                    </div>

                    <h3>CSS</h3>
                    <div className="progress">
                        <div className="progress-bar bg-success" role="progressbar" style={{ width: '95%' }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">95%</div>
                    </div>

                    <h3>React</h3>
                    <div className="progress">
                        <div className="progress-bar bg-success" role="progressbar" style={{ width: '85%' }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
                    </div>
                </div>
            </div>
            {/* Resume Iframe */}
            <p className='display-4 mt-5'>My Resume</p>
            <div className="row mt-1">
                <div className="col-md-12">
                    <iframe src={resume} title="resume" width="100%" height="1000px"></iframe>
                </div>
            </div>
            {/* Download button for the resume */}
            <div className="row mt-5">
                <div className="col-md-12">
                    <a href={resume} download="resume.pdf" className="btn btn-primary btn-lg" role="button">Download Resume</a>
                </div>
            </div>
        </div>
    );
}

export default Resume;