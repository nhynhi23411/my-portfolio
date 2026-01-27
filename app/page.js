import LenisScroll from "@/components/LenisScroll";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
// import Services from "@/components/Services"; // Khuyên bạn nên bỏ Services nếu không dùng
import Work from "@/components/Work";
import Publications from "@/components/Publications"; // <--- Import mới
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Awards from "@/components/Awards";
import Experience from "@/components/Experience"; // <--- Import mới
import Journey from "@/components/Journey";

export default function Page() {
  return (
    <>
      <LenisScroll />
      <Navbar />
      <Header />
      <About />
      {/* <Services />  Bạn có thể comment dòng này nếu muốn ẩn Services */}
      <Work />
      <Publications /> {/* <--- Thêm vào đây */}
      <Experience /> {/* <--- Đổi ở đây */}
      <Awards />
      <Journey />
      <Contact />
      <Footer />
    </>
  );
}
