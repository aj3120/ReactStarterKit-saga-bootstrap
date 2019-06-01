import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "../CSS/Content.css";
const mapStateToProps = state => {
    return {
       
    };
};
const mapDispatchToProps = dispatch => {
    return {
        action: bindActionCreators({}, dispatch)
    };
};
class Content extends Component {
    
    render() {
        return (
            <div className="">
                Sub
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Content);
