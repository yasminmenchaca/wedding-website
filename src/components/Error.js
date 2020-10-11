import React, {Component} from 'react';

class Error extends Component {
    render() {
        return (
            <div>
                <h1 style={{color: 'white'}} className='text-center'>Error: Page does not exist!</h1>
            </div>
        );
    }
}

export default Error;