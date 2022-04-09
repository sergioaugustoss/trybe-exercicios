import React, { Component } from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
const compromissos = ['Passear', 'comer', 'correr'];

class App extends Component() {
  render() {
  return (
    <ul>compromissos.map((elemento) => (Task(elemento)))</ul>
  );
}
}

export default App;
