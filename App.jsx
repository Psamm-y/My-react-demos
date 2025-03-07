import Weather from './Weather';
import UserStatus from './UserStatus';
import { TfiAlarmClock } from 'react-icons/tfi';
function App(props) {
  const temperature = 35;

  const styles = { color: 'red', backgroundColor: 'blue' };
  return (
    <>
      <UserStatus loggedIn={true} isAdmin={true} />
      <TfiAlarmClock style={styles} />
    </>
  );
}

export default App;
