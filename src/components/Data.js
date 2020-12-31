import React from 'react'
import styled from 'styled-components';
import "./data.css";

const currDate = new Date().getDate();
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const currMonth = months[new Date().getMonth()];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currDay = days[new Date().getDay()];
const currYear = new Date().getFullYear();


                var currmonth = new Date().getMonth();

                if (currmonth>=0 && currmonth<=2 )
                {
                    var q=1;
                }
                else if (currmonth>=3 && currmonth<=5 )
                {
                    q=2;
                }
                else if (currmonth>=6 && currmonth<=8 )
                {
                    q=3;
                }
                else if (currmonth>=9 && currmonth<=11 )
                {
                    q=4;
                }

const Data = () => {
   
    return (
        <div className = "Container">
            
                <div className='m1'>CURRENT DATE</div>
                <div className='m2'>CURRENT MONTH</div>
                <div className='m3'>CURRENT YEAR</div>
                <div className='m4'>CURRENT QUATER</div>
                <div className='m5'>CURRENT DAY</div>
                <div className='p1'> {currDate}</div>
                <div className='p2'>{currMonth}</div>
                <div className='p3'>{currYear}</div>
                <div className='p4'>{q}</div>
                <div className='p5'>{currDay}</div>
                
            
        </div>
        
    )
}


const Container = styled.div`
position: absolute;
justify-content: center;
allign-items: center;
left: 1080px;
top: 200px;

  

`;

const Matter = styled.div`
m1{
    position: absolute;
width: 100px;
height: 27px;


font-family: Oswald;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 27px;
/* identical to box height */


color: #EA0000;
};
m2{
    position: absolute;
width: 150px;
height: 27px;
top: 100px;

font-family: Oswald;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 27px;
/* identical to box height */


color: #EA0000;
};
m3{
    position: absolute;
width: 150px;
height: 27px;
top: 200px;

font-family: Oswald;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 27px;
/* identical to box height */


color: #EA0000;
};
m4{
    position: absolute;
width: 150px;
height: 27px;
top: 300px;

font-family: Oswald;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 27px;
/* identical to box height */


color: #EA0000;
};
m5{
    position: absolute;
width: 100px;
height: 27px;
top: 400px;

font-family: Oswald;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 27px;
/* identical to box height */


color: #EA0000;
};

p1{
    position: absolute;
    width: 192px;
    height: 60px;
    top: 15px;
    
    font-family: Oswald;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 71px;
    
    color: #000000;
};
p2{
    position: absolute;
    width: 192px;
    height: 60px;
    top: 115px;
    
    font-family: Oswald;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 71px;
    
    color: #000000;
};

p3{
    position: absolute;
    width: 192px;
    height: 60px;
    top: 215px;
    
    font-family: Oswald;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 71px;
    
    color: #000000;
};
p4{
    position: absolute;
    width: 192px;
    height: 60px;
    top: 315px;
    
    font-family: Oswald;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 71px;
    
    color: #000000;
};
p5{
    position: absolute;
    width: 192px;
    height: 60px;
    top: 415px;
    
    font-family: Oswald;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 71px;
    
    color: #000000;
};
`;

export default Data
