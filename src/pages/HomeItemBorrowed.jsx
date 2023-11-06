import { Fragment, useEffect } from "react";
import Navbar from "../components/Navbar"
import HeaderItemBorrowed from "../components/HeaderItemBorrowed";
import MainItemBorrowed from "../components/MainItemBorrowed";

const HomeItemBorrowed = () => {

    useEffect(() => {
        document.title = 'Codepelita Home'
    })
    return (
        <>
            <Navbar navbarTitle='Codepelita Pinjamin' />
            <HeaderItemBorrowed />
            <MainItemBorrowed />
            <div className="mb-20"></div>
        </>
    )
}

export default HomeItemBorrowed;