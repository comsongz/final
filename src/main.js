import './main.css';
import './MainPage.css';
import VanillaTilt from './vanilla-tlit'

VanillaTilt.init(document.querySelectorAll(".card"), {
  max: 25,
  speed: 400,
    glare: true,
    "max-glare": 1,
});
VanillaTilt.init(document.querySelectorAll(".card"));

const Main = () => {
  return (
    <div className="main">

    </div>
  );
}