function Tabel(props){
    const menus=props.menu;
    const titel=props.titel;

    return(
        <div className="App">
            <h1>Menu retoran</h1>
            <div>
                <table>
                    <tr>
                        <th>Menu</th>
                        <th>Harga</th>
                    </tr>
                    {menus.mp((data)=>(
                        <tr key={data.idmenu}>
                            <td>{data.menu}</td>
                            <td>{data.harga}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    )
}