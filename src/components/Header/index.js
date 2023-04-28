import React from 'react';
import "./style.scss"
import {BsSearch} from "react-icons/bs";
import {RiShoppingBagLine} from "react-icons/ri";
import {NavLink} from "react-router-dom";


const Header = () => {


    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <div className="header--title .active">
                        <NavLink to={"/"}>
                            Bookshop
                        </NavLink>
                        <div className="header--nav">

                            <NavLink to={"/genres"}>
                                Categories
                            </NavLink>
                            <NavLink to={"/NewBooks"}>
                                Recent
                            </NavLink>
                            <NavLink to={"/books"}>
                                Books
                            </NavLink>
                            <NavLink to={"/aboutUs"}>
                                About Us
                            </NavLink>
                        </div>
                    </div>


                    <div className="search-box">
                        <input className="search-txt" type="text" placeholder="Type to search"/>
                        <a className="search-btn" href="#"> <BsSearch className=""/></a>
                        <div className="header--search">
                            <BsSearch className="header--search__first"/>
                            <NavLink to={"/DetailBooks"}>
                                <RiShoppingBagLine className="header--search__bag"/>

                            </NavLink>
                        </div>

                        <NavLink to={"/DetailBooks"}>
                            <RiShoppingBagLine className="header--title__bag"/>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;