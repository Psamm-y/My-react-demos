import Weather from './Weather';
import UserStatus from './UserStatus';
function App() {
  const temperature = 35;
  return (
    <>
      <Weather temp={temperature} />
      <UserStatus loggedin={true} isAdmin={true} />
    </>
  );
}

export default App;
