import Head from 'next/head';
import BasicTripCard from './components/BasicTripCard'
const changeFlightInfoPrototype = {
    "rId": 0,
    "cTime": "cTime",
    "cType": "cType",
    "cState": "cState",
    "flightNo": "flightNo",
    "dDate": "dDate",
    "aDate": "aDate",
    "dTime": "dTime",
    "aTime": "aTime",
    "dCity": "dCity",
    "aCity": "aCity",
};
export default function cardList() {
    const changeFlightInfoList = [{ ...changeFlightInfoPrototype, rId: Math.floor(Math.random()*1000) }];
    changeFlightInfoList.push({ ...changeFlightInfoPrototype, rId: Math.floor(Math.random()*1000) });
    changeFlightInfoList.push({ ...changeFlightInfoPrototype, rId: Math.floor(Math.random()*1000), cState: 'pending' });
    console.dir(changeFlightInfoList)
    return (<div className="card-container">
        <Head>
            <style>
                {`div {
                    margin: 0px;
                    padding: 0px;
                    }
                    .card-container{
                    display: flex;
                    }
                    .card{
                    margin: 5px;
                    font-size: 4px;
                    }
                    .state{
                    color:grey;
                    margin:4px;
                    }
                    .entity {
                    display: flex;
                    flex-direction: column;
                    /*   width: 140px; */
                    /*   height: 60px; */
                    padding: 4px;
                    border-radius: 4px;
                    color: white;
                    font-size: 6px;
                    background-color: #bfbafa;
                    background-image: linear-gradient(#bfbafa, #7a71fd);
                    box-shadow: 0 0 3px #7a71fd;
                    display: flex;
                    }
                    .time-container {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    }
                    .time{
                    font-size: 20px;
                        font-family: fantasy;
                    }
                    .space-between {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    }
                    .changed{
                    text-shadow: 0px 0px 3px #7a71fd;
                        color: yellow;
                    }
                    .arrow{
                    position:relative;
                        top: 45px;
                        left: -15px;
                    width:50px;
                    height:50px;
                    /*   background-color: #bfbafa; */
                    transform:rotate(45deg);
                    background-image: linear-gradient(45deg,rgba(255,0,0,0),rgba(255,0,0,0), #bfbafa);
                    }
                    .pending{
                    background-color: white;
                    background-image: linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.4));
                    box-shadow: 0 0 3px #444857;
                        -webkit-animation-timing-function:ease-in-out;
                        -webkit-animation-name:breathe;
                        -webkit-animation-duration:700ms;
                        -webkit-animation-iteration-count:infinite;
                        -webkit-animation-direction:alternate;
                    }
                    @-webkit-keyframes breathe {
                        0% {
                        opacity:.7;
                    }`}
            </style>
        </Head>
        {changeFlightInfoList.map((changeFlightItem) => {

            return (<>
                <div className="arrow"></div>
                <BasicTripCard {...changeFlightItem}/>
            </>)
        })}
    </div>)
}