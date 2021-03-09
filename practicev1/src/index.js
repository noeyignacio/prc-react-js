import React from 'react'
import ReactDOM from 'react-dom'

// Components
import Comments from './components/Comments'

class App extends React.Component {
    render() {
        return(
            <div className="ui comments">
               <Comments />
               <Comments />
               <Comments />
               <Comments />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)