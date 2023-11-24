import React from "react";

function Maincontent() {
  return (
    <>
      <div className="main">
        <div className="mainhead">
          <h3>Choose a plan that's just right for you !</h3>

          <div className="mbtn">
            
            <button className="btn1">Monthly</button>
            <button className="btn2">
              Annualy <span>(-10%)</span>
            </button>
          </div>
        </div>

        <div className="maincn1">
          <div className="cd1">
            <h2>Basic</h2>
            <h6>$ 89.99/mo</h6>
            <h2 className="price">$ 9.99/mo</h2>
            <button style={{backgroundColor:'#ffe7a9'}}>Get Started</button>
            <div class="line"></div>
            <h5>What you will get:</h5>
            <h5>Upto 25 users</h5>
            <h5>Upto 25gb Storage</h5>
            <h5>Email support</h5>
            <a href="">EXPLORE FEATURES</a>
          </div>
          <div className="cd1">
            <h2>Standard</h2>
            <h6>$ 189.99/mo</h6>
            <h2 className="price">$ 99.99/mo</h2>
            <button style={{backgroundColor:'#fe9494'}}>Get Started</button>
            <div class="line"></div>
            <h5>What you will get:</h5>
            <h5>Upto 50 users</h5>
            <h5>Upto 60gb Storage</h5>
            <h5>Email+chat support</h5>
            <a href="">EXPLORE FEATURES</a>
          </div>
          <div className="cd1">
            <h2>Premium</h2>
            <h6>$ 389.99/mo</h6>
            <h2 className="price">$ 199.99/mo</h2>
            <button style={{backgroundColor:'#e7a2ff'}}>Get Started</button>
            <div class="line"></div>
            <h5>What you will get:</h5>
            <h5>Upto 75 users</h5>
            <h5>Upto 100gb Storage</h5>
            <h5>Email+chat+whatsapp support</h5>
            <a href="">EXPLORE FEATURES</a>
          </div>
        </div>

        <div className="maincn2">

          <div className="lw1">
            <div style={{marginLeft:'7px'}}>
              <button className="sm">Free Forever</button>
              <h1>Free Starter</h1>
              <p>The quickest and easiest way to try Protocols with basic functionalities</p>
              <button className="bg" >Get Started</button>

            </div>
            <div style={{marginLeft:'7px'}}>

            <h5>What you will get:</h5>
            <h5>Upto 75 users</h5>
            <h5>Upto 100gb Storage</h5>
            <h5>Basics of document,task flow,Voting,Accounting,Notes,Investor,Director and Team Management included</h5>

            </div>

          </div>
          <div className="lw1">
            <div style={{marginLeft:'7px'}}>
              <button className="sm"  style={{backgroundColor:'#8ab9fd'}}>Let's Connect</button>
              <h1>Enterprise Plan</h1>
              <p style={{fontSize:'13px'}}>Effortless customize and fine-tune services as your needs shift, ensuring the prefect tools for success</p>
              <button className="bg" style={{backgroundColor:'#8ab9fd'}} >Get Started</button>

            </div>
            <div style={{marginLeft:'7px'}}>

            <h5>What you will get:</h5>
            <h5>Upto 75 users</h5>
            <h5>customization of all other features</h5>
            <h5>Some unique features are provided as add-ons with indivitual plans for each features</h5>

            </div>

          </div>

        </div>


      </div>
    </>
  );
}

export default Maincontent;
