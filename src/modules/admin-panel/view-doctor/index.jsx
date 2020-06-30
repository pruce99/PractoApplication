import React from "react";
import Text from "../../../components/text";
import "./index.scss";
const ViewDoctor = ({ closehandler }) => {
  const doctors = [
    {
      name: "EL",
      registerno: 12121,
      speciality: "General Physician",
      gender: "Male",
      hospital:"SIMS"
    },
    {
      name: "Sasuke",
      registerno: 23133,
      speciality: "Ophthalmologist",
      gender: "Male",
      hospital:"Ramachandra",

    },
    {
      name: "Naruto",
      registerno: 421423,
      speciality: "Pediatrician",
      gender: "Male",
      hospital:"MMM",
    },
    {
      name: "Zavi",
      registerno: 122321,
      speciality: "Dermatologist",
      gender: "Male",
      hospital:"Global",

    },
    {
      name: "Zavi",
      registerno: 122321,
      speciality: "Dermatologist",
      gender: "Male",
      hospital:"Global",
    },
    {
      name: "Zavi",
      registerno: 122321,
      speciality: "Dermatologist",
      gender: "Male",
      hospital:"Global",
    },
  ];
  return (
    <div className="view-doctors">
      <div className="add-doctor-button" onClick={() => closehandler(false)}>
        <div className="add-doctor-button-btn">
          <Text>Close</Text>
        </div>
      </div>
      {
      doctors.length > 0 ? (
        <div className="list">
          {doctors.map((doctor) => {
            return (
              <div className="doctor-list">
                <div className="first-name">
                  <Text>Name: Dr.{doctor.name}</Text>
                </div>
                <div className="second-name">
                  <Text>Gender: {doctor.gender}</Text>
                </div>
                <div className="third-name">
                  <Text>Speciality: {doctor.speciality}</Text>
                </div>
                <div className="fourth-name">
                  <Text>Speciality: {doctor.hospital}</Text>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div><Text size="H5">No Doctors Added, Please Add Doctors &#8709;</Text></div>
      )}
    </div>
  );
};

export default ViewDoctor;
