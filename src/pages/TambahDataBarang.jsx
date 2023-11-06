import axios from "axios";
import { useState } from "react";
import Button from "../components/Elements/Button";
import Input from "../components/Elements/Input";
import Label from "../components/Elements/Label";
import Dashboard from "../layouts/Dashboard";

const TambahDataBarang = () => {
  const [tambahDataBarang, setTambahDataBarang] = useState({
    item_code: "",
    item_name: "",
    registration_number: "",
    brand: "",
    origin: "",
    condition: "",
    amount: "",
    stock: "",
    year_of_purchase: "",
    laboratory_id: "",
  });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const result = await axios({
        method: "POST",
        url: "http://200.100.0.43:4000/api/v1/items",
        data: tambahDataBarang,
      });
      Swal.fire("Created!", "Request has successed!", "success");
      setTimeout(() => {
        window.location.href = "/data-semua-barang";
      }, 2000);
      console.log(result);
    } catch (error) {
      Swal.fire("Failed!", error, "error");
      console.log(error);
    }
  };
  return (
    <Dashboard>
      <div className="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-xl border border-slate-200 dark:border-slate-700">
        <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
          <h2 className="font-semibold text-slate-800 dark:text-slate-100">
            Tambah Data Barang
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
                onChange={(e) =>
                  setTambahDataBarang({
                    ...tambahDataBarang,
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
                onChange={(e) =>
                  setTambahDataBarang({
                    ...tambahDataBarang,
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
                onChange={(e) =>
                  setTambahDataBarang({
                    ...tambahDataBarang,
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
                onChange={(e) =>
                  setTambahDataBarang({
                    ...tambahDataBarang,
                    brand: e.target.value,
                  })
                }
              />
            </div>
            <div className="py-2 px-5">
              <Label htmlFor="condition">Kondisi Barang</Label>
              <input list="consitions" name="condition" id="condition" className="w-full rounded-lg" placeholder="Masukan Kondisi barang" onChange={(e) =>
                  setTambahDataBarang({
                    ...tambahDataBarang,
                    condition: e.target.value,
                  })
                } />
              <datalist id="consitions">
                <option value="Normal" />
                <option value="Baru" />
                <option value="Rekondisi" />
                <option value="Rusak" />
              </datalist>
            </div>
            <div className="py-2 px-5">
              <Label htmlFor="amount">Jumlah Barang</Label>
              <Input
                type="text"
                placeholder="Masukan Jumlah Barang"
                id="amount"
                name="amount"
                onChange={(e) =>
                  setTambahDataBarang({
                    ...tambahDataBarang,
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
                onChange={(e) =>
                  setTambahDataBarang({
                    ...tambahDataBarang,
                    stock: e.target.value,
                  })
                }
              />
            </div>
            <div className="py-2 px-5">
              <Label htmlFor="year_of_purchase">Tahun Pembelian</Label>
              <Input
                type="month"
                placeholder="Masukan Tahun Pembelian Barang"
                id="year_of_purchase"
                name="year_of_purchase"
                onChange={(e) =>
                  setTambahDataBarang({
                    ...tambahDataBarang,
                    year_of_purchase: e.target.value,
                  })
                }
              />
            </div>
            <div className="py-2 px-5">
              <Label htmlFor="origin">Sumber Dana</Label>
              <input list="origins" name="origin" id="origin" className="w-full rounded-lg" placeholder="Masukan Sumber Dana" onChange={(e) =>
                  setTambahDataBarang({
                    ...tambahDataBarang,
                    origin: e.target.value,
                  })
                } />
              <datalist id="origins">
                <option value="BOS" />
                <option value="Komite" />
                <option value="Kas" />
                <option value="UP" />
              </datalist>
            </div>
            <div className="py-2 px-5">
              <Label htmlFor="laboratory_id">Tempat/Lab</Label>
              <select
                name="laboratory_id"
                id="laboratory_id"
                className="w-full rounded-lg"
                onChange={(e) =>
                  setTambahDataBarang({
                    ...tambahDataBarang,
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
              Simpan
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
    </Dashboard>
  );
};

export default TambahDataBarang;
