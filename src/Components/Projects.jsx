import React from 'react'
import Card from './Card';
function Projects() {
    return (
        <>
            <center><h2 className="titleproj text-light"><u>Projects - Made By Me</u></h2></center>
            <div className="container-fluid mt-4">
                <div className="row">
                    <div className="col-md-6">
                        <Card
                            title="myCV - Professional Resume Builder"
                            github="https://github.com/manavjoshi11/resume_builder_frontend"
                            link="https://resume-builder-frontend.onrender.com/"
                            desc="myCV is a professional resume builder web app which helps the user making their resume. User need to create an account and fill the form to make their resume. The resume can be downloaded as a pdf file."
                            tech="MERN Stack"
                            className="card"
                        />
                    </div>
                    <div className="col-md-6">
                        <Card
                            title="Cronux - A Streaming Platform"
                            github="https://github.com/ManavJoshi111/Cronux"
                            link=""
                            desc="Cronux is a full-stack OTT Platform which provides Movies and TV
          Shows. This project was made in a group of two. Users can create their
          account and enjoy their prefereed shows."
                            tech="HTMl CSS JS PHP MySql"
                            className="card"
                        />
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-6">
                            <Card
                                title="Spotified - A Music Player Web App"
                                github="https://github.com/ManavJoshi111/Spotified"
                                link="https://manavjoshi111.github.io/Spotified/"
                                desc="I made a basic web app that gives the same experience as the music app
          giants like Spotify, Ganna, etc. Users can navigate through the UI easily
          and enjoy their preferred music."
                                tech="HTML CSS JS"
                                className="card"
                            />
                        </div>
                        <div className="col-md-6">
                            <Card
                                title="WeCheck - A Weather App"
                                github="https://github.com/ManavJoshi111/WeatherAppWithReact"
                                link=""
                                desc="WeCheck is a User friendly weather app which shows the weather of the specified the location. It shows the minimum and maximum temerature observed at the location specifed by the user. "
                                tech="React"
                                className="card"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;