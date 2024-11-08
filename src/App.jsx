import Sidebar from './components/sidebar';
// import Container from './components/container';
import NavBar from './components/navBar';

function App() {
  return (
    <div className="flex bg-secondary">
      <NavBar />
      {/* <Container /> */}
      <Sidebar  />
    </div>
  );
}

export default App;
