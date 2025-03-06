import Weather from './Weather';
import UserStatus from './UserStatus';
import { TfiAlarmClock } from 'react-icons/tfi';
function App() {
  const temperature = 35;
  return (
    <>
      <UserStatus loggedIn={true} isAdmin={true} />
      <TfiAlarmClock />
    </>
  );
}

export default App;
