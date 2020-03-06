import React, {Component} from 'react';

class Counter extends Component {

    /*
    * Store property values belong to the component
    * When the state changes the component re-renders
    * */
    state = {
        count: this.props.value,
        address: {
            city: 'Tehran'
        },
        tags: ['tag1', 'tag2', 'tag3']
    };

    styles = {
        fontSize: 20,
        fontWeight: "bold"
    };

    constructor(props) {
        super(props);
        /*
        * This method will return a new function that will always use this for the Counter class
        * Here we bind the event handlers to "this"
        * */
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    render() {
        /*
        * props includes all the attributes that we set in a component
        * */
        console.log('props', this.props);
        return (
            <React.Fragment>
                {this.props.children}
                <span style={this.styles} className={this.badgeModification()}>{this.formatCount()}</span>
                {/*Here in onClick we are not calling the method we just refer to it this is the
                   difference between event and other functions*/}
                {/*If we want to pass ann argument to the event handler of this button*/}
                <button onClick={() => this.handleIncrement({id: 1})} className="btn btn-secondary btn-sm">Increment
                </button>
                {this.renderTags()}
            </React.Fragment>
        );
    }

    formatCount() {
        /*
        * Here we pick the count property from the state object (Destructuring)
        * */
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }

    badgeModification() {
        let classes = "badge m-2 ";
        classes += (this.state.count === 0) ? "badge-warning" : "badge-primary";
        return classes;
    }

    renderTags() {
        if (this.state.tags.length === 0) {
            return <p>The are no tags</p>
        }
        return <ul>
            {/*It takes the tags array an map to the <li> element*/}
            {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
    }

    /*
    * This is an event handler
    * If we use this without bind method we get undefined error on the console
    * */
    handleIncrement(product) {
        console.log("Increment clicked : ", this.state.count);
        console.log(product);
        /*
        * This method (setState) tells react that we are updating the state
        * Then react schedule a call to render method
        * */
        this.setState({count: this.state.count + 1})
    }
}

export default Counter;
