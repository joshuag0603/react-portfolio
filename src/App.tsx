import { Outlet } from 'react-router-dom';
import Nav from './components/nav';

function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App
