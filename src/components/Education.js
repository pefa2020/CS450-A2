import React, { Component } from "react";

class Education extends Component {
    render() {
        return (
            <div class="container-education">
                <div class="CE-one">
                    <h4>{this.props.education.title}</h4>
                </div>

                <div class="CE-two">
                    <h4>{this.props.education.bsInstitution}</h4>
                    <p>
                        {this.props.education.bsDegree}<br />
                        {this.props.education.bsDates}<br />
                        GPA:&nbsp; {this.props.education.bsGpa}<br />
                        {this.props.education.extras}<br />
                    </p>
                </div>
            </div>
        )
    }
}

export default Education;