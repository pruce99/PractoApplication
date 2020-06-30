import React from "react";
import "./index.scss";
import Text from "../../../components/text";
const ViewAppointment = ({closehandler}) => {
  const patientlist = [
    {
      name: "Barooosa",
      age: "21",
      gender: "male",
      timeslot: "12:00-13:00",
      Doctor: "Sasuke",
      Problem: "Blur vision",
      Hospital: "MMMM",
    },
    {
      name: "Onyx",
      age: "10",
      gender: "male",
      timeslot: "15:00-16:00",
      Doctor: "Naruto",
      Problem: "Fever",
      Hospital: "MMMM",

    },
    {
      name: "Cassey",
      age: "22",
      gender: "female",
      timeslot: "13:00-14:00",
      Doctor: "EL",
      Problem: "Fever",
      Hospital: "MMMM",
    },
    {
      name: "Teros",
      age: "32",
      gender: "Male",
      timeslot: "13:00-14:00",
      Doctor: "Zavi",
      Problem: "Rashes in Skin",
      Hospital: "MMMM",

    },
  ];
  return (
    <div className="ViewAppointment"> 
      <div className="add-doctor-button" onClick={() => closehandler(false)}>
        <div className="add-doctor-button-btn">
          <Text>Close</Text>
        </div>
      </div>
      {patientlist.length > 0 ? (
        <div className="list">
          {patientlist.map((patientlist) => {
            return (
              <div className="doctor-list">
                <div className="first-name">
                  <Text>Name: {patientlist.name}</Text>
                </div>
                <div className="second-name">
                  <Text>Gender: {patientlist.gender}</Text>
                </div>
                <div className="third-name">
                  <Text>Age: {patientlist.age}</Text>
                </div>
                <div className="fourth-name">
                  <Text>Time: {patientlist.timeslot}</Text>
                </div>
                <div className="fifth-name">
                  <Text>Doctor: Dr.{patientlist.Doctor}</Text>
                </div>
                <div className="sixth-name">
                  <Text>Problem: {patientlist.Problem}</Text>
                </div>
                <div className="sixth-name">
                  <Text>Hospital: {patientlist.Hospital}</Text>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <Text size="H5">
            Please Book your appointment to see it here &#8709;
          </Text>
        </div>
      )}
    </div>
  );
};

export default ViewAppointment;
