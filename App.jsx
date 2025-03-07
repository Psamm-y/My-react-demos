import Weather from './Weather';
import UserStatus from './UserStatus';
import { TfiAlarmClock } from 'react-icons/tfi';
function App(props) {
  const temperature = 35;

  const styles = {
    color: 'black',
    backgroundColor: 'aliceblue',
    padding: '1rem',
    fontSize: '3rem',
  };
  return (
    <>
      <UserStatus loggedIn={true} isAdmin={true} />
      <TfiAlarmClock style={styles} />
    </>
  );
}

export default App;
