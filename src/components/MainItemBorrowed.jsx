const MainItemBorrowed = () => {
  const articles = {
    apaGunanyaAku: 'Aku Digunakan Untuk meminjam barang apa saja yang kamu butuhkan'
  }
  return (
    <div className="container mx-auto bg-lime-100 h-[80vh]">
      <div className="box mx-auto relative">
        <div className="tooltip absolute px-5 py-2 rounded-xl font-semibold bg-slate-100 top-7 left-5" data-tip={articles.apaGunanyaAku}>
           Apa gunanya aku ?
        </div>
        <div className="tooltip absolute px-5 py-2 rounded-xl font-semibold bg-slate-100 top-72 left-20" data-tip={articles.apaGunanyaAku}>
           Codepelita itu apa ?
        </div>
        {/* <div className="two absolute h-10 w-auto bg-slate-100">
          Codepelita itu apa?
        </div>
        <div className="tree absolute h-10 w-auto bg-slate-100">
          Apa yang bisa aku bantu?
        </div> */}
        <div className="image flex justify-center items-center">
          <img
            src="./images/pngwing.com.png"
            alt="husky"
            className="ml-5 md:ml-10 h-96 md:h-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default MainItemBorrowed;
