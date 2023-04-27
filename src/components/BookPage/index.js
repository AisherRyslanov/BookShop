import React, {useEffect, useState} from 'react';
import './style.scss'
import {Link, NavLink} from "react-router-dom";
import {HiOutlineArrowSmDown} from "react-icons/hi";
import axios from "axios";
import Checkbox from '../../img/Checkbox Off.png'
import Slider from "react-slick";
import {GoSettings} from "react-icons/go";

const BooksPage = () => {

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

    // const btn =


    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 3,
        vertical: true,
        verticalSwiping: true,
        beforeChange: function (currentSlide, nextSlide) {
            console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function (currentSlide) {
            console.log("after change", currentSlide);
        }
    }

    const [isOpen, setIsOpen] = useState(false);

    const toggleBlock = () => {
        setIsOpen(!isOpen);
    };
    const closeBlock = () => {
        setIsOpen(false);
    };

    return (
        <div className='container'>
            <div className='booksPage'>
                <div className="booksPage__first">
                    <h1>All Books</h1>
                    <p>Here you can find all the books you need</p>
                </div>
                <div className="booksPage__second">
                    <div className="booksPage__second--main">
                        <button>Sort By <span>Popular</span> <HiOutlineArrowSmDown/></button>
                        <button onClick={() => {
                            toggleBlock()
                        }} className='booksPage__second--main__set'><GoSettings/></button>
                    </div>
                </div>
                <div className="booksPage__third">
                    <div className="booksPage__third--main">
                        <h2>Filters</h2>
                        <a className=''>Clear filters</a>
                    </div>

                    <h3 className='booksPage__genres'>Genres</h3>

                </div>
                <div className="booksPage__fourth">
                    <div className="booksPage__fourth--blok">
                        <img src={Checkbox} alt=""/>
                        <h3>Autographed Books</h3>
                    </div>
                    <div className="booksPage__fourth--blok">
                        <img src={Checkbox} alt=""/>
                        <h3>Sci-Fi</h3>
                    </div>
                    <div className="booksPage__fourth--blok">
                        <img src={Checkbox} alt=""/>
                        <h3>For kids</h3>
                    </div>
                    <div className="booksPage__fourth--blok">
                        <img src={Checkbox} alt=""/>
                        <h3>For teenagers</h3>
                    </div>
                    <div className="booksPage__fourth--blok">
                        <img src={Checkbox} alt=""/>
                        <h3>Finance</h3>
                    </div>
                    <div className="booksPage__fourth--blok">
                        <img src={Checkbox} alt=""/>
                        <h3>Detective</h3>
                    </div>
                    <div className="booksPage__fourth--blok">
                        <img src={Checkbox} alt=""/>
                        <h3>Romantic</h3>
                    </div>
                    <div className="booksPage__fourth--blok">
                        <img src={Checkbox} alt=""/>
                        <h3>Psychology</h3>
                    </div>
                    <div className="booksPage__fourth--blok">
                        <img src={Checkbox} alt=""/>
                        <h3>Self-Improvement</h3>
                    </div>
                    <div className="booksPage__fourth--blok">
                        <img src={Checkbox} alt=""/>
                        <h3>Educational</h3>
                    </div>
                    <div className="booksPage__fourth--blok">
                        <img src={Checkbox} alt=""/>
                        <h3>Literature</h3>
                    </div>
                    <div className="booksPage__fourth--blok">
                        <img src={Checkbox} alt=""/>
                        <h3>Religion</h3>
                    </div>

                </div>
                <div className="booksPage__fifth">


                    {books.map((item) => (
                        <div key={item.id}>
                            <img src={item.volumeInfo.imageLinks.thumbnail} alt=""/>
                            <h2>{item.volumeInfo.title}</h2>
                            <p>{item.volumeInfo.authors}</p>
                        </div>
                    ))}

                </div>

                <div className="booksPage__filters">
                    <div className={`block ${isOpen ? "open" : ""}`}>
                        <strong className="close" onClick={closeBlock}>x</strong>
                        <div className="booksPage__filters--title">
                            <h2>Filters</h2>
                            <a href="">Clear filters</a>

                        </div>

                        <h3 className='booksPage__filters--gen'>Genres</h3>
                        <div className="">
                            <Slider {...settings}>

                                <div className="booksPage__filters--blok">
                                    <input type="radio" src={Checkbox} alt=""/>
                                    <h3>Autographed Books</h3>
                                </div>
                                <div className="booksPage__filters--blok">
                                    <input type="radio" src={Checkbox} alt=""/>
                                    <h3>Sci-Fi</h3>
                                </div>
                                <div className="booksPage__filters--blok">
                                    <input type="radio" src={Checkbox} alt=""/>
                                    <h3>For kids</h3>
                                </div>
                                <div className="booksPage__filters--blok">
                                    <input type="radio" src={Checkbox} alt=""/>
                                    <h3>For teenagers</h3>
                                </div>
                                <div className="booksPage__filters--blok">
                                    <input type="radio" src={Checkbox} alt=""/>
                                    <h3>Finance</h3>
                                </div>
                                <div className="booksPage__filters--blok">
                                    <input type="radio" src={Checkbox} alt=""/>
                                    <h3>Detective</h3>
                                </div>
                                <div className="booksPage__filters--blok">
                                    <input type="radio" src={Checkbox} alt=""/>
                                    <h3>Romantic</h3>
                                </div>
                                <div className="booksPage__filters--blok">
                                    <input type="radio" src={Checkbox} alt=""/>
                                    <h3>Psychology</h3>
                                </div>
                                <div className="booksPage__filters--blok">
                                    <input type="radio" src={Checkbox} alt=""/>
                                    <h3>Self-Improvement</h3>
                                </div>
                                <div className="booksPage__filters--blok">
                                    <input type="radio" src={Checkbox} alt=""/>
                                    <h3>Educational</h3>
                                </div>
                                <div className="booksPage__filters--blok">
                                    <input type="radio" src={Checkbox} alt=""/>
                                    <h3>Literature</h3>
                                </div>
                                <div className="booksPage__filters--blok">
                                    <input type="radio" src={Checkbox} alt=""/>
                                    <h3>Religion</h3>
                                </div>

                            </Slider>
                        </div>

                        <button className='booksPage__filters--btn'>Apply Filter</button>

                    </div>

                </div>
            </div>
        </div>
    );
};


export default BooksPage;