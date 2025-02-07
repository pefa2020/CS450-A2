import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import PersonalProfile from './components/PersonalProfile';
import WorkExperience from './components/WorkExperience';
import KeySkills from './components/Skills';
import Education from './components/Education';


class App extends Component{
  constructor(props) {
    super(props);

    this.state = {

      personInfo: {
        name: "Percy Flores",
        occupation: "Aspiring Software Engineer",
      },

      contactInfo: {
        email: "pef3@njit.edu",
        web: "https://tinyurl.com/yn55njfj",
        mobile: "+1 862-213-1901"
      },

      profile: {
        title: "Personal Profile",
        content:
          "As a motivated Computer Science senior at NJIT, I'm passionate about\
          solving problems and creating meaningful impact through innovation. I\
          approach every challenge with a growth mindset, eager to learn, adapt,\
          and contribute in ways that truly make a difference."
      },

      workExperience: {
        title: "Work Experience",
        job1: "Software Engineer Intern at Next Found Artist (Dec 2024 - Now)",
        job1Content: {
          bullet1: "- Developed discovery tools to help artists find 50+ independent films, leveraging the TMDB API and data structuring to enhance user experience and engagement.",
          bullet2: "- Optimized backend performance by building RESTful APIs with FastAPI and Pydantic, cutting upload times by 40% and improving workflows for filmmakers.",
        },
        job2: "Teaching Assistant at New Jersey Institute of Technology (Sep 2024 - Now)",
        job2Content: {
          bullet1: "- Mentored 50+ students in web development, assisting in HTML5, CSS3, JavaScript, AJAX, Apache, PHP, and MySQL learning.",
          bullet2: "- Led task automation sessions using Bash and Perl, providing guidance on Linux-based problem-solving and debugging.",
        }
      },

      keySkills : {
        title: "Key Skills",
        skill1: "C/C++",
        skill2: "Java",
        skill3: "Python",
        skill4: "React",
        skill5: "JavaScript",
        skill6: "HTML/CSS",
        skill7: "Git",
        skill8: "Linux",
        skill9: "PLSQL and MySQL",
      },

      education: {
        title: "Education",
        bsInstitution: "New Jersey Institute of Technology",
        bsDegree: "Bachelor of Science in Computer Science",
        bsDates: "Sep 2021 - May 2025",
        bsGpa: "3.5/4.0",
        extras: "Enrolled in B.S. / M.S. Cybersecurity and Privacy",
      }

    }

  }

  render() {
    return (
      <div>
        <Header
          personInfo={this.state.personInfo}
          contactInfo={this.state.contactInfo}/>
        
        <PersonalProfile
          profile={this.state.profile}/>
        
        <WorkExperience
          workExperience={this.state.workExperience}/>
        
        <KeySkills 
          keySkills={this.state.keySkills}/>

        <Education
          education={this.state.education}
        />
        
      </div>
    )
  }
}

export default App;
