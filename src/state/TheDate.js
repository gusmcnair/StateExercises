import React from 'react';

//const milliseconds = 1000
//setInterval(
    //function callback() {
        //update the state.date
    //},
    //milliseconds
//)

class TheDate extends React.Component {
    constructor(props) {
        super(props)
        this.state = { datetime: new Date() };
        console.log('constructor')
      }
    componentDidMount(){
        console.log('componentDidMount')
        this.interval = setInterval(() => {
            console.log('setInterval')
            this.setState({
                datetime: new Date()
            })
        }, 1000)
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
      render() {
        console.log('render')
        return (
          <div>{this.state.datetime.toLocaleString()}</div>
        )
      }
    }

export default TheDate;