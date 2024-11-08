import Sidebar from './components/sidebar';
import FileContainer from './components/files';

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <div className="flex-grow flex overflow-auto pt-6 bg-mainBackground">
          <FileContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
