import React from 'react';

function Info({logo, links = []}) {
    return (
        <div className = '__KA__why_us' >
            <div className="container-fluid p-3 p-md-5 features">
                <div className="row d-flex align-items-center mb-5 py-5 fadeInUp">
                    <div className="col-md-7 text-center p-0">
                        <div className="mb-4 mx-0 mx-md-4" prev-className="feature-preview rounded-lg bg-success p-3 p-md-5 mb-4 mx-0 mx-md-4"><img className="img-fluid shadow rounded loaded" src='https://www.gstatic.com/webp/gallery/1.jpg' data-was-processed="true" alt='loading' /></div> </div>
                    <div className="col text-center text-md-left p-md-5">
                        <h2 className="text-success">Access a curated talent pool</h2>
                        <p className="lead">Reach <span className="text-successf">thousands of qualified candidates</span> from the biggest online sources like LinkedIn &amp; Github.</p>
                    </div>
                </div>
                <div className="row d-flex align-items-center my-5 py-5 fadeInUp">
                    <div className="col-md-7 text-center d-md-none p-0 pb-4"><img className="img-fluid" src='https://www.gstatic.com/webp/gallery/1.jpg' alt='loading' /></div>
                    <div className="col text-center text-md-left p-md-5">
                        <h2 className="text-warning">Focus on quality candidates</h2>
                        <p className="lead">Our proprietary SmartSort™ technology shows you the most relevant candidates first.</p>
                    </div>
                    <div className="col-md-7 text-center d-none d-md-block p-0">
                        <div prev-className="bg-danger feature-preview rounded-lg p-3 p-md-5 mb-4 mx-0 mx-md-4"><img className="img-fluid loaded" alt='loading' src='https://www.gstatic.com/webp/gallery/1.jpg' data-was-processed="true" /></div> </div>
                </div>
                <div className="row d-flex align-items-center mt-5 py-5 fadeInUp">
                    <div className="col-md-7 text-center p-0">
                        <div className="mb-4 mx-0 mx-md-4" prev-className="bg-primary feature-preview rounded-lg p-3 p-md-5 mb-4 mx-0 mx-md-4"><img className="img-fluid loaded" src='https://www.gstatic.com/webp/gallery/1.jpg' alt='loading' data-was-processed="true" /></div> </div>
                    <div className="col text-center text-lg-left">
                        <h2 className="text-primary">Skip the analysis</h2>
                        <p className="lead">Learn about candidates from their career highlights. We automatically hide things like irrelevant experiences &amp; bring the most important facts to the front.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Info;
