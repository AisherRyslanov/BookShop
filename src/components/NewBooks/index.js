import React from 'react';
import Climate from "../../img/Climate.png"
import Rest from "../../img/rest.png"
import Name from "../../img/name.png"
import "./style.scss"

const NewBooks = () => {
    return (
        <>
            <div id="books">
                <div className="container">
                    <h1 className="new">New Books</h1>
                    <div className="books">
                        <div className="books--new">
                            <img src={Climate} alt=""/>
                            <h2>The Climate Book:
                                The Facts and the
                                Solutions</h2>
                            <h4>by Greta Thunberg</h4>
                        </div>

                        <div className="books--two">
                            <div className="books--two__two2">
                                <img src={Rest} alt=""/>
                                <h1>Rest Is Resistance:
                                    A Manifesto</h1>
                                <h4>by Tricia Hersey</h4>
                            </div>
                        </div>

                        <div className="books--new2">
                            <img src={Name} alt=""/>
                            <h2>A New Name:
                                Septology VI-VII</h2>
                            <h4>by Jon Fosse</h4>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default NewBooks;