import { Link } from "react-router-dom";
import Button from "./Button";

const TrSpec = (props) => {

    const {
        no,
        nama,
        spek,
        tempat,
        idBarang
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
        <Button type='submit' classname='btn btn-sm bg-yellow-300 hover:bg-yellow-500 text-black'><Link to={'/dashboard/edit/item/' + idBarang}><ion-icon name="create"></ion-icon></Link></Button> | <Button type='submit' classname='btn btn-sm bg-red-500 hover:bg-red-800 text-black'><Link to={'/dashboard/delete/item/' + idBarang}><ion-icon name="trash"></ion-icon></Link></Button>
      </td>
    </tr>
  );
};

export default TrSpec;