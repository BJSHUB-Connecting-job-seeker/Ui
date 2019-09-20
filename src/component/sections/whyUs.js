import React from 'react';

function WhyUs({logo, links = []}) {
    return (
        <div className = '__KA__why_us' >
            <div className="container pt-5">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 animate-enter fadeInUp">
                        <h1 className="text-center mb-0" id="why">Why us</h1>
                        <p className="text-center mb-5 subtitle">Startups love HireFast because it saves time, is super easy, and connects them with the right candidates. If this sounds like your dream, let's <a data-toggle="modal" href="/apply">get started</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyUs;
