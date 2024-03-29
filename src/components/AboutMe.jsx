import { LazyLoadImage } from "react-lazy-load-image-component";

export default function AboutMe() {
  return (
    <div className="container items-center justify-between mx-auto px-4 leading-normal">
      <div className="block text-center md:pt-30 pt-60 lg:mb-60">
        <div className="avatar">
          <LazyLoadImage
            className="w-52 h-52 rounded-full mx-auto"
            effect={"blur"}
            src={"profile-photo2.png"}
            alt={"my profile photo"}
          />
        </div>
        <h2 className="font-black uppercase pt-8 pb-8 text-3xl text-yellow-500">
          👋 Hello
        </h2>
        <p className="font-rubik font-semibold text-xl text-center text-gray-800 m-2">
          I'm Kexin Lin.
        </p>
        <p className="w-full md:w-2/3 mr-auto ml-auto text-gray-500 text-base">
          I'm a Software Development Engineer at RBC.
        </p>
        <p className="w-full md:w-2/3 mr-auto ml-auto text-gray-500 text-base">
          I graduated from the University of Toronto with a HON B.SC in Computer
          Science in 2021 June.
        </p>
        <p className="w-full md:w-2/3 mr-auto ml-auto text-gray-500 text-base">
          I like translating ideas into code. I also like Jazz dance and
          karaoke. 💕
        </p>
      </div>
    </div>
  );
}
