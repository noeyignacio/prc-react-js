import React from 'react'

// Components

export default class ApprovalCards extends React.Component {
    render() {
        return(
            <div className="ui cards">
                <div className="card">
                    <div className="content">
                        {this.props.children}
                    </div>
                    <div className="extra content">
                        <div className="ui two buttons">
                            <div className="ui basic green button">Approve</div>
                            <div className="ui basic red button">Declie</div>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}