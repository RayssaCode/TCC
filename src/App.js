import { Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>oieee</h1>
      <Link to='/home'>Home</Link>
      <Link to='/login'>Login</Link>
      <Link to='/administrativo'>Administrativo</Link>
      <Link to='/agendar'>Agendar</Link>
      <Link to='/agendamentos'>Agendamentos</Link>
    </div>
  );
}

export default App;
