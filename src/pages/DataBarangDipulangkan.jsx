import { useQuery } from "react-query";
import TRBorrowed from "../components/Elements/TRBorrowed";
import Dashboard from "../layouts/Dashboard"
import axios from "axios";
import TableReturned from "../layouts/TableReturned";
import TRReturned from "../components/Elements/TRReturned";

const fetchData = () => {
    return axios({
        method: 'GET',
        url: 'http://200.100.0.59:4000/api/v1/items-returned'
    });
}

const DataBarangDipulangkan = () => {

    const { isLoading, data, isError, error} = useQuery('data-barang-dipinjam', fetchData);
    
    return (
        <Dashboard>
            {isLoading ? (
                <h2>Loading</h2>
            ) : (
            <TableReturned tableReturnedTitle='Data Barang Dipulangkan'>
                {data?.data.data.map((item, index) => {
                    return (
                        <TRReturned
                           key={index}
                           no={index + 1}
                           idBarang={item.id}
                           namaBarangDipinjam={item.item_name_borrowed}
                           namaPeminjam={item.borrowed_name}
                           confirmation={item.confirmation}
                           kodeBarang={item.item_code}
                           tanggalDipinjam={item.date_returned}
                           onClick=''
                        />
                    )
                })}
            </TableReturned>   
            )}
        </Dashboard>
    )
}

export default DataBarangDipulangkan;