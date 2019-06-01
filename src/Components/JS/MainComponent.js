import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import {TestAction} from '../../Redux/Actions/testAction';
import '../CSS/Main.css'
const mapStateToProps = state => {
    return (
        {
            test:state.testReducer.test,
            test_data: state.testReducer.test_data
        }
    )
}
const mapDispatchToProps = dispatch => {
    return {
        action: bindActionCreators({ TestAction }, dispatch)
    };
};
class Main extends Component {
    componentDidMount(){
        this.props.action.TestAction()
    }
    render() {
        return (
            <div>
               {this.props.test}
               <p>{this.props.test_data}</p>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main)