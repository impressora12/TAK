import Head from 'next/head';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

import { profilephotolist } from '../../data/studios/profilephoto.js';
import { postlist } from '../../data/feed/feedposts.js';
import { localidades } from '../../data/places/phototattooplaces.js';

export default function Home() {
    
    var [localidadesList] = useState(Object.keys(localidades));
    var getDropdownlocalidade = useRef(null);
    var [currentLocalidade, setCurrentLocalidade] = useState('Todos');

    var containerBox = useRef(null);
    var dropDown = useRef(null);
    var rotateArrowDropDown = useRef(null);
    var inputdropdown = useRef(null);

    function rolagem(e) {
        if (e.deltaY > 0) {
            containerBox.current.scrollLeft += 200;
        }
        else {
            e.preventDefault();
            containerBox.current.scrollLeft -= 200;
        }
    }

    function openDropDown() {
        var a = dropDown.current.classList.toggle('close');
        var rotate = 0;
        if (a !== true) {
            rotate = -180;
        }
        rotateArrowDropDown.current.style.transform = `rotate(${rotate}deg)`;
    }

    function handleScrollLeft() {
        containerBox.current.scrollLeft -= 200;
    }

    function handleScrollRight() {
        containerBox.current.scrollLeft += 200;
    }

    function updateList() {
        if (inputdropdown?.current !== null)
            inputdropdown.current.placeholder = currentLocalidade;
    }

    useEffect(updateList, [currentLocalidade])

    return (
        <>
            <Head>
                <link rel="icon" href="/images/logo/Icone branco sem fundo.png" />
                <title>Tak Ghoul</title>

                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Neue&family=Montserrat:wght@500&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Pattaya&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Didact+Gothic&family=Mandali&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Bitter:wght@400;500&display=swap" rel="stylesheet" />

                <link rel="stylesheet" href="/styles/navbar.css" type="text/css" media="all" />
                <link rel="stylesheet" href="/styles/grid.css" type="text/css" media="all" />
                <link rel="stylesheet" href="/styles/modal.css" type="text/css" media="all" />
            </Head>

            <body>
                <header className="headermenu">
                    <nav className="navbar">
                        <div className="navBarLeft">
                            <div className="logo">
                                <img src="/images/logo/Logo 2 dragão branca sem fundo.png" alt="logo" width="98" height="53" />
                            </div>
                            <div className="search-box">
                                <input className="search-bar" type="text" placeholder="Localidade" ref={inputdropdown} />
                                <a className="btn-location" href="">
                                    <img src="/icon/cursor.svg" alt="location-icon" />
                                </a>
                                <p className="btn-down-list" onClick={() => openDropDown()}>
                                    <img src="/icon/arrow-down-sign-to-navigate.svg" alt="dopdown-arrow-btn" ref={rotateArrowDropDown} />
                                </p>
                                <ul className="dropdown close" ref={dropDown}>
                                    {localidadesList.map((item, index) => {
                                        return <li ref={getDropdownlocalidade} onClick={(e) => setCurrentLocalidade(() => e.target.innerText)} className="itemdropdown" key={index}>{item}</li>
                                    })}

                                </ul>
                            </div>
                        </div>
                        <ul>
                            <li>
                                <Link href="inicio">
                                    <a>Início</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="estilos">
                                    <a>Estilos</a>
                                </Link>
                            </li>
                            <li><a>Explorar</a></li>
                        </ul>
                    </nav>
                </header>

                <header className="menuMobile">
                    <img className="logoMobile" src="/images/logo/Logo 2 dragão branca sem fundo.png" alt="logo" />
                    <input type="checkbox" id="scales" name="menu" hidden />

                    <label for="scales">
                        <img src="/icon/menu.svg" alt="menu" />
                    </label>

                    <ul className="menuListLeft">
                        <li> <a className="item_li-left">Início</a></li>
                        <li> <a className="item_li-left">Estilos</a></li>
                        <li> <a className="item_li-left">Explorar</a></li>
                    </ul>
                </header>

                <br /><br />

                <h3 className="subtitle1 first"> Estúdios e Tatuadores Independentes </h3>

                <div className="scroll-container">
                    <img className="button-scroll left" src="/icon/next.svg" alt="Imagem1" onClick={handleScrollLeft} />
                    <div className="main-scroll">

                        <div class="container-box" ref={containerBox} onWheel={(e) => rolagem(e)}>
                            <div class="boxes">
                                {profilephotolist.map((item, key) => {
                                    return (
                                        <div className="boxes" key={key}>
                                            <img id="i-tattoo-studio" className="box" src={item} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <img className="button-scroll" src="/icon/next.svg" alt="Imagem2" onClick={handleScrollRight} />
                </div>

                <br />

                <h3 className="subtitle1"> Postagens de tattoo recentes </h3>
                <div>
                    <section className="layout-grid">

                        {currentLocalidade === 'Todos' ?
                            <>
                                {postlist.map((item, key) => {
                                    return (
                                        <div className="img-content" key={key}>
                                            <img id="i-tattoo" className="img-tattoo" src={item.img} />
                                            <div className="who-posted">
                                                <img className="avatar" src={item.avatar}/>
                                                <p href="">{item.name}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </>

                            :

                            <>
                                {localidades[currentLocalidade].map((item, key) => {
                                    return (
                                        <div className="img-content" key={key}>
                                            <img id="i-tattoo" className="img-tattoo" src={item} />
                                            <div className="who-posted">
                                                <foto />
                                                <p href="">Fulano Studio</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </>


                        }

                    </section>
                </div>

                <div className="modal-post-container">
                    <div className="post-modal">
                        <button className="close-post">x</button>
                        <form action="">
                            <div className="post-img">
                                <img src="images/image-tattoo/category/gothic/cc5f46b84ff41ef5cf6b20fae258515a.jpg" alt="" />
                            </div>
                            <div className="img-perfil">
                                <img src="/images/sketches/category/gothic/2985c25803b66ff00f83c025d691e81c.jpg" alt="" />
                            </div>
                            <div>
                                <p className="profile-name">Fulano Studio</p>
                            </div>
                            <div>
                                <h4 className="post-title">Lorem ipsum</h4>
                                <p className="post-describe">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ligula pharetra tellus volutpat faucibus. Donec nibh risus, elementum vel laoreet nec, faucibus ut est. Praesent dictum, nisi pellentesque euismod semper, libero lacus rutrum urna, quis euismod enim odio id...</p>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="modal-profile-container">
                    <div className="profile-modal">
                        <button className="close-profile">x</button>
                        <form action="">
                            
                            <div className="profile-photo">

                            </div>
                            <div>
                                <p className="profi-name">Fulano Studio</p>
                            </div>

                            <div className="info-profile">
                                <div className="bio">
                                    <h3> Bio: </h3> <p className="data-p"> Lorem ipsum </p>
                                </div>
                                <div className="address">
                                    <h3> Endereço: </h3> <p className="data-p"> Lorem ipsum </p>
                                </div>
                                <div className="bio">
                                    <h3> Contato: </h3> <p className="data-p"> Lorem ipsum </p>
                                </div>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </body>
        </>
    )
}