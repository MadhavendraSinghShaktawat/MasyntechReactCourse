import UserProfile from "./components/UserProfile";

const App = () => {
  return (
    <div>
      <h1>Main App</h1>
      <UserProfile 
        name = 'Madhavendra'
      />
      <UserProfile 
        name = 'Lakshya'
      />
    </div>
  )
}

export default App;