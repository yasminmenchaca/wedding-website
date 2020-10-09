import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import poster from "../img/poster.jpg";

const Schedule = () => {
    return (
        <ReactBootStrap.Container fluid
                                  className='text-center'
                                  style={{backgroundColor: 'white', padding: '50px 50px'}}>
            <ReactBootStrap.Row>
                <ReactBootStrap.Col sm={6} className='align-self-center'>
                    <ReactBootStrap.ResponsiveEmbed aspectRatio="16by9">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/sPSJYXi7BWA" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen/>
                    </ReactBootStrap.ResponsiveEmbed>
                    <h1 style={{fontWeight: 'bold'}}>CEREMONY, DINNER AND A MOVIE</h1><br/>
                    <h5>SUNDAY, JANUARY 17, 2021</h5>
                    <h5>2:00 PM - 6:00 PM</h5><br/><br/>
                </ReactBootStrap.Col>
                <ReactBootStrap.Col sm={6} className='align-self-center'>
                    <h5>Alamo Drafthouse Cinema Stone Oak <br/>
                        22806 U.S. 281 <br/>
                        San Antonio, TX 78258<br/><br/>
                        Cocktail Attire: Wear cocktail dresses, dressy jumpsuits, and dark jackets and
                        slacks. <br/><br/>
                        Dinner and a viewing of "The Disaster Artist" will follow after the ceremony.</h5>
                    <br/>
                    <ReactBootStrap.Button>Map</ReactBootStrap.Button>
                </ReactBootStrap.Col>
            </ReactBootStrap.Row>
        </ReactBootStrap.Container>
    );
}

export default Schedule;