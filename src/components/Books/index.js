import React, {useEffect, useState} from 'react';
import './style.scss'
import Slider from "react-slick"
import {Link} from "react-router-dom";
import axios from "axios";

const API_KEY = 'AIzaSyD1z1aKy9_iFzifYabztZePoe4Z-OsPU0Q'

const Books = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=search+terms&startIndex=0&maxResults=10&key=${API_KEY}`)
            .then(response => {
                setBooks(response.data.items);
            })
            .catch(error => console.error(error));
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    };



    return (
        <div className="container">
            <div className='books'>
                <div className="books__title">
                    <h1>Books</h1>
                    <Link to="/BookPage" className='books__view'>View all</Link>
                </div>
                <div className="books__anyBooks">
                    <Slider {...settings}>
                        {/*{books.map((item) => (*/}
                        {/*    <>*/}
                        {/*    <Link to={`/DetailPage/${item.id}`} key={item.id}>*/}
                        {/*        <img src={item.volumeInfo.imageLinks.thumbnail} alt=""/>*/}
                        {/*    </Link>*/}
                        {/*    <h2>{item.volumeInfo.title}</h2>*/}
                        {/*    <p>{item.volumeInfo.authors}</p>*/}
                        {/*    </>*/}
                        {/*))}*/}

                            {books.map(book => (
                                <div key={book.id}>
                                    <Link to={`/DetailPage/${book.id}`}>
                                        <img
                                            src={
                                                book.volumeInfo.imageLinks
                                                    ? book.volumeInfo.imageLinks.thumbnail
                                                    : 'https://via.placeholder.com/150x200?text=No+Image'
                                            }
                                            alt={book.volumeInfo.title}
                                        />
                                    </Link>
                                    <h2>{book.volumeInfo.title}</h2>
                                    <p>{book.volumeInfo.authors}</p>
                                </div>
                            ))}
                    </Slider>
                </div>
            </div>
        </div>

    );
}


export default Books;