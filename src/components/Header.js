import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <div>
                <div className="container-header">
                    <div className="CH-one">
                        <h2>{this.props.personInfo.name}</h2>
                        <p>{this.props.personInfo.occupation}</p>
                    </div>

                    <div className="CH-two">
                        <div>
                            <p>Email:&nbsp;
                                <a class="link">{this.props.contactInfo.email}</a>
                            </p>
                            <p>Web:&nbsp;
                                <a href={this.props.contactInfo.web}>
                                    {this.props.contactInfo.web}
                                </a>
                            </p>
                            <p>Mobile:&nbsp; {this.props.contactInfo.mobile}</p>
                        </div>
                    </div>
                </div>
                <hr class="hr-header" />
            </div>
        )
    }
}

export default Header;