import User from './components/User';
import Admin from './components/Admin';

function App({sectorName, setSectorName, isUser, setIsUser, isAdmin, setIsAdmin, people, setPeople}) {
  
  function toggleUser() {
    setSectorName("Home - User Sector");
    setIsUser(true);
    setIsAdmin(false);
  }

  function toggleAdmin() {
    setSectorName("Home - Admin Sector")
    setIsUser(false);
    setIsAdmin(true);
  }

  return (
    <div>
      <h1>Generation Thailand</h1>
      <h2>{sectorName}</h2>
      <div>
        <button onClick={toggleUser}>
          {/* <Link to="/user"> */}
            User Home Sector
          {/* </Link> */}
        </button>
        <button onClick={toggleAdmin}>
          {/* <Link to="/admin"> */}
            Admin Home Sector
          {/* </Link> */}
        </button>
      </div>
      {/* <Outlet /> */}
      {isUser && <User people={people}/>}
      {isAdmin && <Admin people={people} setPeople={setPeople}/>}
    </div>
  )
}

export default App;