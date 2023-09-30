import React from 'react'

const Project = () => {
  return (
      <>
        <div className="d-flex flex-column">
            <div className="education-1 my-4 justify-content-between d-flex flex-row">
                <div className="d-flex flex-column new-one">
                    <span className="university-name">Jamalpur Zilla School Jamlpur</span>
                    <span className="university-degree">Secondary School Certificate S.S.C</span>
                </div>
                <div>
                    <span className="year-passout">2012-2014</span>
                </div>
            </div>

            <div className="education-1 my-4 justify-content-between d-flex flex-row">
                <div className="d-flex flex-column new-one">
                    <span className="university-name">Jamalpur Gov't Ashekh Mahmud Colledge</span>
                    <span className="university-degree">Higher Secondary School Certificate H.S.C</span>
                </div>
                <div>
                    <span className="year-passout">2014-2016</span>
                </div>
            </div>

            <div className="education-1 my-4 justify-content-between d-flex flex-row">
                <div className="d-flex flex-column new-one">
                    <span className="university-name">University Of Information Technology & Sciences</span>
                    <span className="university-degree">Bachelors Of Computer Science & Engineering</span>
                </div>
                <div>
                    <span className="year-passout">2019-2023</span>
                </div>
            </div>
        </div>
      </>
  )
}

export default Project