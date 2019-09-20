import React from 'react';

function GetStartedCopy({logo, links = []}) {
    return (
        <div className = '__KA__our_client' >
            <div className="container-fluid mt-0 p-lg-5 d-flex align-items-center justify-content-center bg-success animate-enter fadeInUp">
                <div className="row">
                    <div className="col p-5 rounded-pill">
                        <p className="text-center text-white h1" id="contact">Ready to supercharge your hiring?</p>
                        <p className="lead text-center text-white">BJSHUB is your ultimate outbound recruitment companion. Save time qualifying leads like never before.</p>
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 text-center mt-5"><button className="btn btn-lg rounded-pill" type="button" style={{backgroundColor:"blue", color: 'white'}} onClick={() => {
                                window.location.href='/apply'
                            }} >Get Started</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetStartedCopy;
