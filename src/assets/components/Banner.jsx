import banner from "../../img/banner_3.png";

const Banner = () => {
  return (
    <div className="flex">
      <img src={banner} className="w-full md:h-96" />
      <h1 className="absolute  font-bold bg-yellow-900/50  mt-14 p-0.5 md:p-2.5 md:mt-20 md:text-5xl ">
        Faça seu hamburguer
      </h1>
    </div>
  );
};

export default Banner;
