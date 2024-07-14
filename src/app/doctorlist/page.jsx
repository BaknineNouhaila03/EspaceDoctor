"use client";
import "@assets/css/style.css";
import { useMemo, useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic"
import { Table } from 'antd';
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import {

  imagesend,
  pdficon,
  pdficon3,
  pdficon4,
  plusicon,
  refreshicon,
  searchnormal,
  iconuser,
} from "../../components/imagepath";

const DoctorList = () => {
    const datasource = [
        {
          id:1,
          Img:iconuser,
          Rating :"4.5",
          Name: "Andrea Lalema",
          Department: "Otolaryngologie",
          Specialization: "Infertilité",
          Degree: "MBBS, MS",
          Mobile: "+1 23 456890",
          Email: "example@email.com",
          LinkedIn: "https://LinkedIn.com",
          FIELD9: ""
        },
        {
          id:2,
          Img:iconuser,
          Rating :"3.5",
          Name: "Dr.Smith Bruklin",
          Department: "Urologie",
          Specialization: "Prostate",
          Degree: "MBBS, MS",
          Mobile: "+1 23 456890",
          Email: "example@email.com",
          LinkedIn: "https://LinkedIn.com",
          FIELD9: ""
        },
        {
          id:3,
          Rating :"1",
          Img:iconuser,
          Name: "Dr.William Stephin",
          Department: "Radiologie",
          Specialization: "Cancer",
          Degree: "MBBS, MS",
          Mobile: "+1 23 456890",
          Email: "example@email.com",
          LinkedIn: "https://LinkedIn.com",
          FIELD9: ""
        },
        {
          id:4,
          Rating :"4",
          Img:iconuser,
          Name: "Bernardo James",
          Department: "Dentiste",
          Specialization: "Prostate",
          Degree: "MBBS, MS",
          Mobile: "+1 23 456890",
          Email: "example@email.com",
          LinkedIn: "https://LinkedIn.com",
          FIELD9: ""
        },
        {
          id:5,
          Img:iconuser,
          Rating :"2",
          Name: "Cristina Groves",
          Department: "Gynécologie",
          Specialization: "Prostate",
          Degree: "MBBS, MS",
          Mobile: "+1 23 456890",
          Email: "example@email.com",
          LinkedIn: "https://LinkedIn.com",
          FIELD9: ""
        },
        {
          id:6,
          Img:iconuser,
          Rating :"4.5",
          Name: "Mark Hay Smith",
          Department: "Gynécologie",
          Specialization: "Prostate",
          Degree: "MBBS, MS",
          Mobile: "+1 23 456890",
          Email: "example@email.com",
          LinkedIn: "https://LinkedIn.com",
          FIELD9: ""
        },
        {
          id:7,
          Img:iconuser,
          Rating :"3",
          Name: "Andrea Lalema",
          Department: "Otolaryngologie",
          Specialization: "Infertilité",
          Degree: "MBBS, MS",
          Mobile: "+1 23 456890",
          Email: "example@email.com",
          LinkedIn: "https://LinkedIn.com",
          FIELD9: ""
        },
        {
          id:8,
          Img:iconuser,
          Rating :"5",
          Name: "Dr.Smith Bruklin",
          Department: "Urologie",
          Specialization: "Prostate",
          Degree: "MBBS, MS",
          Mobile: "+1 23 456890",
          Email: "example@email.com",
          LinkedIn: "https://LinkedIn.com",
          FIELD9: ""
        },
        {
            id:9,
            Img:iconuser,
            Rating :"3",
            Name: "Andrea Lalema",
            Department: "Otolaryngologie",
            Specialization: "Infertilité",
            Degree: "MBBS, MS",
            Mobile: "+1 23 456890",
            Email: "example@email.com",
            LinkedIn: "https://LinkedIn.com",
            FIELD9: ""
          },
          {
            id:10,
            Img:iconuser,
            Rating :"3",
            Name: "Andrea Lalema",
            Department: "Otolaryngologie",
            Specialization: "Infertilité",
            Degree: "MBBS, MS",
            Mobile: "+1 23 456890",
            Email: "example@email.com",
            LinkedIn: "https://LinkedIn.com",
            FIELD9: ""
          },
          {
            id:11,
            Img:iconuser,
            Rating :"3",
            Name: "Andrea Lalema",
            Department: "Otolaryngologie",
            Specialization: "Infertilité",
            Degree: "MBBS, MS",
            Mobile: "+1 23 456890",
            Email: "example@email.com",
            LinkedIn: "https://LinkedIn.com",
            FIELD9: ""
          }
    ]

    const getStarRating = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 > 0;
        let stars = '';
    
        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars += '<span class="star full">&#9733;</span>';
            } else if (i === fullStars && hasHalfStar) {
                stars += '<span class="star half">&#9733;</span>';
            } else {
                stars += '<span class="star empty">&#9734;</span>';
            }
        }
    
        return stars;
    };

    const columns = [
        {
            title: "Nom ",
            dataIndex: "Name",
            width : 200 ,
            render: (text, record) => (
                <>
                    <h2 className="profile-image">
                        <Link href="#" className="avatar avatar-sm me-2">
                            <img
                                className="avatar-img rounded-circle"
                                src={record.Img.src}
                                alt="User Image"
                            />
                        </Link>
                        <Link href="#">{record.Name}</Link>
                    </h2>
                </>
            ),
            sorter: (a, b) => a.Name.length - b.Name.length
        },
        {
            title: "Lieu d'exercice",
            dataIndex: "Department",
            sorter: (a, b) => a.Department.length - b.Department.length,
            width: 200, // Adjust the width as needed
            render: (text) => <span style={{ whiteSpace: 'pre-wrap' }}>{text}</span>,
        },
        {
            title: "Spécialité",
            dataIndex: "Specialization",
            sorter: (a, b) => a.Specialization.length - b.Specialization.length,
            width: 150, // Adjust the width as needed
            render: (text) => <span style={{ whiteSpace: 'pre-wrap' }}>{text}</span>,
        },
        {
            title: "Diplômes et Formations",
            dataIndex: "Degree",
            ellipsis: true, // Ensures text doesn't overflow and shows tooltip if truncated
            width: 230, // Adjust the width as needed
            render: (text) => <span style={{ whiteSpace: 'pre-wrap' }}>{text}</span>,
        },
        {
            title: "Évaluation",
            dataIndex: "Rating",
            width : 150,
            render: (rating) => (
                <>
                    <span dangerouslySetInnerHTML={{ __html: getStarRating(rating) }}></span>
                </>
            ),
            sorter: (a, b) => a.Rating - b.Rating,
        },
        {
            title: "Téléphone",
            dataIndex: "Mobile",
            width: 200, // Adjust the width as needed
            render: (text) => <span style={{ whiteSpace: 'pre-wrap' }}>{text}</span>,
            render: (text, record) => (
                <>
                    <Link href="#">{record.Mobile}</Link>
                </>
            )
        },
        {
            title: "Email",
            dataIndex: "Email",
            width :200,
        },
        {
            title: "Lien LinkedIn",
            dataIndex: "LinkedIn",
            width :250,
            render: (text, record) => (
                <>
                    <Link href="#">{record.LinkedIn}</Link>
                </>
            )
        },
        {
            title: "",
            dataIndex: "actions",
            render: (text, record) => (
                <>
                    <div className="text-end">
                        {/* <div className="dropdown dropdown-action">
                            <Link
                                href="#"
                                className=""
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="fas fa-ellipsis-v" />
                            </Link>
                            <div className="dropdown-menu dropdown-menu-end">
                                <Link className="dropdown-item" href="/editdoctor">
                                    <i className="far fa-edit me-2" />
                                    Modifier
                                </Link>
                                <Link className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_patient">
                                    <i className="fa fa-trash-alt m-r-5"></i> Supprimer
                                </Link>
                            </div>
                        </div> */}
                    </div>
                </>
            ),
        },
    ];

    return (
        <>
            <div className="page-wrapper">
                <div className="content">
                    {/* Page Header */}
                    <div className="page-header">
                        <div className="row">
                            <div className="col-sm-12">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link href="#">Médecins</Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <i className="feather-chevron-right">
                                            <FeatherIcon icon="chevron-right" />
                                        </i>
                                    </li>
                                    <li className="breadcrumb-item active">Liste des Médecins</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* /Page Header */}
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card card-table show-entire">
                                <div className="card-body">
                                    {/* Table Header */}
                                    <div className="page-table-header mb-2">
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <div className="doctor-table-blk">
                                                    <h3>Liste des Médecins</h3>
                                                    <div className="doctor-search-blk">
                                                        <div className="top-nav-search table-search-blk">
                                                            <form>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Rechercher ici"
                                                                />
                                                                <Link className="btn" href="#">
                                                                    <img
                                                                        src={searchnormal.src}
                                                                        alt="#"
                                                                    />
                                                                </Link>
                                                            </form>
                                                        </div>
                                                        <div className="add-group">
                                                            <Link
                                                                href="/add-doctor"
                                                                className="btn btn-primary add-pluss ms-2"
                                                            >
                                                                <img src={plusicon.src} alt="#" />
                                                            </Link>
                                                            <Link
                                                                href="#"
                                                                className="btn btn-primary doctor-refresh ms-2"
                                                            >
                                                                <img src={refreshicon.src} alt="#" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-auto text-end float-end ms-auto download-grp">
                                                {/* <Link href="#" className=" me-2">
                                                    <img src={pdficon.src} alt="#" />
                                                </Link>
                                                <Link href="#" className=" me-2">
                                                    <img src={pdficon3.src} alt="#" />
                                                </Link>
                                                <Link href="#">
                                                    <img src={pdficon4.src} alt="#" />
                                                </Link> */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Table Header */}
                                    <div className="table-responsive doctor-list">
                                        <Table
                                            pagination={{
                                                total: datasource.length,
                                                showTotal: (total, range) =>
                                                `Affichage de ${range[0]} à ${range[1]} sur ${total} entrées`,
                                            }}
                                            columns={columns}
                                            dataSource={datasource}
                                            rowKey={(record) => record.id}
                                            style={{
                                                // backgroundColor: '#f2f2f2', // Replace with your desired background color for the table
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="notification-box">
                    <div className="msg-sidebar notifications msg-noti">
                        <div className="topnav-dropdown-header">
                            <span>Messages</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default dynamic (() => Promise.resolve(DoctorList), {ssr: false})
