import React, { Component } from "react";

class PersonalProfile extends Component {
    render() {
        return (
            <div>
                <div className="container-profile">
                    <div class="CP-one">
                        <h4>{this.props.profile.title}</h4>
                    </div>

                    <div class="CP-two">
                        <p>{this.props.profile.content}</p>
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}

export default PersonalProfile;