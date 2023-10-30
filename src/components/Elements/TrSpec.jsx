import { Link } from "react-router-dom";
import Button from "./Button";

const TrSpec = (props) => {

    const {
        no,
        nama,
        spek,
        tempat,
        idBarang,
        onClick
      } = props;

      
  return (
    <tr>
      <td className="p-2 whitespace-nowrap">
        <div className="font-semibold">{no}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="font-semibold">{nama}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="font-semibold">{spek}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="font-semibold">{tempat}</div>
      </td>
      <td className="p-2 whitespace-nowrap flex justify-center items-center gap-1">
      <Link to={'/edit-spek-data-barang/' + idBarang}>
        <Button type='submit' classname='btn btn-sm bg-yellow-300 hover:bg-yellow-500 text-black'><ion-icon name="create"></ion-icon></Button></Link> | <Button type='submit' classname='btn btn-sm bg-red-500 hover:bg-red-800 text-black' onClick={onClick}><ion-icon name="trash"></ion-icon></Button>
      </td>
    </tr>
  );
};

export default TrSpec;