import './style.scss'
import './media.scss'
import Boy from '../../img/boy.png'
import Art from '../../img/art.png'
import Harry from '../../img/harry.png'
import React, {useEffect, useState} from "react";
import axios from "axios";

const DetailBooks = () => {
    const [remove, setRemove] = useState(false)
    const [books, setBooks] = useState([])

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
                            <div className="detail--wrap__block " style={{display: remove ? 'none' : ''}}>
                                <img src={item.volumeInfo.imageLinks.thumbnail} alt=""/>
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
                                <img src={item.volumeInfo.imageLinks.thumbnail} alt=""/>
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
                                <img src={item.volumeInfo.imageLinks.thumbnail} alt=""/>

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
                ))}
            </div>
        </div>
    );
};

export default DetailBooks;