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
        <Button type='submit' classname='btn btn-sm bg-yellow-100 hover:bg-yellow-300 text-black'><ion-icon name="pencil-outline"></ion-icon></Button></Link> | <Button type='submit' classname='btn btn-sm bg-red-100 hover:bg-red-300 text-black' onClick={onClick}><ion-icon name="trash-outline"></ion-icon></Button>
      </td>
    </tr>
  );
};

export default TrSpec;