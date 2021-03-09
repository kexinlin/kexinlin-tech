export default function Navbar() {
  return (
    <nav className="fixed z-50 w-full bg-white top-0 flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg shadow-lg">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-gray-800"
            href="/"
          >
            👋 Hi, I'm Kexin
          </a>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div
          className="lg:flex flex-grow items-center hidden"
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <a
                href="#Education"
                className="px-3 py-2 flex items-center text-base uppercase font-bold text-gray-800 hover:text-gray-600"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook-square text-lg leading-lg text-gray-500"></i>
                <span className="ml-2">Education</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#Experience"
                className="px-3 py-2 flex items-center text-base uppercase font-bold text-gray-800 hover:text-gray-600"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-twitter text-lg leading-lg text-gray-500"></i>
                <span className="ml-2">Experience</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-base uppercase font-bold text-gray-800 hover:text-gray-600"
                href="/learning-lab/tailwind-starter-kit/documentation/quick-start"
              >
                <i className="far fa-file-alt text-lg leading-lg text-gray-500"></i>
                <span className="ml-2">Docs</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="download-button px-3 py-2 flex items-center text-base uppercase font-bold text-gray-800 hover:text-gray-600"
                href="/learning-lab/tailwind-starter-kit/documentation/download"
              >
                <i className="fas fa-arrow-alt-circle-down text-lg leading-lg text-gray-500"></i>
                <span className="ml-2">Download</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
