import { useEffect, useState } from "react";
import Button from "../components/Elements/Button";
import Input from "../components/Elements/Input"
import Label from "../components/Elements/Label"
import Navbar from "../components/Navbar";

const TambahBarangDipinjam = () => {

    const [data, setData] = useState({
      "item_name_borrowed": " ",
      "borrowed_name": " ",
      "contact": " ",
      "item_code": " ",
      "date_borrowed": " ",
    });

    useEffect(() => {
        document.title = 'Pinjam Barang'
    });

    return (
      <>
        <Navbar navbarTitle='Codepelita Pinjamin' />
        <div className="w-full md:w-1/2 md:border md:border-slate-500 md:p-20 px-5 py-10 md:mx-auto md:mt-20 mb-20 md:rounded-xl md:shadow-lg md:shadow-black/20"> 
            <h2 className="text-3xl font-bold mb-10 text-black" data-aos="fade-down" data-aos-duration="1500"><span className="text-[#03C988]">Pinjam</span> Barang</h2>
            <form action="">
                <div className="pb-5">
                    <Label>Nama barang yang dipinjam</Label>
                    <Input 
                      type='text'
                      placeholder='Nama barang yang dipinjam'
                      name='item_name_borrowed'
                      id='item_name_borrowed'
                    />
                </div>
                <div className="pb-5">
                    <Label>Nama yang meminjam</Label>
                    <Input 
                      type='text'
                      placeholder='Nama yang meminjam'
                      name='item_name_borrowed'
                      id='item_name_borrowed'
                    />
                </div>
                <div className="pb-5">
                    <Label>Kontak</Label>
                    <Input 
                      type='text'
                      placeholder='Kontak'
                      name='item_name_borrowed'
                      id='item_name_borrowed'
                    />
                </div>
                <div className="pb-5">
                    <Label>Kode barang</Label>
                    <Input 
                      type='text'
                      placeholder='Kode barang'
                      name='item_name_borrowed'
                      id='item_name_borrowed'
                    />
                </div>
                <div className="pb-5">
                    <Label>Tanggal barang dipinjam</Label>
                    <Input 
                      type='text'
                      placeholder='Tanggal barang dipinjam'
                      name='item_name_borrowed'
                      id='item_name_borrowed'
                    />
                </div>

                <Button classname='bg-[#03C988] px-5 py-2 rounded-lg font-bold mt-10'>Pinjam</Button>
                <Button classname='bg-[#94c903] px-5 py-2 rounded-lg font-bold mt-10 ml-3' type='reset'>Reset</Button>
            </form>
        </div>
      </>
    )
}

export default TambahBarangDipinjam;