import React from 'react';
import ReactDOM from 'react-dom';

// Components

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            lat: null,
            lon: null
        }

        // Geolocation
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                })
            }, 
            (error) => console.log(error)
        )
    }

    render() {
        return(
            <div className="ui statistic">
                <div className="value">
                    {this.state.lat}
                </div>
                <div className="label">
                    Latitude
                </div>
                <div className="value">
                    {this.state.lon}
                </div>
                <div className="label">
                    Longitude
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)