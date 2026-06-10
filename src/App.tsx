import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import pic1 from "./assets/gallery/Picture1.png";
import pic2 from "./assets/gallery/Picture2.png";
import pic3 from "./assets/gallery/Picture3.jpg";
import pic4 from "./assets/gallery/Picture4.png";
import pic5 from "./assets/gallery/Picture5.jpg";
import pic6 from "./assets/gallery/Picture6.png";
import pic7 from "./assets/gallery/Picture7.png";
import pic8 from "./assets/gallery/Picture8.jpg";
import pic9 from "./assets/gallery/Picture9.jpg";
import pic10 from "./assets/gallery/Picture10.jpg";
import pic11 from "./assets/gallery/Picture11.png";
import pic12 from "./assets/gallery/Picture12.jpg";
import pic13 from "./assets/gallery/Picture13.png";
import pic14 from "./assets/gallery/Picture14.jpg";
import pic15 from "./assets/gallery/Picture15.jpg";
import pic16 from "./assets/gallery/Picture16.jpg";
import pic17 from "./assets/gallery/Picture17.jpg";
import pic18 from "./assets/gallery/Picture18.jpg";
import pic19 from "./assets/gallery/Picture19.jpg";
import pic20 from "./assets/gallery/Picture20.jpg";




export default function App() {
  const [current, setCurrent] = useState(0);
  
const [selectedService, setSelectedService] = useState<string | null>(null);

const services = [
  {
    title: "Turnkey EPC Projects",
    desc: "Complete Engineering, Procurement & Construction solutions delivered from concept to completion.",
  },
  {
    title: "Structural Works",
    desc: "Durable structural construction aligned with modern engineering standards.",
  },
  {
    title: "Finishing Works",
    desc: "Premium interior and exterior finishing solutions.",
  },
  {
    title: "MEP Services",
    desc: "Mechanical, Electrical & Plumbing solutions for efficient operations.",
  },
  {
    title: "Medical Infrastructure",
    desc: "Construction solutions for hospitals and healthcare facilities.",
  },
  {
    title: "Renewable Energy",
    desc: "Solar and sustainable energy infrastructure.",
  },
  {
    title: "Furniture Supply",
    desc: "Office and medical furniture solutions.",
  },
  {
    title: "Facility Management",
    desc: "Maintenance and operational support services.",
  },
  {
    title: "Property Consultancy",
    desc: "Investment and development advisory.",
  },
  {
    title: "Water & Wastewater Treatment Systems",
    desc: "Advanced treatment, recycling and sustainable water management solutions for industrial, commercial and institutional projects.",
  },
];

  const images = [
  pic1, pic2, pic3, pic4, pic5,
  pic6, pic7, pic8, pic9, pic10,
  pic11, pic12, pic13, pic14, pic15,
  pic16, pic17, pic18, pic19, pic20
];
useEffect(() => {
  const interval = setInterval(() => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, 3000);

  return () => clearInterval(interval);
}, []);

  const projects = [
  {
    client: "M3M India Pvt. Ltd.",
    work: "Finishing Work – Tower 4, M3M 65th Avenue, Gurugram",
    value: "₹10.47 Cr",
  },
  {
    client: "M3M India Pvt. Ltd.",
    work: "Fire Fighting Work – M3M Broadways, Sector 71",
    value: "₹3.76 Cr",
  },
  {
    client: "M3M India Pvt. Ltd.",
    work: "Façade & External Lighting – M3M IFC",
    value: "₹0.57 Cr",
  },
  {
    client: "M3M India Pvt. Ltd.",
    work: "DG Low Side Work – M3M Privve",
    value: "₹0.34 Cr",
  },
  {
    client: "Landcraft Developers Ltd.",
    work: "Plumbing, Fire & STP Plants (1600 & 840 KLD)",
    value: "₹10.05 Cr",
  },
  {
    client: "Landcraft Developers Ltd.",
    work: "MEP Consultancy – Metro Homes Project",
    value: "Consultancy",
  },
  {
    client: "Mangalya Buildtech Pvt. Ltd.",
    work: "Structure Work – Towers F & G (B+G+21)",
    value: "₹26 Cr",
  },
  {
    client: "Tashee Group",
    work: "Fire Alarm System – Capital Tower",
    value: "₹0.35 Cr",
  },
  {
    client: "Mahira Builders",
    work: "Internal Plumbing – 3 Towers (G+14)",
    value: "₹0.45 Cr",
  },
  {
    client: "BSES Rajdhani Power Ltd.",
    work: "Underground Cabling – South West Delhi",
    value: "₹3.05 Cr",
  },
  {
    client: "IRCON International Ltd.",
    work: "66KV Cable Laying (Pappan Kalan to Janakpuri)",
    value: "₹6.15 Cr",
  },
  {
    client: "BSES Rajdhani Power Ltd.",
    work: "66KV Cable Laying",
    value: "₹3.21 Cr",
  },
  {
    client: "Atha Group",
    work: "1MW Solar + 33KV Cabling",
    value: "₹4.49 Cr",
  },
  {
    client: "Arochan Projects Pvt. Ltd.",
    work: "Civil + MEP Works – School & Hospital",
    value: "₹1.55 Cr",
  },
  {
    client: "MRG Global Pvt. Ltd.",
    work: "Internal Electrical – The Balcony Project",
    value: "₹1.18 Cr",
  },
  {
    client: "MRG Global Pvt. Ltd.",
    work: "External Electrical – The Balcony Project",
    value: "₹1.11 Cr",
  },
  {
    client: "MRG Global Pvt. Ltd.",
    work: "Internal Plumbing – Sector 90",
    value: "₹2.72 Cr",
  },
  {
    client: "MRG Global Pvt. Ltd.",
    work: "Internal Plumbing – Sector 89",
    value: "₹2.48 Cr",
  },
  {
    client: "Lion Infradevelopers LLP",
    work: "Structure – Commercial Complex (60,000 sq ft)",
    value: "—",
  },
  {
    client: "Lion Infradevelopers LLP",
    work: "Structure – Residential Block (70,000 sq ft)",
    value: "—",
  },
  {
    client: "Lion Infradevelopers LLP",
    work: "External Electrical – 35 Acre Township",
    value: "—",
  },
  {
    client: "M3M India Pvt. Ltd.",
    work: "Internal Plumbing – M3M Soulitude",
    value: "₹2.48 Cr",
  },
];

  return (
    <>
      <Navbar />

      <div className="pt-24 font-sans">

        {/* HERO */}
        <section id="home" className="scroll-mt-24 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-orange-900 text-white">

          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600')] bg-cover bg-center" />

          <div className="relative max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div>
              <p className="uppercase tracking-widest text-orange-300 text-sm mb-4">
                Engineering • Construction • Infrastructure
              </p>

              <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                TRIDEV
                <span className="block text-orange-400">
                  TECHNOCRAFTS
                </span>
              </h1>

              <p className="mt-6 text-lg text-gray-200 max-w-xl">
                Delivering premium Civil, MEP, Infrastructure and Facility
                Management solutions across India with a commitment to quality.
              </p>

              <div className="mt-8 flex gap-4">
                <a href="#projects" className="bg-orange-500 px-6 py-3 rounded-xl font-semibold">
                  Explore Projects
                </a>
                <a href="#contact" className="border border-white/30 px-6 py-3 rounded-xl">
                  Contact Us
                </a>
              </div>
            </div>

            {/* RIGHT STATS */}
            <div className="grid grid-cols-2 gap-5">
              {[
                ["21+", "Years of leadership experience"],
                ["100+", "Skilled workforce members"],
                ["2012", "Serving diversified sectors since"],
                ["Pan India", "Project execution capability"],
              ].map(([title, desc]) => (
                <div key={title} className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10">
                  <h3 className="text-4xl font-bold text-orange-400">{title}</h3>
                  <p className="mt-2 text-gray-200">{desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

      {/* ABOUT */}
<section
  id="about"
  className="scroll-mt-24 bg-white py-28 px-6"
>
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

    {/* LEFT IMAGE */}
    <div className="relative">
      <img
        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1400"
        alt="Construction site"
        className="rounded-3xl shadow-2xl"
      />

      {/* Floating Stat */}
      <div className="absolute bottom-6 left-6 bg-black text-white px-6 py-4 rounded-2xl shadow-lg">
        <p className="text-3xl font-bold text-orange-400">2012</p>
        <p className="text-sm">Established</p>
      </div>
    </div>

    {/* RIGHT CONTENT */}
    <div>
      <p className="text-orange-500 uppercase tracking-[0.2em]">
        About Us
      </p>

      <h2 className="mt-4 text-4xl lg:text-5xl font-black leading-tight">
        Building Infrastructure
        <br />
        <span className="text-orange-500">That Powers India</span>
      </h2>

      <p className="mt-6 text-gray-600 leading-relaxed">
        Tridev Technocrafts Private Limited is a fast-growing engineering and
        construction company specializing in Civil, MEP, Infrastructure and
        Facility Management solutions.
      </p>

      <p className="mt-4 text-gray-600 leading-relaxed">
        Since 2012, we have successfully delivered projects across residential,
        commercial, and industrial sectors with a strong commitment to quality,
        safety, and timely execution.
      </p>

      {/* FEATURES */}
      <div className="mt-10 grid grid-cols-2 gap-6">

        <div className="flex items-start gap-3">
          <span className="text-orange-500 text-xl">✔</span>
          <p>End-to-End Project Execution</p>
        </div>

        <div className="flex items-start gap-3">
          <span className="text-orange-500 text-xl">✔</span>
          <p>Experienced Engineering Team</p>
        </div>

        <div className="flex items-start gap-3">
          <span className="text-orange-500 text-xl">✔</span>
          <p>Pan India Operations</p>
        </div>

        <div className="flex items-start gap-3">
          <span className="text-orange-500 text-xl">✔</span>
          <p>Quality & Safety Focused</p>
        </div>

      </div>


      {/* CTA */}
      <div className="mt-10">
        <a
          href="#projects"
          className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
        >
          View Our Projects
        </a>
      </div>
    </div>

  </div>
</section>

        {/* PROJECTS */}
        <section id="projects" className="scroll-mt-24 bg-gray-100 py-24 px-6">
          <div className="max-w-7xl mx-auto">

            <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6">
              <div>
                <p className="text-orange-500 uppercase tracking-[0.2em]">
                  Featured Projects
                </p>
                <h2 className="mt-4 text-4xl font-black">
                  Trusted by Leading Companies
                </h2>
              </div>

              <p className="text-gray-600 max-w-2xl">
                Our portfolio includes residential towers, infrastructure projects,
                solar systems, fire fighting works and underground cabling.
              </p>
            </div>

            <div className="mt-14 grid lg:grid-cols-2 gap-8">
              {projects.map((p) => (
                <div key={p.client} className="bg-white border rounded-3xl p-8 hover:shadow-xl transition">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-xl font-bold">{p.client}</h3>
                      <p className="text-gray-600 mt-2">{p.work}</p>
                    </div>
                    <div className="bg-orange-100 text-orange-600 px-4 py-2 rounded-xl">
                      {p.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
        
        {/* LEADERSHIP */}
<section id="leadership" className="scroll-mt-24 bg-slate-950 text-white py-24 px-6">
  <div className="max-w-7xl mx-auto text-center">

    <p className="text-orange-400 uppercase tracking-[0.2em]">
      Leadership
    </p>

    <h2 className="mt-4 text-4xl font-black">
      Experienced Industry Professionals
    </h2>

    <div className="mt-16">

  {/* TOP CENTER CARD */}
  <div className="flex justify-center mb-10">
    <div className="max-w-3xl bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-10 hover:shadow-2xl transition">
      <h3 className="text-2xl font-bold">Hemant Kumar</h3>
      <p className="text-orange-400 mt-2">Managing Director</p>
      <p className="mt-6 text-gray-300 leading-relaxed">
        Graduate Engineer and MBA professional with 21+ years of experience in
        design, planning, tendering, billing, quality auditing, and execution
        of multidisciplinary projects. Expertise spans Civil, Structural,
        Interior, MEP, Electrical, Fire Fighting, Plumbing, HVAC,
        Infrastructure, Renewable Energy. Successfully delivered projects
        across hospitals, hotels, airports, data centers, commercial,
        residential, industrial, logistics, and mixed-use developments,
        leading end-to-end project execution with a strong focus on quality,
        safety, efficiency, and timely delivery.
      </p>
    </div>
  </div>

  {/* REMAINING 4 CARDS */}
  <div className="grid md:grid-cols-2 gap-8">

    <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-10 hover:shadow-2xl transition">
      <h3 className="text-2xl font-bold">Dheerendra Awasthi</h3>
      <p className="text-orange-400 mt-2">Director-Planning</p>
      <p className="mt-6 text-gray-300 leading-relaxed">
        A seasoned civil engineering professional with more than 29 years of
        extensive experience in planning, execution and management of
        large-scale infrastructure and construction projects across India.
      </p>
    </div>

    <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-10 hover:shadow-2xl transition">
      <h3 className="text-2xl font-bold">Sikadar Singh</h3>
      <p className="text-orange-400 mt-2">Director-Purchase</p>
      <p className="mt-6 text-gray-300 leading-relaxed">
        MBA with 21+ years of expertise in purchasing, procurement and supply
        chain management for construction projects.
      </p>
    </div>

    <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-10 hover:shadow-2xl transition">
      <h3 className="text-2xl font-bold">Rohit Saha</h3>
      <p className="text-orange-400 mt-2">Director-MEP</p>
      <p className="mt-6 text-gray-300 leading-relaxed">
        Graduate Electrical Engineer with 8 years of expertise in electrical,
        ELV and smart building systems for residential, commercial and
        industrial projects.
      </p>
    </div>

    <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-10 hover:shadow-2xl transition">
      <h3 className="text-2xl font-bold">Vipin Gupta</h3>
      <p className="text-orange-400 mt-2">Director-Projects</p>
      <p className="mt-6 text-gray-300 leading-relaxed">
        MBA & Diploma in Civil Engineering with 17 years of experience in
        project management, construction supervision and execution of
        residential, commercial and infrastructure projects.
      </p>
    </div>

  </div>
</div>

      


  </div>
</section>
{/* TEAM STRENGTH */}
{/* TEAM */}
<section
  id="team"
  className="bg-white py-24 px-6"
>
  <div className="max-w-6xl mx-auto">

    <p className="text-orange-500 uppercase tracking-[0.2em] mb-3">
      Team
    </p>

    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
      Skilled Workforce & Operational Excellence
    </h2>

    <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mb-14">
      Our team comprises experienced professionals dedicated to delivering
      projects efficiently and on time. We have a strong workforce of Civil
      Engineers, Electrical Engineers, Technicians and Skilled Workers who
      ensure quality execution across all projects.
    </p>

    {/* STATS CARDS */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 text-center hover:-translate-y-1 transition">
        <h3 className="text-5xl font-bold text-orange-500">
          15
        </h3>

        <p className="mt-4 text-gray-600">
          Executive Staff
        </p>

        <p className="text-sm text-gray-400">
          Technical
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 text-center hover:-translate-y-1 transition">
        <h3 className="text-5xl font-bold text-orange-500">
          10
        </h3>

        <p className="mt-4 text-gray-600">
          Executive Staff
        </p>

        <p className="text-sm text-gray-400">
          Non-Technical
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 text-center hover:-translate-y-1 transition">
        <h3 className="text-5xl font-bold text-orange-500">
          25
        </h3>

        <p className="mt-4 text-gray-600">
          Junior Staff
        </p>

        <p className="text-sm text-gray-400">
          Technical / Non-Technical
        </p>
      </div>

      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl shadow-xl p-8 text-center text-white hover:-translate-y-1 transition">
        <h3 className="text-6xl font-bold">
          100+
        </h3>

        <p className="mt-4">
          Skilled / Semi Skilled
        </p>

        <p className="text-sm opacity-80">
          Workforce
        </p>
      </div>

    </div>

   

  </div>
</section>


       {/* SERVICES */}
<section id="services" className="scroll-mt-24 bg-gray-50 py-24 px-6">
  <div className="max-w-7xl mx-auto">

    {/* HEADER */}
    <div className="text-center max-w-3xl mx-auto">
      <p className="text-orange-500 uppercase tracking-[0.2em]">
        Our Services
      </p>

      <h2 className="mt-4 text-4xl font-black">
        Building Excellence Through Innovation, Quality & Trust
      </h2>

      <p className="mt-4 text-gray-600">
        From concept to completion — delivering world-class construction,
        infrastructure, and engineering solutions across diverse sectors.
      </p>
    </div>

    {/* GRID */}
    <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        {
          title: "Turnkey EPC Projects",
          desc: "Complete Engineering, Procurement & Construction solutions delivered from concept to completion with quality and reliability.",
        },
        {
          title: "Structural Works",
          desc: "Foundation, RCC, steel structures, PEB buildings and complete structural construction solutions.",
        },
        {
          title: "Finishing Works",
          desc: "Premium interior and exterior finishing solutions combining functionality with elegant design.",
        },
        {
          title: "MEP Services",
          desc: "Comprehensive Mechanical, Electrical & Plumbing services ensuring safe and efficient operations.",
        },
        {
          title: "Medical Infrastructure",
          desc: "Specialized construction solutions for hospitals, clinics, and healthcare facilities.",
        },
        {
          title: "Renewable Energy",
          desc: "Sustainable solutions including solar systems and green energy infrastructure.",
        },
        {
          title: "Furniture Supply",
          desc: "Quality office and medical furniture tailored for commercial and healthcare environments.",
        },
        {
          title: "Facility Management",
          desc: "Integrated services for maintenance, operations, and long-term asset care.",
        },
        {
          title: "Property Consultancy",
          desc: "Expert guidance for investment, planning, and real estate development.",
        },
        {
          title: "Water & Wastewater Treatment Systems",
          desc: "Advanced treatment, recycling and sustainable water management solutions for industrial, commercial and institutional projects.",
        },
        {
  title: "ELV & Smart Building Systems",
  desc: "CCTV, Access Control, BMS, Networking and Smart Building Solutions.",
},
       {
  title: "Audio Visual, Auditorium & Lighting Solutions",
  desc: "Professional AV systems, auditorium solutions, stage lighting, architectural lighting and smart lighting infrastructure.",
},
      ].map((service, i) => (
       <div
  key={i}
 onClick={() => {
  if (service.title === "ELV & Smart Building Systems") {
    setSelectedService("elv");
  }

  if (
    service.title ===
    "Audio Visual, Auditorium & Lighting Solutions"
  ) {
    setSelectedService("audio");
  }
  if (service.title === "Furniture Supply") {
  setSelectedService("furniture");
}
if (service.title === "Medical Infrastructure") {
  setSelectedService("medical");
}
if (service.title === "Water & Wastewater Treatment Systems") {
  setSelectedService("water");
}
if (service.title === "Structural Works") { 
  setSelectedService("structural");
}
if (service.title === "Finishing Works") {
  setSelectedService("finishing");
}

}}
  className={`bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition ${
    service.title === "ELV & Smart Building Systems"
      ? "cursor-pointer hover:-translate-y-2"
      : ""
  }`}
>
  <h3 className="text-xl font-bold mb-2 text-gray-800">
    {service.title}
  </h3>

  <p className="text-gray-600 text-sm leading-relaxed">
    {service.desc}
  </p>

  {(
  service.title === "ELV & Smart Building Systems" ||
  service.title === "Audio Visual, Auditorium & Lighting Solutions" ||
service.title === "Furniture Supply"|| service.title === "Medical Infrastructure" || service.title === "Water & Wastewater Treatment Systems" ||
service.title === "Structural Works" || service.title === "Finishing Works"
) && (
  <p className="mt-4 text-orange-500 font-semibold">
    Click to View Details →
  </p>
)}
</div>
      ))}

    </div>
  </div>
</section>

<section id="gallery" className="scroll-mt-24 bg-black py-24 px-6">
  <div className="max-w-5xl mx-auto text-center">

    <h2 className="text-4xl font-bold text-white">
      Project Gallery
    </h2>

    <div className="mt-12 relative">

      <img
        src={images[current]}
        className="w-full h-[450px] object-cover rounded-3xl"
      />

      {/* LEFT */}
      <button
        onClick={() =>
          setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 px-3 py-2 rounded-full text-white"
      >
        ◀
      </button>

      {/* RIGHT */}
      <button
        onClick={() =>
          setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1))
        }
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 px-3 py-2 rounded-full text-white"
      >
        ▶
      </button>

    </div>

  </div>
</section>

{selectedService === "elv" && (
  <div
    className="fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center p-6"
    onClick={() => setSelectedService(null)}
  >
    <div
      className="bg-white rounded-3xl max-w-4xl w-full p-8 max-h-[85vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900">
          ELV & Smart Building Systems
        </h2>

        <button
          onClick={() => setSelectedService(null)}
          className="text-3xl text-gray-500 hover:text-black"
        >
          ×
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">

        {[
          "CCTV Surveillance Systems",
          "Access Control Systems",
          "Video Door Phone & Intercom Systems",
          "Data, Voice & Networking Infrastructure",
          "Wi-Fi Infrastructure",
          "Building Management System (BMS)",
          "Public Address System",
          "Audio Visual Systems",
          "Fire Alarm & Emergency Communication Systems",
          "Car Parking Management System (CPMS)",
          "Automatic Boom Barrier Systems",
        ].map((item) => (
          <div
            key={item}
            className="bg-gray-50 border border-gray-200 rounded-xl p-4"
          >
            {item}
          </div>
        ))}

      </div>
    </div>
  </div>
)}

{selectedService === "audio" && (
  <div
    className="fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center p-6"
    onClick={() => setSelectedService(null)}
  >
    <div
      className="bg-white rounded-3xl max-w-5xl w-full p-8 max-h-[85vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900">
          Audio Visual, Auditorium & Lighting Solutions
        </h2>

        <button
          onClick={() => setSelectedService(null)}
          className="text-3xl text-gray-500 hover:text-black"
        >
          ×
        </button>
      </div>

      {/* AUDIO VISUAL */}
      <div className="mb-10">
        <h3 className="text-xl font-bold text-orange-500 mb-4">
          Audio Visual & Auditorium Solutions
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Audio Visual Systems",
            "Conference & Boardroom Solutions",
            "Auditorium Audio Systems",
            "Stage Lighting Systems",
            "Auditorium Lighting Systems",
            "DMX Lighting Control Systems",
            "Professional Sound Reinforcement Systems",
            "Video Wall & Digital Signage Systems",
            "Broadcasting & Live Event Systems",
            "Theatrical Lighting Systems",
          ].map((item) => (
            <div
              key={item}
              className="bg-gray-50 border border-gray-200 rounded-xl p-4"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTING */}
      <div>

        <h3 className="text-xl font-bold text-orange-500 mb-4">
          Indoor Lighting Works
        </h3>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            "LED Lighting Installation",
            "Decorative Lighting Systems",
            "Office & Commercial Lighting",
            "Residential Lighting Solutions",
            "False Ceiling & Cove Lighting",
            "Emergency Lighting Systems",
            "Exit Signage Lighting",
          ].map((item) => (
            <div
              key={item}
              className="bg-gray-50 border border-gray-200 rounded-xl p-4"
            >
              {item}
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold text-orange-500 mb-4">
          Outdoor Lighting Works
        </h3>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            "Street Lighting Systems",
            "Landscape Lighting",
            "Facade Lighting",
            "Garden & Pathway Lighting",
            "Parking Area Lighting",
            "High Mast Lighting",
            "Flood Lighting Systems",
          ].map((item) => (
            <div
              key={item}
              className="bg-gray-50 border border-gray-200 rounded-xl p-4"
            >
              {item}
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold text-orange-500 mb-4">
          Specialized Lighting Works
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Architectural Lighting",
            "Smart Lighting & Automation Systems",
            "Energy Efficient LED Solutions",
            "Dimming & Lighting Control Systems",
            "Sensor-Based Lighting Systems",
            "Solar Lighting Systems",
          ].map((item) => (
            <div
              key={item}
              className="bg-gray-50 border border-gray-200 rounded-xl p-4"
            >
              {item}
            </div>
          ))}
        </div>

      </div>
    </div>
  </div>
)}
{selectedService === "furniture" && (
  <div
    className="fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center p-6"
    onClick={() => setSelectedService(null)}
  >
    <div
      className="bg-white rounded-3xl max-w-5xl w-full p-8 max-h-[85vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900">
          Furniture & Interior Solutions
        </h2>

        <button
          onClick={() => setSelectedService(null)}
          className="text-3xl text-gray-500 hover:text-black"
        >
          ×
        </button>
      </div>

      {/* Residential */}
      <div className="mb-10">
        <h3 className="text-xl font-bold text-orange-500 mb-4">
          Residential Furniture Works
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Modular Kitchen",
            "Wardrobes & Closets",
            "TV Units & Entertainment Panels",
            "Bedroom Furniture",
            "Living Room Furniture",
            "Dining Area Furniture",
          ].map((item) => (
            <div
              key={item}
              className="bg-gray-50 border border-gray-200 rounded-xl p-4"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Commercial */}
      <div className="mb-10">
        <h3 className="text-xl font-bold text-orange-500 mb-4">
          Commercial Furniture Works
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Office Workstations",
            "Executive Cabins",
            "Conference Room Furniture",
            "Reception Counters",
            "Storage Cabinets",
            "Filing Systems",
            "Cafeteria Furniture",
            "Training Room Furniture",
          ].map((item) => (
            <div
              key={item}
              className="bg-gray-50 border border-gray-200 rounded-xl p-4"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Institutional */}
      <div className="mb-10">
        <h3 className="text-xl font-bold text-orange-500 mb-4">
          Institutional Furniture Works
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Hospital Furniture",
            "School & College Furniture",
            "Laboratory Furniture",
            "Library Furniture",
            "Hostel Furniture",
            "Auditorium Seating",
          ].map((item) => (
            <div
              key={item}
              className="bg-gray-50 border border-gray-200 rounded-xl p-4"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Specialized */}
      <div>
        <h3 className="text-xl font-bold text-orange-500 mb-4">
          Specialized Furniture Works
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Custom-Made Furniture",
            "Modular Furniture Systems",
            "Wooden & Veneer Finishes",
            "Solid Wood Furniture",
            "Laminate & MDF Furniture",
            "Upholstery Works",
            "Joinery & Carpentry Works",
          ].map((item) => (
            <div
              key={item}
              className="bg-gray-50 border border-gray-200 rounded-xl p-4"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
)}
{selectedService === "medical" && (
  <div
    className="fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center p-6"
    onClick={() => setSelectedService(null)}
  >
    <div
      className="bg-white rounded-3xl max-w-5xl w-full p-8 max-h-[85vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900">
          Medical & Healthcare Infrastructure
        </h2>

        <button
          onClick={() => setSelectedService(null)}
          className="text-3xl text-gray-500 hover:text-black"
        >
          ×
        </button>
      </div>

      <p className="text-gray-600 mb-8">
        Comprehensive healthcare infrastructure solutions designed to meet
        modern hospital standards, operational efficiency and patient safety.
      </p>

      <div className="grid md:grid-cols-2 gap-5">

        {[
          "Modular Operation Theatre (MOT)",
          "Medical Gas Pipeline System (MGPS)",
          "Nurse Call System",
          "Kitchen Infrastructure",
          "Laundry Infrastructure",
          "CSSD (Central Sterile Services Department)",
          "TSSU (Theatre Sterile Supply Unit)",
          "Hospital HVAC & Clean Room Systems",
          "Modular Medical Lab Furniture",
        ].map((item) => (
          <div
            key={item}
            className="bg-gray-50 border border-gray-200 rounded-2xl p-5 hover:border-orange-300 transition"
          >
            {item}
          </div>
        ))}

      </div>

      <div className="mt-10 bg-orange-50 border border-orange-200 rounded-2xl p-6">
        <h3 className="text-xl font-bold text-orange-600 mb-3">
          Specialized Healthcare Solutions
        </h3>

        <p className="text-gray-700 leading-relaxed">
          We provide end-to-end healthcare infrastructure solutions including
          operation theatres, clean rooms, medical gas systems, laboratory
          furniture, HVAC systems and support infrastructure for hospitals,
          clinics, laboratories and healthcare institutions.
        </p>
      </div>

    </div>
  </div>
)}

{selectedService === "water" && (
  <div
    className="fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center p-6"
    onClick={() => setSelectedService(null)}
  >
    <div
      className="bg-white rounded-3xl max-w-5xl w-full p-8 max-h-[85vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900">
          Water & Wastewater Treatment Systems
        </h2>

        <button
          onClick={() => setSelectedService(null)}
          className="text-3xl text-gray-500 hover:text-black"
        >
          ×
        </button>
      </div>

      <p className="text-gray-600 mb-8">
        Comprehensive water treatment, recycling and wastewater management
        solutions designed for industrial, commercial and institutional
        applications.
      </p>

      <div className="grid md:grid-cols-2 gap-5">

        {[
          "STP (Sewage Treatment Plant)",
          "WTP (Water Treatment Plant)",
          "ETP (Effluent Treatment Plant)",
          "RO Plants",
          "Ultra-Filtration Systems",
          "Water Softening Plants",
          "Grey Water Recycling Systems",
          "Rainwater Harvesting Systems",
          "Raw & Treated Water Pumping Stations",
          "Chemical Dosing Systems",
          "PLC / SCADA Based Plant Automation",
          "Testing, Commissioning & O&M Services",
        ].map((item) => (
          <div
            key={item}
            className="bg-gray-50 border border-gray-200 rounded-2xl p-5 hover:border-orange-300 transition"
          >
            {item}
          </div>
        ))}

      </div>

      <div className="mt-10 bg-blue-50 border border-blue-200 rounded-2xl p-6">
        <h3 className="text-xl font-bold text-blue-700 mb-3">
          Sustainable Water Management
        </h3>

        <p className="text-gray-700 leading-relaxed">
          Our solutions help organizations manage water resources efficiently
          through treatment, recycling, automation and sustainable reuse
          systems, ensuring compliance, reliability and environmental
          responsibility.
        </p>
      </div>

    </div>
  </div>
)}
{selectedService === "structural" && (
  <div
    className="fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center p-6"
    onClick={() => setSelectedService(null)}
  >
    <div
      className="bg-white rounded-3xl max-w-6xl w-full p-8 max-h-[85vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900">
          Structural Works
        </h2>

        <button
          onClick={() => setSelectedService(null)}
          className="text-3xl text-gray-500 hover:text-black"
        >
          ×
        </button>
      </div>

      <p className="text-gray-600 mb-8">
        Comprehensive structural engineering and construction services covering RCC frames, steel structures and industrial building solutions.
      </p>

      <div className="grid md:grid-cols-2 gap-5">

        {[
          "Site Survey & Layout Works",
          "Excavation & Earthwork",
          "Raft Foundation Construction",
          "Isolated & Combined Footings",
          "Pile Foundation & Pile Cap Works",
          "Retaining Wall Structure",
          "RCC Columns, Beams, Slabs & Staircase",
          "Shear Wall Construction",
          "Lift Core Construction",
          "Basement Structural Works",
          "Water Tank Construction",
          "Underground Reservoir Construction",
          "Structural Steel Fabrication & Erection",
          "Pre-Engineered Building (PEB) Structures",
          "Industrial Shed Structures",
          "Composite Steel Structures",
          "Structural Strengthening & Retrofitting",
          "Concrete Repair & Rehabilitation Works",
        ].map((item) => (
          <div
            key={item}
            className="bg-gray-50 border border-gray-200 rounded-2xl p-5 hover:border-orange-300 transition"
          >
            {item}
          </div>
        ))}

      </div>

      <div className="mt-10 bg-orange-50 border border-orange-200 rounded-2xl p-6">
        <h3 className="text-xl font-bold text-orange-600 mb-3">
          End-to-End Structural Execution
        </h3>

        <p className="text-gray-700 leading-relaxed">
          From excavation and foundation works to RCC structures, steel fabrication,
          PEB buildings and rehabilitation projects, we deliver complete structural
          solutions that ensure strength, durability and long-term performance.
        </p>
      </div>

    </div>
  </div>
)}
{selectedService === "finishing" && (
  <div
    className="fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center p-6"
    onClick={() => setSelectedService(null)}
  >
    <div
      className="bg-white rounded-3xl max-w-6xl w-full p-8 max-h-[85vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900">
          Finishing Works
        </h2>

        <button
          onClick={() => setSelectedService(null)}
          className="text-3xl text-gray-500 hover:text-black"
        >
          ×
        </button>
      </div>

      {/* Civil Finishing */}
      <div className="mb-10">
        <h3 className="text-xl font-bold text-orange-500 mb-4">
          Civil Finishing Works
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Internal & External Plastering",
            "Painting & Texture Finishes",
            "False Ceiling Works (Gypsum/Grid Ceiling)",
            "Flooring Works (Tiles, Marble, Granite, Vitrified Tiles)",
            "Wall Cladding & Stone Works",
            "Waterproofing Works",
            "Door & Window Installation",
            "Aluminium & UPVC Works",
            "Glass & Glazing Works",
            "Staircase & Railing Works",
          ].map((item) => (
            <div
              key={item}
              className="bg-gray-50 border border-gray-200 rounded-xl p-4"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Interior Finishing */}
      <div className="mb-10">
        <h3 className="text-xl font-bold text-orange-500 mb-4">
          Interior Finishing Works
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Modular Furniture Installation",
            "Wooden Flooring",
            "Wall Paneling",
            "Decorative Ceiling Works",
            "Reception & Lobby Finishes",
            "Partition Works",
            "Modular Kitchen Installation",
            "Wardrobes & Storage Units",
          ].map((item) => (
            <div
              key={item}
              className="bg-gray-50 border border-gray-200 rounded-xl p-4"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* External Finishing */}
      <div>
        <h3 className="text-xl font-bold text-orange-500 mb-4">
          External Finishing Works
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Facade Works",
            "ACP Cladding",
            "Exterior Painting",
            "Landscaping & Hardscaping",
            "Paving Blocks",
            "Kerb Stone Works",
            "Boundary Wall Finishes",
          ].map((item) => (
            <div
              key={item}
              className="bg-gray-50 border border-gray-200 rounded-xl p-4"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
)}


        {/* CONTACT */}
        <section id="contact" className="scroll-mt-24 bg-orange-500 text-white py-20 text-center">
          <h2 className="text-4xl font-bold">Contact Us</h2>
          <p className="mt-4">A-161, Gulab Bagh, New Delhi</p>
        </section>

      </div>
    </>
  );
}