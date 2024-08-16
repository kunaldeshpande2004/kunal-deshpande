import React from 'react';
import img from './img2.jpg'
import './App.css';
export default function demo() {
  const info=[
    "Kunal Deshpande",
    "a Web Developer",
    "a Student",
    "a Tech Lover",
    "a Problem Solver",
    "a FreeLancer"
]

  return (
    <div id='bdy'  className='bg-dark ' style={{color:'white',fontWeight:'bold',display:"flex", fontFamily:'sans-serif'}}>
     { /* <nav id='nav' style={{opacity:'0.5',backgroundColor:'black', width:'15%',height:'100vh',borderRadius:'10px',alignItems:'center',alignContent:'center'}}>
         <ul  style={{listStyle:"none",}}>
            <br />
            <li className="list">Home</li>
            <br />
            <li className="list">About Me</li>
            <br />
            <li className="list"> My Skill/Technologies</li>
            <br />
            <li className="list">My Work/Projects</li>
            <br />
            <li className="list">Contact Me / Hier Me</li>
            <br />
            <li className="list">Social Media Handles</li>
            <br />
        </ul>
</nav> */}
<nav id='nav' style={{ width:'15%',flexWrap:'wrap'}} class="navbar navbar-expand-lg bg-dark ">
  <div class="container-fluid">
    <button  class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span style={{backgroundColor:'grey'}} class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div style={{display:'flex',flexDirection:'column',fontSize:'20px'}} class="navbar-nav ">
        <a class="nav-link active light" aria-current="page" href="#">Home</a>
        <a class="nav-link light" href="#">About Me</a>
        <a class="nav-link light" href="#">My Skill/Technologies</a>
        <a class="nav-link light" href="#">My Work/Projects</a>
        <a class="nav-link light" href="#">Contact Me</a>
        <a class="nav-link light" href="#">Social Media Handles</a>
      </div>
    </div>
  </div>
</nav>
     { <div id='home'  style={{backgroundRepeat:'no-repeat',backgroundImage:`url(${img})`,width:'85%',height:'100%',backgroundSize:'contain',alignContent:'center'}}>
      <div className='bg-dark ' style={{opacity:'0.4',fontWeight:'bold',width:'100%',height:'100%',alignContent:'center',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <br />
        <br />
        <h1 style={{fontSize:'75px',color:'red'}} >Hello!</h1>
     <br />
     
     {
      info.map((str,i)=>{
        return(
        <h1 key={i} style={{fontSize:'50px'}} >I Am {str} </h1>
        )
      })
        
     }
      { /* <ul style={{listStyle:'none',color:'red'}} className='text'>
          <li>Kunal Deshpande</li>
          <li>a Student</li>
          <li> a Web DeVeloper</li>
          <li>a Problem Solver</li>
          <li>a Freelancer</li>
          <li>a Tech Lover</li>
        </ul> */}
      
      <br />
      <br />
      <br />
      <br />
      </div>
      </div>
}
{/*
<div id='home'  style={{backgroundRepeat:'no-repeat',backgroundImage:`url(${img})`,width:'85%',height:'100%',backgroundSize:'contain',alignContent:'center'}}>
      <div className='bg-dark ' style={{opacity:'0.4',fontWeight:'bold',width:'100%',height:'100%',alignContent:'center',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
    <br />
    <h1>Hello</h1>
    <br />
    <h1>I Am <span class="typewriter-container">
      <span class="typewriter-item">Kunal Deshpande</span>
      <span class="typewriter-item">a Student</span>
      <span class="typewriter-item">a Web Designer</span>
      <span class="typewriter-item">a Problem Solver</span>
      <span class="typewriter-item">a Freelancer</span>
      <span class="typewriter-item">a Tech Lover</span>
    </span></h1>
    <br />
    <br />
    <br />
    <br />
  </div>
</div>
*/}

    </div>
    
  )
}
