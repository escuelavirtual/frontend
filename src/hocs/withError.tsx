import React from "react";

export default function withError(Component: any) {
  class Error extends React.Component{
    state = {
      hasError: false,
      messageError: ""
    }

    componentDidCatch(error: object) {
      this.setState({
        hasError: true
      })
    }
    
    render() {
        if (this.state.hasError){
        return <div>{this.state.messageError}</div>
        }
        else {

            return <Component {...this.props} />;
        }
    }
  }
  return Error;
}
