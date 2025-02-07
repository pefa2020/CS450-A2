import React, { Component } from "react";

class KeySkills extends Component {
    render() {
        return (
            <div>
                <div class="container-skills">
                    <div class="CS-one">
                        <h4>{this.props.keySkills.title}</h4>
                    </div>

                    <div class="CS-general">
                        <div class="CS-two">
                            <dl>
                                <dt>{this.props.keySkills.skill1}</dt>
                                <dt>{this.props.keySkills.skill2}</dt>
                                <dt>{this.props.keySkills.skill3}</dt>
                            </dl>
                        </div>

                        <div class="CS-three">
                            <dl>
                                <dt>{this.props.keySkills.skill4}</dt>
                                <dt>{this.props.keySkills.skill5}</dt>
                                <dt>{this.props.keySkills.skill6}</dt>
                            </dl>
                        </div>

                        <div class="CS-four">
                            <dl>
                                <dt>{this.props.keySkills.skill7}</dt>
                                <dt>{this.props.keySkills.skill8}</dt>
                                <dt>{this.props.keySkills.skill9}</dt>
                            </dl>
                        </div>
                        <div></div>
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}

export default KeySkills;