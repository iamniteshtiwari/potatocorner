import React from 'react'
import Header from '../components/common/Header'


export default function ThankYou() {
    return (
        <>
            <Header />
            <div class="top-b1">
                <h3>- Thank you for your ordering - </h3>
            </div>
            <section>
                <div class="thank">
                    <p>Thank you for your ordering. We received your request.</p>
                    <p>Our stuff will be contacting with you to tell next steps.</p>
                    <div class="submit1">
                        <button type="submit">Back to Home</button>
                    </div>
                </div>
            </section>
        </>
    );
}
