import "../styles/Channels.css";
import channel1 from "../images/channel1.jpg";
import channel2 from "../images/channel2.png";
import channel3 from "../images/channel3.jpg";
import channel4 from "../images/channel4.jpg";
import channel5 from "../images/channel5.jpg";
import channel6 from "../images/channel6.jpg";
import channel7 from "../images/channel7.jpg";
const Channels = () => {
    const channels = [channel1, channel2, channel3, channel4, channel5, channel6, channel7];
  return (
    <>
       <div className="channels">
              <div className="channel">
                  {channels.map((channel)=>{
                       return  <img src={channel} alt="channel" />
                  })}
                
         </div>
      </div>
    </>
  )
}

export default Channels
