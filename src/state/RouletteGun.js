import React from 'react';

class RouletteGun extends React.Component {
    constructor(props){
        super(props);
        this.state = {chamber: null}
        this.state = {spinningTheChamber: false}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({
            spinningTheChamber: true,
            chamber: (Math.floor(Math.random() * 8)) + 1,
        })
        this.timeout = setTimeout(() => {
            this.setState({
                spinningTheChamber: false,
            })
        }, 2000)
        }

    renderDisplay(){
        if (this.state.chamber === undefined){return "Pull the trigger!"}
        else if(this.state.spinningTheChamber){return "Spinning the chamber and pulling the trigger!"}
        else if (this.state.chamber === this.props.bulletInChamber){return "BANG!"}
        else {return "You're safe!"}
    }

    componentWillUnmount(){
        clearTimeout(this.timeout)
    }

    render(){
        return(
            <div>
                <p>
                    {this.renderDisplay()}
                </p>
                <button onClick={this.handleClick}>
                    Pull the trigger!
                </button>
            </div>
        )
    }
}

export default RouletteGun;
