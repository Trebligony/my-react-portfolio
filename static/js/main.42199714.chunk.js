(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{22:function(e){e.exports=JSON.parse('[{"id":1,"name":"Note Taker App","image":"images/note-taker.png","github":"https://github.com/Trebligony/note-taker/","deploy":"https://good-note-taker-app.herokuapp.com/notes/","topics":"The task was to create an application that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file."},{"id":2,"name":"Tech Blog App","image":"images/tech-blog.png","github":"https://github.com/Trebligony/tech-blog/","deploy":"https://tech-bloggerapp.herokuapp.com/","topics":"The task is to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers\u2019 posts as well."},{"id":3,"name":"Just A Text Editor App","image":"images/jate.png","github":"https://github.com/Trebligony/text-editor-app/","deploy":"https://just-text-editor-app.herokuapp.com/","topics":"The task was to build a text editor that runs in the browser. The app will be a single-page application that meets the PWA criteria. Additionally, it will feature a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application will also function offline."},{"id":4,"name":"Events Funding App","image":"images/event-app.png","github":"https://github.com/Trebligony/Event-Funding-App/","deploy":"https://events-funding-app.herokuapp.com/","topics":"The task was to build a full-stack one stop marketplace app for event engineering, planning and execution using Node.js, Express.js, Sequelize, Handlebars.js, and MVC architecture."}]')},25:function(e,t,a){e.exports=a(37)},30:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),i=a.n(l),o=(a(30),a(19)),c=a(20),s=a(24),m=a(23),p=a(6),u=a(1);var d=function(e){return r.a.createElement("div",{className:" row navigation",id:"navigation"},r.a.createElement(p.b,{to:"/about"},"about "),r.a.createElement(p.b,{to:"/portfolio"},"portfolio "),r.a.createElement(p.b,{to:"/contact"},"contact "),r.a.createElement(p.b,{to:"/resume"},"resume"))};var h=function(){return r.a.createElement("section",{className:"title"},r.a.createElement("h1",{class:"name"},"about: Gilbert Onyenwezi"),r.a.createElement("hr",null),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-10",id:"about-section"},r.a.createElement("img",{class:"mb-5",src:"images\\gill_logo.png",alt:"Gilbert Onyenwezi"}),r.a.createElement("p",null,"I am a problem solvers who enjoy thinking outside the box and working in a dynamic world. Sounds interesting? That is only the start because, 43% of developers have a bachelor\u2019s degree in computer science or a similar field, 69% claim to be partially self-taught."),r.a.createElement("p",null,"An executive with over fifteen years of success driving profits, quality, and customer satisfaction to record levels. Background includes operations leadership roles at Amazon, United Geophysical, Ferriesmart and Manaksia Industries. Overseeing multi-shift, multi-plant operations, including experiences in manufacturing, production & supply chain environments with emphasis on project coordination and management."),r.a.createElement("p",null,"View full ",r.a.createElement("a",{href:"#/resume",class:"link"},"resume")))))},g=a(9),E=a(14),b=a(15);var f=function(){var e=Object(n.useState)({name:"",email:"",message:""}),t=Object(b.a)(e,2),a=t[0],l=t[1],i=Object(n.useState)(""),o=Object(b.a)(i,2),c=o[0],s=o[1],m=a.name,p=a.email,u=a.message;function d(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);s(t?"":"please enter a valid email")}else e.target.value.length?s(""):s("".concat(e.target.name," is required."));c||l(Object(E.a)(Object(E.a)({},a),{},Object(g.a)({},e.target.name,e.target.value)))}return r.a.createElement("section",{class:"justify-content-center",id:"contact-section"},r.a.createElement("h1",{"data-testid":"h1tag",className:"contact"},"contact: Gilbert Onyenwezi"),r.a.createElement("hr",null),r.a.createElement("form",{class:"justify-content-center",id:"contact-form"},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"name"},"name:"),r.a.createElement("input",{class:"form-control",type:"text",name:"name",defaultValue:m,onBlur:d})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"email"},"email:"),r.a.createElement("input",{class:"form-control",type:"email",name:"email",defaultValue:p,onBlur:d})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"message"},"message:"),r.a.createElement("textarea",{class:"form-control",name:"message",defaultValue:u,onBlur:d,rows:"7"})),c&&r.a.createElement("div",null,r.a.createElement("p",{className:"error-text"},c)),r.a.createElement("div",null,r.a.createElement("button",{"data-testid":"button",class:"btn btn-outline-dark mt-4",type:"submit",onSubmit:function(e){e.preventDefault()}},"Submit"))))};a(11);var v=function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{alt:e.name,src:e.image})),r.a.createElement("div",{className:"content"},r.a.createElement("p",{className:"project-title",id:"card-title"},e.name),r.a.createElement("p",null,r.a.createElement("a",{href:e.github},r.a.createElement("img",{src:"https://img.icons8.com/color/48/000000/github--v1.png",alt:"Repository",id:"project-icon"})),r.a.createElement("a",{href:e.deploy},r.a.createElement("img",{src:"https://img.icons8.com/color/48/000000/monitor.png",alt:"Deployed Site",id:"project-icon"}))),r.a.createElement("p",{id:"topics"},"(",e.topics,")")))},y=a(22);function w(e){return r.a.createElement("div",{className:"wrapper"},e.children)}var k=function(){return r.a.createElement("section",null,r.a.createElement("div",{className:"project"},r.a.createElement("h1",{className:"title"},"portfolio: Gilbert Onyenwezi"),r.a.createElement("hr",null)),r.a.createElement(w,{id:"card-data"},y.map((function(e){return r.a.createElement(v,{key:e.id,image:e.image,name:e.name,github:e.github,deploy:e.deploy,topics:e.topics})}))))};var j=function(){return r.a.createElement("section",{class:"mb-5"},r.a.createElement("h1",{className:"resume"},"resume: Gilbert Onyenwezi"),r.a.createElement("hr",null),r.a.createElement("div",{class:"row justify-content-center",id:"resume"},r.a.createElement("div",{class:"mt-5 pl-5 pr-5"},"I am a problem solvers who enjoy thinking outside the box and working in a dynamic world. Sounds interesting? That is only the start because, 43% of developers have a bachelor\u2019s degree in computer science or a similar field, 69% claim to be partially self-taught.",r.a.createElement("br",null),"An executive with over fifteen years of success driving profits, quality, and customer satisfaction to record levels. Background includes operations leadership roles at Amazon, United Geophysical, Ferriesmart and Manaksia Industries. Overseeing multi-shift, multi-plant operations, including experiences in manufacturing, production & supply chain environments with emphasis on project coordination and management.",r.a.createElement("p",{class:"mt-5"},r.a.createElement("a",{href:"https://www.linkedin.com/in/gilbert-onyenwezi-71853531/"},r.a.createElement("img",{src:"https://img.icons8.com/color/48/000000/linkedin-2.png",alt:"LinkedIn"}))),r.a.createElement("p",null,"Download my full ",r.a.createElement("a",{href:"Resume_GO_V23.10_FMGR.pdf",class:"link"},"resume"),r.a.createElement("br",null)))),r.a.createElement("div",{class:"justify-content-center mt-5"},r.a.createElement("div",{id:"front-back"},r.a.createElement("h2",null,"front end experience"),r.a.createElement("p",null,"HTML, CSS (Bootstrap, Foundation, Bulma), JavaScript, jQuery, React.js, Angular.js, IndexedDB")),r.a.createElement("div",{id:"front-back",class:"mt-5"},r.a.createElement("h2",null,"back end experience"),r.a.createElement("p",null,"Node.js, Express.js, SQL (mySQL, postgreSQL), NoSQL (MongoDB, Mongoose), API's (third-party, RESTful, server-side), Templating (Handlebars)"))))},O=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"row Header",id:"header"},r.a.createElement("a",{href:"#"},r.a.createElement("img",{src:"https://img.icons8.com/color/48/000000/drawing.png",alt:"Gilbert Onyenwezi",class:"icon",id:"astro"})),r.a.createElement(d,null)),r.a.createElement("div",{className:"content"},r.a.createElement(u.b,{exact:!0,path:"/",render:function(){return r.a.createElement(u.a,{to:"/about"})}}),r.a.createElement(u.b,{path:"/portfolio",component:k}),r.a.createElement(u.b,{path:"/about",component:h}),r.a.createElement(u.b,{path:"/contact",component:f}),r.a.createElement(u.b,{path:"/resume",component:j})))}}]),a}(n.Component);var x=function(){return r.a.createElement("div",{class:"footer",id:"footer"},r.a.createElement("a",{href:"https://github.com/Trebligony/"},r.a.createElement("img",{src:"https://img.icons8.com/color/48/000000/github.png",alt:"Github",class:"icon"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/gilbert-onyenwezi-71853531/"},r.a.createElement("img",{src:"https://img.icons8.com/color/48/000000/linkedin.png",alt:"LinkedIn",class:"icon"})),r.a.createElement("a",{href:"https://twitter.com/Gillonye/"},r.a.createElement("img",{src:"https://img.icons8.com/color/48/000000/twitter.png",alt:"Twitter",class:"icon"})),r.a.createElement("a",{href:"https://stackoverflow.com/users/5762371/gillonye/"},r.a.createElement("img",{src:"https://img.icons8.com/color/48/000000/stackoverflow.png",alt:"Stack Overflow",class:"icon"})),r.a.createElement("p",null,"copyright \xa9 Gilbert Onyenwezi"))};a(36);var N=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(O,null),r.a.createElement(x,null))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.42199714.chunk.js.map