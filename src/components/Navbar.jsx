import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const { navbarTitle } = props
  const [icon, setIcon] = useState(false);

  const changeIcon = () => {
    setIcon(!icon);
  };

  useEffect(() => {
    const list = document.querySelector('ul');

    if (icon == true) {
      list.classList.add('top-[50px]'), list.classList.add('opacity-100');
    } else {
      list.classList.remove('top-[50px]'), list.classList.remove('opacity-100');
    }
  }, [icon]);

  return (
        <nav className="md:p-2 p-4 md:px-20 md:flex md:justify-between bg-white md:items-center w-full">
        <div className="flex justify-between items-center">
            <h2 className="text-xl md:text-2xl font-openSans font-bold cursor-pointer text-[#03C988]">{navbarTitle}</h2>
            <span className="text-3xl cursor-pointer md:hidden">
            <ion-icon
                name={icon == true ? 'close-outline' : 'reorder-two-outline'}
                onClick={changeIcon}
            ></ion-icon>
            </span>
        </div>
        <ul className="md:flex absolute bg-slate-100 md:bg-transparent mt-5 left-0 md:p-0 p-3 w-full mr-5 z-[10] md:z-auto md:static md:mt-1 md:w-auto md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 text-black cursor-pointer">
            <Link to={'/codepelita-pinjamin'}><li className="px-5 font-semibold py-3 hover:text-[#03C988]">Home</li></Link>
            <Link to={'/codepelita-pinjam'}><li className="px-5 font-semibold py-3 hover:text-[#03C988]">Peminjaman Barang</li></Link>
            <Link to={'/codepelita-pulangin'}><li className="px-5 font-semibold py-3 hover:text-[#03C988]">Pengembalian Barang</li></Link>
        </ul>
        </nav>
  );
};

export default Navbar;