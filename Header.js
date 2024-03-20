import React, { Component,Fragment } from 'react';
import './Header.css';

class Header extends Component {

     constructor(){
        super()
            this.state={
                title:'React App',
                keyword:'User Text here'
        }
     }
     handleChange =(event) => {
        console.log(event.target.value)
        this.setState({keyword:event.target.value})
        this.props.userInput(event.target.value)
    }
    render() {
        return (
            <Fragment>
                <header>
                    <div className='logo'>{this.state.title}</div>
                    <center>
                        <input onChange={this.handleChange}/>
                        <div style={{ color: 'white', fontSize: '22px' }}>{this.state.keyword}</div>
                    </center>
                    <hr />
                </header>
            </Fragment>
        )
    }
}
export default Header;