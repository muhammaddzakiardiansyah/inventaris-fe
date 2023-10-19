const TrSpec = (props) => {

    const {
        no,
        nama,
        spek,
        tempat,
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
    </tr>
  );
};

export default TrSpec;