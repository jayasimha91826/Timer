import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges"></div>
      <TimerChallenge title={"EASY"} targetTime={1}/>
      <TimerChallenge title={"NOT EASY"} targetTime={5}/>
      <TimerChallenge title={"GETTING TOUGH"} targetTime={10}/>
      <TimerChallenge title={"PROPS ONLY"} targetTime={15}/>
    </>
  );
}

export default App;
