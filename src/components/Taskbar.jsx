import React from "react";
import { Grid, HelpCircle, LogOut, PlusCircle, Slack, Users } from "react-feather";







function Taskbar() {
  return (
    <>
      <div className="taskbar">
        <div className="t1">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXHZTQs8ojYjldwZDeEM73Fk6h4BOOXGRL1A&usqp=CAU"
            alt=""
          />
          <h4>
            Ram Mohan <span style={{ color: "blue",backgroundColor:'white' }}>&gt;</span>{" "}
          </h4>
          <h6>rammohan2@gmail.com</h6>
        </div>

        <div className="t2">
          <button><span style={{color:'blue'}}> <Grid/></span><span  >Dashboards</span></button>
          <br />
          <button><span style={{color:'blue'}}> <Slack/></span><span>Perks</span></button>
          <br />
          <button><span style={{color:'blue'}}> <PlusCircle/></span><span>Addons</span></button>
          <br />
          <button> <span style={{color:'blue'}}> <HelpCircle/></span> <span> FAQ</span></button>
          <br />
          <button><span style={{color:'blue'}}> <Users/></span><span>Support</span></button>
          <br />

         <div style={{marginTop:'35px',backgroundColor:'white'}}> <button><span style={{color:'blue'}}> <LogOut/></span>logout</button></div>
        </div>
      </div>
    </>
  );
}

export default Taskbar;
