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
                            />
                        )
                    })
                )}
            </TableSpecLayout>
        </Dashboard>
    )
}

export default DataSpekSemuaBarang;