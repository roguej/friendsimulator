import React from 'react';

export class Profile extends React.Component {
    render(){
        return (
            <div>
                <ProfilePhoto image="avatars/avatar1.PNG"/>
                <h1>{this.props.name}</h1>

                <ProfileDetails />
            </div>
        );
    }
}

class ProfilePhoto extends React.Component {
    render() {
        return(<img height="150px" width="150px" src={this.props.image}/>);
    }
}

class ProfileDetails extends React.Component {
    render() {
        return(<div>
            <ul>
                <li>Occupation: </li>
                <li>Favorite Foods: </li>
                <li>Favorite Color: </li>
            </ul>
        </div>);
    }
}
