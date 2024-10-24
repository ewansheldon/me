import React from "react";
import {createRoot} from "react-dom/client"

// A simple Class component
class HelloWorld extends React.Component {
    render() {
        return <h1>Hello world!</h1>
    }
}

// Use traditional DOM manipulation to create a root element for React
document.body.innerHTML = '<div id="app"></div>'

// Create a root element for React
const app = createRoot(document.getElementById("app")!)
// Render our HelloWorld component
app.render(<HelloWorld/>)
