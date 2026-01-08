const Dashboard = () => {
  return (
    <div className=" h-64 flex justify-center items-center gap-15 p-15 font-bold text-(--color-text)  md:text-xl ">
      <div className="h-1/2  lg:w-[15%] rounded-2xl flex flex-col justify-center items-center gap-3 hover:scale-105  duration-300 transition-all shadow-[#24cfa6] hover:shadow-sm">
        <p className="md:text-3xl leading-2 ">1254</p>
        <h1 className="  text-center">📦 Items Reported</h1>
      </div>
      <div className=" h-1/2 w-[100%/3] lg:w-[20%]   rounded-2xl flex flex-col justify-center items-center gap-3 hover:scale-105 duration-300 transition-all shadow-[#24cfa6] hover:shadow-sm">
        <p className="md:text-3xl leading-2  ">1254</p>

        <h1 className="text-center">🎉 Successfully Returned</h1>
      </div>
      <div className=" h-1/2 w-[100%/3] lg:w-[15%]   rounded-2xl flex flex-col justify-center items-center gap-3 hover:scale-105 duration-300 transition-all shadow-[#24cfa6] hover:shadow-sm">

        <p className="md:text-3xl leading-2  ">1254</p>
        <h1 className="text-center">⏳ Awaiting Match</h1>
      </div>
    </div>
  );
};

export default Dashboard;
