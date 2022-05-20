import { Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Páginas</h1>
      <Link to='/home'>Home</Link>
      <br/>
      <Link to='/login'>Login</Link> 
      <br/>
      <Link to='/administrativo'>Administrativo</Link>
      <br/>
      <Link to='/agendar'>Agendar</Link>
      <br/>
      <Link to='/agendamentos'>Agendamentos</Link>
    </div>
  );
}

export default App;
