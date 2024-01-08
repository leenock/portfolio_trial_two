import React, { useState } from 'react';
import "./qualification.css"

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
            <div className={toggleState === 1 ?
            "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
            onClick={() => toggleTab(1)}
            >
                <i className="uil uil-graduation-cap
                     qualification__icon"></i>
                     Educations
            </div>

            <div className={toggleState === 2 ?
            "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
            onClick={() => toggleTab(2)}
            >
                <i className="uil uil-graduation-cap
                     qualification__icon"></i>
                     Experiences
            </div>
         </div>
         <div className="qualification__sections">
            <div className={toggleState === 1 ? 
            "qualification__content qualification__content-active" : "qualification__content"}>
                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Artificial Intelligence</h3>
                        <span className="qualification__subtitle">APU- Malaysia</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i>2021 - present
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
                        <span className="qualification__subtitle">Kisii University, Kenya</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i>2014 - 2018
                        </div>
                    </div>
                    
                </div>

                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Test A</h3>
                        <span className="qualification__subtitle">APU- Malaysia</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i>2021 - present
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
                        <h3 className="qualification__title">Test B</h3>
                        <span className="qualification__subtitle">Kisii University, Kenya</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i>2014 - 2018
                        </div>
                    </div>
                    
                </div>


            </div>

            <div className={toggleState === 2 ? 
            "qualification__content qualification__content-active" : "qualification__content"}>
                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Artificial Intelligence</h3>
                        <span className="qualification__subtitle">APU- Malaysia</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i>2021 - present
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
                        <h3 className="qualification__title">Web Development</h3>
                        <span className="qualification__subtitle">Kisii University, Kenya</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i>2014 - 2018
                        </div>
                    </div>
                    
                </div>

                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Test k</h3>
                        <span className="qualification__subtitle">APU- Malaysia</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i>2021 - present
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
