import {useState} from 'react';
import Tabel from "./Tabel";

<h1>hayyukk serba 5k boskuu</h1>
function Menu(){
    const [menus,setMenu]=useState([{
        idmenu:1,
        idkategoori:1,
        menu:"apel malam",
        gambar:"",
        harga: 5000
    },{
        idmenu:2,
        idkategori:1,
        menu:"gedebok pisng",
        gambar:"p",
        harga:5000

    },{
        idmenu:3,
        idkategori:1,
        menu:"es boyah",
        gambar:"",
        harga: 5000
    },])}
    
    return(
        <div className="App">
            <h1>Menu restoran</h1>
        <div>
        {menus.map((data)=>(
            <li key={data.idmenu}>{data.menu} Rp {data.harga}</li>
        ))} </div></div>
    )
    return(
        <div className="App">
            <Tabel menu={menus} titel={titel}/>
            <Tabel manu={menus.fiter((data)=>(data.idkategori===3))} titel="MENU"/>
        </div>
    )
    export default Menu;