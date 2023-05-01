import React, {useEffect, useState} from 'react';
import './style.scss'
import axios from "axios";
import {useParams} from "react-router";
import {AiOutlineHeart, AiOutlinePlus} from "react-icons/ai";
import {HiOutlineShare} from "react-icons/hi";
import {Link} from "react-router-dom";


const API_KEY = 'AIzaSyBR4V4Yo1z_nl5BN_Bzb7naT-Hp24-zIBQ';
const DetailPage = () => {
    const [books, setBooks] = useState([])
    const [count, setCount] = useState(1);
    const [price, setPrice] = useState(99)
    // const {booksId} = useParams()

    const {id} = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`)
            .then(response => {
                setBook(response.data);
            })
            .catch(error => console.error(error));
    }, [id]);

    if (!book) {
        return <div>Loading...</div>;
    }

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
            {/*{books.map(book => (*/}
            <div className="detailMain" key={book.id}>
                <img className="detailMain__img"
                     src={
                         book.volumeInfo.imageLinks
                             ? book.volumeInfo.imageLinks.thumbnail
                             : 'https://via.placeholder.com/150x200?text=No+Image'
                     }
                     alt={book.volumeInfo.title}
                />
                <div className="detailMain__info">
                    <div className="detailMain__info--title">
                        <h1>{book.volumeInfo.title}</h1>
                        <a href="/DetailBooks">
                            <AiOutlineHeart size={"2rem"} className="heartIcon"/>
                        </a>
                        <HiOutlineShare size={"2rem"} className="shateIcon"/>

                    </div>


                    <p>Author: {book.volumeInfo.authors}</p>
                    <p>Published Date: {book.volumeInfo.publishedDate}</p>
                    <p className='detailMain__info--desc'>Description: {book.volumeInfo.description}</p>

                    <p className="detailMain__info--price">$ {price}</p>
                    <div className="">
                        <Link to="/DetailBooks">
                            <button className='detailMain__info--btn'>Add to Cart</button>
                        </Link>
                        <div className="detailMain__info--count">
                            <button onClick={decrementCount}>-</button>
                            <p>{count}</p>
                            <button onClick={incrementCount}>+</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DetailPage;