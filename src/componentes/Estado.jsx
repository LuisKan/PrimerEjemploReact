import React, { Component } from 'react';

class LightSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: "On"
        };
    }

    render() {
        return (
            <fieldset>
                <p>The light is currently {this.state.position}</p>
                <button>Flip Switch</button>
            </fieldset>
        );
    }
}

export default LightSwitch;
