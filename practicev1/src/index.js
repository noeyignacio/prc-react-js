import React from 'react'
import ReactDOM from 'react-dom'

import faker from 'faker';

// Components
import Comments from './components/Comments'
import ApprovalCards from './components/ApprovalCards'

class App extends React.Component {
    render() {
        // Getting Local Time
        function getTime() {
            return (new Date()).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
        }
        return(
            <div className="ui comments container">
                <ApprovalCards>
                    <Comments 
                            author={faker.name.findName()}
                            image={faker.image.image()}
                            text={faker.lorem.sentence()}
                            timePosted={getTime()}
                    />
                </ApprovalCards>
                <ApprovalCards>
                    <Comments 
                            author={faker.name.findName()}
                            image={faker.image.image()}
                            text={faker.lorem.sentence()}
                            timePosted={getTime()}
                    />
                </ApprovalCards>
                <ApprovalCards>
                    <Comments 
                            author={faker.name.findName()}
                            image={faker.image.image()}
                            text={faker.lorem.sentence()}
                            timePosted={getTime()}
                    />
                </ApprovalCards>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)