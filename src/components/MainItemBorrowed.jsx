import { Link } from "react-router-dom";

const MainItemBorrowed = () => {
  const articles = {
    apaGunanyaAku: 'Aku dapat membantu mewujudkan impianmu di dunia programming',
    codepelitaItuApa: 'Sebuah organisasi para programmer dibawah naungan prodi PPLG',
    hii: 'Perkenalkan aku codepelita..!!'
  }
  return (
    <>
    <div className="container mx-auto h-[60vh]">
      <h2 className="text-xl md:text-4xl font-bold text-center py-5 text-black">Kenalan Dengan <span className="text-[#03C988]">Codepelita</span> yuk..</h2>
      <div className="box mx-auto relative mt-10">
        <div className="tooltip absolute px-5 py-2 text-sm md:text-xl md:top-12 md:left-48 rounded-xl font-semibold bg-slate-100 top-7 left-[105px]" data-tip={articles.hii}>
            Hii !!
        </div>
        <div className="tooltip top-[330px] left-[105px] absolute px-5 py-2 md:text-xl text-sm tooltip-bottom rounded-xl font-semibold bg-slate-100 md:left-80 md:top-[360px]" data-tip={articles.apaGunanyaAku}>
           Apa gunanya aku ?
        </div>
        <div className="tooltip absolute px-5 py-2 text-sm md:text-xl rounded-xl font-semibold bg-slate-100 top-[270px] left-[105px] md:top-32 md:left-[75%]" data-tip={articles.codepelitaItuApa}>
           Codepelita itu apa ?
        </div>
        <div className="image flex justify-center items-center">
          <img
            src="./images/pngwing.com.png"
            alt="husky"
            className="ml-5 md:ml-10 h-96 md:h-[500px]"
          />
        </div>
      </div>
    </div>
    <div className="mx-auto h-[25vh] bg-slate-100 mt-16 mb-10 md:mt-52">
      <h2 className="text-center md:text-2xl font-bold py-5 text-xl text-black">Mau <span className="text-[#03C988]">pinjam</span> laptop/lain"<br /> dari codepelita ?</h2>
      <button className="bg-[#03C988] px-5 py-2 rounded-full block mx-auto font-semibold text-black"><Link to='/codepelita-pinjam'>Klik Disini</Link></button>
    </div>
    </>
  );
};

export default MainItemBorrowed;
