import { Component } from 'react';
import "../components/HomeComponent.css"

class HomeComponent extends Component {
    render() {
        return (
            <div className='mainContainer'>
            <h1>Quiz App</h1>
            <button>Play</button>
            </div>
        );
    }
}

export default HomeComponent;