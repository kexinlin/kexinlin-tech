export default function Contact() {
  return (
    <div className="container items-center justify-between mx-auto px-4 leading-normal text-center mt-24 mb-24">
      <h2 className="font-black uppercase pb-2 text-3xl text-yellow-500">
        ✉️ Get in Touch
      </h2>

      <p className="font-rubik font-semibold text-xl text-center text-gray-800 my-10">
        Feel free to shoot me an email :)
      </p>
      <a
        className="bg-yellow-500 hover:bg-yellow-600 focus:outline-none text-white font-bold py-3 px-10 rounded-full no-underline"
        href="mailto:kexin.lin@mail.utoronto.ca"
      >
        CONTACT ME
      </a>
    </div>
  );
}
