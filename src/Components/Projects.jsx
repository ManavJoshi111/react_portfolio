import React from 'react'
import Card from './Card';
import projects from '../Data/projects';
function Projects() {
    return (
        <>
            <center><h2 className="titleproj text-light" id="projects"><u>Projects - Made By Me</u></h2></center>
            <div className="container-fluid mt-4">
                <div className="row">
                    <div className="row">
                        {
                            projects.map((val, ind) => {
                                // the projects has fields like title, description, technologies (an array), code_url and live_url, display only if the field is not empty, display it like a card
                                return (
                                    <>
                                        <div className="col-md-6">
                                            {(val.title !== "" && val.title !== undefined) ?
                                                <Card key={ind} title={val.title} description={val.description} technologies={val.technologies} code_url={val.code_url} live_url={val.live_url} /> : ""}
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;