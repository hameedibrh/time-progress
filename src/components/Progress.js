import React from 'react'
import styled from 'styled-components';
import ProgressBar from './ProgressBar.js';
import Tilt from 'react-parallax-tilt';
import "./Progress.css";

            var firstDayOfYear = new Date(new Date().getFullYear(), 0, 1).getTime();
            var firstDayOfNextYear = new Date(new Date().getFullYear() + 1, 0, 1).getTime();
            const curDay = new Date().getTime();
            var tot_progress = Math.trunc(((curDay - firstDayOfYear) / (firstDayOfNextYear - firstDayOfYear) * 100));
            
          

            
                var currDate = new Date().getDate();
                var currMonth = new Date().getMonth();
                var currmonth = new Date().getMonth();
                var currhr = new Date().getHours();
                var currmin = new Date().getMinutes();
                var currsec = new Date().getSeconds();
                const currYear = new Date().getFullYear();
                if (currMonth===0 || currMonth===2 || currMonth===4 || currMonth===6 || currMonth===7 || currMonth===9 || currMonth===11)
                {
                    var monthend =31;
                }
                else if (currMonth===1 && currYear%4===0)
                {
                    monthend = 29;
                }
                else if (currMonth===1 && currYear%4!==0)
                {
                    monthend = 28;
                }
                else
                {
                    monthend =30;
                }

                if (currmonth>=0 && currmonth<=2 )
                {
                    if (currYear%4===0)
                   { var quadays = 91;}
                
                   else 
                   {quadays = 90;}
                }
                else if (currmonth>=3 && currmonth<=5 )
                {
                    quadays = 91;
                }
                else if (currmonth>=6 && currmonth<=8 )
                {
                    quadays = 92;
                }
                else if (currmonth>=9 && currmonth<=11 )
                {
                    quadays = 92;
                }

                if (currmonth===0)
                {
                    var quad=currDate;
                }
                else if (currmonth===1)
                {
                    quad=currDate+31;
                }
                else if (currmonth===2 && currYear%4===0)
                {
                    quad=currDate+31+29;
                }
                else if (currmonth===2 && currYear%4!==0)
                {
                    quad=currDate+31+28;
                }
                else if (currmonth===3)
                {
                    quad=currDate;
                }
                else if (currmonth===4)
                {
                    quad=currDate+30;
                }
                else if (currmonth===5)
                {
                    quad=currDate+30+31;
                }
                else if (currmonth===6)
                {
                    quad=currDate;
                }
                else if (currmonth===7)
                {
                    quad=currDate+30;
                }
                else if (currmonth===8)
                {
                    quad=currDate+30+31;
                }
                else if (currmonth===9)
                {
                    quad=currDate;
                }
                else if (currmonth===10)
                {
                    quad=currDate+31;
                }
                else if (currmonth===11)
                {
                    quad=currDate+30+31;
                }
                

                const anshh = ((((((currhr) + (currmin/60) + (currsec/(60*60)))/24)))*100);
                var ansh = Math.trunc((anshh).toFixed(100));
                const ansmm = (((currDate-1)/ monthend) * 100) + ansh/monthend;
                const ansm = Math.trunc(ansmm);
                if (currhr>=6 && currhr<12)
                {
                    var kadak = currhr-6;
                }

                else if (currhr>=12 && currhr<18)
                {
                     kadak = currhr-12;
                }

                else if (currhr>=18 && currhr<24)
                {
                     kadak = currhr-18;
                }

                else if (currhr>=0 && currhr<6)
                {
                     kadak = currhr;
                }

                const anspp = ((((((kadak) + (currmin/60) + (currsec/(60*60)))/6)))*100);
                var ansp = Math.trunc((anspp).toFixed(100));

                const ansqq = (((quad-1)/quadays)*100) + ansmm/quadays;
                const ansq = Math.trunc(ansqq);
            

                if (currhr>=6 && currhr<12)
                {
                    var event = 'Morning'
                }

                else if (currhr>=12 && currhr<18)
                {
                     event = 'Afternoon'
                }

                else if (currhr>=18 && currhr<24)
                {
                     event = 'Evening'
                }

                else if (currhr>=0 && currhr<6)
                {
                     event = 'Night'
                }

                



            

const Progress = () => {
    return (
        
        
        <div className = "containerr">
            <Tilt>
      <div style={{ height: '500px',width: '483px',  backgroundColor: '#E94242', borderRadius: '16px' }}>
        
      
        <Thola>
        <j1>Year Progress</j1>
                <j2>Quater Progress</j2>
                <j3>Month Progress</j3>
                <j4>Day Progress</j4>
                <j5>{event}</j5>
            
            <Josh1>
            <ProgressBar color={"#ffffff"} width={"360px"} value={tot_progress} max={100} />
            </Josh1>
            <Josh2>
            <ProgressBar color={"#ffffff"} width={"360px"} value={ansq} max={100} />
            </Josh2>
            <Josh3>
            <ProgressBar color={"#ffffff"} width={"360px"} value={ansm} max={100} />
            </Josh3>
            <Josh4>
            <ProgressBar color={"#ffffff"} width={"360px"} value={ansh} max={100} />
            </Josh4>
            <Josh5>
            <ProgressBar color={"#ffffff"} width={"360px"} value={ansp} max={100} />
            </Josh5>
        </Thola>
     

        </div>
    </Tilt>
                
            
        
        
        </div>
        
    );
};







const Thola = styled.div`


j1{
    position: absolute;

top: 10%;
left: 10%;



font-family: Montserrat;
font-style: normal;
font-weight: 800;
font-size: 18px;
line-height: 22px;
text-align: center;

color: #FFFFFF;
}
j2{
    position: absolute;

top: 25%;
left: 10%;



font-family: Montserrat;
font-style: normal;
font-weight: 800;
font-size: 18px;
line-height: 22px;
text-align: center;

color: #FFFFFF;
}
j3{
    position: absolute;

top: 40%;
left: 10%;



font-family: Montserrat;
font-style: normal;
font-weight: 800;
font-size: 18px;
line-height: 22px;
text-align: center;

color: #FFFFFF;
}
j4{
    position: absolute;


top: 55%;
left: 10%;



font-family: Montserrat;
font-style: normal;
font-weight: 800;
font-size: 18px;
line-height: 22px;
text-align: center;

color: #FFFFFF;
}
j5{
    position: absolute;

top: 70%;
left: 10%;




font-family: Montserrat;
font-style: normal;
font-weight: 800;
font-size: 18px;
line-height: 22px;
text-align: center;

color: #FFFFFF;
}
`;

const Josh1 = styled.div`
position: absolute;
top: 15%;
left: 9%;
`;

const Josh2 = styled.div`
position: absolute;
top: 30%;
left: 9%;
`;

const Josh3 = styled.div`
position: absolute;
top: 45%;
left: 9%;
`;

const Josh4 = styled.div`
position: absolute;
top: 60%;
left: 9%;
`;

const Josh5 = styled.div`
position: absolute;
top: 75%;
left: 9%;
`;




export default Progress
