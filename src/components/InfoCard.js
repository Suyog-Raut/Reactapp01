
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../css/i.css';
  Aos.init({duration: 1000});

function InfoCard(props){
const country=props.name.toUpperCase();
return (
<div className="card" data-aos="fade-up">
<div>
<h5>    {country}</h5><img width="50px" src={props.flag} alt="flag"></img>
</div><hr />
<div><p>Capital: {props.capital}</p><p>Region: {props.region}</p><p>Sub-Region: {props.subregion}</p><p>Population: {props.population}</p><p>Alpha-3 code: {props.alpha}</p></div>
{
  (props.borders.length === 0) ? <p>No Borders</p> : <div className="border-1"><p>Borders: </p>{props.borders.map(s=> (<p key={s}>{s}</p>))}</div>
}

 <div className="border-1"><p>Languages: </p>{props.languages.map(s=> (<p key={s.name}>{s.name}</p>))}</div>

  </div>
)
}


export default InfoCard;
// className="card-head"
