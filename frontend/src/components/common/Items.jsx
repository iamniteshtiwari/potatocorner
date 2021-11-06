import React from 'react'
import lays1 from '../../assets/img/image-lays1.png';
import lays2 from '../../assets/img/image-lays2.png';
import lays3 from '../../assets/img/image-lays3.png';
import lays4 from '../../assets/img/image-lays4.png';
import lays5 from '../../assets/img/image-lays5.png';
import lays6 from '../../assets/img/image-lays6.png';
import lays7 from '../../assets/img/image-lays7.png';
import lays8 from '../../assets/img/image-lays8.png';
import lays9 from '../../assets/img/image-lays9.png';
import lays10 from '../../assets/img/image-lays10.png';

const Items = (item) => {
    return (
        <>
            <section>
                <div class="images">
                    <ul class="“menu”">
                        <li>
                            <img src={lays1} alt="“”" />
                            <h3>
                                Lays’s <br />
                                Salt and Vinegar
                            </h3>
                            <h6>250 gm</h6>
                            <p>$25</p>
                            <button class="btn">
                                <span>- </span>Add<span> +</span>
                            </button>
                        </li>
                        <li>
                            <img src={lays2} alt="“”" />
                            <h3>
                                Lays’s <br />
                                Lime & Black Pepper
                            </h3>
                            <h6>250 gm</h6>
                            <p>$25</p>
                            <button class="btn">
                                Add<span> +</span>
                            </button>
                        </li>
                        <li>
                            <img src={lays3} alt="“”" />
                            <h3>
                                Lays’s <br />
                                Australian SEA SALT
                            </h3>
                            <h6>250 gm</h6>
                            <p>$25</p>
                            <button class="btn">
                                Add<span> +</span>
                            </button>
                        </li>
                        <li>
                            <img src={lays4} alt="“”" />
                            <h3>
                                Lays’s <br />
                                Barbecue
                            </h3>
                            <h6>250 gm</h6>
                            <p>$25</p>
                            <button class="btn">
                                Add<span> +</span>
                            </button>
                        </li>
                        <li>
                            <img src={lays5} alt="“”" />
                            <h3>
                                Lays’s <br />
                                Honey Soy Chicken
                            </h3>
                            <h6>250 gm</h6>
                            <p>$25</p>
                            <button class="btn">
                                Add<span> +</span>
                            </button>
                        </li>
                        <li>
                            <img src={lays6} alt="“”" />
                            <h3>
                                Lays’s <br />
                                Flamin’Hot
                            </h3>
                            <h6>250 gm</h6>
                            <p>$25</p>
                            <button class="btn">
                                Add<span> +</span>
                            </button>
                        </li>
                        <li>
                            <img src={lays7} alt="“”" />
                            <h3>
                                Lays’s <br />
                                Kettle Jalapeno
                            </h3>
                            <h6>250 gm</h6>
                            <p>$25</p>
                            <button class="btn">
                                Add<span> +</span>
                            </button>
                        </li>
                        <li>
                            <img class="img8" src={lays8} alt="“”" />
                            <h3>
                                Lays’s <br />
                                Pringles the Original
                            </h3>
                            <h6>250 gm</h6>
                            <p>$25</p>
                            <button class="btn">
                                Add<span> +</span>
                            </button>
                        </li>
                        <li>
                            <img class="img9" src={lays9} alt="“”" />
                            <h3>
                                Lays’s <br />
                                Cape COD
                            </h3>
                            <h6>250 gm</h6>
                            <p>$25</p>
                            <button class="btn">
                                Add<span> +</span>
                            </button>
                        </li>
                        <li>
                            <img src={lays10} alt="“”" />
                            <h3>
                                Lays’s <br />
                                Deep River
                            </h3>
                            <h6>250 gm</h6>
                            <p>$25</p>
                            <button class="btn">
                                Add<span> +</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}

export default Items
