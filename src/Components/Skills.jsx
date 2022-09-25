import React from 'react'
import Skills_Card from './Skills_Card';
const Skills = () => {
    return (
        <>
            <div className="container">
                <center><h2>These are some skills which I know...</h2></center>
                <div className="row">
                    <div className="col-md-4">
                        <Skills_Card cname="fa-html5" title="HTML" />
                    </div>
                    <div className="col-md-4">
                        <Skills_Card cname="fa-css3" title="CSS" />
                    </div>
                    <div className="col-md-4">
                        <Skills_Card cname="fa-square-js" title="JavaScript" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <Skills_Card cname="fa-bootstrap" title="Bootstrap" />
                    </div>
                    <div className="col-md-4">
                        <Skills_Card cname="fa-php" title="PHP" />
                    </div>
                    <div className="col-md-4">
                        <Skills_Card cname="fa-java" title="Java" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <Skills_Card cname="fa-linux" title="Linux" />
                    </div>
                    <div className="col-md-4">
                        <Skills_Card cname="fa-aws" title="AWS" />
                    </div>
                    <div className="col-md-4">
                        <Skills_Card cname="fa-github" title="Github" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <Skills_Card cname="fa-react" title="React" />
                    </div>
                    <div className="col-md-4">
                        <Skills_Card cname="fa-node" title="Node" />
                    </div>
                    <div className="col-md-4">
                        <Skills_Card cname="fa-magento" title="Magento" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills;