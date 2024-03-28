function Tentang(){
    const [count, setCount]=useState(0);
    function tambah(){
        setCount(count+1)
    } function kurang(){
        if (count>0){
            setCount(count-1)
}   }
} return(
    <div className="App">
        <h1>Tentang smk revir counter:{count}</h1>
        <p>isi tentang smk revit</p>
        <button type="button" onClick={tambah} className="btn-succes">anu apalah</button>
        <button type="button" onClick={kurang} className="btn-succes-">kurang</button>

    </div>)
export default Tentang;

