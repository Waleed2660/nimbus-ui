import Sidebar from './components/sidebar';
import Container from './components/container'; 

function App() {
  return (
    <div className="flex bg-primary">
      <Sidebar />
      <Container />
    </div>
  );
}

export default App;
