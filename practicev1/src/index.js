import React from 'react'
import ReactDOM from 'react-dom'

// Getting Local Time
// function getTime() {
//     return (new Date()).toLocaleTimeString()
// }

class App extends React.Component {

    render() {
        return(
            <div className="ui container comments">
                <div className="comment">
                    <a href="/" className="avatar">
                        <img alt="avatar" />
                    </a>
                    <div className="content">
                        <a href="/" className="author">
                            Francis                            
                        </a>
                        <div className="metadata">
                            <span className="date">
                                12 hours ago.
                            </span>
                        </div>
                        <div className="text">
                            Nice blog!
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)