import { Component } from 'react';
import "../components/QuicComponent.css"

class QuizComponent extends Component {
    render() {
        return (
            <div className='questionContainer'>
                <div className='content'>
                    <h1>Question</h1>
                    <span>1 of 15</span>
                    <p>
                        Which is the only mammal that can jump?
                    </p>
                </div>
                <div className='optionsContainer'>
                    <button>Dog</button>
                    <button>Elephant</button>
                    <button>Goat</button>
                    <button>Lion</button>
                </div>
                <div className='buttonContainer'>
                    <button id='previous'>Previous</button>
                    <button id='next'>Next</button>
                    <button id='quit'>Quit</button>
                </div>
            </div>
        );
    }
}

export default QuizComponent;