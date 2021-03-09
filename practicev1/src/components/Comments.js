import React from 'react';

import faker from 'faker'

// Getting Number
const maxRanNum = 5;
function getRandomInt() {
    return Math.floor(Math.random() * Math.floor(maxRanNum) + 1);
}

// Getting Local Time
function getTime() {
    return (new Date()).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
}

export default class Comment extends React.Component {
    render() {
        return(
            <div className="comment">
                <a href="/" className="avatar">
                <img src={faker.image.image()} alt="avatar" />
                </a>
                <div className="content">
                <a href="/" className="author">{faker.name.findName()}</a>
                <div className="metadata">
                    <div className="date">{getTime()}</div>
                    <div className="rating">
                    <i className="star icon"></i>
                    {getRandomInt()} Faves
                    </div>
                </div>
                <div className="text">
                    {faker.lorem.sentence()}
                </div>
                </div>
            </div>
        )
    }
}