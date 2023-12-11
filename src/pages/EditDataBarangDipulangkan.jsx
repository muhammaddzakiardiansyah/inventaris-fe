import { useEffect } from "react";
import Button from "../components/Elements/Button";
import Input from "../components/Elements/Input";
import Label from "../components/Elements/Label";
import Dashboard from "../layouts/Dashboard";

const EditDataBarangDipulangkan = () => {
  useEffect(() => {
    document.title = "Edit Data Barang Dipulangkan";
  });

  return (
    <Dashboard>
      <div className="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-xl border border-slate-200 dark:border-slate-700">
        <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
          <h2 className="font-semibold text-slate-800 dark:text-slate-100">
            Edit Data Barang Dipulangkan
          </h2>
        </header>
        <div className="p-3">
          <form action="">
            <div className="pb-5">
              <Label>Nama barang yang dipulangkan</Label>
              <Input
                type="text"
                placeholder="Nama barang yang dipinjam"
                name="item_name_borrowed"
                id="item_name_borrowed"
              />
            </div>
            <div className="pb-5">
              <Label>Nama yang meminjam</Label>
              <Input
                type="text"
                placeholder="Nama yang meminjam"
                name="item_name_borrowed"
                id="item_name_borrowed"
              />
            </div>
            <div className="pb-5">
              <Label>Kode barang</Label>
              <Input
                type="text"
                placeholder="Kode barang"
                name="item_name_borrowed"
                id="item_name_borrowed"
              />
            </div>
            <div className="pb-5">
              <Label>Kode barang</Label>
              <div className="flex gap-x-3 items-center">
                <div className="flex gap-x-3 items-center">
                    <input
                        type="radio"
                        name="radio-5"
                        className="radio radio-success"
                        checked
                    />
                    <span>Konfirmasi</span>
                </div>
                <div className="flex gap-x-3 items-center">
                    <input
                        type="radio"
                        name="radio-5"
                        className="radio radio-success"
                    />
                    <span>Tidak dikonfirmasi</span>
                </div>
              </div>
            </div>
            <div className="pb-5">
              <Label>Tanggal barang dipulangkan</Label>
              <Input
                type="text"
                placeholder="Tanggal barang dipulangkan"
                name="item_name_borrowed"
                id="item_name_borrowed"
              />
            </div>

            <Button classname="bg-[#03C988] px-5 py-2 rounded-lg font-bold mt-10">
              Edit
            </Button>
            <Button
              classname="bg-[#94c903] px-5 py-2 rounded-lg font-bold mt-10 ml-3"
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

export default EditDataBarangDipulangkan;
