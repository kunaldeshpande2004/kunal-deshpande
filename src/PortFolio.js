
import img from './img2.jpg'
import pj from './pj.jpg'
import pj1 from './pj1.jpg'
import pj2 from './pj2.jpg'
import pj3 from './pj3.jpg'
import pj4 from './pj4.jpg'
import pj5 from './pj5.jpg'
import pj6 from './pj6.jpg'
import pj7 from './pj7.jpg'
import React, { useEffect, useState,useRef } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';
import { message } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faWhatsapp, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope,faCode,faUser,faHome,faBriefcase,faBrain, } from '@fortawesome/free-solid-svg-icons';
import { faToolbox } from '@fortawesome/free-solid-svg-icons/faToolbox'
import { faTools } from '@fortawesome/free-solid-svg-icons/faTools'



export default function PortFolio() {



  const experiences = [
    {
      title: "Software Developer Intern",
      company: "SETV Globals",
      period: "Jan 2025 - Apr 2025",
      location: "Remote",
      description: [
        "Developed an AI-driven healthcare web app using React.js, Node.js, and Flask ML models.",
        "Streamlined frontend-backend-AI integration to improve user experience and system performance.",
        "Designed backend APIs with Express.js and deployed the solution on Microsoft Azure."
      ]
    },
    {
      title: "Team Leader",
      company: "Smart India Hackathon 2024",
      period: "Aug 2024 - Nov 2024",
      location: "Indore-Remote",
      description: [
        "Led a 6-member team to develop a web platform for stamp collectors.",
        "Integrated social media and e-commerce features using HTML, CSS, and JavaScript.",
        "Built a responsive UI to boost community engagement.",
        "Front-End Prototype live at - https://kunaldeshpande2004.github.io/Stamp-Nation/"
      ]
    },
    {
      title: "Frontend Developer Intern",
      company: "Mentored Project – InsureAbhi",
      period: "Jun 2024 - Aug 2024",
      location: "Indore",
      description: [
        "Developed the frontend of an insurance web platform using React.js and Tailwind CSS.",
        "Engineered a fully responsive and accessible UI for better user experience.",
        "Deployed the platform live at - https://insureabhi.vercel.app."
      ]
    },

    {
      title: "Team Member",
      company: "Bit n Built HackThon 2024",
      period: "Jun 2024 - jul 2024",
      location: "Indore-Remote",
      description: [
        "Collaborated in a 4-member team to develop WellbeingMate, a fitness tracking app prototype with advanced wellness features.",
        "Built the responsive frontend using HTML and Tailwind CSS and contributed to activity tracking and user engagement modules.",
        "Front-End Prototype live at - https://kunaldeshpande2004.github.io/WellbeingMate/"
      ]
    }
  ];
  

  const projects = [

    {
      img: pj7,
      title: "ViharSutra: AI Travel Planner",
      description: "An AI-powered full-stack MERN application that helps users plan, manage, and customize their trips efficiently. It leverages AI services to auto-generate optimized travel itineraries based on user preferences, offering a seamless and personalized trip-planning experience.",
      technologies: "Frontend: React.js, Tailwind CSS | Backend: Node.js, Express.js | Database: MongoDB Atlas | AI: External AI Planner Services",
      demoLink: "https://kunaldeshpande2004.github.io/ViharSutra/",
      codeLink: "https://github.com/kunaldeshpande2004/ViharSutra",
      npmLink: null,
    },
    
    
      {
        img: pj6, 
        title: "Organ Detection using AI",
        description: "An AI-powered web app that identifies and classifies human organs from uploaded images, leveraging TensorFlow.js models for real-time predictions.",
        technologies: "Frontend: React.js | Backend: Node.js, Express.js | AI: TensorFlow.js",
        demoLink: "https://kunaldeshpande2004.github.io/organ-detection/", // update if you have the demo
        codeLink: "https://github.com/kunaldeshpande2004/CV-Project",
        npmLink: null
      },
    {
      img: pj,
      title: "CoolCars : Car Renting website prototype",
      description: "This full-stack MERN website prototype is designed to simulate a professional car rental platform. Users can seamlessly rent vehicles of their choice, with hourly rates tailored to each car type, offering an authentic experience similar to real-world rental websites.",
      technologies: "Frontend: React.js, Bootstrap | Backend: Node.js, Express.js | Database: MongoDB Atlas",
      demoLink: "https://kunaldeshpande2004.github.io/carBooking/",
      codeLink: "https://github.com/kunaldeshpande2004/carBooking",
      npmLink: null,
    },
    {
      img: pj5,
      title: "Sorting Visualizer",
      description: "This sorting visualizer helps users grasp sorting algorithms through animated visualizations. Includes merge sort, shell sort, insertion sort, quick sort, bubble sort, selection sort. Users can adjust array size and speed.",
      technologies: "Frontend: React",
      demoLink: "https://kunaldeshpande2004.github.io/Sorting-Visualizer/",
      codeLink: "https://github.com/kunaldeshpande2004/Sorting-Visualizer",
      npmLink: null,
    },
    {
      img: pj2,
      title: "NPM Package : string-utils-kunal",
      description: "This npm package streamlines string operations in JavaScript, with case conversion, trimming, padding, and case checking. Useful for developers needing extended string methods.",
      technologies: "Backend: Node.js",
      demoLink: null,
      codeLink: null,
      npmLink: "https://www.npmjs.com/package/string-utils-kunal",
    },
    {
      img: pj4,
      title: "Mind Game : Word Guesser",
      description: "An interactive game that guesses the word you're thinking of with 100% accuracy, using clever rearrangement patterns without you revealing the word.",
      technologies: "Frontend: HTML5, CSS3, JavaScript",
      demoLink: "https://kunaldeshpande2004.github.io/mind-game/",
      codeLink: "https://github.com/kunaldeshpande2004/mind-game",
      npmLink: null,
    },
    {
      img: pj3,
      title: "CodeCrafter : Code Editor for HTML,CSS,JS",
      description: "A simple code interpreter that processes HTML, CSS, JS and displays the live output. Useful for testing and previewing code snippets.",
      technologies: "Frontend: React",
      demoLink: "https://kunaldeshpande2004.github.io/CodeCrafter/",
      codeLink: "https://github.com/kunaldeshpande2004/CodeCrafter",
      npmLink: null,
    },
    {
      img: pj1,
      title: "Recipe Fetching WebSite : Find Your Recipes",
      description: "A website to search for cooking recipes by entering dish or ingredient keywords. Retrieves and displays a variety of delicious recipes.",
      technologies: "Frontend: HTML5, CSS3, JavaScript (Fetch API)",
      demoLink: "https://kunaldeshpande2004.github.io/recipe-website/",
      codeLink: "https://github.com/kunaldeshpande2004/recipe-website",
      npmLink: null,
    },
  ];
  


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
    duration:900
  });

const interval =setInterval(()=>{
setIndex((prev)=>prev===info.length-1?0:prev+1)
},3000)
return ()=>
clearInterval(interval);
},[])
  return (
    <div id='bdy'   style={{color:'white',fontWeight:'bold',display:"flex", fontFamily:'sans-serif',flexWrap:'wrap'}}>
     
<nav id='nav' style={{ width:'15vw',flexWrap:'wrap',backgroundColor:'#0A192F'}} className="navbar navbar-expand-lg fixed-top ">
  <div className="container-fluid">
    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span style={{backgroundColor:'grey'}} className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div style={{display:'flex',flexDirection:'column',fontSize:'18px'}} className="navbar-nav ">
        <a className="nav-link active light" aria-current="page" href="#home"><FontAwesomeIcon icon={faHome}/> Home</a>
        <a className="nav-link light" href="#about"> <FontAwesomeIcon icon={faUser}/> About Me</a>
        <a className="nav-link light" href="#skills"> <FontAwesomeIcon icon={faBrain}/> My Skill/Technologies</a>
        <a className="nav-link light" href="#experience"> <FontAwesomeIcon icon={faBriefcase}/> My Experience</a>
        <a className="nav-link light" href="#work"> <FontAwesomeIcon icon={ faTools}/> My Work/Projects</a>
        <a className="nav-link light" href="#contact"> <FontAwesomeIcon icon={faPhone}/> Contact Me / Hire Me</a>
        <a className="nav-link light" href="#handles"> <FontAwesomeIcon icon={faTwitter}/> Social Media Handles</a>
      </div>
    </div>
  </div>
</nav>
      <div    data-aos='fade-up' id='home'  style={{backgroundRepeat:'no-repeat',backgroundImage:`url(${img})`,width:'100vw',height:'100%',backgroundSize:'contain',alignContent:'center'}}>
      <div className=' container-fluid info ' style={{fontWeight:'bold',width:'100%',height:'100%',alignContent:'center',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:"center",color:'#64FFDA' }}>
        <div id='pdf' style={{position:'absolute',top:'75%',left:'60%',fontSize:'30px'}} >
          <a href="./Kunal_Deshpande_Resume.pdf" download> <button  style={{borderRadius:'10px',border:'none',boxShadow:'5px 5px 5px 5px black',padding:'10px',color:'#64FFDA', backgroundColor:'#0A192F' }}>
            &#x21E9; Download Resume</button></a>
          
          </div>
        <h2 style={{fontSize:'55px',color:'#64FFDA'}} >Hello!</h2>
        <h2 style={{fontSize:'35px'}}>I Am Kunal Deshpande  From Indore ,India</h2>
       
        <h2  style={{fontSize:'30px'}} >I Am {info[index]} </h2>
      </div>
      <div  data-aos='fade-up' id='about' style={{padding:'20px',backgroundColor:'#0A192F'}} >
        <h2> About Me</h2>
        <h4>Hi, I am Kunal Deshpande I live in Indore Madhya Pradesh India . As a passionate Computer Science student with a strong foundation in full-stack development, I thrive on transforming complex problems into innovative digital solutions. My journey has been driven by a love for coding, a curiosity for new technologies, and a commitment to continuous learning. From developing dynamic web applications to exploring the depths of algorithmic challenges, I bring both creativity and precision to my work. I am eager to contribute my skills in a collaborative environment, where I can push the boundaries of what's possible in technology</h4>
        <br />
        <h2>About My Eduction</h2>
        <br />
        <div className="accordion " id="accordionPanelsStayOpenExample">
  <div className="accordion-item accord"  data-aos='fade-up' >
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
  <div className="accordion-item accord "  data-aos='fade-up' > 
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
  <div className="accordion-item accord"  data-aos='fade-up' >
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
<br />
<h2>About My Aim</h2>
<h4>I am looking forward for various working opportunities on the basis of skills and technologies i know along with that i am  very curious to learn new skills and technology and add some more value addition to my knowledge and Seeking opportunities to leverage my skills and make meaningful contributions in the field.  i am good in problem solving  and is also passionate to work with various frameworks and development technologies along with core concepts you can know more about my skills and my works from my skills and my work section. </h4>
<br />
</div>
<div data-aos='fade-up' id="skills"  style={{padding:'20px',backgroundColor:'#0A192F'}}>
  <h2 >My Skills / Technologies </h2>
  <br />
  <div className="accordion " id="accordionPanelsStayOpenExample">
  <div className="accordion-item accord">
    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
      <button className="accordion-button collapsed  accbtn" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
       Programming Languages
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse " aria-labelledby="panelsStayOpen-headingOne">
      <div className="accordion-body">
        <br />
      <h2>JavaScript:</h2>
      <h4 style={{display:'inline-block'}}>Description</h4>: Skilled in JavaScript, the dynamic language that brings interactivity and complex functionality to web applications. <br /> <br /> <h4 style={{display:'inline-block'}}>Benefits & Strengths</h4>: My expertise in JavaScript enables me to develop feature-rich, responsive web applications, enhancing user engagement and performance.
      <br />
      <br />
      <h2>Java:</h2>
      <h4 style={{display:'inline-block'}}>Description</h4>: Proficient in Java, a versatile and widely-used object-oriented programming language. <br /><br /> <h4 style={{display:'inline-block'}}>Benefits & Strengths</h4>:  Java’s platform independence and robust libraries allow me to develop secure, high-performance applications across multiple operating systems.
      <br />
      <br />
      <h2>C & C++:</h2>
      <h4 style={{display:'inline-block'}}>Description</h4>: Well-versed in C and C++, foundational programming languages known for their performance and control over system resources. <br /><br /><h4 style={{display:'inline-block'}}>Benefits & Strengths</h4>:  My knowledge of C and C++ enables me to write efficient, high-performance code, particularly for system-level programming and applications requiring direct hardware manipulation.
      <br />
      <br />
      </div>
    </div>
  </div>
  <div className="accordion-item accord "  data-aos='fade-up'>
    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
      <button className="accordion-button collapsed accbtn" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
       Frontend Technologies
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div className="accordion-body   ">
        <br />
      <h2>HTML & CSS:</h2>
      <h4 style={{display:'inline-block'}}>Description:</h4>Proficient in crafting structured, semantic HTML for building the backbone of web pages, paired with CSS to design responsive and visually appealing . <br /> <br /> <h4 style={{display:'inline-block'}}>Benefits & Strengths</h4>:   With strong foundations in HTML and CSS, I can create well-organized, accessible web pages that deliver an excellent user experience across all devices
      <br />
      <br />
      </div>
    </div>
  </div>
  <div className="accordion-item accord"  data-aos='fade-up' >
    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
      <button className="accordion-button collapsed accbtn" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Libraries and FrameWork
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div className="accordion-body">
      <br />
      <h2>React:</h2>
      <h4 style={{display:'inline-block'}}>Description :</h4> Proficient in React, the powerful JavaScript library for building user interfaces, particularly single-page applications (SPAs). <br /> <br /> <h4 style={{display:'inline-block'}}>Benefits & Strengths</h4>:  With React, I can develop modular, scalable, and efficient front-end applications, ensuring maintainability and a smooth user experience.
      <br />
      <br />
      <h2>Node.js:</h2>
      <h4 style={{display:'inline-block'}}>Description :</h4>  Experienced in Node.js, a runtime environment that allows for server-side scripting using JavaScript and building scalable network applications. <br /> <br /> <h4 style={{display:'inline-block'}}>Benefits & Strengths</h4>: Node.js enables me to build fast, scalable network applications, leveraging its non-blocking I/O model for high performance and efficiency.
      <br />
      <br />
      <h2>Express.js:</h2>
      <h4 style={{display:'inline-block'}}>Description :</h4>  Proficient in Express.js, a minimal and flexible Node.js web application framework. <br /> <br /> <h4 style={{display:'inline-block'}}>Benefits & Strengths</h4>: Express.js allows me to create robust back-end solutions quickly, handling routing, middleware, and server management with ease.
      <br />
      <br />
      <h2>Bootstrap:</h2>
      <h4 style={{display:'inline-block'}}>Description :</h4>  A front-end framework that simplifies the development of responsive, mobile-first web pages. <br /> <br /> <h4 style={{display:'inline-block'}}>Benefits & Strengths</h4>: Using Bootstrap, I can rapidly prototype and design consistent, responsive interfaces, ensuring a seamless user experience across all devices.
      <br />
      <br />
      </div>
    </div>
  </div>
  <div className="accordion-item accord"  data-aos='fade-up' >
    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
      <button className="accordion-button collapsed accbtn" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThr" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      DataBases
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThr" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div className="accordion-body">
      <br />
      <h2>MySQL:</h2>
      <h4 style={{display:'inline-block'}}>Description :</h4>A widely-used relational database management system known for its reliability, scalability, and ease of use. <br /> <br /> <h4 style={{display:'inline-block'}}>Benefits & Strengths</h4>:With MySQL, I can efficiently manage and query structured data, ensuring data integrity, and optimizing database performance for a wide range of applications.
      <br />
      <br />
      <br />
      <h2>MongoDB:</h2>
      <h4 style={{display:'inline-block'}}>Description :</h4> A NoSQL database that stores data in flexible, JSON-like documents, allowing for scalable and high-performance applications.<br /><br /><h4 style={{display:'inline-block'}}>Benefits & Strengths</h4>:My proficiency in MongoDB enables me to manage large sets of unstructured data, support dynamic queries, and scale applications seamlessly as data grows.
      <br />
      <br />
      </div>
    </div>
  </div>
  <div className="accordion-item accord"  data-aos='fade-up' >
    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
      <button className="accordion-button collapsed accbtn" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThre" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Other Skills and Core Concepts
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThre" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div className="accordion-body">
      <br />
      <h2>Data Structures and Algorithms:</h2>
      <h4 style={{display:'inline-block'}}>Description :</h4> Fundamental concepts in computer science that deal with the organization, storage, and retrieval of data, and the processes for solving computational problems.<br /> <br /> <h4 style={{display:'inline-block'}}>Benefits & Strengths</h4>:My deep understanding of data structures and algorithms enables me to write optimized, efficient code, crucial for developing scalable and high-performance software solutions.
      <br />
      <br />
      <br />
      <h2>Database Management Systems (DBMS):</h2>
      <h4 style={{display:'inline-block'}}>Description </h4>:Systems that manage and organize databases, ensuring data consistency, security, and accessibility. <br /> <br /> <h4 style={{display:'inline-block'}}>Benefits & Strengths</h4>:My knowledge of DBMS allows me to design and implement efficient, secure databases, manage transactions, and maintain data integrity across multiple platforms.
      <br />
      <br />
      <br />
      <h2>Operating Systems:</h2>
      <h4 style={{display:'inline-block'}}>Description </h4>:The software that manages computer hardware, software resources, and provides common services for computer programs. <br /> <br /> <h4 style={{display:'inline-block'}}>Benefits & Strengths</h4>:My understanding of operating systems helps me optimize software for different environments, manage resources efficiently, and troubleshoot system-level issues effectively.
      <br />
      <br />
      <br />
      <h2>Computer System Architecture:</h2>
      <h4 style={{display:'inline-block'}}>Description </h4>:The conceptual design and fundamental operational structure of a computer system. <br /> <br /> <h4 style={{display:'inline-block'}}>Benefits & Strengths</h4>:My knowledge of computer system architecture allows me to design and optimize software that interacts effectively with hardware, ensuring high performance and resource efficiency.
      <br />
      <br />
      <br />
      <h2>Git:</h2>
      <h4 style={{display:'inline-block'}}>Description </h4>:A version control system that tracks changes in source code during software development, enabling collaboration and version management. <br /> <br /> <h4 style={{display:'inline-block'}}>Benefits & Strengths</h4>:With Git, I can manage code versions efficiently, collaborate seamlessly on projects, and maintain a clean, organized development history, which is essential for team-based environments and continuous integration/deployment workflows.
      <br />
      <br />
      </div>
    </div>
  </div>
</div>
</div>

<div data-aos='fade-up' id="experience" className="py-16 my-5" >
  <div className="container mx-auto px-4">
    {/* Section Header */}
    <div className="text-center mb-12">
      <span className="text-[#64ffda] font-mono text-sm tracking-wider"> EXPERIENCE</span>
      <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
        Where I've Worked
      </h2>
      <div className="mx-auto mt-3 w-12 h-0.5"></div>
    </div>

    {/* Experience Cards */}
    <div className="grid grid-cols-1  md:grid-cols-2  fs-5 gap-5">
  {experiences.map((exp, index) => (
    <div 
      key={index}
      className={`rounded-lg my-5 p-4 border border-white`}
    >
      <div className="flex justify-between items-start   mb-3">
        <div>
          <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
          <p className="text-[#64ffda] text-sm">{exp.company}</p>
        </div>
        <span className="text-gray-400 text-xs whitespace-nowrap">{exp.period}</span>
      </div>
      
      <p className="text-gray-400 text-xs mb-3 italic">{exp.location}</p>
      
      <ul className="space-y-2 mt-4">
        {exp.description.map((point, i) => (
          <div key={i} className="flex items-start">
            <span className="text-[#64ffda] text-xs mr-2 mt-1">• </span>
            {point.includes('http') ? (
              <a 
                href={point.split(' - ')[1]} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 text-sm hover:text-[#64ffda] transition-colors"
              >
                {point.split(' - ')[0]} <span className="text-[#64ffda] text-xs">(view)</span>
              </a>
            ) : (
              <span className="text-gray-300 text-sm">{point}</span>
            )}
          </div>
        ))}
      </ul>
      
      <div className="mt-4 pt-3 border-t border-white/10">
        <div className="flex flex-wrap gap-2">
          {[...new Set(
            exp.description.join(' ')
              .match(/(React\.?js|Node\.?js|Flask|HTML|CSS|JavaScript|Tailwind|Azure|Express\.?js)/gi) || []
          )].map((tech, i) => (
            <span 
              key={i} 
              className="text-xs font-mono px-2 py-1 rounded bg-white/10 text-[#64ffda] border border-white/10"
            >
              {tech.replace('.', '')}
            </span>
          ))}
        </div>
      </div>
    </div>
  ))}
</div>
  </div>
</div>


<div data-aos='fade-up' id="work" style={{ padding: '40px', backgroundColor: '#0A192F' }}>
  <h2 className="text-center mb-5" style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fff' }}>My Work / Projects</h2>
  
  <div className='container'>
    <div className='row g-4'>
      {projects.map((project, index) => (
        <div className="col-md-6 col-lg-4" key={index}>
          <div className="card h-100 border-light shadow" style={{ backgroundColor: '#112240', color: '#fff', borderRadius: '15px', transition: 'transform 0.3s' }}
               onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-8px)'}
               onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
            <img src={project.img} className="card-img-top" alt={project.title} style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px', height: '180px', objectFit: 'cover' }} />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title mb-3" style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>{project.title}</h5>
              <p className="card-text" style={{ fontSize: '0.9rem', flexGrow: 1 }}>
                {project.description}
                <br /><br />
                <span style={{ fontWeight: 'bold', color: '#64ffda' }}>Technologies:</span> {project.technologies}
              </p>
              <div className='d-flex justify-content-between mt-3'>
                {project.demoLink && <a href={project.demoLink} target='_blank' rel='noreferrer' className="btn btn-success btn-sm">Demo</a>}
                {project.codeLink && <a href={project.codeLink} target='_blank' rel='noreferrer' className="btn btn-primary btn-sm">Code</a>}
                {project.npmLink && <a href={project.npmLink} target='_blank' rel='noreferrer' className="btn btn-warning btn-sm">NPM</a>}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>



        <div  data-aos='fade-up' id='contact' className=' text-white' style={{padding:'20px',backgroundColor:'#0A192F', fontSize:'30px'}}>
          <br />
          <br />
          <br />
          <br />
          <h2>Interested in Collaborating? Need to Get in Touch?</h2>
          <br />
          <div id='con'   style={{fontSize:'20px',display:'flex', width:'100%' }} >
            <div id='fr' style={{width:'45vw'}}>
            <form ref={form} onSubmit={sendEmail} style={{width:'100%',display:'flex',flexWrap:'wrap'}}>
  <div className="mb-3" style={{width:'46%'}}  data-aos='fade-up' >   
    <label className="form-label">Your Name</label>
    <input type="text" name="from_name" className="form-control" required />
  </div>
  
  <div className="mb-3" style={{width:'48%', marginLeft:'16px'}}  data-aos='fade-up' >
    <label className="form-label">Your Email</label>
    <input type="email" name="from_email" className="form-control" required />
  </div>

  <div className="mb-3" style={{width:'98%'}}  data-aos='fade-up' >
    <label className="form-label">Subject</label>
    <input type="text" name="from_subject" className="form-control" required />
  </div>

  <div className="mb-3" style={{width:'98%'}}  data-aos='fade-up' >
    <label className="form-label">Write message here</label>
    <textarea name="message" className="form-control" required></textarea>
  </div>
  
  <button type="submit" style={{boxShadow:'10px 10px 10px 10px black',width:'20%',marginTop:'20px'}}  data-aos='fade-up' className="btn ">
    Send
  </button>
</form>

</div>
<div id='mapCont' style={{marginLeft:'15px'}}  data-aos='fade-up'  >
  <h4>Let’s Connect Over Coffee - Stop By Anytime </h4>
<iframe id='map' src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3681.5076396242494!2d75.8259444!3d22.6721389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDQwJzE5LjciTiA3NcKwNDknMzMuNCJF!5e0!3m2!1sen!2sin!4v1723727026367!5m2!1sen!2sin" width="470" height="300" style={{borderRadius:"15px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <footer  data-aos='fade-up' id='handles'  style={{padding:'30px',fontSize:'20px',display:'flex',flexDirection:'column',alignItems:'center',height:'30vh',backgroundColor:'#020C1B',color:'#FAFAFA'}}>
          <h2>Connect and Follow Me on Social Media</h2>
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
    <br /><br /> <br /> <br /> <br /><br /><br />
          <div   style={{width:'100%',textAlign:'center',justifyContent:'flex-end', margin:'50px',fontSize:'15px'}} >  <p>All Rights Reserved To Kunal Deshpande (2024) </p> </div>
         
        </footer>
      </div>
    </div>
    
  )
} 
