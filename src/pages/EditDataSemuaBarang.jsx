import { useEffect, useState } from "react";
import Input from "../components/Elements/Input";
import Label from "../components/Elements/Label";
import Dashboard from "../layouts/Dashboard";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from "../components/Elements/Button";

const EditDataSemuaBarang = () => {

    const [editDataBarang, setEditDataBarang] = useState({})
    const [loading, setLoading] = useState(false)

    const { id } = useParams()

    useEffect(() => {
        setLoading(true)
        axios({
            method: 'GET',
            url: `http://200.100.0.43:4000/api/v1/items/${id}`,
        })
        .then((res) => setEditDataBarang(res.data.data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const result = await axios({
                method: 'PUT',
                url: `http://200.100.0.43:4000/api/v1/items/${id}`,
                data: editDataBarang
            })
            Swal.fire(
                'Updated!',
                 result.data.response.message,
                'success'
            )
            setTimeout(() => {
                window.location.href = '/data-semua-barang'
            }, 2000);
        } catch (error) {
            Swal.fire(
                'Failed!',
                'Your request has failed!',
                'success'
            )
        }
    }

    useEffect(() => {
        document.title = 'Edit Data Barang'
    })

  return (
    <Dashboard>
        {loading ? (
            <div>Loading...</div>
        ) : (
            <div className="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-xl border border-slate-200 dark:border-slate-700">
                <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
                <h2 className="font-semibold text-slate-800 dark:text-slate-100">
                   Edit Data Barang
                </h2>
                </header>
                <div className="p-3">
                <form onSubmit={handleSubmit} className="bg-slate-200">
                    <div className="py-2 px-5">
                    <Label htmlFor="item_code">Kode Barang</Label>
                    <Input
                        type="text"
                        placeholder="Masukan Kode Barang"
                        id="item_code"
                        name="item_code"
                        defaultValue={editDataBarang.item_code}
                        onChange={(e) =>
                        setEditDataBarang({
                            ...editDataBarang,
                            item_code: e.target.value,
                        })
                        }
                    />
                    </div>
                    <div className="py-2 px-5">
                    <Label htmlFor="item_name">Nama Barang</Label>
                    <Input
                        type="text"
                        placeholder="Masukan Nama Barang"
                        id="item_name"
                        name="item_name"
                        defaultValue={editDataBarang.item_name}
                        onChange={(e) =>
                        setEditDataBarang({
                            ...editDataBarang,
                            item_name: e.target.value,
                        })
                        }
                    />
                    </div>
                    <div className="py-2 px-5">
                    <Label htmlFor="registration_number">Nomor Registrasi</Label>
                    <Input
                        type="text"
                        placeholder="Masukan Nomor Registrasi"
                        id="registration_number"
                        name="registration_number"
                        defaultValue={editDataBarang.registration_number}
                        onChange={(e) =>
                        setEditDataBarang({
                            ...editDataBarang,
                            registration_number: e.target.value,
                        })
                        }
                    />
                    </div>
                    <div className="py-2 px-5">
                    <Label htmlFor="brand">Merk</Label>
                    <Input
                        type="text"
                        placeholder="Masukan Merk Barang"
                        id="brand"
                        name="brand"
                        defaultValue={editDataBarang.brand}
                        onChange={(e) =>
                        setEditDataBarang({
                            ...editDataBarang,
                            brand: e.target.value,
                        })
                        }
                    />
                    </div>
                    <div className="py-2 px-5">
                    <Label htmlFor="condition">Kondisi Barang</Label>
                    <Input
                        type="text"
                        placeholder="Masukan Kondisi Barang"
                        id="condition"
                        name="condition"
                        defaultValue={editDataBarang.condition}
                        onChange={(e) =>
                        setEditDataBarang({
                            ...editDataBarang,
                            condition: e.target.value,
                        })
                        }
                    />
                    </div>
                    <div className="py-2 px-5">
                    <Label htmlFor="amount">Jumlah Barang</Label>
                    <Input
                        type="text"
                        placeholder="Masukan Jumlah Barang"
                        id="amount"
                        name="amount"
                        defaultValue={editDataBarang.amount}
                        onChange={(e) =>
                        setEditDataBarang({
                            ...editDataBarang,
                            amount: e.target.value,
                        })
                        }
                    />
                    </div>
                    <div className="py-2 px-5">
                    <Label htmlFor="stock">Stok Barang</Label>
                    <Input
                        type="text"
                        placeholder="Masukan Kode Barang"
                        id="stock"
                        name="stock"
                        defaultValue={editDataBarang.stock}
                        onChange={(e) =>
                        setEditDataBarang({
                            ...editDataBarang,
                            stock: e.target.value,
                        })
                        }
                    />
                    </div>
                    <div className="py-2 px-5">
                    <Label htmlFor="year_of_purchase">Tahun Pembelian</Label>
                    <Input
                        type="text"
                        placeholder="Masukan Tahun Pembelian Barang"
                        id="year_of_purchase"
                        name="year_of_purchase"
                        defaultValue={editDataBarang.year_of_purchase}
                        onChange={(e) =>
                        setEditDataBarang({
                            ...editDataBarang,
                            year_of_purchase: e.target.value,
                        })
                        }
                    />
                    </div>
                    <div className="py-2 px-5">
                    <Label htmlFor="origin">Sumber Dana</Label>
                    <Input
                        type="text"
                        placeholder="Masukan Kode Barang"
                        id="origin"
                        name="origin"
                        defaultValue={editDataBarang.origin}
                        onChange={(e) =>
                        setTambahDataBarang({
                            ...editDataBarang,
                            origin: e.target.value,
                        })
                        }
                    />
                    </div>
                    <div className="py-2 px-5">
                    <Label htmlFor="laboratory_id">Tempat/Lab</Label>
                    <select
                        name="laboratory_id"
                        id="laboratory_id"
                        className="w-full rounded-lg"
                        defaultValue={editDataBarang.laboratory_id}
                        onChange={(e) =>
                        setEditDataBarang({
                            ...editDataBarang,
                            laboratory_id: e.target.value,
                        })
                        }
                    >
                        <option value="">Pilih Tempat/Lab</option>
                        <option value="d565203b-ed98-4fca-880c-2be3cbd43cc9">
                        Lab PPLG 1
                        </option>
                        <option value="1812f07f-35cf-4e0a-8da6-79e3f0ab706b">
                        Lab PPLG 2
                        </option>
                        <option value="164c5398-8df9-4b76-9be0-5208bfab385f">
                        Lab PPLG 3
                        </option>
                        <option value="97e8aa14-d236-4e97-9537-4da4aa1ac9a1">
                        Lab PPLG 4
                        </option>
                    </select>
                    </div>
                    <Button classname="pxy-2 px-5 py-2 bg-green-600 hover:bg-green-800 rounded-lg mt-10 mb-7 ml-5 font-semibold hover:text-white">
                    Simpan Perubahan
                    </Button>
                    <Button
                    classname="pxy-2 px-5 py-2 bg-yellow-400 ml-3 rounded-lg font-semibold hover:bg-yellow-500 hover:text-white"
                    type="reset"
                    >
                    Reset
                    </Button>
                </form>
                </div>
            </div>
        )}
    </Dashboard>
  );
};

export default EditDataSemuaBarang;