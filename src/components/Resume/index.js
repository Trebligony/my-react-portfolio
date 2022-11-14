import React from 'react'; 

function Resume() {

return(
<section class="mb-5">
    <h1 className="resume">resume: Gilbert Onyenwezi</h1>
        <hr></hr>
        <div class="row justify-content-center" id="resume">
            <div class="mt-5 pl-5 pr-5">
            I am a problem solvers who enjoy thinking outside the box and working in a dynamic world. Sounds interesting? That is only the start because, 43% of developers have a bachelor’s degree in computer science or a similar field, 69% claim to be partially self-taught.<br></br>
            An executive with over fifteen years of success driving profits, quality, and customer satisfaction to record levels. Background includes operations leadership roles at Amazon, United Geophysical, Ferriesmart and Manaksia Industries. Overseeing multi-shift, multi-plant operations, including experiences in manufacturing, production & supply chain environments with emphasis on project coordination and management.

                <p class="mt-5">
                <a href="https://www.linkedin.com/in/gilbert-onyenwezi-71853531/"><img src="https://img.icons8.com/color/48/000000/linkedin-2.png" alt="LinkedIn"/></a>
                </p>
                <p>
                Download my full <a href="Resume_GO_V23.10_FMGR.pdf" class="link">resume</a>
                <br></br>
                </p>
            </div>
        </div>

        <div class="justify-content-center mt-5">
            <div id="front-back">
                <h2>front end experience</h2>
                <p>HTML, CSS (Bootstrap, Foundation, Bulma), JavaScript, jQuery, React.js, Angular.js, IndexedDB</p>
            </div>
    
            <div id="front-back" class="mt-5">
                <h2>back end experience</h2>
                <p>
                Node.js, Express.js, SQL (mySQL, postgreSQL), NoSQL (MongoDB, Mongoose), API's (third-party, RESTful, server-side), Templating (Handlebars)
                </p>
            </div>
        </div>
</section>
);
}

export default Resume;