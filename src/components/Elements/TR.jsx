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
      <td className="p-2 whitespace-nowrap">
        <div className="font-semibold">{tempat}</div>
      </td>
    </tr>
  );
};

export default TR;