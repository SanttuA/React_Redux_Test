import React from "react";
import { connect } from "react-redux";
import { increaseCount, decreaseCount } from "../actions/counterActions";

class Counter extends React.Component{

    handleIncreaseClick = () => {
        this.props.increaseCount();
    }
    
    handleDecreaseClick = () => {
        this.props.decreaseCount();
    }

    render(){
        return(
            <main>
                <h1>Counter Page</h1>
                <h3>Current count: {this.props.count}</h3>
                <button onClick={this.handleIncreaseClick}>Increase</button>
                <button onClick={this.handleDecreaseClick}>Decrease</button>
            </main>
        );
    }   
}

const mapStateToProps = (state) => {
    return {
        count: state.counter.count
    };
}

const mapDispatchToProps = (dispatch) => {
    return{
        increaseCount: () => {
            dispatch(increaseCount());
        },
        decreaseCount: () => {
            dispatch(decreaseCount());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);