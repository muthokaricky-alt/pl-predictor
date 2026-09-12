
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const matches = [
  { home:'Liverpool', away:'Arsenal', date:'16 Aug • 3:00 PM', homeLogo:'https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg', awayLogo:'https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg' },
  { home:'Chelsea', away:'West Ham', date:'16 Aug • 5:30 PM', homeLogo:'https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg', awayLogo:'https://upload.wikimedia.org/wikipedia/en/c/c2/West_Ham_United_FC_logo.svg' },
  { home:'Man City', away:'Man United', date:'17 Aug • 2:00 PM', homeLogo:'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg', awayLogo:'https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg' }
];

export default function App(){
  const [dark,setDark]=useState(false);
  useEffect(()=>{document.body.className=dark?'dark':'light';},[dark]);
  return (
    <div className="app">
      <nav className="nav">
        <div className="brand">⚽ PL <span>Predictor</span></div>
        <div className="links"><a className="active">Discover</a><a>My Predictions</a><a>Leaderboard</a><a>Schedule</a></div>
        <div className="right"><input placeholder="Search teams..."/><button onClick={()=>setDark(!dark)}>{dark?'☀️':'🌙'}</button><div className="avatar">RK</div></div>
      </nav>
      <main className="wrap">
        <section className="hero">
          <div><span className="pill">🏆 Premier League</span><h1>Find your <span>match</span></h1><p>Predict matches, earn points, and climb the leaderboard.</p></div>
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="cta"><h3>Make your predictions</h3><p>Think you know football? Prove it.</p></motion.div>
        </section>
        <div className="grid">
          {matches.map((m,i)=>(
            <motion.div key={i} className="card" initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:i*0.1}}>
              <div className="top"><span className="league">Premier League</span><small>{m.date}</small></div>
              <div className="teams">
                <div><img src={m.homeLogo}/><h3>{m.home}</h3></div>
                <b>VS</b>
                <div><img src={m.awayLogo}/><h3>{m.away}</h3></div>
              </div>
              <div className="score"><input defaultValue="2"/><span>-</span><input defaultValue="1"/></div>
              <button className="save">Save Prediction</button>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
