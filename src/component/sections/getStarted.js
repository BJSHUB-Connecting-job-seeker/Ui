import React from 'react';

const styles = {
    px_py: {
        paddingTop: '300px',
        backgroundColor: 'blue',
        marginTop: '50px'
    },
    image: {
        width: '450px',
        height: '450px',
        paddingTop: '50px'
    },
    container: {
        backgroundColor: 'blue',
        height: '600px'
    },
    bootstrap_container: {
        backgroundColor: 'blue',
    }
}

function GetStarted({logo, links = []}) {
    return (
        <div className='__KA__get_started' style={styles.container} >
            <div className="container-fluid mb-5 bg-primary" style={styles.bootstrap_container} >
                <div className="row animate-enter fadeInUp" style={styles.bootstrap_container} >
                    <div className="col text-center text-md-left">
                        <div className="px-4 py-10" style={styles.px_py} >
                            <h1 className="mb-4 text-white">Source <span className="text-success">quality</span> candidates <span className="text-success">faster</span></h1>
                            <p className="lead mb-4 text-white">Find qualified leads faster than any other search platform.</p>
                            <div className="row">
                                <div className="col"><a className="btn btn-success btn-lg rounded-pill animate-enter" role="button"  href="/apply">Get Started</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 d-none d-md-flex align-items-center">
                        <img className="img-fluid loaded" src='https://www.gstatic.com/webp/gallery/1.jpg' alt='loading' style = {styles.image} />
                    </div>
                </div>
            </div>
        </div>
    )
}



export default GetStarted;
