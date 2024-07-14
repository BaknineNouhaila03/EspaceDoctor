"use client";
import "@assets/css/style.css";
import { useMemo, useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic"
import { Table } from 'antd';
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import "@assets/css/font-awesome.min.css";

import {

  imagesend,
  pdficon,
  pdficon3,
  pdficon4,
  plusicon,
  refreshicon,
  filter,
  searchnormal,
  iconuser,

} from "../../components/imagepath";

const MyPatients = () => {
    const datasource = [
        {
          id: 1,
          Img: iconuser,
          Name: "Aya Aya",
          Gender: "Female",
          Age: "13 ans",
          Disease: "Grippe",
          Mobile: "+212 6 12345678",
          dossier :"Dossier Médical"
        },
        {
          id: 2,
          Img: iconuser,
          Name: "Omar Omar",
          Gender: "Male",
          Age: "21 ans",
          Disease: "Rhume",
          Mobile: "+212 6 23456789",
          dossier :"Dossier Médical"

        },
        {
          id: 3,
          Img: iconuser,
          Name: "Sara Sara",
          Gender: "Female",
          Age: "17 ans",
          Disease: "Diabète",
          Mobile: "+212 6 34567890",
          dossier :"Dossier Médical"

        },
        {
          id: 4,
          Img: iconuser,
          Name: "Ahmed Ahmed",
          Gender: "Male",
          Age: "25 ans",
          Disease: "Hypertension",
          Mobile: "+212 6 45678901",
          dossier :"Dossier Médical"

        },
        {
          id: 5,
          Img: iconuser,
          Name: "Fatima Fatima",
          Gender: "Female",
          Age: "20 ans",
          Disease: "Asthme",
          Mobile: "+212 6 56789012",
          dossier :"Dossier Médical"

        },
        {
          id: 6,
          Img: iconuser,
          Name: "Mohamed Mohamed",
          Gender: "Male",
          Age: "22 ans",
          Disease: "Anémie",
          Mobile: "+212 6 67890123",
          dossier :"Dossier Médical"

        },
        {
          id: 7,
          Img: iconuser,
          Name: "Imane Imane",
          Gender: "Female",
          Age: "19 ans",
          Disease: "Allergie",
          Mobile: "+212 6 78901234",
          dossier :"Dossier Médical"

        },
        {
          id: 8,
          Img: iconuser,
          Name: "Youssef Youssef",
          Gender: "Male",
          Age: "23 ans",
          Disease: "Migraine",
          Mobile: "+212 6 89012345",
          dossier :"Dossier Médical"

        },
        {
          id: 9,
          Img: iconuser,
          Name: "Khadija Khadija",
          Gender: "Female",
          Age: "14 ans",
          Disease: "Otite",
          Mobile: "+212 6 90123456",
          dossier :"Dossier Médical"

        },
        {
          id: 10,
          Img: iconuser,
          Name: "Rachid Rachid",
          Gender: "Male",
          Age: "18 ans",
          Disease: "Bronchite",
          Mobile: "+212 6 01234567",
          dossier :"Dossier Médical"

        }
      ];      


    const columns = [
        {
            title: <span style={{ marginLeft: '20px' }}>Nom</span>,
            dataIndex: "Name",
            width : 200 ,
            render: (text, record) => (
                <>
                        <h2 className="profile-image" style={{ marginLeft: '20px' }}>
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
            title: <span style={{ marginLeft: '20px' }}>Sexe</span>,
            dataIndex: "Gender",
            sorter: (a, b) => a.Gender.length - b.Gender.length,
            width: 200, // Adjust the width as needed
            render: (text) => <span style={{ whiteSpace: 'pre-wrap' , marginLeft:'25px'}}>{text}</span>,
        },
        {
            title: "Age",
            dataIndex: "Age",
            sorter: (a, b) => a.Age.length - b.Age.length,
            width: 150, // Adjust the width as needed
            render: (text) => <span style={{ whiteSpace: 'pre-wrap' }}>{text}</span>,
        },
        {
            title: "Maladie",
            dataIndex: "Disease",
            ellipsis: true, // Ensures text doesn't overflow and shows tooltip if truncated
            width: 150, // Adjust the width as needed
            render: (text) => <span style={{ whiteSpace: 'pre-wrap' }}>{text}</span>,
        },
        {
            title: "Dossier Médical",
            dataIndex: "dossier",
            ellipsis: true, // Ensures text doesn't overflow and shows tooltip if truncated
            width: 200, // Adjust the width as needed
            render: (text) => <span style={{ whiteSpace: 'pre-wrap' }}>{text}</span>,
            render: (text, record) => (
                <>
                    <Link href="#">{record.dossier}</Link>
                </>
            )
        },
        {
            title: "Téléphone",
            dataIndex: "Mobile",
            width: 150, // Adjust the width as needed
            render: (text) => <span style={{ whiteSpace: 'pre-wrap' }}>{text}</span>,
            render: (text, record) => (
                <>
                    <Link href="#">{record.Mobile}</Link>
                </>
            )
        },
        {
            title: "",
            dataIndex: "actions",
            width: 50, // Adjust the width as needed
            render: (text, record) => (
                <>
                    <div className="text-end">
                        <div className="dropdown dropdown-action">
                            <Link
                                href="#"
                                className="action-icon dropdown-toggle"
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
                        </div>
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
                                        <Link href="#">Patients</Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <i className="feather-chevron-right">
                                            <FeatherIcon icon="chevron-right" />
                                        </i>
                                    </li>
                                    <li className="breadcrumb-item active">Liste des Patients</li>
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
                                                    <h3>Mes Patients</h3>
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
                                                            <Link
                                                                href="#"
                                                                className="filterr"
                                                            >
                                                                Filtrer 
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
                        {/* Other content */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default dynamic (() => Promise.resolve(MyPatients), {ssr: false})
