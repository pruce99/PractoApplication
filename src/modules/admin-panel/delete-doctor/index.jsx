import React, { useState } from "react";
import Text from "../../../components/text";
import "./index.scss";
const DeleteDoctor = ({ closehandler }) => {
  const [search, setSearch] = useState(0);

  const searchSpace = (event) => {
    let keyword = event.target.value;
    setSearch(keyword);
  };

  const deleteFunc = (del) => {
    let newData = doctors.filter((doctor) => doctor.registerno !== del);
    console.log(newData);
  };
  const doctors = [
    {
      name: "EL",
      registerno: 12121,
      speciality: "General Physician",
      gender: "Male",
      hospital: "SIMS",
    },
    {
      name: "Sasuke",
      registerno: 23133,
      speciality: "Ophthalmologist",
      gender: "Male",
      hospital: "Ramachandra",
    },
    {
      name: "Naruto",
      registerno: 421423,
      speciality: "Pediatrician",
      gender: "Male",
      hospital: "MMM",
    },
    {
      name: "Zavi",
      registerno: 122321,
      speciality: "Dermatologist",
      gender: "Male",
      hospital: "Global",
    },
    {
      name: "Zavi",
      registerno: 122321,
      speciality: "Dermatologist",
      gender: "Male",
      hospital: "Global",
    },
    {
      name: "Zavi",
      registerno: 122321,
      speciality: "Dermatologist",
      gender: "Male",
      hospital: "Global",
    },
  ];

  return (
    <div className="delete-Doctor">
      <div className="add-doctor-button" onClick={() => closehandler(false)}>
        <div className="add-doctor-button-btn">
          <Text>Close</Text>
        </div>
      </div>
      <div className="searchBox">
        <input
          type="text"
          placeholder="Enter item to be searched"
          className="searchStyle"
          onChange={(e) => searchSpace(e)}
        />
      </div>
      {search.length > 0 ? (
        <div className="list">
          {
            doctors  // eslint-disable-next-line
              .filter((doctor) => {
                if (
                  doctor.name.toLowerCase().includes(search.toLowerCase()) ||
                  doctor.speciality.toLowerCase().includes(search.toLowerCase())
                ) {
                  return doctor;
                }
              })
              .map((doctor) => {
                return (
                  <div className="doctor-list">
                    <div className="first-name">
                      <div
                        onClick={() => deleteFunc(doctor.registerno)}
                        className="x-btn"
                      >
                        <span>X</span>
                      </div>
                      <div>
                        <Text>Name: Dr.{doctor.name}</Text>
                      </div>
                      <div></div>
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
              })
          }
        </div>
      ) : (
        <div>
          <Text size="H4">Type Something To Find Your Doctor</Text>
        </div>
      )}
    </div>
  );
};

export default DeleteDoctor;
