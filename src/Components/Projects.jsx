import React from 'react'
import Card from './Card';
function Projects() {
    return (
        <>
            <center><h2 className="titleproj">Projects - Made By Me</h2></center>
            <div className="container-fluid mt-4">
                <div className="row">
                    <div className="col-md-6">
                        <Card
                            title="Cronux - A Streaming Platform"
                            link="https://github.com/ManavJoshi111/Cronux"
                            desc="Cronux is a full-stack OTT Platform which provides Movies and TV
          Shows. This project was made in a group of two. Users can create their
          account and enjoy their prefereed shows."
                            tech="HTMl CSS JS PHP MySql"
                            className="card"
                        />
                    </div>
                    <div className="col-md-6">
                        <Card
                            title="Spotified - A Music Player Web App"
                            link="https://manavjoshi111.github.io/Spotified/"
                            desc="I made a basic web app that gives the same experience as the music app
          giants like Spotify, Ganna, etc. Users can navigate through the UI easily
          and enjoy their preferred music."
                            tech="HTML CSS JS"
                            className="card"
                        />
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-6">
                        <Card
                            title="WeCheck - A Weather App"
                            link="https://github.com/ManavJoshi111/WeatherAppWithReact"
                            desc="It is a simple web app that gives the minimum and maximum temperature
          of the city which you search.
          I used an open API to find the temperature"
                            tech="React"
                            className="card"
                        />
                    </div>
                    <div className="col-md-6">
                        <Card
                            title="myCV - Professional Resume Builder"
                            link="https://mycv-resume-builder.herokuapp.com/"
                            desc="myCV is a professional resume builder web app which helps the user making their resume. User need to create an account and fill the form to make their resume. The resume can be downloaded as a pdf file."
                            tech="MERN"
                            className="card"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;