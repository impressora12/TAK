import Head from 'next/head';
import Link from 'next/link';

import { categorytattoo } from '../../data/estilos/categoryfeedlist.js';

export default function Estilos() {
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
                <link href="https://fonts.googleapis.com/css2?family=Didact+Gothic&family=Mandali&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet" />
                
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

                <h3 className="subtitle1"> Escolha seu estilo de tattoo </h3>

                <div>
                    <section className="layout-grid2">
                        {categorytattoo.map((item, key) => {
                            return (
                                <div className="img-content2" key={key}>
                                    <img id="i-tattoo2" className="img-tattoo2" src={item.img} />
                                    <h3 id="style-name" className="style-name">{item.title}</h3>
                                </div>
                            )
                        })}
                    </section>
                </div>

                <br />

                <h3 className="subtitle1"> Tatuagens no estilo . . . </h3>

                <div>
                    <section className="layout-grid3">
                        {categoryGothic.map((item, key) => {
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
                    </section>
                </div>

            </body>
        </>
    )
}