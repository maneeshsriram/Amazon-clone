import React from 'react'
import Categories from './Categories'
import './Home.css'
import Product from './Product'
import SignIn from './SignIn'


function Home() {
    return (
        <div className="home">

            <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg" alt="" />

            <div className="home__categories">
                <Categories title="Amazon Basics" image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_260x260._SY608_CB442725065_.jpg" />
                <Categories title="Get fit at home" image="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_2x._SY608_CB434924743_.jpg" />
                <Categories title="Beauty Pics" image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_2x._SY608_CB432774344_.jpg" />
                <SignIn />
            </div>

            <div className="home__row">
                <Product id="22456" title="ASUS TUF Gaming A15 Laptop 15.6 FHD 144Hz Ryzen 7 4800H, GTX 1650 4GB Graphics, FA506IH-AL090T" rating={4} price={1010.87} image="https://m.media-amazon.com/images/I/A1A2yQlAXCL._AC_UY327_FMwebp_QL65_.jpg" />
                <Product id="29456" title="Bosch 7 kg Fully-Automatic Front Loading Washing Machine (WAK24168IN, Silver, Inbuilt Heater)" rating={5} price={387.03} image="https://m.media-amazon.com/images/I/81HApTZ8D8L._AC_UY327_FMwebp_QL65_.jpg" />
                <Product id="23426" title="Amazon Brand - Solimo 100% Cotton 12 Piece Face Towel Set, 500 GSM (Multicolour)" rating={4} price={7.46} image="https://m.media-amazon.com/images/I/91N0yLNe8zL._AC_UL480_FMwebp_QL65_.jpg" />
            </div>

            <div className="home__ad">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/AMZN_OutletDeals_Template_March_1500x200_wh_EN.jpg" />
            </div>

            <div className="home__row">
                <Product id="23456" title="Amazon Brand - Solimo Microfiber Reversible Comforter, Single (Aqua Blue & Olive Green, 200 GSM)" rating={5} price={16.47} image="https://m.media-amazon.com/images/I/81Vzm0NAr8L._AC_UL480_FMwebp_QL65_.jpg" />
                <Product id="23156" title="Steelbird SB-45 OSKA Flip Up Helmet with Reflective Graphics (Large 600 MM, Matt Black with Smoke Visor and extra Clear Visor)" rating={5} price={20.77} image="https://m.media-amazon.com/images/I/71aLnZOL7+L._AC_UL480_FMwebp_QL65_.jpg" />
            </div>

            <div className="home__row">
                <Product id="18633" title="Tecno Spark 6 Air (Ocean Blue, 3GB RAM, 32GB Storage)" rating={3} price={133.75} image="https://images-na.ssl-images-amazon.com/images/I/71skpdljmvL._SL1500_.jpg" />
                <Product id="18631" title="Ferrero Rocher Premium Chocolates 24 Pieces, 300 g" rating={4} price={11.31} image="https://images-eu.ssl-images-amazon.com/images/I/61igKA7Y-UL._AC_US240_FMwebp_QL65_.jpg" />
                <Product id="18634" title="Envias Leatherette Handbags For Women's Ladies Combo" rating={4} price={8.62} image="https://images-na.ssl-images-amazon.com/images/I/41x6XOAoGTL.jpg" />
            </div>

            <div className="home__row">
                <Product id="23451" title="Samsung 27 inch (68.6 cm) Curved Bezel Less LED Backlit Computer Monitor - Full HD, VA Panel with VGA, HDMI, Display, Audio in, Heaphone Ports - LC27F591FDWXXL (Silver).   Resolution: 1,920 x 1,080, Brightness (Min): 200 cd/m². 1800R curvature of the screen provides a truly immersive viewing experience. Screen Size (cm): 67.31, Contrast Ratio Static 3,000:1. Colour Support: 16.7 M, Aspect Ratio: 16:9. Response Time 4 (GtG),OS Compatibility: Windows, Mac" rating={5} price="298.77" image="https://m.media-amazon.com/images/I/71Dwx3x6m9L._AC_UY327_FMwebp_QL65_.jpg" />
            </div>
        </div>
    )
}

export default Home
