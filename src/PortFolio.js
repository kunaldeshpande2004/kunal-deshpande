
import img from './img2.jpg'
import pj from './pj.jpg'
import pj1 from './pj1.jpg'
import pj2 from './pj2.jpg'
import pj3 from './pj3.jpg'
import pj4 from './pj4.jpg'
import pj5 from './pj5.jpg'
import React, { useEffect, useState,useRef } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';
import { message } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faWhatsapp, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope,faCode,faUser,faHome,faBriefcase,faBrain, } from '@fortawesome/free-solid-svg-icons';



export default function PortFolio() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_uhr1055', 'template_svvzbwt', form.current, 'jcrKpWm8iZFREoaoc'// {
      //  publicKey: 'jcrKpWm8iZFREoaoc',
     // })
      )
      .then(
        () => {
          message.success("Mail Send Succesfully!")
        },
        (error) => {
          message.error('FAILED To Send Mail...', error.text);
        },
      );
  };




  const info=[
    "a Student",
    "a Tech Lover",
    "a Problem Solver",
    "a Web Developer",
    "a FreeLancer"
]
const[index,setIndex]=useState(0);
useEffect(()=>{

  AOS.init({
    duration:800
  });

const interval =setInterval(()=>{
setIndex((prev)=>prev===info.length-1?0:prev+1)
},3000)
return ()=>
clearInterval(interval);
},[])
  return (
    <div id='bdy'  className='bg-dark ' style={{color:'white',fontWeight:'bold',display:"flex", fontFamily:'sans-serif',flexWrap:'wrap'}}>
     
<nav id='nav' style={{ width:'15vw',flexWrap:'wrap'}} className="navbar navbar-expand-lg bg-dark ">
  <div className="container-fluid">
    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span style={{backgroundColor:'grey'}} className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div style={{display:'flex',flexDirection:'column',fontSize:'20px'}} className="navbar-nav ">
        <a className="nav-link active light" aria-current="page" href="#home"><FontAwesomeIcon icon={faHome}/> Home</a>
        <a className="nav-link light" href="#about"> <FontAwesomeIcon icon={faUser}/> About Me</a>
        <a className="nav-link light" href="#skills"> <FontAwesomeIcon icon={faBrain}/> My Skill/Technologies</a>
        <a className="nav-link light" href="#work"> <FontAwesomeIcon icon={faBriefcase}/> My Work/Projects</a>
        <a className="nav-link light" href="#contact"> <FontAwesomeIcon icon={faPhone}/> Contact Me / Hier Me</a>
        <a className="nav-link light" href="#handles"> <FontAwesomeIcon icon={faTwitter}/> Social Media Handles</a>
      </div>
    </div>
  </div>
</nav>
      <div    data-aos='fade-up' id='home'  style={{backgroundRepeat:'no-repeat',backgroundImage:`url(${img})`,width:'100vw',height:'100%',backgroundSize:'contain',alignContent:'center'}}>
      <div className='bg-dark container-fluid info ' style={{opacity:'0.4',fontWeight:'bold',width:'100%',height:'100%',alignContent:'center',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:"center"}}>
        <div id='pdf' style={{position:'absolute',top:'75%',left:'60%',fontSize:'30px'}} >
          <a href="/KunalResume.pdf"download> <button  style={{borderRadius:'10px',border:'none',padding:'10px'}}>
            &#x21E9; Download Resume</button></a>
          
          </div>
        <h2 style={{fontSize:'55px',color:'white'}} >Hello!</h2>
        <h2 style={{fontSize:'35px'}}>I Am Kunal Deshpande  From Indore ,India</h2>
       
        <h2  style={{fontSize:'30px'}} >I Am {info[index]} </h2>
      </div>
      <div  data-aos='fade-up' id='about' className='bg-dark ' style={{padding:'20px'}} >
        <h2> About Me</h2>
        <h4>Hi, I am Kunal Deshpande I live in Indore Madhya Pradesh India . As a passionate Computer Science student with a strong foundation in full-stack development, I thrive on transforming complex problems into innovative digital solutions. My journey has been driven by a love for coding, a curiosity for new technologies, and a commitment to continuous learning. From developing dynamic web applications to exploring the depths of algorithmic challenges, I bring both creativity and precision to my work. I am eager to contribute my skills in a collaborative environment, where I can push the boundaries of what's possible in technology</h4>
        <br />
        <h2>About My Eduction</h2>
        <div className="accordion " id="accordionPanelsStayOpenExample">
  <div className="accordion-item accord">
    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
      <button className="accordion-button  collapsed  accbtn" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseO" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
        Bachelor's Of Technology (B.Tech) (2022-2026)
      </button>
    </h2>
    <div id="panelsStayOpen-collapseO" className="accordion-collapse collapse " aria-labelledby="panelsStayOpen-headingOne">
      <div className="accordion-body">
      I am currently pursuing my B.Tech in Core Computer Science at Medi-Caps University, Indore, where I have consistently demonstrated strong academic performance, earning a CGPA of 8.35 after my second year. This program has equipped me with a deep understanding of computer science fundamentals and hands-on experience in full-stack development, allowing me to apply theoretical concepts to real-world projects. 
      </div>
    </div>
  </div>
  <div className="accordion-item accord">
    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
      <button className="accordion-button collapsed accbtn" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseT" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        Higher Secondary School (HS) (2021-2022)
      </button>
    </h2>
    <div id="panelsStayOpen-collapseT" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div className="accordion-body">
      My academic journey in the sciences culminated in my 12th grade at Alpine Academy, where I focused on Physics, Chemistry, and Mathematics (PCM). I excelled in the CBSE board exams with a remarkable 91%, a reflection of my analytical mindset and problem-solving abilities. This solid foundation in core sciences has been instrumental in shaping my approach to complex challenges in computer science.
      </div>
    </div>
  </div>
  <div className="accordion-item accord">
    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
      <button className="accordion-button collapsed accbtn" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTh" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Secondary School (SS) (2019-2020)
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTh" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div className="accordion-body">
      During my 10th grade at Alpine Academy, I laid the groundwork for my academic career, achieving 82% in the CBSE board exams. This period was crucial in developing my strong work ethic and attention to detail, qualities that have continued to drive my success in higher education and beyond
      </div>
    </div>
  </div>
</div>
<br />
<h2>About My Aim</h2>
<h4>I am looking froward for various working opportunities on the basis of skills and technologies i know along with that i am  very curious to learn new skills and technolgy and add some more value addition to my knowledge and Seeking opportunities to leverage my skills and make meaningful contributions in the field.  i am good in problem solving  and is aslo passionate to work with various frameworks and development technologies along with core concepts you can know more about my skills and my works from my skills and my work section. </h4>
<br />
</div>
<div data-aos='fade-up' id="skills" className='bg-dark ' style={{padding:'20px'}}>
  <h2 >My Skills / Technologies i Know</h2>
  <div className="accordion " id="accordionPanelsStayOpenExample">
  <div className="accordion-item accord">
    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
      <button className="accordion-button collapsed  accbtn" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
       Programming Languages
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse " aria-labelledby="panelsStayOpen-headingOne">
      <div className="accordion-body">
        <br />
      <h2>JavaScript:</h2>
      <h4 style={{display:'inline-block',textDecoration:'underline'}}>Description</h4>: Skilled in JavaScript, the dynamic language that brings interactivity and complex functionality to web applications. <br /> <h4 style={{display:'inline-block',textDecoration:'underline'}}>Benefits & Strengths</h4>: My expertise in JavaScript enables me to develop feature-rich, responsive web applications, enhancing user engagement and performance.
      <br />
      <br />
      <h2>Java:</h2>
      <h4 style={{display:'inline-block',textDecoration:'underline'}}>Description</h4>: Proficient in Java, a versatile and widely-used object-oriented programming language.<h4 style={{display:'inline-block',textDecoration:'underline'}}>Benefits & Strengths</h4>:  Java’s platform independence and robust libraries allow me to develop secure, high-performance applications across multiple operating systems.
      <br />
      <br />
      <h2>C & C++:</h2>
      <h4 style={{display:'inline-block',textDecoration:'underline'}}>Description</h4>: Well-versed in C and C++, foundational programming languages known for their performance and control over system resources. <br /> <h4 style={{display:'inline-block',textDecoration:'underline'}}>Benefits & Strengths</h4>:  My knowledge of C and C++ enables me to write efficient, high-performance code, particularly for system-level programming and applications requiring direct hardware manipulation.
      <br />
      <br />
      </div>
    </div>
  </div>
  <div className="accordion-item accord">
    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
      <button className="accordion-button collapsed accbtn" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
       Frontend Technologies
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div className="accordion-body">
        <br />
      <h2>HTML & CSS:</h2>
      <h4 style={{display:'inline-block',textDecoration:'underline'}}>Description:</h4>:Proficient in crafting structured, semantic HTML for building the backbone of web pages, paired with CSS to design responsive and visually appealing . <br /> <h4 style={{display:'inline-block',textDecoration:'underline'}}>Benefits & Strengths</h4>:   With strong foundations in HTML and CSS, I can create well-organized, accessible web pages that deliver an excellent user experience across all devices
      <br />
      <br />
      </div>
    </div>
  </div>
  <div className="accordion-item accord">
    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
      <button className="accordion-button collapsed accbtn" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Libraries and FrameWork
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div className="accordion-body">
      <br />
      <h2>React:</h2>
      <h4 style={{display:'inline-block',textDecoration:'underline'}}>Description:</h4>: Proficient in React, the powerful JavaScript library for building user interfaces, particularly single-page applications (SPAs). <br /> <h4 style={{display:'inline-block',textDecoration:'underline'}}>Benefits & Strengths</h4>:  With React, I can develop modular, scalable, and efficient front-end applications, ensuring maintainability and a smooth user experience.
      <br />
      <br />
      <h2>Node.js:</h2>
      <h4 style={{display:'inline-block',textDecoration:'underline'}}>Description:</h4>:  Experienced in Node.js, a runtime environment that allows for server-side scripting using JavaScript and building scalable network applications. <br /> <h4 style={{display:'inline-block',textDecoration:'underline'}}>Benefits & Strengths</h4>: Node.js enables me to build fast, scalable network applications, leveraging its non-blocking I/O model for high performance and efficiency.
      <br />
      <br />
      <h2>Express.js:</h2>
      <h4 style={{display:'inline-block',textDecoration:'underline'}}>Description:</h4>:  Proficient in Express.js, a minimal and flexible Node.js web application framework. <br /> <h4 style={{display:'inline-block',textDecoration:'underline'}}>Benefits & Strengths</h4>: Express.js allows me to create robust back-end solutions quickly, handling routing, middleware, and server management with ease.
      <br />
      <br />
      <h2>Bootstrap:</h2>
      <h4 style={{display:'inline-block',textDecoration:'underline'}}>Description:</h4>:  A front-end framework that simplifies the development of responsive, mobile-first web pages. <br /> <h4 style={{display:'inline-block',textDecoration:'underline'}}>Benefits & Strengths</h4>: Using Bootstrap, I can rapidly prototype and design consistent, responsive interfaces, ensuring a seamless user experience across all devices.
      <br />
      <br />
      </div>
    </div>
  </div>
  <div className="accordion-item accord">
    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
      <button className="accordion-button collapsed accbtn" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThr" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      DataBases
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThr" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div className="accordion-body">
      <br />
      <h2>MySQL:</h2>
      <h4 style={{display:'inline-block',textDecoration:'underline'}}>Description:</h4>A widely-used relational database management system known for its reliability, scalability, and ease of use. <br /> <h4 style={{display:'inline-block',textDecoration:'underline'}}>Benefits & Strengths</h4>:With MySQL, I can efficiently manage and query structured data, ensuring data integrity, and optimizing database performance for a wide range of applications.
      <br />
      <br />
      <br />
      <h2>MongoDB:</h2>
      <h4 style={{display:'inline-block',textDecoration:'underline'}}>Description:</h4> A NoSQL database that stores data in flexible, JSON-like documents, allowing for scalable and high-performance applications.<br /> <h4 style={{display:'inline-block',textDecoration:'underline'}}>Benefits & Strengths</h4>:My proficiency in MongoDB enables me to manage large sets of unstructured data, support dynamic queries, and scale applications seamlessly as data grows.
      <br />
      <br />
      </div>
    </div>
  </div>
  <div className="accordion-item accord">
    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
      <button className="accordion-button collapsed accbtn" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThre" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Other Skills and Core Concepts
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThre" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div className="accordion-body">
      <br />
      <h2>Data Structures and Algorithms:</h2>
      <h4 style={{display:'inline-block',textDecoration:'underline'}}>Description:</h4>: Fundamental concepts in computer science that deal with the organization, storage, and retrieval of data, and the processes for solving computational problems.<br /> <h4 style={{display:'inline-block',textDecoration:'underline'}}>Benefits & Strengths</h4>:My deep understanding of data structures and algorithms enables me to write optimized, efficient code, crucial for developing scalable and high-performance software solutions.
      <br />
      <br />
      <br />
      <h2>Database Management Systems (DBMS):</h2>
      <h4 style={{display:'inline-block',textDecoration:'underline'}}>Description:</h4>:Systems that manage and organize databases, ensuring data consistency, security, and accessibility. <br /> <h4 style={{display:'inline-block',textDecoration:'underline'}}>Benefits & Strengths</h4>:My knowledge of DBMS allows me to design and implement efficient, secure databases, manage transactions, and maintain data integrity across multiple platforms.
      <br />
      <br />
      <br />
      <h2>Operating Systems:</h2>
      <h4 style={{display:'inline-block',textDecoration:'underline'}}>Description:</h4>:The software that manages computer hardware, software resources, and provides common services for computer programs. <br /> <h4 style={{display:'inline-block',textDecoration:'underline'}}>Benefits & Strengths</h4>:My understanding of operating systems helps me optimize software for different environments, manage resources efficiently, and troubleshoot system-level issues effectively.
      <br />
      <br />
      <br />
      <h2>Computer System Architecture:</h2>
      <h4 style={{display:'inline-block',textDecoration:'underline'}}>Description:</h4>:The conceptual design and fundamental operational structure of a computer system. <br /> <h4 style={{display:'inline-block',textDecoration:'underline'}}>Benefits & Strengths</h4>:My knowledge of computer system architecture allows me to design and optimize software that interacts effectively with hardware, ensuring high performance and resource efficiency.
      <br />
      <br />
      <br />
      <h2>Git:</h2>
      <h4 style={{display:'inline-block',textDecoration:'underline'}}>Description:</h4>:A version control system that tracks changes in source code during software development, enabling collaboration and version management. <br /> <h4 style={{display:'inline-block',textDecoration:'underline'}}>Benefits & Strengths</h4>:With Git, I can manage code versions efficiently, collaborate seamlessly on projects, and maintain a clean, organized development history, which is essential for team-based environments and continuous integration/deployment workflows.
      <br />
      <br />
      </div>
    </div>
  </div>
</div>
</div>
   <div  data-aos='fade-up' id="work" className='bg-dark ' style={{padding:'20px'}}>
    <br />
    <br />
    <h2 >My Work / Projects:</h2>
   
    <div className='d-flex justify-content-evenly flex-wrap'>

    <div className="card cd" style={{width: "18rem"}}>
  <img src={pj} className="card-img-top mg" alt="Project 1"/>
  <div className="card-body">
  <h2 className="card-title text-decoration-underline">CoolCars : Car Renting website prototype</h2>
    <p className="card-text">This is a full stack MERN website pototype of how basically a car rental website looks like <br /><br />this website allows user to rent the car of the users choice for hourly rates fixed as per the type of the car gives real life experience how rental websites actually work. <br /><br /> Created Using : React.js , Node.js , Express.js ,Bootstrap and MongoDB Atlas(cloud)</p>
    <div className='d-flex justify-content-evenly'> 
    <a href=" https://kunaldeshpande2004.github.io/carBooking/" target='_blank' className="btn btn-primary">View Demo</a>
    <a href="https://github.com/kunaldeshpande2004/carBooking" target='_blank' className="btn btn-primary">View Code</a>
    </div>
  </div>
  </div>

     <div className="card cd" style={{width: "18rem"}}>
  <img src={pj5} className="card-img-top mg" alt="Project 1"/> 
  <div className="card-body">
    <h2 className="card-title text-decoration-underline">Sorting Visualizer</h2>
    <p className="card-text"> <br />This is a basic sorting visualizer which can help you properly understand how various popular sorting methods works using the animations of the bars getting sorted <br/> <br /> it contains various popular sorting algorithms like merge sort,shell sort ,insertion sort,quick sort,bubble sort and selection sort <br /> <br />it also provides the option to generate an array size as per yor choice and even sorting speed can be set as per user to provide better understanding of how sorting works and how it looks like <br /> <br /> Created using : React</p>
    <div className='d-flex justify-content-evenly'> 
    <a href="https://kunaldeshpande2004.github.io/Sorting-Visualizer/" target='_blank' className="btn btn-primary">View Demo</a>
    <a href="https://github.com/kunaldeshpande2004/Sorting-Visualizer" target='_blank' className="btn btn-primary">View Code</a>
    </div>
  </div>
</div>
<div className="card cd" style={{width: "18rem"}}>
  <img src={pj2} className="card-img-top mg" alt="Project 1"/>
  <div className="card-body">
  <h2 className="card-title text-decoration-underline">My npm Package : string-utils-kunal</h2>
    <p className="card-text">This is my own npm package i have created to make some sting operations easier and faster which consist of methods that are generally not present in the string class of JavaScript hence this package can be very useful <br /><br />this package consist of various categories such as Case Conversion,Trimming,Padding,Case Checking and inside this it contains methods to convert normal case to camelCase,snakeCase etc even have methods to perform various checks on strings etc you can read about it more on the npm website and in the readme doc of this package <br /><br />to Install :
    npm i string-utils-kunal <br /><br />created using : Node.js </p>
    <a href="https://www.npmjs.com/package/string-utils-kunal" target='_blank' className="btn btn-primary">link to package</a>
  </div>
</div>
<div className="card cd" style={{width: "18rem"}}>
  <img src={pj4} className="card-img-top mg" alt="Project 1"/>
  <div className="card-body">
  <h2 className="card-title text-decoration-underline">Mind Game : Word Guesser </h2>
    <p className="card-text">This is a game whose algorithm is designed such that it can guess the word you have thinked of in your mind with 100% acurracy <br /><br />it is actually just a fun game that works on the pattern of rearrangement of letters of the the alphabets based on the inputs given by the user without actually telling the word <br /><br /> this game first asks you to think of a word and then enter the number of letter that word consist of and then forms a table consisting of english alphabets and ask you to select the coloum in which the letter of the word you thing of is present based on your inputs and rearrangement pattern it perfectly picks the letter out of all other letter from the table that makes up to the word you are thinking of and displays the word in front of you in the last <br /><br /> Created Using : HTML5 , CSS3 , Javascript  </p>
    <div className='d-flex justify-content-evenly'> 
    <a href="https://kunaldeshpande2004.github.io/mind-game/" target='_blank' className="btn btn-primary">View Demo</a>
    <a href="https://github.com/kunaldeshpande2004/mind-game" target='_blank' className="btn btn-primary">View Code</a>
    </div>
    
  </div>
</div>
<div className="card cd" style={{width: "18rem"}}>
  <img src={pj3} className="card-img-top mg" alt="Project 1"/>
  <div className="card-body">
  <h2 className="card-title text-decoration-underline">CodeCrafter : Code Editor for HTML,CSS,JS</h2>
    <p className="card-text">This is basically a simple HTML,CSS and JS code interpreter that can interpret html css and js code and displays on the output window <br /><br /> Created using : React</p>
    <div className='d-flex justify-content-evenly'> 
    <a href="https://kunaldeshpande2004.github.io/CodeCrafter/" target='_blank' className="btn btn-primary">View Demo</a>
    <a href="https://github.com/kunaldeshpande2004/CodeCrafter" target='_blank' className="btn btn-primary">View Code</a>
    </div>
  </div>
  </div>
  <div className="card cd" style={{width: "18rem"}}>
  <img src={pj1} className="card-img-top mg" alt="Project 1"/>
  <div className="card-body">
  <h2 className="card-title text-decoration-underline">Recipe Fetching WebSite :</h2>
    <p className="card-text">It is a recipe fetching website which is able to provide the various food and cooking recipies based on the search by the user it searches the recipe by the key word typed by the user for a perticular food product and gives result if available with delicious recipies. <br /><br /> Created Using : HTML5 , CSS3 , Javascript (Fetch API)</p>
    <div className='d-flex justify-content-evenly'> 
    <a href="https://kunaldeshpande2004.github.io/recipe-website/" target='_blank' className="btn btn-primary">View Demo</a>
    <a href="https://github.com/kunaldeshpande2004/recipe-website" target='_blank' className="btn btn-primary">View Code</a>
    </div>
  </div>
  </div>
  
</div>
</div>

        <div  data-aos='fade-up' id='contact' className='bg-dark text-white' style={{padding:'20px', fontSize:'30px'}}>
          <br />
          <br />
          <br />
          <h2>Want To Work Together ?  Want To Contact Me ?</h2>
          <br />
          <div id='con'   style={{fontSize:'20px',display:'flex', width:'100%' }} >
            <div id='fr' style={{width:'45vw'}}>
            <form ref={form} onSubmit={sendEmail} style={{width:'100%',display:'flex',flexWrap:'wrap'}}>
  <div className="mb-3" style={{width:'46%'}}>
    <label className="form-label">Your Name</label>
    <input type="text" name="from_name" className="form-control" required />
  </div>
  
  <div className="mb-3" style={{width:'48%', marginLeft:'16px'}}>
    <label className="form-label">Your Email</label>
    <input type="email" name="from_email" className="form-control" required />
  </div>

  <div className="mb-3" style={{width:'98%'}}>
    <label className="form-label">Subject</label>
    <input type="text" name="from_subject" className="form-control" required />
  </div>

  <div className="mb-3" style={{width:'98%'}}>
    <label className="form-label">Write message here</label>
    <textarea name="message" className="form-control" required></textarea>
  </div>

  <button type="submit" style={{width:'20%'}} className="btn btn-primary">
    Send
  </button>
</form>

</div>
<div  style={{marginLeft:'15px'}} >
  <h4>I Live Here come to have a cup of tea </h4>
<iframe id='map' src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3681.5076396242494!2d75.8259444!3d22.6721389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDQwJzE5LjciTiA3NcKwNDknMzMuNCJF!5e0!3m2!1sen!2sin!4v1723727026367!5m2!1sen!2sin" width="470" height="300" style={{borderRadius:"15px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
          </div>
        </div>
        <br />
        <br />
        <footer  data-aos='fade-up' id='handles'  style={{padding:'30px',fontSize:'20px',display:'flex',flexDirection:'column',alignItems:'center',height:'30vh'}}>
          <h2>Other Social Media Handles To Contact And Follow </h2>
          <br />
        <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%', margin: 'auto' }}>
      <a href="https://wa.me/+916261138343" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/kunal-deshpande-72b8382a1/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://leetcode.com/u/kunalgirish135/ " target='_blank'>
        <FontAwesomeIcon icon={faCode} size="2x" />
      </a>
      <a href="https://github.com/kunaldeshpande2004" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="tel:+916261138343">
        <FontAwesomeIcon icon={faPhone} size="2x" />
      </a>
      <a href="mailto:kunalgirish135@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
      </a>
    </div>
    <br /><br />
          <div style={{width:'100%',textAlign:'center',justifyContent:'flex-end', margin:'50px',fontSize:'15px'}} >  <p>All Rights Reserved To Kunal Deshpande (2024) </p> </div>
         
        </footer>
      </div>
    </div>
    
  )
} 
