import React from 'react';
import ReactDOM from 'react-dom';
// import App from "./App";

var Bacon = React.createClass({
    render: function() {
        return <div>This is a a bacon component.</div>
    }
});

ReactDOM.render(
    <Bacon/>, document.getElementById('root')
);