import React, {useEffect, useState} from 'react';
import './style.scss'
import axios from "axios";
import {useParams} from "react-router";
import {AiOutlineHeart, AiOutlinePlus} from "react-icons/ai";
import {HiOutlineShare} from "react-icons/hi";
import {Link} from "react-router-dom";

const DetailPage = () => {
    const [books, setBooks] = useState([])
    const [count, setCount] = useState(0);
    const [price, setPrice] = useState(0)
    const {booksId} = useParams()

    const getBooks = async (id) => {
        try {
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=code+complete&maxResults=1`)
            const {data} = await response
            setBooks(data.items)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getBooks(booksId)
    }, [])

    const incrementCount = () => {
        setCount(count + 1);
        setPrice(price + 99)
    };

    const decrementCount = () => {
        setCount(count - 1);
        setPrice(price - 99)
    };


    return (
        <div>
            {books.map(book => (
                <div className="detailMain" key={book.id}>
                    <img className="detailMain__img" src={book.volumeInfo.imageLinks.thumbnail} alt="{{book.img}}"/>
                    <div className="detailMain__info">
                        <div className="detailMain__info--title">
                            <h1>{book.volumeInfo.title}</h1>
                            {/*<link to="/DetailBooks">*/}
                                <AiOutlineHeart size={"2rem"} className="heartIcon" />
                            {/*</link>*/}

                            <HiOutlineShare size={"2rem"} className="shateIcon" />
                        </div>


                        <p>Author: {book.volumeInfo.authors}</p>
                        <p>Published Date: {book.volumeInfo.publishedDate}</p>
                        <p className='detailMain__info--desc'>Description: {book.volumeInfo.description}</p>

                        <h3 className='detailMain__info--price'>$ {price}</h3>
                        <div className="">
                            <Link to="/DetailBooks">
                                <button className='detailMain__info--btn'>Add to Cart </button>
                            </Link>
                            <div className="detailMain__info--count">
                                <button onClick={decrementCount}>-</button>
                                <p>{count}</p>
                                <button onClick={incrementCount}>+</button>
                            </div>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    );
};

export default DetailPage;