
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import About from './components/About';
import Counter from './components/Counter';
import Biography from './components/Biography';
import Skill from './components/Skill';
import WorkFlow from './components/WorkFlow';

function App() {
  return (
    <div>
      <HomePage />
      <About />
      <Counter />
      <Biography />
      <Skill />
      <WorkFlow />
    </div>
  );
}

export default App;
