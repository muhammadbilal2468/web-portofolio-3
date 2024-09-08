"use client";

import ModalCertificate from "@/components/ModalCertificate";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaInstagram, FaTimes, FaYoutube } from "react-icons/fa";
import { FaLinkedinIn, FaRegEye } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FiGithub } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { FaBars } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [skill, setSkill] = useState("hardskill");
  const [isModal, setIsModal] = useState(false);
  const [urlImage, setUrlImage] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleNavbar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    handleScroll();
    AOS.init({
      easing: "ease-out-cubic",
      offset: 50,
    });
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  };

  const showCertificate = (url: string) => {
    setIsModal(!isModal);
    setUrlImage(url);
  };

  const handleDownloadCv = () => {
    const link = document.createElement("a");
    link.href = "/documents/cv_bilal.pdf"; // Path ke file PDF di folder public
    link.download = "cv.pdf"; // Nama file saat diunduh
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const experiance = [
    {
      startdate: "29-08-2023",
      enddate: "29-12-2023",
      image: "/images/experiance1.jpg",
      place: "Yayasan hasnur Centre",
      position: "Web Developer",
      desc: "Saya mengikuti program magang dari Kampus Merdeka pada tahun 2023 selama 5 bulan sebagai web developer membuat berbagai aplikasi berbasis website dari client dan bekerja dibawah Mentor sebagai PM.",
    },
    {
      startdate: "29-08-2022",
      enddate: "29-12-2022",
      image: "/images/experiance1.jpg",
      place: "PT Media Kreasi Abadi",
      position: "Frontend Developer",
      desc: "Saya mengikuti magang dari Kampus Merdeka di PT MKA sebagai frontend developer, membuat aplikasi Rentalkuy yaitu aplikasi sewa barang bersama tim pengembangan aplikasi seperti UIUX, Mobile Dev, Backend Dev, Business Analyst.",
    },
    {
      startdate: "01-06-2018",
      enddate: "30-11-2018",
      image: "/images/experiance1.jpg",
      place: "PT Telkom Palu",
      position: "Siswa PKL",
      desc: "Saya mengikuti Kerja Praktek di PT Telkom palu di bagian Bisnis dan teknisi lapangan mengenai jaringan.",
    },
  ];

  const softskills = [
    "Leadership",
    "Teamwork",
    "Problem Solving",
    "Adaptability",
    "Problem Solving",
    "Communication",
    "Critical Thinking",
    "Creativity",
  ];

  const hardskills = [
    {
      name: "HTML",
      image: "/images/html.png",
      level: "Advance",
    },
    {
      name: "CSS",
      image: "/images/css.png",
      level: "Advance",
    },
    {
      name: "Javascript",
      image: "/images/js.png",
      level: "Intermediate",
    },
    {
      name: "Typescript",
      image: "/images/ts.png",
      level: "Beginner",
    },
    {
      name: "Boostrap",
      image: "/images/css.png",
      level: "Intermediate",
    },
    {
      name: "Tailwind CSS",
      image: "/images/tailwindcss.png",
      level: "Advance",
    },
    {
      name: "Node JS",
      image: "/images/nodejs.png",
      level: "Intermediate",
    },
    {
      name: "React JS",
      image: "/images/reactjs.png",
      level: "Intermediate",
    },
    {
      name: "Express JS",
      image: "/images/expressjs.png",
      level: "Intermediate",
    },
    {
      name: "Next JS",
      image: "/images/nextjs.png",
      level: "Beginner",
    },
    {
      name: "Mysql",
      image: "/images/mysql.png",
      level: "Intermediate",
    },
    {
      name: "Postgre Sql",
      image: "/images/postgresql.png",
      level: "Beginner",
    },
    {
      name: "Git",
      image: "/images/git.png",
      level: "Intermediate",
    },
    {
      name: "Github",
      image: "/images/github.png",
      level: "Intermediate",
    },
    {
      name: "Ubuntu (Server)",
      image: "/images/ubuntu.png",
      level: "Beginner",
    },
  ];

  const softwareskills = [
    {
      name: "MS Word",
      image: "/images/word.png",
    },
    {
      name: "MS Exel",
      image: "/images/exel.png",
    },
    {
      name: "MS Powerpoint",
      image: "/images/powerpoint.png",
    },
    {
      name: "VS Code",
      image: "/images/vscode.png",
    },
    {
      name: "Xampp",
      image: "/images/xampp.png",
    },
    {
      name: "Postman",
      image: "/images/postman.png",
    },
    {
      name: "Canva",
      image: "/images/canva.png",
    },
  ];

  const certificates = [
    {
      image: "/images/sertifikat1.jpg",
    },
    {
      image: "/images/sertifikat2.jpg",
    },
    {
      image: "/images/sertifikat3.jpg",
    },
    {
      image: "/images/sertifikat4.jpg",
    },
    {
      image: "/images/sertifikat5.jpg",
    },
  ];

  const portofolios = [
    {
      name: "RentalGoo",
      image: "/images/portofolio1.png",
      desc: "Webiste rental barang dengan sistem e-commerce, dimana semua pengguna dapat menyewa maupun menyewakan. Teknologi digunakan Node JS, Express JS, Sequalize, MYSQL, RESTFULL API, React JS, Tailwind CSS, Flowbite, Map Leaflet, DLL. Fullstack Dibuat oleh Seorang diri tanpa tim.",
      status: "Dinamis",
      textButton: "Nonton Demo",
      link: "https://www.youtube.com/watch?v=TU6w20CLnrQ",
    },
    {
      name: "S1 Akuntansi",
      image: "/images/portofolio2.png",
      desc: "Webiste profil dari S1 Akuntansi Sektor Publik Universitas Tadulako dengan menggunakan React JS,Tailwind CSS, Flowbite. Frontend Dibuat oleh Seorang diri tanpa tim.",
      status: "Statis",
      textButton: "Kunjugi Situs",
      link: "https://fekon-untad.vercel.app/",
    },
    {
      name: "Web Portofolio",
      image: "/images/portofolio3.png",
      desc: "Webiste portofolio yang menjelaskan data diri, skill, portofoilo, dan contact diri saya sendiri. Website ini dibuat menggunakan Next JS dan Tailwind CSS. Dibuat oleh Seorang diri tanpa tim.",
      status: "Statis",
      textButton: "Kunjugi Situs",
      link: "https://muhammadbilalll.vercel.app/",
    },
  ];

  return (
    <div className="realative w-full bg-primary overflow-hidden">
      <div className="fixed z-20 xl:bottom-10 xl:right-10 bottom-5 right-5">
        <a
          href="https://wa.me/6282337175785?text=Assalamu'alaikum%20saya%20telah%20mengunjungi%20website%20profile%20anda%20Muhammad%20Bilal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/wa.png"
            alt="wa"
            width={1000}
            height={1000}
            className="lg:w-16 w-12 cursor-pointer hover:w-14 transition-all duration-500"
          />
        </a>
      </div>

      {/* ---------------- HOME ---------------- */}
      <div className="relative w-full lg:h-screen h-fit sm:pt-40">
        <div className="absolute z-40 top-0 right-0 md:w-96 w-40 md:h-96 h-40 bg-blue-500 rounded-full blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2" />
        {/* --- NAVBAR --- */}

        {/* Tombol Humburger */}
        <div
          onClick={handleToggleNavbar}
          className="sm:block md:hidden fixed right-5 top-5 text-white font-bold cursor-pointer z-50"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Menu navbar responsive */}
        {isMenuOpen && (
          <div className="fixed top-0 right-0 w-full h-fit bg-primary shadow-md z-40 flex flex-col items-start p-5 pt-16 space-y-3">
            <Link
              href={"#"}
              className="lg:text-base md:text-xs text-center font-semibold text-white w-full hover:bg-quaternary hover:text-black rounded-lg"
            >
              Experiance
            </Link>
            <Link
              href={"#"}
              className="lg:text-base md:text-xs text-center font-semibold text-white w-full hover:bg-quaternary hover:text-black rounded-lg"
            >
              Skill
            </Link>
            <Link
              href={"#"}
              className="lg:text-base md:text-xs text-center font-semibold text-white w-full hover:bg-quaternary hover:text-black rounded-lg"
            >
              Certificate
            </Link>
            <Link
              href={"#"}
              className="lg:text-base md:text-xs text-center font-semibold text-white w-full hover:bg-quaternary hover:text-black rounded-lg"
            >
              Portofolio
            </Link>
          </div>
        )}

        {/* Navbar */}
        <nav
          className={`fixed top-0 left-0 w-full duration-300 transition z-30 ${
            isScrolled ? "bg-black" : "bg-primary"
          }`}
        >
          <div className="xl:px-32 lg:px-24 md:px-10 sm:px-5  mx-auto py-4 flex justify-between items-center">
            <div className="lg:text-2xl md:text-lg sm:text-sm  text-tertiary font-bold">
              My Portfolio
            </div>
            <div className="sm:hidden md:block flex space-x-4">
              <Link
                href={"#"}
                className="lg:text-base md:text-xs text-white hover:bg-white hover:text-secondary shadow-lg hover:shadow-quaternary py-1 px-3 rounded-lg"
              >
                Experiance
              </Link>
              <Link
                href={"#"}
                className="lg:text-base md:text-xs text-white hover:bg-white hover:text-secondary shadow-lg hover:shadow-quaternary py-1 px-3 rounded-lg"
              >
                Skill
              </Link>
              <Link
                href={"#"}
                className="lg:text-base md:text-xs text-white hover:bg-white hover:text-secondary shadow-lg hover:shadow-quaternary py-1 px-3 rounded-lg"
              >
                Certificate
              </Link>
              <Link
                href={"#"}
                className="lg:text-base md:text-xs text-white hover:bg-white hover:text-secondary shadow-lg hover:shadow-quaternary py-1 px-3 rounded-lg"
              >
                Portofolio
              </Link>
            </div>
          </div>
        </nav>

        {/* --- BANNER --- */}
        <div className="flex justify-center xl:px-32 lg:px-24 md:px-10 sm:px-5  mx-auto h-full">
          <div className="flex items-center md:basis-1/2 basis-5/6 h-full">
            <div className="">
              <h1 className="lg:text-5xl text-2xl text-tertiary mb-2">
                I&apos;m
              </h1>
              <h1 className="lg:text-5xl text-2xl text-white">
                Muhammad Bilal
              </h1>
              <p className="text-tertiary lg:text-7xl md:text-2xl">
                - - - - - -
              </p>
              <p className="lg:text-xl text-xs text-slate-300 mb-5">
                Lulusan S1 Teknik Informatika Universitas Tadulako Tahun 2024
              </p>
              <button
                onClick={handleDownloadCv}
                className="relative lg:text-base md:text-sm text-xs px-4 py-2 bg-quaternary text-white rounded hover:bg-sky-600 font-bold z-20"
              >
                Download CV
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center xl:px-32 lg:px-24 md:px-10 sm:px-5 mx-auto md:basis-1/2 basis-1/6">
            <Image
              src="/images/bilal.png"
              alt="profile"
              width={300}
              height={300}
              className="md:block sm:hidden lg:w-2/3 md:w-2/4 w-1/3"
            />
            <div className="flex md:flex-row flex-col lg:gap-10 gap-5 bg-secondary p-4 rounded-lg shadow-lg hover:shadow-quaternary shadow-sky-600">
              <Link
                href={"https://www.instagram.com/bilal_00s/"}
                target="_blank"
              >
                <FaInstagram className="lg:text-2xl md:text-lg text-sm text-tertiary hover:text-quaternary cursor-pointer" />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/muhammad-bilal-314888221/"}
                target="_blank"
              >
                <FaLinkedinIn className="lg:text-2xl md:text-lg text-sm text-tertiary hover:text-quaternary cursor-pointer" />
              </Link>
              <Link
                href={"https://github.com/muhammadbilal2468"}
                target="_blank"
              >
                <FiGithub className="lg:text-2xl md:text-lg text-sm text-tertiary hover:text-quaternary cursor-pointer" />
              </Link>
              <Link
                href={"https://www.youtube.com/@muhammadbilal-qp2sx/featured"}
                target="_blank"
              >
                <FaYoutube className="lg:text-2xl md:text-lg text-sm text-tertiary hover:text-quaternary cursor-pointer" />
              </Link>
              <Link
                href={"mailto:muhammadbilalll2468@gmail.com"}
                target="_blank"
              >
                <SiGmail className="lg:text-2xl md:text-lg text-sm text-tertiary hover:text-quaternary cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- Experiance ---------------- */}
      <div className="relative w-full">
        <div className="absolute z-10 top-0 left-0 md:w-96 w-40 md:h-96 h-40 bg-blue-500 rounded-full blur-3xl opacity-50 transform -translate-x-1/2 -translate-y-1/2" />{" "}
        <div className="xl:px-32 lg:px-24 md:px-10 sm:px-5  mx-auto lg:py-20 md:py-16 py-10 space-y-10">
          <h2 className="lg:text-3xl md:text-2xl text-xl text-white text-center">
            Experiance
          </h2>
          <div className="grid lg:grid-cols-3 grid-cols-2 justify-between lg:gap-10 gap-6">
            {experiance.map((experiance, index) => (
              <div
                className="bg-secondary rounded-xl shadow-lg hover:shadow-quaternary shadow-sky-600 pb-4"
                data-aos="fade-up"
                data-aos-duration={`${index + 2}00`}
                key={index}
              >
                <Image
                  src={experiance.image}
                  alt="experiance"
                  width={500}
                  height={500}
                  className="rounded-t-xl w-full xl:h-48 lg:h-40 md:h-36"
                />
                <div className="md:px-5 px-1.5 pt-2 md:space-y-2 space-y-1">
                  <p className="text-end lg:text-xs text-[9px] text-slate-200">
                    {experiance.startdate} - {experiance.enddate}
                  </p>
                  <div className="">
                    <h5 className="xl:text--xl lg:text-lg md:text-base text-[11px] font-bold tracking-tight text-white">
                      {experiance.place}
                    </h5>
                    <h3 className="lg:text-sm md:text-xs text-[9px] font-bold text-sky-600">
                      {experiance.position}
                    </h3>
                  </div>
                  <p className="lg:text-xs md:text-[9px] text-[7px] font-normal text-gray-300 dark:text-gray-400 text-justify">
                    {experiance.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---------------- SKILL ---------------- */}
      <div className="relative w-full">
        <div className="xl:px-32 lg:px-24 md:px-10 sm:px-5  mx-auto lg:py-20 md:py-16 py-10">
          <div className="xl:w-3/4 w-full mx-auto boder-4 border-white">
            <div className="w-full">
              <div className="flex justify-between bg-secondary lg:rounded-t-xl rounded-none mb-10">
                <div
                  className={`w-full hover:bg-sky-600 py-2 ${
                    skill == "softskill" && "bg-sky-600"
                  } rounded-tl-xl`}
                  onClick={() => setSkill("softskill")}
                >
                  <p className="lg:text-xl md:text-sm text-[10px] text-center font-semibold text-tertiary cursor-pointer">
                    Soft Skill
                  </p>
                </div>
                <div
                  className={`w-full hover:bg-sky-600 py-2 ${
                    skill == "hardskill" && "bg-sky-600"
                  }`}
                  onClick={() => setSkill("hardskill")}
                >
                  <p className="lg:text-xl md:text-sm text-[10px] text-center font-semibold text-tertiary cursor-pointer">
                    Hard Skill
                  </p>
                </div>
                <div
                  className={`w-full hover:bg-sky-600 py-2 ${
                    skill == "softwareskill" && "bg-sky-600"
                  } rounded-tr-xl`}
                  onClick={() => setSkill("softwareskill")}
                >
                  <p className="lg:text-xl md:text-sm text-[10px] text-center font-semibold text-tertiary cursor-pointer">
                    Software Skill
                  </p>
                </div>
              </div>
              {skill === "softskill" && (
                <div className="flex justify-center">
                  <ol className="relative text-gray-500 border-s border-gray-200">
                    {softskills.map((softskill, index) => (
                      <li
                        className="flex items-center lg:mb-10 md:mb-6 mb-4 md:ms-10 ms-7 last:mb-0 last:border-0"
                        key={index}
                      >
                        <span className="absolute flex items-center justify-center lg:w-8 md:w-5 w-3 lg:h-8 md:h-5 h-3 bg-quaternary rounded-full lg:-start-4 md:-start-2.5 -start-1.5 lg:ring-4 ring-2 ring-white">
                          <svg
                            className="w-3.5 h-3.5 text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 16 12"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M1 5.917 5.724 10.5 15 1.5"
                            />
                          </svg>
                        </span>
                        <h3 className="font-medium leading-tight text-white">
                          {softskill}
                        </h3>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
              {skill === "hardskill" && (
                <div className="w-full grid grid-cols-3 gap-5 items-center">
                  {hardskills.map((hardskill, index) => (
                    <div
                      className="flex items-center lg:gap-5 md:gap-3 gap-1"
                      key={index}
                      data-aos="fade-up"
                      data-aos-duration={`${index + 2}00`}
                    >
                      <Image
                        src={hardskill.image}
                        alt={hardskill.name}
                        width={500}
                        height={500}
                        className="lg:w-16 md:w-10 w-6 lg:h-16 md:h-10 h-6 rounded-full lg:p-2 md:p-1 p-0.5 bg-white"
                      />
                      <div className="">
                        <p className="lg:text-xl md:text-sm text-xs font-semibold text-white">
                          {hardskill.name}
                        </p>
                        <p className="lg:text-base md:text-xs text-[8px] text-slate-300">
                          {hardskill.level}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {skill === "softwareskill" && (
                <div className="grid grid-cols-3 justify-around w-full">
                  {softwareskills.map((softwareskill, index) => (
                    <div
                      className="flex justify-around"
                      key={index}
                      data-aos="fade-down"
                      data-aos-duration={`${index + 2}00`}
                    >
                      <div className="flex flex-col gap-3 items-center mb-10">
                        <Image
                          src={softwareskill.image}
                          alt={softwareskill.name}
                          width={500}
                          height={500}
                          className="lg:w-16 md:w-10 w-6 lg:h-16 md:h-10 h-6 rounded-full lg:p-2 md:p1 sm:p-0.5 bg-white"
                        />
                        <p className="lg:text-xl md:text-sm sm:text-[10px] font-semibold text-white">
                          {softwareskill.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- CERTIFICATE ---------------- */}
      <div className="relative w-full">
        <div className="xl:px-32 lg:px-24 md:px-10 sm:px-5  mx-auto lg:py-20 md:py-16 py-10 space-y-10">
          <h2 className="lg:text-3xl md:text-2xl text-xl text-white text-center">
            Certificate
          </h2>
          <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-10 gap-5 justify-between">
            {certificates.map((certificate, index) => (
              <div
                className="relative lg:rounded-lg rounded-sm shadow-lg hover:shadow-quaternary"
                key={index}
                data-aos="zoom-in-down"
                data-aos-duration={`${index + 2}00`}
              >
                <button
                  className="absolute flex items-center gap-2 md:top-2 top-0.5 md:right-2 right-0.5 lg:text-base md:text-sm text-[10px] text-white py-1 px-5 rounded-lg bg-secondary font-semibold"
                  onClick={() => showCertificate(certificate.image)}
                >
                  <FaRegEye className="lg:text-base md:text-sm text-[10px]" />{" "}
                  Lihat
                </button>
                <Image
                  src={certificate.image}
                  alt="wa"
                  width={1000}
                  height={1000}
                  className="w-full lg:h-56 md:h-36 h-24 rounded-xl"
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {isModal === true && <ModalCertificate isOpen={isModal} url={urlImage} />}

      {/* ---------------- PORTOFOLIO ---------------- */}
      <div className="relative w-full">
        <div className="xl:px-32 lg:px-24 md:px-10 sm:px-5  mx-auto lg:py-20 md:py-16 py-10 space-y-10">
          <h2 className="lg:text-3xl md:text-2xl text-xl text-white text-center">
            Portofolio
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-20 lg:gap-16 gap-7 md:justify-between w-full">
            {portofolios.map((portofolio, index) => (
              <div
                className="relative md:w-full w-3/4 bg-secondary rounded-xl shadow-lg hover:shadow-quaternary shadow-sky-600 p-2 mb-10 sm:mx-auto"
                key={index}
                data-aos="zoom-in-up"
                data-aos-duration={`${index + 2}00`}
              >
                <button
                  className={`absolute flex items-center gap-2 lg:-top-4 -top-3 lg:-right-4 -right-3 lg:text-base md:text-sm text-[10px] py-1 px-5 rounded-lg ${
                    portofolio.status === "Statis"
                      ? "text-black bg-tertiary"
                      : "text-white bg-quaternary"
                  }  font-bold`}
                  onClick={() => showCertificate(portofolio.image)}
                >
                  {portofolio.status}
                </button>
                <Image
                  src={portofolio.image}
                  alt="portofolio"
                  width={500}
                  height={500}
                  className="rounded-t-2xl w-full xl:h-48 lg:40 md:h-36 h-28 mb-3"
                />

                <div className="flex flex-col justify-between lg:space-y-3 md:space-y-2 pb-5">
                  <div className="space-y-2">
                    <h5 className="lg:text-xl md:text-sm text-xs font-bold tracking-tight text-white">
                      {portofolio.name}
                    </h5>
                    <p className="xl:text-sm lg:text-xs md:text-[10px] text-[8px] font-normal text-gray-300 dark:text-gray-400 text-justify">
                      {portofolio.desc}
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-4 left-0 right-0 w-full hover:shadow-quaternary shadow-sky-600">
                  <Link href={portofolio.link} target="_blank">
                    <button className="flex justify-center items-center gap-2 w-2/3 bg-white font-semibold py-1 rounded-lg mx-auto">
                      {portofolio.status === "Statis" ? (
                        <FcGoogle className="text-xl" />
                      ) : (
                        <FaYoutube className="text-red-600 text-xl" />
                      )}
                      <span className="lg:text-sm md:text-xs text-[10px]">
                        {portofolio.textButton}
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="w-full rounded-lg shadow py-10">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Muhammad Bilal™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
