import Weather from './Weather';
import UserStatus from './UserStatus';
import { TfiAlarmClock } from 'react-icons/tfi';
function App() {
  const temperature = 35;

  const styles = { color: 'red', backgroundColor: 'blue', fontSize: '20px' };
  return (
    <>
      <UserStatus style={{ styles }} loggedIn={true} isAdmin={true} />
      <TfiAlarmClock style={{ styles }} />
    </>
  );
}

export default App;
