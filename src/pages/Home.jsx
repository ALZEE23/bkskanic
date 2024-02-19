import Case from "../components/Case";
import Navbar from "../components/Navbar";
import home from "../assets/home.svg";
import lock from "../assets/lock.svg";
import mesage from "../assets/Messages.svg";
import women from "../assets/Female User.svg";
import email from "../assets/Gmail Logo.svg";
import call from "../assets/Incoming Call.svg";
import map from "../assets/Google Maps Old.svg";
export default function Home() {
  return (
    <>
      <Navbar />
      <Case>
        <section id="home" className="border mt-0 pt-5 sm:px-12">
          <div className="grid sm:grid-cols-2">
            <div>
              <img src={home} className="mx-auto" />
            </div>
            <div className="grid gap-5 mt-3 sm:mt-20">
              <h1 className="text-2xl font-bold uppercase mx-auto">
                Mari Bergabung!
              </h1>
              <p className="mx-4 text-xl text-justify whitespace-normal font-semibold">
                Selamat datang di Aplikasi BK SKANIC kami! Temukan perjalanan
                pembelajaran pribadi yang mendalam dan dukungan yang berfokus
                pada pertumbuhan untuk membantu setiap siswa mencapai potensi
                tertinggi mereka.
              </p>
              <button className="border bg-slate-400 sm:w-32 sm:h-12 sm:mx-auto mx-28 mt-4 py-2 rounded-lg hover:bg-slate-900">
                <a href="" className="font-semibold text-white">
                  Daftar
                </a>
              </button>
            </div>
          </div>
        </section>
        <section id="about" className="border mt-20 pt-5 sm:px-28   ">
          <div className="">
            <div className="grid mt-5 gap-4">
              <h1 className="mx-auto text-2xl font-bold uppercase">About</h1>
              <p className="px-3 text-justify text-xl tracking-tighter whitespace-normal">
                BK SKANIC adalah aplikasi yang didedikasikan untuk layanan
                bimbingan konseling di sekolah. kami didesain untuk memandu
                siswa dalam meresapi pengalaman belajar mereka, mengembangkan
                potensi diri, dan mencapai keberhasilan dengan dukungan penuh
                dari para konselor terampil kami.
              </p>
            </div>
            <div className="grid mt-6">
              <h1 className="mx-auto text-xl font-bold xs:text-lg">
                Beberapa Layanan yang kami sediakan :
              </h1>
              <div className="grid sm:grid-cols-3 gap-4 mt-6">
                <div className="border-4 rounded-lg grid mx-4 hover:shadow-2xl pb-10 pt-10 gap-3">
                  <img src={mesage} className="mx-auto" />
                  <h1 className="text-xl font-bold mx-auto capitalize">
                    Konseling online
                  </h1>
                  <p className="mx-10 text-xl text-justify">
                    BK Skanic menyediakan layanan konseling online melalui fitur
                    chat.
                  </p>
                </div>
                <div className="border-4 rounded-lg grid mx-4 hover:shadow-2xl pb-10 pt-10 gap-3">
                  <img src={lock} className="mx-auto" />
                  <h1 className="text-xl font-bold mx-auto capitalize">
                    privasi
                  </h1>
                  <p className="mx-10 text-xl text-justify">
                    BK Skanic menjaga dan menjamin privasi para siswa/i yang
                    ingin konseling
                  </p>
                </div>
                <div className="border-4 rounded-lg grid mx-4 hover:shadow-2xl pb-10 pt-10 gap-3">
                  <img src={women} className="mx-auto" />
                  <h1 className="text-xl font-bold mx-auto capitalize">
                    Konseling offline
                  </h1>
                  <p className="mx-10 text-xl text-justify">
                    BK Skanic menyediakan layanan konseling offline atau tatap
                    muka agar para siswa/i dapat berinteraksi langsung dengan
                    guru BK.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="border sm:px-16">
          <div className="flex pt-10">
            <h1 className="text-3xl mx-auto font-bold sm:text-4xl">Contact</h1>
          </div>
          <div className="grid sm:grid-cols-2 mt-7 pt-6">
            <div className=" rounded-xl bg-slate-50 mx-3 sm:mx-32 sm:pb-32 sm:px-9 grid gap-1 pt-6 pb-6">
              <h1 className="mx-auto font-bold text-2xl capitalize mb-7">
                hubungi kami
              </h1>
              <h2 className="text-xl mx-auto text-center">
                kamu bisa menghubungi melalui dibawah ini.
              </h2>
              <div className="flex items-center mx-auto border-b-2 border-slate-800 px-8">
                <img src={email} className="scale-75" />
                <h1 className="font-semibold">bkskanic@gmail.com</h1>
              </div>
              <div className="flex items-center mx-auto border-b-2 border-slate-800 px-12">
                <img src={call} className="scale-75" />
                <h1>0896-1829-7321</h1>
              </div>
              <div className="flex items-center mx-auto  ">
                <img src={map} className="scale-75" />
                <h1>
                  Jl. Raya Laladon, Laladon, Kec. Ciomas, Kabupaten Bogor, Jawa
                  Barat 16610
                </h1>
              </div>
            </div>
            <div className="mx-4 sm:block grid gap-2 sm:gap-0 sm:mt-0 mt-4">
              <div className="border block ">
                <h1 className="text-xl mb-2">Full Name</h1>
                <label htmlFor="name">
                  <input
                    type="text"
                    className="bg-slate-50 w-full py-2 px-2 rounded-md mb-5"
                    placeholder="Name"
                  />
                </label>
              </div>
              <div className="border">
                <h1 className="text-xl mb-2">Email</h1>
                <label htmlFor="email">
                  <input
                    type="email"
                    className="bg-slate-50 w-full py-2 px-2 rounded-md mb-5"
                    placeholder="Email"
                  />
                </label>
              </div>
              <div className="border">
                <h1 className="text-xl mb-2">Message</h1>
                <label htmlFor="message">
                  <input
                    type="text"
                    className="bg-slate-50 w-full h-32 px-2 rounded-md mb-5"
                    placeholder="Message"
                  />
                </label>
              </div>
            </div>
          </div>
        </section>
        <section id="footer" className="mt-5 mb-5">
          <div className="flex">
            <h1 className="mx-auto ">Copyright@2024</h1>
          </div>
        </section>
      </Case>
    </>
  );
}
