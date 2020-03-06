import React, {Component} from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters: [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
    };

    render() {
        return (
            <div>
                {/*value and selected are the attributes of counter component which will appear in props object
                   of counter component*/}
                {this.state.counters.map(counter =>
                    <Counter key={counter.id} value={counter.value} selected={true}>
                        {/*If we want to pass a content to our component we must use the children in props object
                            in the render method of counter*/}
                        <h1>Title</h1>
                    </Counter>
                )
                }
            </div>
        );
    }
}

export default Counters;
