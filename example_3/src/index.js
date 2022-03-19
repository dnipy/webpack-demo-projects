const data = require('./data')
const React = require('react');
const ReactDOM = require('react-dom');

ReactDOM.render(
  <div>
      {data.map((d)=>{
          <h1 key={d}>{d}</h1>
      })}
  </div>,
  document.body
);
