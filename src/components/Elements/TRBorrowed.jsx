import { Link } from "react-router-dom";
import Button from "./Button";

const TRBorrowed = (props) => {

    const {
        no,
        idBarang,
        namaBarangDipinjam,
        namaPeminjam,
        kontak,
        kodeBarang,
        tanggalDipinjam,
        onClick
      } = props;

  return (
    <tr>
      <td className="p-2 whitespace-nowrap">
        <div className="font-semibold">{no}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="font-semibold">{namaBarangDipinjam}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="font-semibold">{namaPeminjam}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="font-semibold">{kontak}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="font-semibold">{kodeBarang}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="font-semibold">{tanggalDipinjam}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <Button type='submit' classname='btn btn-sm bg-yellow-100 hover:bg-yellow-300 text-black'><Link to={'/edit-data-barang-dipinjam/' + idBarang}><ion-icon name="pencil-outline"></ion-icon></Link></Button> | <Button type='submit' classname='btn btn-sm bg-red-100 hover:bg-red-300 text-black' onClick={onClick}><ion-icon name="trash-outline"></ion-icon></Button>
      </td>
    </tr>
  );
};

export default TRBorrowed;