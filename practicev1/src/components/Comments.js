import React from 'react';

// Getting Number
const maxRanNum = 5;
function getRandomInt() {
    return Math.floor(Math.random() * Math.floor(maxRanNum) + 1);
}

export default class Comments extends React.Component {
    render() {
        return(
            <div className="comment">
                <a href="/" className="avatar">
                <img src={this.props.image} alt="avatar" />
                </a>
                <div className="content">
                <a href="/" className="author">{this.props.author}</a>
                <div className="metadata">
                    <div className="date">{this.props.timePosted}</div>
                    <div className="rating">
                    <i className="star icon"></i>
                    {getRandomInt()} Faves
                    </div>
                </div>
                <div className="text">
                    {this.props.text}
                </div>
                </div>
            </div>
        )
    }
}