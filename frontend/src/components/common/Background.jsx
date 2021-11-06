import React from 'react'
import back1 from '../../assets/img/img1.png';
import back2 from '../../assets/img/img-main.png';

function Background() {
    return (
        <>
            <section class= "main">
                <img class="image1" src={back1} alt="" />
                <div class="main-img">
                        <h1>
                            POTATO CHIPS <br />
                            WITH
                            <br />3 DIFFERENT
                            <br />
                            FLAVOURs{' '}
                        </h1>
                        <img src={back2} alt="" />
                    </div>
                
            </section>
        </>
    );
}

export default Background
