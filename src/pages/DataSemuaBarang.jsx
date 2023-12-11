import axios from "axios";
import { useEffect, useState } from "react"
import TR from "../components/Elements/TR";
import Dashboard from "../layouts/Dashboard"
import TableLayout from "../layouts/TableLayout"

const DataSemuaBarang = () => {

    const [dataItem, setDataItem] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        axios({
            method: 'GET',
            url: 'http://200.100.0.59:4000/api/v1/items'
        })
        .then((res) => setDataItem(res.data.data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    }, [])

    useEffect(() => {
        document.title = 'Data Semua Barang'
    })

    const handleClick = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              axios({
                method: 'DELETE',
                url: `http://200.100.0.59:4000/api/v1/items/${id}`
              })
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              );
              setTimeout(() => {
                  window.location.reload();
              }, 1500)
            }
          })
    }
    return (
        <Dashboard>
            <TableLayout
            tableItemTitle='Data Semua Barang Lab PPLG'
            tempat={false}
            >
                {loading ? (
                    <tr>
                        <td>Loading...</td>
                    </tr>
                ) : (
                    dataItem.map((item, index) => {
                        return (
                            <TR 
                            key={index}
                            no={index + 1}
                            idBarang={item.id} 
                            kodeBarang={item.item_code}
                            namaBarang={item.item_name}
                            nomorRegistrasi={item.registration_number}
                            merk={item.brand}
                            kondisiBarang={item.condition}
                            jumlahBarang={item.amount}
                            stokBarang={item.stock}
                            tahunPembelian={item.year_of_purchase}
                            sumberDana={item.origin}
                            tempat={item.laboratory_name}
                            onClick={() => handleClick(item.id)}
                            />
                        )
                    })
                )}
            </TableLayout>
        </Dashboard>
    )
}

export default DataSemuaBarang;