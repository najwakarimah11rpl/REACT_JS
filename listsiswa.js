function Listsiswa(props){
    const siswa=props.judul.map((item,i)=>
    <li key={i}>{item}</li>)
return(
    <div className="App">
        <ul>{siswa}</ul>
    </div>) }
    