import './UserProfile.css'
import style from './UserProfile.module.css'
const App = ()=>{

  //? Applying inline style object for container
  const containerStyle = {
    textAlign: "center",
    margin: '20px',
  }
  return (
    <div style={containerStyle}>
      <img src="https://cdn.pixabay.com/photo/2023/11/15/13/55/woman-8390124_1280.jpg" alt="anime girl"
           style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              objectFit: 'cover'
           }}></img>
      <h2 className="name">Anime Girl</h2>
      <p className="bio">Fullstack Ai Developer | React Enthusiast</p>
      <ul className={style.hobbies}>
        <li className={style.hobby}>Coding</li>
        <li className={style.hobby}>Traveling</li>
        <li className={style.hobby}>Doing Nothing</li>
      </ul>
    </div>
  );
};

export default App;