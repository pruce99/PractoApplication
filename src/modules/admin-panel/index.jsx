import React, { useState } from "react";
import Section from "../../components/section";
import Text from "../../components/text";
import "./index.scss";
import AddDoctor from "./add-doctor";
import ViewDoctor from "./view-doctor";
import DeleteDoctor from "./delete-doctor";
import ViewAppointment from "./view-appointments";

const AdminPanel = () => {
  const [showDoctor, setShowDoctor] = useState(false);
  const [viewDoctor, setViewDoctor] = useState(false);
  const [deleteDoctor, setDeleteDoctor] = useState(false);
  const [viewAppointment, setViewAppointment] = useState(false);

  


  return (
    <div className="Adminpanel">
      <Section style={{ paddingBottom: "0px" }}>
        <div className="practo-image">
          <img
            style={{ width: "100px" }}
            className="image"
            src={require("../../assets/practo.png")}
            alt="practo"
          />
        </div>
      </Section>
      <Section
        heading={{ text: "Welcome Admin" }}
        subheading={{ text: "What do you want to do today" }}
      >
        {showDoctor ? <AddDoctor closehandler={setShowDoctor} /> : <div></div>}
        {viewDoctor ? <ViewDoctor closehandler={setViewDoctor} /> : <div></div>}
        {deleteDoctor ? <DeleteDoctor closehandler={setDeleteDoctor} />:<div></div>}
        {viewAppointment ? <ViewAppointment closehandler = {setViewAppointment}/>:<div></div>}
        <div className="options-available">
          <div
            className="option"
            onClick={() => {
              setShowDoctor(!showDoctor);
              setViewDoctor(false);
              setDeleteDoctor(false);
              setViewAppointment(false);
            }}
          >
            <div className="Heading">
              <Text size="H5">Add Doctor</Text>
            </div>
            <div className="option-image">
              <img
                className="image"
                src={require("../../assets/doctor.png")}
                alt="Doctor"
              />
            </div>
          </div>
          <div
            className="option"
            onClick={() => {
              setViewDoctor(!viewDoctor);
              setShowDoctor(false);
              setDeleteDoctor(false);
              setViewAppointment(false);
            }}
          >
            <div className="Heading">
              <Text size="H5">View Doctors</Text>
            </div>
            <div className="option-image">
              <img
                className="image"
                src={require("../../assets/special.png")}
                alt="Doctor"
              />
            </div>
          </div>
          <div
            className="option"
            onClick={() => {
              setDeleteDoctor(!deleteDoctor);
              setShowDoctor(false);
              setViewDoctor(false);
              setViewAppointment(false);

            }}
          >
            <div className="Heading">
              <Text size="H5">Delete Doctors</Text>
            </div>
            <div className="option-image">
              <img
                style={{ objectFit: "scale-down", backgroundColor: "white" }}
                className="image"
                src={require("../../assets/delete-doctor.png")}
                alt="Doctor"
              />
            </div>
          </div>
          <div className="option"
          onClick={() => {
            setViewAppointment(!viewAppointment);
            setShowDoctor(false);
            setDeleteDoctor(false);
            setViewDoctor(false);
          }}
          >
            <div className="Heading">
              <Text size="H5">View Appointments</Text>
            </div>
            <div className="option-image">
              <img
                className="image"
                src={require("../../assets/appointment.png")}
                alt="Doctor"
              />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default AdminPanel;
