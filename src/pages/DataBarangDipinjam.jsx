import { useQuery } from "react-query";
import TRBorrowed from "../components/Elements/TRBorrowed";
import Dashboard from "../layouts/Dashboard"
import TableBorrowed from "../layouts/TableBorrowed";
import axios from "axios";

const fetchData = () => {
    return axios({
        method: 'GET',
        url: 'http://200.100.0.43:4000/api/v1/items-borrowed'
    });
}

const DataBarangDipinjam = () => {

    const { isLoading, data, isError, error} = useQuery('data-barang-dipinjam', fetchData);
    
    return (
        <Dashboard>
            {isLoading ? (
                <h2>Loading</h2>
            ) : (
            <TableBorrowed tableBorrowedTitle='Data Barang Dipinjam'>
                {data?.data.data.map((item, index) => {
                    return (
                        <TRBorrowed
                           key={index}
                           no={index + 1}
                           idBarang={item.id}
                           namaBarangDipinjam={item.item_name_borrowed}
                           namaPeminjam={item.borrowed_name}
                           kontak={item.contact}
                           kodeBarang={item.item_code}
                           tanggalDipinjam={item.date_borrowed}
                           onClick=''
                        />
                    )
                })}
            </TableBorrowed>   
            )}
        </Dashboard>
    )
}

export default DataBarangDipinjam;