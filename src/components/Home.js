import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.css';
import InfoCard from "./InfoCard";
import '../css/h.css';
    Aos.init({duration: 1000, delay:300});

function Home(props) {
const { data } = props;

function handleClick(){
  window.location.reload();
}


if (!data || data.length === 0) return <p>No data, sorry</p>;
 return (
   <div className="home">
   <div className="home-head"><h1>All Countries in Asia Listed.</h1><h3>with their capital,population,etc.</h3><hr /><button className="btn" onClick={handleClick}>Refresh</button></div>

{data.map(s=> (
  <InfoCard
  key={s.name}
  flag={s.flag}
  name={s.name}
  capital={s.capital}
  region={s.region}
  subregion={s.subregion}
  population={s.population}
  borders={s.borders}
  languages={s.languages}
  alpha={s.alpha3Code}
  />
))}

  </div>
 );
}

export default Home ;
