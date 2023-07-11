import React from 'react';
import "./qualification.css";

const Qualification = () => {
  return (
    <section className="qualification section">
        <h2 className="section__title">qualification</h2>
        <span className="section__subtitle">My Personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className="qualification__button
                qualification__active button--flex">
                    <i className="uil uil-graduation-cap
                     qualification__icon"></i> Education
                </div>

                <div className="qualification__button button--flex">
                    <i className="uil uil-briefcase-alt
                     qualification__icon"></i> Experience
                </div>
            </div>
            <div className="qualification__sections">
                <div className="qulaification__content">
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Artificial Intelligence</h3>
                            <span 
                              className="qualification__subtitle">APU- Malaysia</span>
                            <div className="qualification__calender">
                               <i className="uil uil-calender-alt">
                               </i> 2022 - 2023
                            </div>
                        </div>

                        <div>
                            <span className="qulaification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        
                        <div>
                            <span className="qulaification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Software Engineering</h3>
                            <span 
                              className="qualification__subtitle">Kisii university- Kenya</span>
                            <div className="qualification__calender">
                               <i className="uil uil-calender-alt">
                               </i> 2014 - 2018
                            </div>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        
                        <div>
                            <span className="qulaification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Web Development</h3>
                            <span 
                              className="qualification__subtitle">Infinitive System Academy- Kenya</span>
                            <div className="qualification__calender">
                               <i className="uil uil-calender-alt">
                               </i> 2015 - 2016
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Qualification
