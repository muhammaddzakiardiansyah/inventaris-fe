import axios from "axios";
import { useEffect, useState } from "react";
import TR from "../components/Elements/TR";
import TrSpec from "../components/Elements/TrSpec";
import Dashboard from "../layouts/Dashboard";
import TableLayout from "../layouts/TableLayout";
import TableSpecLayout from "../layouts/TableSpecLayout";



const Lab3Pplg = () => {

    const [data, setData] = useState([]);
    const [spec, setSpec] = useState([]);
    const [loading, setLoading] = useState(false);
    const [refetch, setRefetch] = useState(false);
    let loop = 1;
    let loop2 = 1;

    // get data item
    useEffect(() => {
        setLoading(true);
        axios({
            method: 'GET',
            url: 'http://200.100.0.59:4000/api/v1/laboratories/per-lab/164c5398-8df9-4b76-9be0-5208bfab385f'
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
            url: 'http://200.100.0.59:4000/api/v1/laboratories/spec-per-lab/164c5398-8df9-4b76-9be0-5208bfab385f'
        })
        .then((res) => {
            return setSpec(res.data.data);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    }, [refetch]);

    // title
    useEffect(() => {
        document.title = "Dashboard Lab 3 PPLG";
    }, []);

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

    const handleClickDlt = (id) => {
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
                        url: `http://200.100.0.59:4000/api/v1/specifications/${id}`
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

    return (
        <Dashboard>
            <div className="col-span-full xl:col-span-6 w-[100%] rounded-2xl p-3 bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700">
               <TableLayout tableItemTitle='Data Barang Lab PPLG 3'>
                {loading ? (
                    <tr>
                        <td>Loading</td>
                    </tr>
                ) : (
                    data.map((item, index) => {
                        return (
                            <TR 
                            key={index}
                            no={loop++}
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
               <br />
               <TableSpecLayout tableSpecTitle='Data Spesifikasi Barang Lab PPLG 3'>
                {loading ? (
                   <tr>
                    <td>Loading</td>
                   </tr>
                ) : (
                    spec.map((item, index) => {
                        return (
                            <TrSpec
                                key={index}
                                no={loop2++}
                                nama={item.name}
                                spek={item.spec}
                                tempat={item.laboratory_name}
                                idBarang={item.id}
                                onClick={() => handleClickDlt(item.id)}
                            />
                        )
                    })
                )}
               </TableSpecLayout> 
            </div>
        </Dashboard>
    )
}

export default Lab3Pplg;