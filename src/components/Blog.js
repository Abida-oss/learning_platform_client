import React from 'react';

const Blog = () => {
    return (
        <div><br></br>
            <div className="card w-100 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is cors?</h2>
                    <p>Cross-origin resource sharing (CORS) is a browser security feature that restricts cross-origin HTTP requests that are initiated from scripts running in the browser. If your REST API's resources receive non-simple cross-origin HTTP requests, you need to enable CORS support.</p><br></br>
                </div>
            </div><br></br>
            <div className="card w-100 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title"> Why are you using firebase? What other options do you have to implement authentication?</h2>
                    <p className="card-actions justify-start">The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.<br></br>
                        5 Common Authentication Types:
                        1.Password-based authentication. Passwords are the most common methods of authentication.<br></br>
                        2.Multi-factor authentication. <br></br>
                        3.Certificate-based authentication. <br></br>
                        4.Biometric authentication. <br></br>
                        5.Token-based authentication.
                    </p><br></br>
                </div>
            </div> <br></br>
            <div className="card w-100 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">How does the private route work?</h2>
                    <p></p><br></br>
                </div>
            </div> <br></br>
            <div className="card w-100 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title"> What is Node? How does Node work?</h2>
                    <p className="card-actions justify-start">
                        Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser.It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p><br></br>
                </div>
            </div><br></br>
        </div>
    );
};

export default Blog;