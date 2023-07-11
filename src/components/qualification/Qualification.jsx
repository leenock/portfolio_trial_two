import React, { useState } from 'react'
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
     setToggleState(index); 
    };

  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal journey</span>
        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div 
                 className={
                    toggleState === 1 ? "qualifaction__button qualification__active button--flex" : "qualification__button button--flex"}
                >
                    <i className="uil uil-graduation-cap
                     qualification__icon"></i> 
                     Education
                </div>
                <div className={
                    toggleState === 2 ? "qualifaction__button qualification__active button--flex" : "qualification__button button--flex"}
                   >
                    <i className="uil uil-briefcase-alt
                     qualification__icon"></i>
                      Experience
                </div>
            </div>
            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}
                onClick={() => toggleTab(1)}
                >
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Artificial Intelligence</h3>
                            <span 
                              className="qualification__subtitle">APU- Malaysia</span>
                            <div className="qualification__calendar">
                               <i className="uil uil-calendar-alt">
                               </i> 2022 - 2023
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Software Engineering</h3>
                            <span 
                              className="qualification__subtitle">
                                Kisii university- Kenya
                                </span>
                            <div className="qualification__calendar">
                               <i className="uil uil-calendar-alt">
                               </i> 2014 - 2018
                            </div>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Science and Technology</h3>
                            <span 
                              className="qualification__subtitle">Tianjin</span>
                            <div className="qualification__calendar">
                               <i className="uil uil-calendar-alt">
                               </i> 2022 - 2023
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">EIMS</h3>
                            <span 
                              className="qualification__subtitle">
                                Internship Software Engineering
                                </span>
                            <div className="qualification__calendar">
                               <i className="uil uil-calendar-alt">
                               </i> 2014 - 2018
                            </div>
                        </div>
                    </div>
                </div>
                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}
                onClick={() => toggleTab(2)} >
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Artificial Intelligence</h3>
                            <span 
                              className="qualification__subtitle">APU- Malaysia</span>
                            <div className="qualification__calendar">
                               <i className="uil uil-calendar-alt">
                               </i> 2022 - 2023
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Software Engineering</h3>
                            <span 
                              className="qualification__subtitle">
                                Kisii university- Kenya
                                </span>
                            <div className="qualification__calendar">
                               <i className="uil uil-calendar-alt">
                               </i> 2014 - 2018
                            </div>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Science and Technology</h3>
                            <span 
                              className="qualification__subtitle">Tianjin</span>
                            <div className="qualification__calendar">
                               <i className="uil uil-calendar-alt">
                               </i> 2022 - 2023
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    
                </div> 
            </div>
        </div>
    </section>
  )
}
export default Qualification
