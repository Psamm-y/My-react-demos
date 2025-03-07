import Weather from './Weather';
import UserStatus from './UserStatus';
import { TfiAlarmClock } from 'react-icons/tfi';

const Move = () => {
  const handleMove = () => {
    alert('Mouse moved over this text');
  };
  return (
    <p onMouseMove={handleMove}>
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
      <Move />
    </>
  );
}

export default App;
