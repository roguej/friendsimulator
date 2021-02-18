import React from 'react';

export class Profile extends React.Component {
    constructor(props){
        super(props)
    }


    render(){
        return (
            <div>
                <ProfilePhoto image="avatars/avatar1.PNG"/>
                <h1>{this.props.name}</h1>

                <ProfileDetails />
                <h3>Chat with {this.props.name}:</h3>
                <ProfileChat chatHistory="Wilford: Hello!"/>
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
                <li>Occupation: Widow Maker</li>
                <li>Favorite Foods: Spicy Nachos</li>
                <li>Favorite Color: Mauve</li>
            </ul>
        </div>);
    }
}

class ProfileChat extends React.Component {
    render() {
        return(
        <div>
            <textarea rows="10" cols="50" disabled>{this.props.chatHistory}</textarea>
            <br />
            <input type="text" placeholder="Type something to Wilford..." value={this.props.value} onChange={this.props.handleChange}/>    
        </div>);
    }
}