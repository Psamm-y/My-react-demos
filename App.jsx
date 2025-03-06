import Weather from './Weather';
import UserStatus from './UserStatus';
function App() {
  const temperature = 35;
  return (
    <>
      <UserStatus loggedIn={true} isAdmin={true} />
    </>
  );
}

export default App;
