const HeaderItemBorrowed = () => {
  return (
    <>
      <div className="bg-white mx-auto h-[80vh]">
        <div className="md:flex justify-center items-center gap-32 mt-10 md:mt-20">
            <div className="left px-3">
            <h2 className="text-3xl px-2 md:text-5xl font-bold text-black">
                <span className="text-[#03C988]">Pinjam</span> apa yang bisa dipinjam, <br />
                Dan gunakan dengan <span className="text-[#03C988]">baik</span>.
            </h2>
            <p className="px-2 md:text-lg text-sm mt-1">Codepelita siap membantu kreatifitas anda</p>
            </div>
            <div className="right px-3 mt-10">
            <img src="./images/laptop.jpg" alt="laptop" className="h-72 rounded-xl md:rounded-s-full" />
            </div>
        </div>
      </div>
    </>
  );
};

export default HeaderItemBorrowed;
