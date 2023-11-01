import axios from "axios";
import { useEffect, useState } from "react";
import TrSpec from "../components/Elements/TrSpec";
import Dashboard from "../layouts/Dashboard";
import TableSpecLayout from "../layouts/TableSpecLayout";

const DataSpekSemuaBarang = () => {

    const [dataSpecItem, setDataSpecItem] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        axios({
            method: 'GET',
            url: 'http://localhost:4000/api/v1/specifications'
        })
        .then((res) => setDataSpecItem(res.data.data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    }, [])

    const handleClick = (id) => {
        try {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then(async (result) => {
                if (result.isConfirmed) {
                    const result = await axios({
                        method: 'DELETE',
                        url: `http://localhost:4000/api/v1/specifications/${id}`
                    })
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                    setTimeout(() => {
                        window.location.reload()
                    }, 1500);
                }
              })
        } catch (error) {
            Swal.fire(
                'Failed!',
                 error.response.data.message,
                'success'
            )
        }
    }

    useEffect(() => {
        document.title = 'Data Spek Semua Barang'
    })


    return (
        <Dashboard>
            <TableSpecLayout 
            tableSpecTitle='Data Spesifikasi Semua Barang'
            >
                {loading ? (
                    <tr>
                        <td>Loading...</td>
                    </tr>
                ) : (
                    dataSpecItem.map((item, index) => {
                        return (
                            <TrSpec 
                              key={index}
                              no={index + 1}
                              nama={item.name}
                              spek={item.spec}
                              tempat={item.laboratory_id}
                              idBarang={item.id}
                              onClick={() => handleClick(item.id)}
                            />
                        )
                    })
                )}
            </TableSpecLayout>
        </Dashboard>
    )
}

export default DataSpekSemuaBarang;