import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import HttpsRedirect from 'react-https-redirect'

import couple from '../img/couple.png';

const Schedule = () => {
    return (
        <HttpsRedirect>
            <ReactBootStrap.Container fluid
                                      className='text-center'
                                      style={{backgroundColor: 'white', padding: '10px'}}>
                <h1 style={{fontWeight: 'bold'}}>Schedule</h1>
                <hr style={{border: '1px solid black'}}/>
                <ReactBootStrap.Row>
                    <ReactBootStrap.Col sm={6} className='align-self-center'>
                        <ReactBootStrap.ResponsiveEmbed aspectRatio="16by9">
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/sPSJYXi7BWA"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen/>
                        </ReactBootStrap.ResponsiveEmbed><br/>
                        <h3 style={{fontWeight: 'bold'}}>CEREMONY, DINNER, AND A MOVIE</h3><br/>
                        <h5>SUNDAY, JANUARY 17, 2021</h5>
                        <h5>2:00 PM - 6:00 PM CST</h5> <br className='d-md-none'/>
                    </ReactBootStrap.Col>

                    <ReactBootStrap.Col sm={6} className='align-self-center'>
                        <ReactBootStrap.Image src={couple} style={{height: '100px'}}/>
                        <h5>Alamo Drafthouse - Stone Oak <br/>
                            22806 U.S. 281 <br/>
                            San Antonio, TX 78258
                            <br/><br/>
                            Dinner and a viewing of "The Disaster Artist" will follow after the ceremony. <br/><br/>
                            <b>Guests will be required to wear masks at all times, except when eating
                                or drinking. Alamo Drafthouse will also check the temperature of guests as they
                                arrive. </b><br/><br/>
                            <a href="https://drafthouse.com/san-antonio/covid-safety" className="btn btn-dark btn-lg"
                               role="button" target="_blank">Covid-19 Policy</a></h5>
                    </ReactBootStrap.Col>

                </ReactBootStrap.Row>
            </ReactBootStrap.Container>
        </HttpsRedirect>
    );
}

export default Schedule;