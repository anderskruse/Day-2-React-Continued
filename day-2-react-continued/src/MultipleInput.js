import React from "react";

export default class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        alert(JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Multiple Input Demo</h2>
                    <label>
                        Is going:
            <input
                            name="isGoing"
                            type="checkbox"
                            checked={this.state.isGoing}
                            onChange={this.handleInputChange} />
                    </label>
                    <br />
                    <label>
                        Number of guests:
            <input
                            name="numberOfGuests"
                            type="number"
                            value={this.state.numberOfGuests}
                            onChange={this.handleInputChange} />
                    </label>
                    <label>
                        Name of first guest
                        <input
                            name="guest1"
                            type="text"
                            onChange={this.handleInputChange}
                        />
                                                <input
                            name="guest2"
                            type="text"
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <p>{JSON.stringify(this.state)}</p>
                    <input type="submit" value="Submit" />
                </form>

            </div>
        );
    }
}