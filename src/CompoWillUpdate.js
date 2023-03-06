import { Component } from 'react';

class CompoWillUpdate extends Component {
    constructor() {
        super();
        this.state = { name: 'prashant' };
    }

    componentWillMount(){
        this.setState({name:'tejas'})
    }

    componentWillUpdate(Props, State) {
        console.log('name') 
  
        alert(`Your state value has changed to ${State.name}`);
      } 

    render() {
        console.log('in render')
        return (
            <>
                <h1>My name is{this.state.name}</h1>
            </>
        )
    }

}

export default CompoWillUpdate;