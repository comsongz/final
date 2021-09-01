import { Link, Route } from 'react-router-dom';

import CSIntro from './cs_intro.js'
import SWIntro from './sw_intro.js'
import './HeaderFooter.css';
import './MainPage.css';
import './style.css';
import React from 'react';

function Main(){
    class VanillaTilt extends React.Component {
        componentDidMount() {
          VanillaTilt.init(document.querySelectorAll(".card"), {
            max: 25,
            speed: 400,
              glare: true,
              "max-glare": 1,
          });
          VanillaTilt.init(document.querySelectorAll(".card"));
        }
      }
  return (
    <div className="container">
      <switch>
        <Route path="/cs_intro" exact={true} component={CSIntro} />
        <Route path="/sw_intro" exact={true} component={SWIntro} />
      </switch>
      
        <div className="points">
            <div className="point point-floating-1"></div>
            <div className="point point-floating-2"></div>
            <div className="point point-floating-3"></div>
            <div className="point point-floating-4"></div>
            <div className="point point-floating-5"></div>
            <div className="point point-floating-6"></div>
            <div className="point point-floating-7"></div>
            <div className="point point-floating-8"></div>
            <div className="point point-floating-9"></div>
        </div>
        <VanillaTilt>
        <div className="card">
            <div className="content">
                <h2>01</h2>
                <h3>Computer Science</h3>
                <p>정보사회의 나침판,<br/>흐름을 선도하는 소프트웨어 전문 인재</p>
                <Link to="/cs_intro" className="cardlink">Read More</Link>
                {/* <a className="cardlink" href={ <CSIntro/> }>Read More</a> */}
            </div>
        </div>
        <div className="card">
            <div className="content">
                <h2>02</h2>
                <h3>SMWU Engineer</h3>
                <p>세상을 바꾸는 부드러운 힘</p>
                <a className="cardlink" href="#">Read More</a>
            </div>
        </div>
        <div className="card">
            <div className="content">  
                <h2>03</h2>
                <h3>Software Convergence</h3>
                <p>창조적 소프트웨어 융합을 통한<br/>글로벌 여성공학 CEO 양성</p>
                <Link to="/sw_intro" className="cardlink">Read More</Link>
                {/* <a className="cardlink" href="sw_intro.html">Read More</a> */}
            </div>
        </div>
        </VanillaTilt>
        
        <div>
            <a className="smLink" href="https://snowboard.sookmyung.ac.kr/login.php" align="center" target="_blank">SNOWBOARD</a>
            <a className="smLink" href="http://www.sookmyung.ac.kr/sookmyungkr/index.do" align="center" target="_blank">SMWU HOME</a>
            <a className="smLink" href="https://portal.sookmyung.ac.kr/irj/portal" align="center" target="_blank">SM POTAL</a>
        </div>
        {/* <CSIntro /> */}
        <script type="text/javascript" src="./main.js">

        </script>
    </div>
  );
}



export default Main;
