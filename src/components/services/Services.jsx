import React, { useState } from 'react';
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">Offered Services</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Web Designing</h3>
                </div>

                <span href="#" className="services__button" onClick={() => toggleTab(1)}>View More {" "}
                <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                        <h3 className="services__modal-title">Web Designing</h3>
                        <p className="services__modal-description">Service with more than 2 years of Experience. Providing Quality work to clients and Companies</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service grid">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Devloping User Interface.</p>
                            </li>

                            <li className="services__modal-service grid">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Web page devlopmemt.</p>
                            </li>

                            <li className="services__modal-service grid">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Responsive Web Design</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Pyhton projects</h3>
                </div>

                <span href="#" className="services__button" onClick={() => toggleTab(2)}>View More {" "}
                <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                        <h3 className="services__modal-title">Pyhton projects</h3>
                        <p className="services__modal-description">Service with more than 2 years of Experience. Providing Quality work to clients and Companies</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service grid">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Developing AI Models.</p>
                            </li>

                            <li className="services__modal-service grid">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Machine Learning Projects.</p>
                            </li>

                            <li className="services__modal-service grid">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Deep Learning Projects.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">UI/UX Designing</h3>
                </div>

                <span href="#" className="services__button" onClick={() => toggleTab(3)}>View More {" "} 
                <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 3 ? "services__modal active-modal": "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                        <h3 className="services__modal-title">UI/UX Designing</h3>
                        <p className="services__modal-description">Service with more than 2 years of Experience. Providing Quality work to clients and Companies</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service grid">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Devloping User Interface.</p>
                            </li>

                            <li className="services__modal-service grid">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Prototyping with Figma.</p>
                            </li>

                            <li className="services__modal-service grid">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Creating Brand logos.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>  
  )
}

export default Services