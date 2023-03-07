import React from "react";
import Navbar from '../Navbar/NavBar';


class Template extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Navbar />
                {this.props.children}
            </div>
        )
    }
}

export default Template