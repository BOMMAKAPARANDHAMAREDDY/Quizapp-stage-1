import { Component } from 'react';
import "../components/ResultComponent.css"

class ResultComponent extends Component {
    render() {
        return (
            <>
                <div className='resultPageContainer'>
                    <div className='result'>
                        <h1>Result</h1>
                    </div>
                    <div className='headerContainer'>
                        <p>You need more practice!</p>
                        <h1>Your score is 20%</h1>
                    </div>
                    <div className='resultContainer'>
                        <p>Total number of questions <span>15</span></p>
                        <p>Number of Attempted questions <span>9</span></p>
                        <p>Number of corrected answers<span>3</span></p>
                        <p>Number of wrong answers<span>6</span></p>
                    </div>
                </div>
                <div className='buttonContainer'>
                    <button id='playAgain'>Play Again</button>
                    <button id='home'>Back to home</button>
                </div>
            </>
        );
    }
}

export default ResultComponent;
