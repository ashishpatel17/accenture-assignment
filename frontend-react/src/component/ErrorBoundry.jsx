import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }

  static getDerivedStateFromError(error) {
    return { error: error };
  }

  componentDidCatch(error, errorInfo) {
    console.log("Error = ", error);
    console.log("Error Info = ", errorInfo);
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <p>Some thing went wrong...</p>
          <p>{this.state.error}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
