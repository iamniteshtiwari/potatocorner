import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../components/common/Header';

function Shipping() {
    return (
        <>
            <Header />
            <section>
			    <div class="body">
				    <h3>Shipment Details</h3>
				    <p class="first">Please check your items and confirm it</p>
				    <div class="sel">
				    <div class="sel1">
					    <p>Lay's salt & Vineger</p>
					    <p class="space">1</p>
					    <p>$25</p>
				    </div>
				    <div class="sel2">
					    <p>RED ROCK DELI sweet chilli & sour cream</p>
					    <p class="space1">2</p>
					    <p>$50</p>
				    </div>
				    <div class="total">
					    <p>Total Price</p>
					    <p class="space2">3</p>
					    <p>$75</p>
				    </div>
				    </div>
				    <div class="form">
                        <span>Full Name</span><br/>
                        <input type = "name" required placeholder="Enter Recipient's Name"/><br/>
                        <br/><span>Phone Number</span><br/>
                        <input type = "pnumber" required placeholder="Enter Phone Number"/><br/>
                        <br/><span>Street address or P.O Box</span><br/>
                        <input type = "address" required placeholder="Enter Street address or P.O Box"/><br/>
                        <br/><span>PIN Code</span><br/>
                        <input type = "code" required placeholder="Enter PIN Code"/><br/>
                        <br/><span>Apt,Suit,Unit,Building</span><br/>
                        <input type = "Apt" required placeholder="Enter Apt,Suit,Unit,Building"/><br/>
                        <br/><span>City</span><br/>
                        <input type = "city" required placeholder="Enter City"/><br/>
                        <br/><span>State</span><br/>
                        <input type = "state" required placeholder="Enter State"/><br/>
                        <br/>
                        
                    </div>
                    <div class="submit">
                        <button type="submit">SUBMIT</button>
                    </div>
			
			    </div>
		    </section>
            
            

           
        </>
    );
}

export default Shipping;
