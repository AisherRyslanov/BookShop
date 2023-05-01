import React, {useEffect, useState} from 'react';
import './style.scss'
import Slider from "react-slick"
import {Link} from "react-router-dom";
import axios from "axios";

const Books = () => {

    const [books, setBooks] = useState([])

    const getBooks = async () => {
        try {
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=code+complete`)
            const {data} = await response
            setBooks(data.items)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getBooks()
    }, [])

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
                        {books.map((item) => (
                            <>
                            <Link to={`/DetailPage/${item.id}`} key={item.id}>
                                <img src={item.volumeInfo.imageLinks.thumbnail} alt=""/>
                            </Link>
                            <h2>{item.volumeInfo.title}</h2>
                            <p>{item.volumeInfo.authors}</p>
                            </>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>

    );
}


export default Books;