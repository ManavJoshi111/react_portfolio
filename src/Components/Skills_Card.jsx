import React from 'react'

const Skills_Card = (props) => {
    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <center>
                        <i className={"fa-brands icon display-2 mx-2 mt-2 " + props.cname}></i>
                        <br />
                        <br />
                        <h5 className="card-title">{props.title}</h5>
                    </center>
                </div>
            </div>
        </>
    )
}

export default Skills_Card;