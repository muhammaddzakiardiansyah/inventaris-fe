import { Link } from "react-router-dom";
import Button from "./Button";

const TR = (props) => {

    const {
        no,
        idBarang,
        kodeBarang,
        namaBarang,
        nomorRegistrasi,
        merk,
        kondisiBarang,
        jumlahBarang,
        stokBarang,
        tahunPembelian,
        sumberDana,
        tempat,
      } = props;

  return (
    <tr>
      <td className="p-2 whitespace-nowrap">
        <div className="font-semibold">{no}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="font-semibold">{idBarang}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="font-semibold">{kodeBarang}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="font-semibold">{namaBarang}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="font-semibold">{nomorRegistrasi}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="font-semibold">{merk}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="font-semibold">{kondisiBarang}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="font-semibold">{jumlahBarang}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="font-semibold">{stokBarang}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="font-semibold">{tahunPembelian}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="font-semibold">{sumberDana}</div>
      </td>
      {tempat ? (
        <td className="p-2 whitespace-nowrap">
          <div className="font-semibold">{tempat}</div>
        </td>
      ) : (
        ''
      )}
      <td className="p-2 whitespace-nowrap">
        <Button type='submit' classname='btn btn-sm bg-yellow-300 hover:bg-yellow-500 text-black'><Link to={'/dashboard/edit/item/' + idBarang}><ion-icon name="create"></ion-icon></Link></Button> | <Button type='submit' classname='btn btn-sm bg-red-500 hover:bg-red-800 text-black'><Link to={'/dashboard/delete/item/' + idBarang}><ion-icon name="trash"></ion-icon></Link></Button>
      </td>
    </tr>
  );
};

export default TR;