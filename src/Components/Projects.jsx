import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Card from './Card';
import projects from '../Data/projects';

const Projects = () => {
    const location = useLocation();

    useEffect(() => {
        const { hash } = location;
        if (hash === '#projects') {
            const projectsSection = document.getElementById('projects');
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location]);

    return (
        <>
            <center>
                <h2 className="titleproj text-light" id="projects">
                    <u>Projects - Made By Me</u>
                </h2>
            </center>
            <div className="container-fluid mt-2">
                <div className="row">
                    <div className="row">
                        {projects.map((val, ind) => {
                            const isLastElement = ind === projects.length - 1;
                            const isOddNumber = projects.length % 2 === 1;
                            const isCentered = isOddNumber && isLastElement;

                            return (
                                <div className={`col-md-6 ${isCentered ? 'offset-md-3' : ''}`} key={ind}>
                                    {val.title !== '' && val.title !== undefined && (
                                        <Card
                                            title={val.title}
                                            description={val.description}
                                            technologies={val.technologies}
                                            code_url={val.code_url}
                                            live_url={val.live_url}
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

        </>
    );
};

export default Projects;
