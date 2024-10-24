import React from "react";
import {createRoot} from "react-dom/client"

// A simple Class component
class WalkingSkeleton extends React.Component {
    render() {
        return <h1>ewan's walking skeleton</h1>
    }
}

// Use traditional DOM manipulation to create a root element for React
document.body.innerHTML = '<div id="app"></div>'

// Create a root element for React
const app = createRoot(document.getElementById("app")!)
// Render our WalkingSkeleton component
app.render(<WalkingSkeleton/>)
