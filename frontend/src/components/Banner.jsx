import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Highlight() {
  return (
    <div className="my-4 px-4 w-full max-w-auto mx-auto  overflow-hidden shadow-2xl">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="w-full h-72 md:h-64"
      >
        {/* Slide 1 - Vape Device */}
        <SwiperSlide>
          <div className="flex items-center justify-between bg-gradient-to-r from-black via-purple-900 to-black h-full p-8 text-white">
            {/* Teks Promo */}
            <div className="max-w-md">
              <h2 className="text-3xl md:text-4xl font-extrabold">
                Diskon <span className="text-purple-400">Rp 500.000</span>
              </h2>
              <p className="mt-3 text-lg text-gray-300">
                Promo khusus untuk Mod & Pod System
              </p>
              <button className="mt-5 bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-xl font-semibold shadow-lg">
                Belanja Sekarang
              </button>
            </div>
            {/* Gambar Produk */}
            <img
              src="https://i.ibb.co/YQnW0N2/vape-device.png"
              alt="Vape Device"
              className="rounded-xl shadow-2xl w-44 md:w-60"
            />
          </div>
        </SwiperSlide>

        {/* Slide 2 - Liquid Premium */}
        <SwiperSlide>
          <div className="flex items-center justify-between bg-gradient-to-r from-purple-900 to-pink-700 h-full p-8 text-white">
            <div className="max-w-md">
              <h2 className="text-3xl md:text-4xl font-extrabold">
                Liquid Premium <span className="text-yellow-300">Diskon 50%</span>
              </h2>
              <p className="mt-3 text-lg text-gray-200">
                Ratusan varian rasa untuk kamu pilih 🔥
              </p>
              <button className="mt-5 bg-yellow-400 hover:bg-yellow-500 text-black px-5 py-2 rounded-xl font-bold shadow-lg">
                Lihat Semua
              </button>
            </div>
            <img
              src="https://i.ibb.co/Tmbpn7R/vape-liquid.png"
              alt="Liquid Premium"
              className="rounded-xl shadow-2xl w-44 md:w-60"
            />
          </div>
        </SwiperSlide>

        {/* Slide 3 - Accessories */}
        <SwiperSlide>
          <div className="flex items-center justify-between bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 h-full p-8 text-white">
            <div className="max-w-md">
              <h2 className="text-3xl md:text-4xl font-extrabold">
                Aksesoris Vape <span className="text-green-400">Mulai Rp 20rb</span>
              </h2>
              <p className="mt-3 text-lg text-gray-300">
                Coil, cotton, baterai, drip tip, dan banyak lagi
              </p>
              <button className="mt-5 bg-green-500 hover:bg-green-600 text-black px-5 py-2 rounded-xl font-bold shadow-lg">
                Belanja Aksesoris
              </button>
            </div>
            <img
              src="https://i.ibb.co/2h4SzGQ/vape-accessories.png"
              alt="Vape Accessories"
              className="rounded-xl shadow-2xl w-44 md:w-60"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}