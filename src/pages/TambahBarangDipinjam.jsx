import axios from "axios";
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

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const result = await axios({
          method: 'POST',
          url: 'http://200.100.0.59:4000/api/v1/items-borrowed',
          data: data,
        });
        Swal.fire("Created!", "Request has successed!", "success");
        setTimeout(() => {
          window.location.href = '/codepelita-pinjamin'
        }, 1500);
      } catch (error) {
        Swal.fire("Error!", error.message, "error");
      }
    }

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
                      onChange={(e) => setData({
                        ...data,
                        item_name_borrowed: e.target.value,
                      })}
                    />
                </div>
                <div className="pb-5">
                    <Label>Nama yang meminjam</Label>
                    <Input 
                      type='text'
                      placeholder='Nama yang meminjam'
                      name='borrowed_name'
                      id='borrowed_name'
                      onChange={(e) => setData({
                        ...data,
                        borrowed_name: e.target.value
                      })}
                    />
                </div>
                <div className="pb-5">
                    <Label>Kontak</Label>
                    <Input 
                      type='text'
                      placeholder='Kontak'
                      name='contact'
                      id='contact'
                      onChange={(e) => setData({
                        ...data,
                        contact: e.target.value,
                      })}
                    />
                </div>
                <div className="pb-5">
                    <Label>Kode barang</Label>
                    <Input 
                      type='text'
                      placeholder='Kode barang'
                      name='item_code'
                      id='item_code'
                      onChange={(e) => setData({
                        ...data,
                        item_code: e.target.value,
                      })}
                    />
                </div>
                <div className="pb-5">
                    <Label>Tanggal barang dipinjam</Label>
                    <Input 
                      type='date'
                      placeholder='Tanggal barang dipinjam'
                      name='date_borrowed'
                      id='date_borrowed'
                      onChange={(e) => setData({
                        ...data,
                        date_borrowed: e.target.value,
                      })}
                    />
                </div>

                <Button classname='bg-[#03C988] px-5 py-2 rounded-lg font-bold mt-10' onClick={handleSubmit}>Pinjam</Button>
                <Button classname='bg-[#94c903] px-5 py-2 rounded-lg font-bold mt-10 ml-3' type='reset'>Reset</Button>
            </form>
        </div>
      </>
    )
}

export default TambahBarangDipinjam;