import  React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from '../home/home';
import Projects from '../projects/projects';
import Contact from '../contact/contact';
import './about.css';

class About extends Component {
    render() {
      return (
        <div className='About'>
            <header className='aboutHeader'>
                <h1>About Me</h1>
                <div className="aboutMeImage"> 
              </div>
            </header>
            <main className="aboutMain">
              <div className="aboutRow">
                <div className="aboutColumn">
                  My educational background is in linguistics, and I have also done coursework in web development, UX/UI Design, and graphic design.
                  I am excited to deepen my knowledge in these areas and expand it to others.
                </div>
                <div className="aboutColumn">
                  I am based in the Boston area, but am willing to work remotely or relocate. 
                  Please feel free to <Link to="/contact">contact me</Link> if you have any opportunities that might be a good fit.
                 When I am not working on writing or design projects, I enjoy reading, going on walks, and cooking and eating vegan meals.
              </div>
              </div>
            </main>
        </div>
      );
    } 
}

export default About;