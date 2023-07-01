import './app.css';
import AccountOverview from './account-overview';

function App() {
  const accountOverviewStub = {
    supportContact: {
      name: 'John Smith',
      email: 'john.smith@feefo.com',
      telephone: '020 3362 4208'
    },
    salesOverview: {
      uploads: 8,
      successfulUploads: 3,
      linesAttempted: 20,
      linesSaved: 4,
    }
  }


  return (
    <div className="App">
      <AccountOverview data={accountOverviewStub}/>
    </div>
  );
}

export default App;
