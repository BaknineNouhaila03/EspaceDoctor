"use client";
import { useEffect, useState } from "react";
import "@assets/css/font-awesome.min.css";
import Link from "next/link";
import Scrollbars from "react-custom-scrollbars-2";
import { blog, dashboard, doctor, doctorschedule,baricon,baricon1, logout, menuicon04, menuicon06, menuicon08, menuicon09, menuicon10, menuicon11, menuicon12, menuicon14, menuicon15, menuicon16, patients, sidemenu } from './imagepath';
const Sidebar = (props) => {
  const [miniSidebar, setMiniSidebar] = useState(false);

  const handleClick = (e, item, itemClass) => {
    const div = document.querySelector(`#${item}`);
    const ulDiv = document.querySelector(`.${itemClass}`);
    ulDiv.style.display = ulDiv.style.display === 'block' ? 'none' : 'block';
    div.classList.toggle('subdrop');
  };


  const toggleSidebar = () => {
    setMiniSidebar((prevState) => !prevState);
    document.body.classList.toggle("mini-sidebar");
  };

  const handlesidebarmobilemenu = () => {
    document.body.classList.toggle("slide-nav");
    document.getElementsByTagName("html")[0].classList.toggle('menu-opened');
    document.getElementsByClassName("sidebar-overlay")[0].classList.toggle("opened");
  };
  useEffect(() => {
    if (props?.id && props?.id1) {
      const ele = document.getElementById(`${props?.id}`);
      handleClick(ele, props?.id, props?.id1);
    }
  }, [props?.id, props?.id1]);

  const expandMenu = () => {
    document.body.classList.remove("expand-menu");
  };
  
  const expandMenuOpen = () => {
    document.body.classList.add("expand-menu");
  };
  return (
    <>
       <div className="sidebar" id="sidebar">
      <Scrollbars>
  <div className="sidebar-inner slimscroll">
  <div id="sidebar-menu" className="sidebar-menu"
            onMouseLeave={expandMenu}
            onMouseOver={expandMenuOpen}
          >
      <Link href="#" id="toggle_btn" onClick={toggleSidebar}>
          <img src={baricon.src} alt="" />
      </Link>


              <ul>
                <li className="menu-title"> Main</li>
                <li className="submenu">
                <Link href="#" id="menu-item" onClick={(e) => handleClick(e, "menu-item", "menu-items")}  >
                  <span className="menu-side">
                    { <img src={dashboard.src}alt="" /> }
                  </span>
                  <span> Dashboard </span>
                  <span className="menu-arrow" />
                </Link>
                <ul style={{ display: Sidebar === 'Dashboard' ? 'block' : "none" }} className='menu-items' >
                  <li>
                    <Link className={props?.activeClassName === 'admin-dashboard' ? 'active' : ''} href="/admin-dashboard">Admin Dashboard</Link>
                  </li>
                  <li>
                    <Link className={props?.activeClassName === 'doctor-dashboard' ? 'active' : ''} href="/doctor-dashboard">Doctor Dashboard</Link>
                  </li>
                  <li>
                    <Link className={props?.activeClassName === 'patient-dashboard' ? 'active' : ''} href="/patient-dashboard">Patient Dashboard</Link>
                  </li>
                </ul>
              </li>           
                <li className="submenu">
                  <Link href="#" id="menu-item1" onClick={(e) => {
                    // setSidebar('Doctors')
                    handleClick(e, "menu-item1", "menu-items1")
                  }}>
                    <span className="menu-side">
                      <img src={doctor.src} alt="" />
                    </span>{" "}
                    <span> Doctors </span> <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: Sidebar === 'Doctors' ? 'block' : 'none' }} className="menu-items1">
                    <li>
                      <Link className={props?.activeClassName === 'doctor-list' ? 'active' : ''} href="/doctorlist">Doctor List</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'add-doctor' ? 'active' : ''} href="/add-doctor">Add Doctor</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'edit-doctor' ? 'active' : ''} href="/editdoctor">Edit Doctor</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'doctor-profile' ? 'active' : ''} href="/doctorprofile">Doctor Profile</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link href="#" id="menu-item2" onClick={(e) => handleClick(e, "menu-item2", "menu-items2")}>
                    <span className="menu-side">
                      <img src={patients.src} alt="" />
                    </span>{" "}
                    <span>Patients </span> <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: "none" }} className="menu-items2">
                    <li>
                      <Link className={props?.activeClassName === 'patient-list' ? 'active' : ''} href="/patientslist">Patients List</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'add-patient' ? 'active' : ''} href="/addpatients">Add Patients</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'edit-patient' ? 'active' : ''} href="/editpatients">Edit Patients</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'patient' ? 'active' : ''} href="/patientsprofile">Patients Profile</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link href="#" id="menu-item3" onClick={(e) => handleClick(e, "menu-item3", "menu-items3")}>
                    <span className="menu-side">
                      <img src={menuicon08.src} alt="" />
                    </span>{" "}
                    <span> Staff </span> <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: "none" }} className="menu-items3">
                    <li>
                      <Link className={props?.activeClassName === 'staff-list' ? 'active' : ''}href="/stafflist">Staff List</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'add-staff' ? 'active' : ''}href="/addstaff">Add Staff</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'staff-profile' ? 'active' : ''}href="/staffprofile">Staff Profile</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'leaves' ? 'active' : ''}href="/leave">Leaves</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'holidays' ? 'active' : ''}href="/holiday">Holidays</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'attendance' ? 'active' : ''}href="/attendence">Attendance</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link href="#" id="menu-item4" onClick={(e) => handleClick(e, "menu-item4", "menu-items4")}>
                    <span className="menu-side">
                      <img src={menuicon04.src} alt="" />
                    </span>{" "}
                    <span> Appointments </span> <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: "none" }} className="menu-items4">
                    <li>
                      <Link className={props?.activeClassName === 'appoinment-list' ? 'active' : ''}href="/appoinmentlist">Appointment List</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'add-appoinment' ? 'active' : ''}href="/addappoinments">Add Appointment</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'edit-appoinment' ? 'active' : ''}href="/editappoinments">Edit Appointment</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link href="#" id="menu-item5" onClick={(e) => handleClick(e, "menu-item5", "menu-items5")}>
                    <span className="menu-side">
                      <img src={doctorschedule.src} alt="" />
                    </span>{" "}
                    <span> Doctor Schedule </span> <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: "none" }} className="menu-items5">
                    <li>
                      <Link className={props?.activeClassName === 'shedule-list' ? 'active' : ''}href="/schedulelist">Schedule List</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'add-shedule' ? 'active' : ''}href="/addschedule">Add Schedule</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'edit-shedule' ? 'active' : ''}href="/editschedule">Edit Schedule</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link href="#" id="menu-item6" onClick={(e) => handleClick(e, "menu-item6", "menu-items6")}>
                    <span className="menu-side">
                      <img src={menuicon06.src} alt="" />
                    </span>{" "}
                    <span> Departments </span> <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: "none" }} className="menu-items6">
                    <li>
                      <Link className={props?.activeClassName === 'department-list' ? 'active' : ''}href="/departmentlist">Department List</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'add-department' ? 'active' : ''}href="/add-department">Add Department</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'edit-department' ? 'active' : ''}href="/editdepartment">Edit Department</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link href="#" id="menu-item7" onClick={(e) => handleClick(e, "menu-item7", "menu-items7")}>
                    <span className="menu-side">
                      <img src={sidemenu.src} alt="" />
                    </span>{" "}
                    <span> Accounts </span> <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: "none" }} className="menu-items7">
                    <li>
                      <Link className={props?.activeClassName === 'invoice-list' ? 'active' : ''}href="/invoicelist">Invoices</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'payments' ? 'active' : ''}href="/payments">Payments</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'expenses' ? 'active' : ''}href="/expenses">Expenses</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'taxes' ? 'active' : ''}href="/taxes">Taxes</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'provident-fund' ? 'active' : ''}href="/providentfund">Provident Fund</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link href="#" id="menu-item8" onClick={(e) => handleClick(e, "menu-item8", "menu-items8")}>
                    <span className="menu-side">
                      <img src={menuicon09.src} alt="" />
                    </span>{" "}
                    <span> Payroll </span> <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: "none" }} className="menu-items8">
                    <li>
                      <Link className={props?.activeClassName === 'employee-salary' ? 'active' : ''}href="/employeesalary"> Employee Salary </Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'employee-payslip' ? 'active' : ''}href="/payslip"> Payslip </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link className={props?.activeClassName === 'chat' ? 'active' : ''}href="/chat">
                    <span className="menu-side">
                      <img src={menuicon10.src} alt="" />
                    </span>{" "}
                    <span>Chat</span>
                  </Link>
                </li>
                <li className="submenu">
                  <Link href="#" id="menu-item9" onClick={(e) => handleClick(e, "menu-item9", "menu-items9")}>
                    <span className="menu-side">
                      <img src={menuicon11.src} alt="" />
                    </span>{" "}
                    <span> Calls</span> <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: "none" }} className="menu-items9">
                    <li>
                      <Link className={props?.activeClassName === 'voice-call' ? 'active' : ''}href="/voice-call">Voice Call</Link>
                    </li>
                    <li >
                      <Link className={props?.activeClassName === 'video-call' ? 'active' : ''}href="/video-call">Video Call</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'incoming-call' ? 'active' : ''}href="/incoming-call">Incoming Call</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link href="#" id="menu-item10" onClick={(e) => handleClick(e, "menu-item10", "menu-items10")}>
                    <span className="menu-side">
                      <img src={menuicon12.src} alt="" />
                    </span>{" "}
                    <span> Email</span> <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: "none" }} className="menu-items10">
                    <li>
                      <Link className={props?.activeClassName === 'compose-mail' ? 'active' : ''}href="/compose-mail">Compose Mail</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'inbox' ? 'active' : ''} href="/inbox">Inbox</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'mail-view' ? 'active' : ''} href="/mail-view">Mail View</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link href="#" id="menu-item11" onClick={(e) => handleClick(e, "menu-item11", "menu-items11")}>
                    <span className="menu-side">
                      <img src={blog.src} alt="" />
                    </span>{" "}
                    <span> Blog</span> <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: "none" }} className="menu-items11">
                    <li>
                      <Link className={props?.activeClassName === 'blog-grid' ? 'active' : ''}href="/blogview">Blog</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'blog-details' ? 'active' : ''}href="/blog">
                        Blog View
                      </Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'add-blog' ? 'active' : ''}href="/addblog">Add Blog</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'edit-blog' ? 'active' : ''}href="/editblog">Edit Blog</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link className={props?.activeClassName === 'assests' ? 'active' : ''}href="/assests">
                    <i className="fa fa-cube" /> <span>Assets</span>
                  </Link>
                </li>
                <li>
                  <Link className={props?.activeClassName === 'activity' ? 'active' : ''}href="/user-activity">
                    <span className="menu-side">
                      <img src={menuicon14.src} alt="" />
                    </span>{" "}
                    <span>Activities</span>
                  </Link>
                </li>
                <li className="submenu">
                  <Link href="#" id="menu-item12" onClick={(e) => handleClick(e, "menu-item12", "menu-items12")}>
                    <i className="fa fa-flag" /> <span> Reports </span>{" "}
                    <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: "none" }} className="menu-items12">
                    <li>
                      <Link className={props?.activeClassName === 'expenses-report' ? 'active' : ''} href="/expense-Report"> Expense Report </Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'invoice-report' ? 'active' : ''} href="/invoice-report"> Invoice Report </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link href="#" id="menu-item13" onClick={(e) => handleClick(e, "menu-item13", "menu-items13")}>
                    <span className="menu-side">
                      <img src={menuicon15.src} alt="" />
                    </span>{" "}
                    <span> Invoice </span> <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: "none" }} className="menu-items13">
                    <li>
                      <Link className={props?.activeClassName === 'invoice-list' ? 'active' : ''} href="/invoice-list"> Invoices List </Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'invoice-grid' ? 'active' : ''} href="/invoice-grid"> Invoices Grid</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'add-invoice' ? 'active' : ''} href="/add-invoice"> Add Invoices</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'edit-invoice' ? 'active' : ''} href="/edit-invoice"> Edit Invoices</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'invoice-details' ? 'active' : ''} href="/invoice-details"> Invoices Details</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'invoice-settings' ? 'active' : ''} href="/invoice-settings"> Invoices Settings</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/settings">
                    <span className="menu-side">
                      <img src={menuicon16.src} alt="" />
                    </span>{" "}
                    <span>Settings</span>
                  </Link>
                </li>
                <li className="menu-title">UI Elements</li>
                <li className="submenu">
                  <Link href="#" id="menu-item14" onClick={(e) => handleClick(e, "menu-item14", "menu-items14")}>
                    <i className="fa fa-laptop" /> <span> Components</span>{" "}
                    <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: "none" }} className="menu-items14">
                    <li>
                      <Link className={props?.activeClassName === 'uikit' ? 'active' : ''} href="/ui-kit">UI Kit</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'typography' ? 'active' : ''} href="/typography">Typography</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'tabs' ? 'active' : ''} href="/tab">Tabs</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link href="#" id="menu-item15" onClick={(e) => handleClick(e, "menu-item15", "menu-items15")}>
                    <i className="fa fa-edit" /> <span> Forms</span>{" "}
                    <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: "none" }} className="menu-items15">
                    <li>
                      <Link className={props?.activeClassName === 'basic-input' ? 'active' : ''} href="/basic-input">Basic Inputs</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'input-groups' ? 'active' : ''} href="/inputgroup">Input Groups</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'horizontal-form' ? 'active' : ''} href="/horizontal-form">Horizontal Form</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'vertical-form' ? 'active' : ''} href="/vertical-form">Vertical Form</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link href="#" id="menu-item16" onClick={(e) => handleClick(e, "menu-item16", "menu-items16")}>
                    <i className="fa fa-table" /> <span> Tables</span>{" "}
                    <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: "none" }} className="menu-items16">
                    <li>
                      <Link className={props?.activeClassName === 'basic-table' ? 'active' : ''} href="/basic-table">Basic Tables</Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'data-table' ? 'active' : ''} href="/data-table">Data Table</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link className={props?.activeClassName === 'calendar' ? 'active' : ''} href="/calender">
                    <i className="fa fa-calendar" /> <span>Calendar</span>
                  </Link>
                </li>
                <li className="menu-title">Extras</li>
                <li className="submenu">
                  <Link href="#" id="menu-item17" onClick={(e) => handleClick(e, "menu-item17", "menu-items17")}>
                    <i className="fa fa-columns" /> <span>Pages</span>{" "}
                    <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: "none" }} className="menu-items17">
                    <li>
                      <Link href="/login"> Login </Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'register' ? 'active' : ''} href="/register"> Register </Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'forgotpassword' ? 'active' : ''} href="/forgotpassword"> Forgot Password </Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'changepassword' ? 'active' : ''} href="/changepassword"> Change Password </Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'lock-screen' ? 'active' : ''} href="/lockscreen"> Lock Screen </Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'profile' ? 'active' : ''} href="/profile"> Profile </Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'gallery' ? 'active' : ''} href="/gallery"> Gallery </Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === '404-error' ? 'active' : ''} href="/error">404 Error </Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === '500-error' ? 'active' : ''} href="/server-error">500 Error </Link>
                    </li>
                    <li>
                      <Link className={props?.activeClassName === 'blank-page' ? 'active' : ''} href="/blankpage"> Blank Page </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link href="#" id="menu-item18" onClick={(e) => handleClick(e, "menu-item18", "menu-items18")}>
                    <i className="fa fa-share-alt" /> <span>Multi Level</span>{" "}
                    <span className="menu-arrow" />
                  </Link>
                  <ul style={{ display: "none" }} className="menu-items18">
                    <li className="submenu">
                      <Link href="#" id="menu-item19" onClick={(e) => handleClick(e, "menu-item19", "menu-items19")}>
                        <span>Level 1</span> <span className="menu-arrow" />
                      </Link>
                      <ul style={{ display: "none" }} className="menu-items19">
                        <li>
                          <Link href="#">
                            <span>Level 2</span>
                          </Link>
                        </li>
                        <li className="submenu">
                          <Link href="#" id="menu-item20" onClick={(e) => handleClick(e, "menu-item20", "menu-items20")}>
                            {" "}
                            <span> Level 2</span> <span className="menu-arrow" />
                          </Link>
                          <ul style={{ display: "none" }} className="menu-items20">
                            <li>
                              <Link href="#">Level 3</Link>
                            </li>
                            <li>
                              <Link href="#">Level 3</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link href="#">
                            <span>Level 2</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="#">
                        <span>Level 1</span>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="logout-btn">
                <Link href="/login">
                  <span className="menu-side">
                    <img src={logout.src} alt="" />
                  </span>{" "}
                  <span>Logout</span>
                </Link>
              </div>
            </div>
          </div>
        </Scrollbars> 
      </div>
    </>
  )
}
export default Sidebar
