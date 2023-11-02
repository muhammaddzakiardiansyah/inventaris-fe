import { useEffect, useState } from "react";
import Dashboard from "../layouts/Dashboard";
import Button from "../components/Elements/Button";
import Label from "../components/Elements/Label";
import Input from "../components/Elements/Input";
import axios from "axios";

const TambahSpekDataBarang = () => {

    const [tambahSpekDataBarang, setTambahSpekDataBarang] = useState({
        name: "",
        spec: "",
        laboratory_id: "",
    });
    console.log(tambahSpekDataBarang);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await axios({
                method: 'POST',
                url: 'http://200.100.0.43/api/v1/specifications',
                data: tambahSpekDataBarang,
            })
            Swal.fire(
                result.data.response.message,
                'You success add data specification',
                'success'
            )
            setTimeout(() => {
                window.location.href = '/data-spek-semua-barang'
            }, 2000);
        } catch (error) {
            Swal.fire(
                'Failed!',
                 error.response.data.response.message,
                'success'
            )
        }
    }

    useEffect(() => {
        document.title = 'Tambah Spek Data Barang';
    })

  return (
    <Dashboard>
      <div className="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-xl border border-slate-200 dark:border-slate-700">
        <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
          <h2 className="font-semibold text-slate-800 dark:text-slate-100">
           Tambah Spek Data Barang
          </h2>
        </header>
        <div className="p-3">
          <form className="bg-slate-200" onSubmit={handleSubmit}>
            <div className="py-2 px-5">
              <Label htmlFor="name">Nama</Label>
              <Input
                type="text"
                placeholder="Spek komputer guru example"
                id="name"
                name="name"
                onChange={(e) =>
                  setTambahSpekDataBarang({
                    ...tambahSpekDataBarang,
                    name: e.target.value,
                  })
                }
              />
            </div>
            <div className="py-2 px-5">
              <Label htmlFor="spec">Spek Barang</Label>
              <Input
                type="text"
                placeholder="Intel core i5"
                id="spec"
                name="spec"
                onChange={(e) =>
                  setTambahSpekDataBarang({
                    ...tambahSpekDataBarang,
                    spec: e.target.value,
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
                onChange={(e) =>
                  setTambahSpekDataBarang({
                    ...tambahSpekDataBarang,
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
    </Dashboard>
  );
};

export default TambahSpekDataBarang;
