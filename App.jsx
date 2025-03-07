import Weather from './Weather';
import UserStatus from './UserStatus';
import { TfiAlarmClock } from 'react-icons/tfi';

const Move = () => {
  return (
    <p onCopy={handleCopy}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum tempore
      totam ullam repellat rem autem aliquam, quo corporis! Blanditiis at
      quisquam unde dolor vel et! Et dolores optio necessitatibus delectus.
    </p>
  );
};

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
