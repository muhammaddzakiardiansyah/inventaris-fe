import { useEffect, useState } from "react";
import Button from "../components/Elements/Button";
import Input from "../components/Elements/Input";
import Label from "../components/Elements/Label";
import Dashboard from "../layouts/Dashboard";
import axios from "axios";

const TambahDataLab = () => {

    const [dataLab, setDataLab] = useState({
        laboratory_name: '',
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios({
                method: 'POST',
                url: 'http://200.100.0.59:4000/api/v1/laboratories',
                data: dataLab
            })
            Swal.fire(
               res.data.response.message,
              'Succesfuly add laboratory!',
              'success'
            ) 
            setTimeout(() => {
              window.location.href = '/data-semua-lab'
            }, 1500);
        } catch (error) {
          Swal.fire(
            'Failed!',
             error,
            'success'
          )
        }
    }

    useEffect(() => {
      document.title = 'Tambah Lab'
    })


  return (
    <Dashboard>
      <div className="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-xl border border-slate-200 dark:border-slate-700">
        <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
          <h2 className="font-semibold text-slate-800 dark:text-slate-100">
            Tambah Data Lab
          </h2>
        </header>
        <div className="p-3">
          <form className="bg-slate-200" onSubmit={handleSubmit}>
            <div className="py-2 px-5">
              <Label htmlFor="name">Nama Lab</Label>
              <Input
                type="text"
                placeholder="Lab pplg 1 example"
                id="laboratory_name"
                name="laboratory_name"
                onChange={(e) => setDataLab({ ...dataLab, laboratory_name: e.target.value})}
              />
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

export default TambahDataLab;
