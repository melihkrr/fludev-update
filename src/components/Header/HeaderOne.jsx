import React, {useState, useEffect, Fragment} from "react";
import {Dialog, Transition} from '@headlessui/react'
import {Link, useLocation} from "react-router-dom";
import cn from "classnames";
import logoImage from "../../../src/assets/img/logo/logo.png";
import $ from "jquery";
import {handleClickScroll} from "../../lib/helpers";
import ParticlesPolygonMask from "../ParticlesEffect/ParticlesPolygonMask"

const socialLinks = [{
    name: 'facebook', icon: 'fab fa-facebook-f', href: '#',

}, {
    name: 'twitter', icon: 'fab fa-twitter', href: '#',

}, {
    name: 'instagram', icon: 'fab fa-instagram', href: '#',

},]


const HeaderOne = () => {
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
    const [stickyClass, setStickyClass] = useState({
        fixed: "", header: "",
    });

    const closeMobileMenu = () => {
        setMobileMenuVisible(false);
        document.body.classList.remove('mobile-menu-visible');
    };
    const openMobileMenu = () => {
        setMobileMenuVisible(true);
        document.body.classList.add('mobile-menu-visible');
    };

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            // window height changed for the demo
            windowHeight < 245 ? setStickyClass({fixed: "", header: ""}) : setStickyClass({
                fixed: "active-height",
                header: "sticky-menu"
            });
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", stickNavbar);
        return () => window.removeEventListener("scroll", stickNavbar);
    }, []);

    // active link switching
    const {hash, pathname} = useLocation();
    const isActiveLink = (id) => {
        return id == hash ? "active" : "";
    };

    const headerMenus = [{
        title: 'Anasayfa',
        href: '/',
        onClick: () => handleClickScroll("header"),
        className: cn(hash === "/" && "active"),

    }, {
        title: 'Hakkımızda',  href: '/about-us',
        className: cn(hash === "/about-us" && "active"),
      
    }, {
        title: 'SSS',
        href: '/sss',
        className: cn(hash === "/sss" && "active"),
        
    }, {
        title: 'İletişim',
        href: '/contact',
        className: cn(hash === "/contact" && "active"),
    },]

    return (<header id="header">
            <div id="header-fixed-height" className={cn(stickyClass.fixed)}/>

            <div id="sticky-header" className={cn("menu-area", stickyClass.header)}>
                <div className={cn("container custom-container")}>
                    <div className="row">
                        <div className="col-12">
                            <button onClick={openMobileMenu} className={"mobile-nav-toggler bg-transparent border-0"}>
                                <i className="fas fa-bars"/>
                            </button>
                            
                            <div className="menu-wrap">
                            <div id="particle" className="position-absolute end-0 top-0 bottom-0 start-0"><ParticlesPolygonMask/></div>
                            <nav className={"menu-nav"}>
                                <div className="logo">
                                    <Link to={"/"}>
                                        <img src={logoImage} alt="Fludev Logo"/>
                                    </Link>
                                </div>

                                    <div className={cn("navbar-wrap main-menu d-none d-lg-flex justify-content-end")}>
                                        <ul className={"navigation"}>
                                            {headerMenus.map((headerMenu, index) => (
                                                <li key={index} className={headerMenu.className}>
                                                    <Link to={headerMenu.href} className={"section-link"}
                                                          onClick={headerMenu.onClick}>
                                                        {headerMenu.title}
                                                    </Link>
                                                </li>))}
                                        </ul>
                                    </div>
                                    <div className={cn("header-action", "d-none d-md-block")}>
                                        <ul>
                                            <li className={"header-lang"}>
                                                <span className={"selected-lang"}>TUR</span>
                                                <ul className={"lang-list"}>
                                                    <li>
                                                        <Link to="#">TUR</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">ENG</Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className={"header-btn"}>
                                                <Link
                                                    to="#contact"
                                                    className={"section-link btn"}
                                                    onClick={() => handleClickScroll("contact")}
                                                >
                                                    BİZE ULAŞIN
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>

                            {/* <!-- Mobile Menu  --> */}
                            <Transition.Root show={mobileMenuVisible} as={Fragment}>
                                <Dialog as="div" className="relative z-10" onClose={closeMobileMenu}>
                                    <Transition.Child as={Fragment} enter="transition-enter">
                                        <div className={"mobile-menu"}>
                                            <nav className={"menu-box"}>
                                                <button className={"close-btn bg-transparent border-0"}
                                                        onClick={closeMobileMenu}>
                                                    <i className="fas fa-times"></i>
                                                </button>
                                                <div className={"nav-logo"}>
                                                    <Link to="/">
                                                        <img src={logoImage} alt="BigTech Logo" title=""/>
                                                    </Link>
                                                </div>

                                                <div className={"menu-outer"}>
                                                    <ul className="navigation">
                                                        {headerMenus.map((headerMenu, index) => (
                                                            <li key={index} className={headerMenu.className}>
                                                                <Link to={headerMenu.href} className={"section-link "}
                                                                      onClick={headerMenu.onClick}>
                                                                    {headerMenu.title}
                                                                </Link>
                                                            </li>))}
                                                    </ul>
                                                </div>
                                                <div className={"social-links"}>
                                                    <ul className="clearfix">
                                                        {socialLinks.map((social) => (<li key={social.name}>
                                                                <a href={social.href}>
                                                                    <i className={social.icon}></i>
                                                                </a>
                                                            </li>))}
                                                    </ul>
                                                </div>
                                            </nav>
                                        </div>
                                    </Transition.Child>
                                </Dialog>
                            </Transition.Root>
                            <div className={"menu-backdrop"}/>
                            {/* <!-- End Mobile Menu --> */}
                        </div>
                    </div>
                </div>
            </div>
        </header>);
};

export default HeaderOne;
