import React from "react";
import AsideMenu from "../AsideMenu";
import Image from "next/image";

const Home = () => {
  return (
    <main className="main ">
      <AsideMenu />
      <section className="main__image h-100vh">
        <div className="image__container relative">
          <div className="image__background"></div>
          <Image
            src="/girl-and-pet 1.png"
            alt="main__image"
            width={775}
            height={900}
          />
        </div>
      </section>
    </main>
  );
};
export default Home;
