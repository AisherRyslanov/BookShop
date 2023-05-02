import './style.scss'
import './media.scss'

import React, {useEffect, useState} from "react";
import axios from "axios";
import {AiOutlineRightCircle} from "react-icons/ai";

const DetailBooks = () => {
    const [remove, setRemove] = useState(false)
    const [books, setBooks] = useState([])
    const [select, setSelect] = useState(false)
    const [count, setCount] = useState(0);
    const [price, setPrice] = useState(0)
    const [quantity , setQuantity] = useState(1)


    const getBooks = async () => {
        try {
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=code+complete&maxResults=1`)
            const {data} = await response
            setBooks(data.items)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getBooks()
    }, [])
 const increment = (setCount,setPrice) =>{
     setQuantity(quantity +1)
 }
 const decrement = (setCount,setPrice) =>{
     setQuantity(quantity -1)
 }

    return (
        <div id='detail'>
            <div className="container">
                <div className="description" style={{display: remove ? 'block' : 'none'}}>
                    <center><h1>Nothing found...🫠</h1></center>
                </div>
                <div className="yourCart" style={{display: remove ? 'none' : ''}}>
                    <h1>Your cart</h1>
                    <p>Not ready to checkout? <span>Continue Shopping</span></p>
                </div>

                {books.map((item) => (

                    <div className="detail" style={{display: remove ? 'none' : ''}}>

                        <div className='detail--wrap'>
                            <div className="detail--wrap__block" style={{display: remove ? 'none' : ''}}>
                                <img  width="30%"  src={item.volumeInfo.imageLinks.thumbnail} alt=""/>
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
                                <img  width="30%"  src={item.volumeInfo.imageLinks.thumbnail} alt=""/>
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
                                <img width="30%" src={item.volumeInfo.imageLinks.thumbnail} alt=""/>

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

                            <div className="detail--select__shipping">
                             <details>
                                 <div style={{
                                     display: "flex",
                                     flexDirection: "column"
                                 }}>

                                     <input type="text" placeholder="Your address"/>
                                     <input type="number" placeholder="Your phone number"/>
                                     <button className="detail--select__shipping--send">Send</button>
                                 </div>
                                 <summary>
                                     <p>SHIPPING</p>
                                     <h5 className="h5">Select Method <AiOutlineRightCircle
                                     onClick={() => setSelect(!select)}
                                     style={{
                                         transform: select ? '' : "rotate(90deg)"
                                     }}
                                     /></h5>
                                 </summary>
                             </details>
                            </div>
                            <div className="detail--select__shipping" >
                                <details>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "column"
                                    }}>
                                        <select>
                                            <option>OPTIMA BANK</option>
                                            <option>KEREMET BANK</option>
                                            <option>BAKAI BANK</option>
                                            <option>RSK BANK</option>
                                        </select>
                                        <input type="number" placeholder="Your card number"/>
                                        <input type="text" placeholder="Name on card"/>
                                        <div style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                        }}>
                                            <input className="detail--select__shipping--code__in1" style={{
                                                width: "30%",

                                            }}  type="text" placeholder="ММ/ГГ"/>
                                            <input  className="detail--select__shipping--code__in2" style={{
                                                width: "30%"
                                            }}  type="text" placeholder="CVV/CVC"/>
                                        </div>
                                    </div>
                                    <summary>
                                        <p>PAYMENT</p>
                                        <h5 className="h5">Select Method <AiOutlineRightCircle
                                            onClick={() => setSelect(!select)}
                                            style={{
                                                transform: select ? '' : "rotate(90deg)"
                                            }}
                                        /></h5>
                                    </summary>
                                </details>
                            </div>



                            <div className="detail--select__total">
                                <h1>Total</h1>
                                <h3>$188</h3>
                            </div>
                            <button className="detail--select__btn">Continue to checkout</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DetailBooks;