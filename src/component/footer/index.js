import React from 'react';

function Footer({logo, links = []}) {
    return (
        <div className = '__KA__footer' >
            <footer className="text-white p-5" style={{backgroundColor:"blue"}} >
                <div className="container">
                    <div className="row d-flex">
                        <div className="col d-none d-sm-flex align-items-center">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item"><a className="text-white" href="index.html#features">Features</a></li>
                                <li className="list-inline-item"><a className="text-white" href="index.html#why">Why Us</a></li>
                                <li className="list-inline-item"><a className="text-white" data-toggle="modal" href="#contact-sales">Contact</a></li>
                                <li className="list-inline-item"><a className="text-white" href="team.html">About</a></li>
                                <li className="list-inline-item"><a className="text-white" href="press.html">Press</a></li>
                            </ul>
                        </div>
                        <div className="col d-flex justify-content-center align-items-center justify-content-md-end text-white h5 mb-0"><a className="d-none p-2 text-white" href="https://www.facebook.com/HireFast" target="_blank"><i className="fa fa-facebook-square"></i></a><a className="p-2 text-white" href="https://github.com/HireFast" target="_blank"><i className="fa fa-github-square"></i></a></div>
                    </div>
                    <div className="row">
                        <div className="col text-center text-md-left">
                        <div className="copyright" style={{color: 'white'}} >
                            © Copyright <strong ><a className="text-white" href="https://www.bjshub.com">BJSHub 2018</a></strong>. All Rights Reserved
                        </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
