import Listsiswa from "./Listsiswa";

function Siswa(){
    const nama=['nana','siti','budi'];
    return(
        <div className="App">
        <Listsiswa judul={nama}></Listsiswa>
        </div>
    )
} export default Siswa;

