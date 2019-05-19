import React from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { connect } from "react-redux";
import { changeFont } from "./actions/fontActions";

class App extends React.Component{

  handleFontSizeClick = (fontSize) => {
    this.props.changeFont(fontSize);
  }

  render(){
    return (
      <div>
        <Header handleFontSizeClick={this.handleFontSizeClick}/>
        <div className={this.props.fontSize}>
          <Main />
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fontSize: state.fontSize.fontSize
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeFont: (fontSize) => {
      return dispatch(changeFont(fontSize));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);