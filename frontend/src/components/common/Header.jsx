import React from 'react';
import cart from '../../assets/img/icon.svg';


function Header() {
    return (
        <>
            <header>
                 <section class="main">
                    <div class="logo">
                        <p><span class="tag">Potato</span>Corner</p>
                    </div>
                    <nav class="navbar">
                        <ul class="tag">
                            <li class="nav">
                                <a class="signin" href="Signin">Sign in</a>
                               <a href = "Cart"> <img src= {cart} alt="" /></a>
                            </li>
                        </ul>
                    </nav>
                   
                </section>

    
            </header>
        </>
    );
}

export default Header;
