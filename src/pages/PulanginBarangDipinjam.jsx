import Button from "../components/Elements/Button";
import Input from "../components/Elements/Input"
import Label from "../components/Elements/Label"

const PulanginBarangDipinjam = () => {

    return (
        <div className="w-1/2 border border-slate-500 p-20 mx-auto mt-20 mb-20 rounded-xl shadow-lg shadow-black/20"> 
            <h2 className="text-3xl font-bold mb-10 text-black">Pulangin <span className="text-[#03C988]">Barang</span></h2>
            <form action="">
                <div className="pb-5">
                    <Label>Nama Barang Yang Dipinjam</Label>
                    <Input 
                      type='text'
                      placeholder='Masukan Nama Barang'
                      name='item_name_borrowed'
                      id='item_name_borrowed'
                    />
                </div>
                <div className="pb-5">
                    <Label>Nama Barang Yang Dipinjam</Label>
                    <Input 
                      type='text'
                      placeholder='Masukan Nama Barang'
                      name='item_name_borrowed'
                      id='item_name_borrowed'
                    />
                </div>
                <div className="pb-5">
                    <Label>Nama Barang Yang Dipinjam</Label>
                    <Input 
                      type='text'
                      placeholder='Masukan Nama Barang'
                      name='item_name_borrowed'
                      id='item_name_borrowed'
                    />
                </div>
                <div className="pb-5">
                    <Label>Nama Barang Yang Dipinjam</Label>
                    <Input 
                      type='text'
                      placeholder='Masukan Nama Barang'
                      name='item_name_borrowed'
                      id='item_name_borrowed'
                    />
                </div>
                <div className="pb-5">
                    <Label>Nama Barang Yang Dipinjam</Label>
                    <Input 
                      type='text'
                      placeholder='Masukan Nama Barang'
                      name='item_name_borrowed'
                      id='item_name_borrowed'
                    />
                </div>

                <Button classname='bg-[#03C988] px-5 py-2 rounded-lg font-bold mt-10'>Pulangin</Button>
                <Button classname='bg-[#94c903] px-5 py-2 rounded-lg font-bold mt-10 ml-3' type='reset'>Reset</Button>
            </form>
        </div>
    )
}

export default PulanginBarangDipinjam;