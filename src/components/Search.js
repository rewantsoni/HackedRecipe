import React from 'react';

const App = () => {
    return (
        <div className="ui category search">
            <div className="ui icon input">
                <input className="prompt" type="text" placeholder="Search..." />
                <i className="search icon"></i>
            </div>
            <div className="results"></div>
            <div class="ui hidden divider"></div>
        </div>
    )
}

export default App;