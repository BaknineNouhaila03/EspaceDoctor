"use client";
import "@assets/css/style.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Sidebar from "../components/Sidebar";
import CountUp from "react-countup";
import { morning_img_02 ,doctor_dashboard_01,
  doctor_dashboard_02,
  doctor_dashboard_03,
  doctor_dashboard_04  } from "@components/imagepath";
import { useRouter } from "next/navigation";

const discussions = [
  {
    id: 1,
    title: "Irritation cutanée",
    description: "Discuter blabla",
    doctor: "Aymane El bazi",
    doctorSpeciality: "Chirurgien",
    neededSpecialities: ["Dermatologue"],
    date: "21/02/2024",
    time: "21:00",
  },
  {
    id: 2,
    title: "Microbe dentaire",
    description: "Discuter blabla",
    doctor: "Elbachir Janah",
    doctorSpeciality: "Chirurgien",
    neededSpecialities: ["Dentiste"],
    date: "21/08/2024",
    time: "17:00",
  },
  {
    id: 3,
    title: "Microbe dentaire",
    description:
      "Discutons du cas d'un patient souffrant d'une irritation cutanée. Cette discussion abordera les causes potentielles, les symptômes et les traitements de l'irritation.",
    doctor: "Issam Elmonakhi",
    doctorSpeciality: "Dermatologue",
    neededSpecialities: ["Dentiste", "Cardiologue"],
    date: "10/09/2024",
    time: "10:00",
  },
  {
    id: 4,
    title: "Microbe dentaire",
    description:
      "Discutons du cas d'un patient souffrant d'une irritation cutanée. Cette discussion abordera les causes potentielles, les symptômes et les traitements de l'irritation.",
    doctor: "Salma Elmonakhi",
    doctorSpeciality: "Cardiologue",
    neededSpecialities: ["Dentiste", "Cardiologue"],
    date: "10/09/2024",
    time: "10:00",
  },
];

const Home = () => {
  const router = useRouter();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleCreateDiscussion = () => {
    router.push("/Formulaire");
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="root">
      <Sidebar activeClassName="/" />
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div
            className="page-header"
            style={isSmallScreen ? { marginBottom: "70px" } : {}}
          >
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">Page d'accueil </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <FeatherIcon icon="chevron-right" />
                  </li>
                  <li className="breadcrumb-item active">tableau de bord</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Page Header */}

          <div className="topSection">
            

            {/* Bonjour Section */}
            {!isSmallScreen && ( <div className="good-morning-blk">
              <div className="row">
                <div className="col-md-6">
                  <div className="morning-user">
                    <h2>
                      Hello, <span>Docteur Ahmed</span>
                    </h2>
                    <p>Welcome at your dashboard</p>
                  </div>
                </div>
                <div className="col-md-6 position-blk">
                  <div className="morning-img">
                    <Image src={morning_img_02} width={190} height={190} style={{marginLeft:'91px'}} alt="" />
                  </div>
                </div>
              </div>
            </div>)}
            {/* Bonjour Section */}
          </div>

          {isSmallScreen && (
            <div className="good-morning-blk">
            <div className="row">
              <div className="col-md-6">
                <div className="morning-user">
                  <h2>
                    Hello, <span>Docteur Ahmed</span>
                  </h2>
                  <p>Welcome at your dashboard</p>
                </div>
              </div>
              <div className="col-md-6 position-blk">
                <div className="morning-img">
                  <Image src={morning_img_02} width={190} height={190}  alt="" />
                </div>
              </div>
            </div>
          </div>
          )}
          <div className="doctor-list-blk">
              <div className="row">
                <div className="col-xl-3 col-md-6">
                  <div className="doctor-widget border-right-bg">
           
                    <div className="doctor-box-icon flex-shrink-0">
                      <img src={doctor_dashboard_01.src} alt="" />
                       
                    </div>
                    <div className="doctor-content dash-count flex-grow-1">
                      <h4>
                        <CountUp delay={0.4} end={30} duration={0.6} />
                        <span className="counter-up">/85</span>
                        <span className="status-green">+40%</span>
                      </h4>
                      <h5>Appointments</h5>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="doctor-widget border-right-bg">
                    <div className="doctor-box-icon flex-shrink-0">
                      <img src={doctor_dashboard_02.src} alt="" />
                    </div>
                    <div className="doctor-content dash-count flex-grow-1">
                      <h4>
                        <CountUp delay={0.4} end={20} duration={0.6} />
                        <span className="counter-up">/125</span>
                        <span className="status-green">+40%</span>
                      </h4>
                      <h5>Consultations</h5>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="doctor-widget border-right-bg">
                    <div className="doctor-box-icon flex-shrink-0">
                      <img src={doctor_dashboard_03.src} alt="" />
                    </div>
                    <div className="doctor-content dash-count flex-grow-1">
                      <h4>
                        <CountUp delay={0.4} end={12} duration={0.6} />
                        <span className="counter-up">/30</span>
                        <span className="status-green">+40%</span>
                      </h4>
                      <h5>Operations</h5>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="doctor-widget">
                    <div className="doctor-box-icon flex-shrink-0">
                      <img src={doctor_dashboard_04.src} alt="" />
                    </div>
                    <div className="doctor-content dash-count flex-grow-1">
                      <h4>
                        $ <CountUp delay={0.4} end={530} duration={0.6} />
                        <span className="status-green">+50%</span>
                      </h4>
                      <h5>Earnings</h5>
                      {/* <p>
                        <span className="passive-view">
                          <i className="feather-arrow-up-right me-1" />
                          30%
                        </span>{" "}
                        vs last month
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          {/* Discussion Section */}
         
          {/* Discussion Section */}
        </div>
      </div>
    </div>
  );
};

export default Home;
