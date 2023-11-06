const MainItemBorrowed = () => {
  return (
    <div className="container mx-auto bg-lime-100 h-[80vh]">
      <div className="box mx-auto relative">
        <div className="tooltip absolute h-10 w-auto bg-slate-100 top-20 left-10" data-tip="hello">
           Apa gunanya aku?
        </div>
        <div className="two absolute h-10 w-auto bg-slate-100">
          Codepelita itu apa?
        </div>
        <div className="tree absolute h-10 w-auto bg-slate-100">
          Apa yang bisa aku bantu?
        </div>
        <div className="image flex justify-center items-center">
          <img
            src="./images/pngwing.com.png"
            alt="husky"
            className="h-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default MainItemBorrowed;
