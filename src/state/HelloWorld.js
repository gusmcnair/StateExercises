import React from 'react';

class HelloWorld extends React.Component {
    constructor(props){
        super(props);
        this.state = {who: 'world'};
        this.changeToWorld = this.changeToWorld.bind(this);
        this.changeToFriend = this.changeToFriend.bind(this);
        this.changeToReact = this.changeToReact.bind(this);
    }

    changeToWorld() {
        let newWho = "world";
        this.setState({who: newWho});
    }

    changeToFriend() {
        let newWho = "friend";
        this.setState({who: newWho});
    }

    changeToReact() {
        let newWho = "React";
        this.setState({who: newWho});
    }

    render() {
        return(
            <div>
                <p>Hello, {this.state.who}!</p>
                <button onClick={this.changeToWorld}>
                    World
                </button>
                <button onClick={this.changeToFriend}>
                    Friend
                </button>
                <button onClick={this.changeToReact}>
                    React
                </button>
            </div>
        )
    }
}

export default HelloWorld;