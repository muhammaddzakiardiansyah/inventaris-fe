import axios from "axios";
import { useEffect, useState } from "react";
import TR from "../components/Elements/TR";
import TrSpec from "../components/Elements/TrSpec";
import Dashboard from "../layouts/Dashboard";
import TableLayout from "../layouts/TableLayout";
import TableSpecLayout from "../layouts/TableSpecLayout";



const Lab4Pplg = () => {

    const [data, setData] = useState([]);
    const [spec, setSpec] = useState([]);
    const [loading, setLoading] = useState(false);
    const [refetch, setRefetch] = useState(false);

    // get data item
    useEffect(() => {
        setLoading(true);
        axios({
            method: 'GET',
            url: 'http://localhost:4000/api/v1/laboratories/per-lab/97e8aa14-d236-4e97-9537-4da4aa1ac9a1'
        })
        .then((res) => {
            return setData(res.data.data)
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    }, [refetch]);

    // get data spec
    useEffect(() => {
        setLoading(true);
        axios({
            method: 'GET',
            url: 'http://localhost:4000/api/v1/laboratories/spec-per-lab/97e8aa14-d236-4e97-9537-4da4aa1ac9a1'
        })
        .then((res) => {
            return setSpec(res.data.data);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    }, [refetch]);

    // title
    useEffect(() => {
        document.title = "Dashboard Lab 4 PPLG";
    }, []);

    return (
        <Dashboard>
            <div className="col-span-full xl:col-span-6 w-[100%] rounded-2xl p-3 bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700">
               <TableLayout tableItemTitle='Data Barang Lab PPLG 4'>
                {loading ? (
                    <tr>
                        <td>Loading</td>
                    </tr>
                ) : (
                    data.map((item, index) => {
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
                            />
                        )
                    })
                )}
               </TableLayout>
               <br />
               <TableSpecLayout tableSpecTitle='Data Spesifikasi Barang Lab PPLG 4'>
                {loading ? (
                   <tr>
                    <td>Loading</td>
                   </tr>
                ) : (
                    spec.map((item, index) => {
                        return (
                            <TrSpec
                                key={index}
                                no={index + 1}
                                nama={item.name}
                                spek={item.spec}
                                tempat={item.laboratory_name}
                                idBarang={item.id}
                            />
                        )
                    })
                )}
               </TableSpecLayout> 
            </div>
        </Dashboard>
    )
}

export default Lab4Pplg;