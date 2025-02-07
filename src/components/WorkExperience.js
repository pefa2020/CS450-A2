import React, { Component } from "react";

class WorkExperience extends Component {
    render() {
        return (
            <div>
                <div class="container-work">
                    <div class="CW-one">
                        <h4>{this.props.workExperience.title}</h4>
                    </div>

                    <div class="CW-two">
                        <h4>{this.props.workExperience.job1}</h4>
                        <p>
                            {this.props.workExperience.job1Content.bullet1}<br/>
                            {this.props.workExperience.job1Content.bullet2}<br/>
                        </p>

                        <h4>{this.props.workExperience.job2}</h4>
                        <p>
                            {this.props.workExperience.job2Content.bullet1}<br/>
                            {this.props.workExperience.job2Content.bullet2}<br/>
                        </p>
                    </div>

                </div>
                <hr />
            </div>
        )
    }
}

export default WorkExperience;