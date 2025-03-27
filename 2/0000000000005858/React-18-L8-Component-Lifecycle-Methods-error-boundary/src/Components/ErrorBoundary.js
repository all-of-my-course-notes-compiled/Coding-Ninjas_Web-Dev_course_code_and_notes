import { Component } from "react";

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false,
            error: ""
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error: error
        }
    }

    componentDidCatch(error, info) {
        console.log("Error:", error);
        console.log("Error Info: ", info);

    }

    render() {
        if (this.state.hasError) {
            return (
                <h1>Something Went Wrong with {this.props.children.type.name}! <br /> Please contact the admin</h1>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;