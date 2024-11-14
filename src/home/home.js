import  React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Projects from '../projects/projects';
import About from '../about/about';
import Contact from '../contact/contact';
import './home.css';

class Home extends Component {
    render() {
      return (
        <div className='Home'>
            <header className='homeHeader'>
            <h1>Welcome</h1>
              <a href="http://ec2-18-221-195-24.us-east-2.compute.amazonaws.com/" target="_blank" >< div className="leafImage"> 
              <h6>© Rachel Perez</h6>
               </div> </a>
            </header>
            <main className="homeMain">
              <div className="homeRow">
                <div className="homeColumn">
                I enjoy combining written language, both human and computer with visuals to create projects such as interactive web apps, documentation,  training,  articles and journals. I currently have experience with tools and technologies such as HTML, CSS, JavaScript, SQL, Vercel, Hugo, GitHub, Photoshop, Illustrator, Procreate,  Canva, Gimp, WordPress, and SharePoint Pages.
                </div>
                <div className="homeColumn">
                I am always looking to hone my skills through technical writing, UX and UI, graphic design, and web developemnt projects. To see some of my work, check out my <Link to="/projects">Projects</Link> page.
                  To learn more details about my skillset and some of my other interests check out my <Link to="/about">About Me</Link> page.
                  If you are interested in getting in touch with me you can reach me through any of the methods listed on my <Link to="/contact">Contact Me</Link> page.
                </div>
                </div>
            </main>
        </div>
      );
    } 
}

export default Home;


