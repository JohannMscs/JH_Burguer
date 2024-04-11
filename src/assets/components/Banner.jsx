import banner from "../../img/banner_3.png";

const Banner = () => {
  return (
    <div className="flex">
      <img src={banner} className="w-full h-96" />
      <h1 className="absolute text-5xl font-bold bg-yellow-900/50 mt-20 p-2.5">
        Faça seu hamburguer
      </h1>
    </div>
  );
};

export default Banner;
