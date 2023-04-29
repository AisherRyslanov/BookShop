import React, {useEffect, useState} from 'react';
import Climate from "../../img/Climate.png"
import Rest from "../../img/rest.png"
import Name from "../../img/name.png"
import "./style.scss"
import axios from "axios";

const NewBooks = () => {

    const [books, setBooks] = useState([])

    const getBooks = async () => {
        try {
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=code+complete&maxResults=3`)
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
        <>
            <div id="books">
                <div className="container">
                    <h1 className="new">New Books</h1>
                    <div className="books">

                        {books.map((item) => (
                            <div key={item.id}>
                                <img src={item.volumeInfo.imageLinks.thumbnail} alt=""/>
                                <h2>{item.volumeInfo.title}</h2>
                                <p>{item.volumeInfo.authors}</p>
                            </div>
                        ))}

                        {/*<div className="books--new">*/}
                        {/*    <img src={Climate} alt=""/>*/}
                        {/*    <h2>The Climate Book:*/}
                        {/*        The Facts and the*/}
                        {/*        Solutions</h2>*/}
                        {/*    <h4>by Greta Thunberg</h4>*/}
                        {/*</div>*/}

                        {/*<div className="books--two">*/}
                        {/*    <div className="books--two__two2">*/}
                        {/*        <img src={Rest} alt=""/>*/}
                        {/*        <h1>Rest Is Resistance:*/}
                        {/*            A Manifesto</h1>*/}
                        {/*        <h4>by Tricia Hersey</h4>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<div className="books--new2">*/}
                        {/*    <img src={Name} alt=""/>*/}
                        {/*    <h2>A New Name:*/}
                        {/*        Septology VI-VII</h2>*/}
                        {/*    <h4>by Jon Fosse</h4>*/}
                        {/*</div>*/}
                    </div>
                </div>

            </div>
        </>
    );
};

export default NewBooks;