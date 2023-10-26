import Button from "../components/Elements/Button";
import Dashboard from "../layouts/Dashboard";

const TambahDataBarang = () => {
  return (
    <Dashboard>
      <div className="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
        <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
          <h2 className="font-semibold text-slate-800 dark:text-slate-100">
            Income/Expenses
          </h2>
        </header>
        <div className="p-3">
          <form action="" className="bg-slate-200">
            <div className="p-5">
                <label htmlFor="" className="block font-bold text-sm pb-2">Nama Barang</label>
                <input type="text" placeholder="Input Nama Barang" className="rounded-lg w-full placeholder:text-sm" required/>
            </div>
            <Button classname="px-5 py-2 bg-green-600 hover:bg-green-800 rounded-lg">Tambah</Button>
          </form>
        </div>
      </div>
    </Dashboard>
  );
};

export default TambahDataBarang;
