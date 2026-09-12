import './App.css';

const fixtures = [
  {home:'Liverpool',away:'Arsenal',time:'Sat 3:00 PM'},
  {home:'Man City',away:'Chelsea',time:'Sun 6:30 PM'},
  {home:'Man United',away:'Tottenham',time:'Mon 9:00 PM'}
];

export default function App(){
  return (
    <div className='app'>
      <header className='hero'>
        <h1>PL Predictor ⚽</h1>
        <p>Predict Premier League matches and climb the leaderboard.</p>
      </header>

      <section className='fixtures'>
        <h2>Upcoming Fixtures</h2>
        {fixtures.map((f,i)=>(
          <div className='card' key={i}>
            <div className='teams'>
              <strong>{f.home}</strong>
              <span>vs</span>
              <strong>{f.away}</strong>
            </div>
            <small>{f.time}</small>
            <div className='prediction'>
              <input type='number' placeholder='2' min='0'/>
              <span>-</span>
              <input type='number' placeholder='1' min='0'/>
            </div>
            <button>Save Prediction</button>
          </div>
        ))}
      </section>
    </div>
  );
}
