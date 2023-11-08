import { Fragment, useEffect } from "react";
import Navbar from "../components/Navbar"
import HeaderItemBorrowed from "../components/HeaderItemBorrowed";
import MainItemBorrowed from "../components/MainItemBorrowed";
import FooterItemBorrowed from "../components/FooterItemBorrowed";
import AOS from 'aos'
const HomeItemBorrowed = () => {
    AOS.init()
    useEffect(() => {
        document.title = 'Codepelita Home'
    })
    return (
        <>
            <Navbar navbarTitle='Codepelita Pinjamin' />
            <HeaderItemBorrowed />
            <MainItemBorrowed />
            <FooterItemBorrowed />
        </>
    )
}

export default HomeItemBorrowed;