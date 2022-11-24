import { ClientList } from './components/ClientList/ClientList';
import NewClient from './components/NewClient/NewClient';

function App() {
  return (
  
      <div className="App">
        <NewClient />
        <ClientList />
      </div>
 
  );
}
export default App;

//   {merchants ? merchants : 'There is no merchant data available'}
