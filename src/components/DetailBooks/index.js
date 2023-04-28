import './style.scss'
import './media.scss'
import Boy from '../../img/boy.png'
import Art from '../../img/art.png'
import Harry from '../../img/harry.png'
import React, {useState} from "react";

const DetailBooks = () => {
    const [remove, setRemove] = useState(false)

    return (
        <div id='detail'>
            <div className="container">
                <div className="description" style={{display: remove ? 'block' : 'none'}}>
                    <center><h1>Nothing found...🫠</h1></center>
                </div>
                <div className="yourCart"  style={{display: remove ? 'none' : ''}}>
                    <h1>Your cart</h1>
                    <p>Not ready to checkout? <span>Continue Shopping</span></p>
                </div>

                <div className="detail" style={{display: remove ? 'none' : ''}}>

                    <div className='detail--wrap'>
                        <div className="detail--wrap__block "  style={{display: remove ? 'none' : ''}}>
                            <img src={Boy} alt=""/>
                            <div className="detail--wrap__block--content">
                                <div className="detail--wrap__block--content__texty">
                                    <h1>THE BOY, THE MOLE, THE FOX AND THE HORSE</h1>
                                    <button className="detail--wrap__block--content__texty__remove"
                                            onClick={() => setRemove(true)}>Remove
                                    </button>
                                </div>
                                <h4>by Charlie Mackesy</h4>
                                <div className='detail--wrap__block--content__quantity'>
                                    <h3>Quantity: 1</h3>
                                    <h4>$99</h4>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="detail--wrap__block">
                            <img src={Art} alt=""/>
                            <div className="detail--wrap__block--content">
                                <div className="detail--wrap__block--content__texty">
                                    <h1>THE SUBTLE ART OF NOT GIVING A F*CK</h1>
                                    <button className="detail--wrap__block--content__texty__remove"
                                            onClick={() => setRemove(true)}>Remove
                                    </button>
                                </div>
                                <h4>by Charlie Mackesy</h4>
                                <div className='detail--wrap__block--content__quantity'>
                                    <h3>Quantity: 1</h3>
                                    <h4>$99</h4>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="detail--wrap__block">
                            <img src={Harry} alt=""/>
                            <div className="detail--wrap__block--content">
                                <div className="detail--wrap__block--content__texty">
                                    <h1>HARRY POTTER</h1>
                                    <button className="detail--wrap__block--content__texty__remove"
                                            onClick={() => setRemove(true)}>Remove
                                    </button>
                                </div>
                                <h4>by Charlie Mackesy</h4>
                                <div className='detail--wrap__block--content__quantity'>
                                    <h3>Quantity: 1</h3>
                                    <h4>$99</h4>
                                </div>
                            </div>
                        </div>
                        <hr/>

                    </div>

                    <div className="detail--select">
                        <h1>Order Summary</h1>

                        <div className="detail--select__met">
                            <h3>Shipping</h3>
                            <select>
                                <option>Select Method</option>
                                <option>Select Method</option>
                                <option>Select Method</option>
                                <option>Select Method</option>
                            </select>
                        </div>
                        <div className="detail--select__met">
                            <h3>Payment</h3>
                            <select>
                                <option>Select Method</option>
                                <option>Select Method</option>
                                <option>Select Method</option>
                                <option>Select Method</option>
                            </select>
                        </div>
                        <hr/>

                        <div className="detail--select__total">
                            <h1>Total</h1>
                            <h3>$188</h3>
                        </div>
                        <button className="detail--select__btn">Continue to checkout</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default DetailBooks;