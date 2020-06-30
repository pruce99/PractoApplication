import React, { useState } from "react";
import Text from "../../../components/text";
import "./index.scss";
import axios from "axios";
const AddDoctor = ({ closehandler }) => {
  const [doctorname, setDoctorname] = useState(null);
  const [gender, setGender] = useState("Male");
  const [speciality, setSpeciality] = useState("General-physician");
  const [Hospital, setHospital] = useState("General-physician");
  const [RegisterNo, setRegisterNo] = useState("General-physician");
  const [timeslot, setTimeslot] = useState({});

  let availableTimeslots = {
    "1:00": false,
    "2:00": false,
    "3:00": false,
    "4:00": false,
    "5:00": false,
    "6:00": false,
    "7:00": false,
    "8:00": false,
    "9:00": false,
    "10:00": false,
    "11:00": false,
    "12:00": false,
    "13:00": false,
    "14:00": false,
    "15:00": false,
    "16:00": false,
    "17:00": false,
    "18:00": false,
    "19:00": false,
    "21:00": false,
    "22:00": false,
    "23:00": false,
    "24:00": false,
  };

  const handlesubmit = async() => {
    let time = JSON.stringify(availableTimeslots)
    await axios.post("http://localhost:8080/adddoctor/doctordetails", {
      name: doctorname,
      gender: gender,
      speciality: speciality,
      hospital: Hospital,
      registerno: RegisterNo,
      availableTimeslots: time,
    });
  };

  return (
    <div className="Add-doctor">
      <div className="Add-doctor-components">
        <div>
          <h6 style={{ margin: "5px 0" }}>Doctor Name :</h6>
        </div>
        <div>
          <input
            onChange={(e) => {
              setDoctorname(e.target.value);
            }}
            type="text"
          />
        </div>
      </div>
      <div className="Add-doctor-components">
        <div>
          <h6 style={{ margin: "5px 0" }}>Speciality :</h6>
        </div>
        <select
          defaultValue={speciality}
          onChange={(e) => setSpeciality(e.target.value)}
          className="selectme"
          name="speciality"
        >
          <option value="general-physician">General physician</option>
          <option value="Pediatrician">Pediatrician</option>
          <option value="Dermatologist">Dermatologist</option>
          <option value="Ophthalmologist">Ophthalmologists</option>
        </select>
      </div>
      <div
        defaultValue={gender}
        onChange={(e) => {
          setGender(e.target.value);
        }}
        className="Add-doctor-components"
      >
        <div>
          <h6 style={{ margin: "5px 0" }}>Gender :</h6>
        </div>
        <select className="selectme" name="gender">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div className="Add-doctor-components">
        <div>
          <h6 style={{ margin: "5px 0" }}>Register No :</h6>
        </div>
        <div>
          <input
            onChange={(e) => {
              setRegisterNo(e.target.value);
            }}
            type="text"
          />
        </div>
      </div>
      <div className="Add-doctor-components">
        <div>
          <h6 style={{ margin: "5px 0" }}>Hospital :</h6>
        </div>
        <div>
          <input
            onChange={(e) => {
              setHospital(e.target.value);
            }}
            type="text"
          />
        </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="Add-doctor-components"
      >
        <div>
          <h6 style={{ margin: "5px 0" }}>Timeslots :</h6>
          <div className="timeslots">
            {
              // eslint-disable-next-line
              Object.keys(availableTimeslots).map((key) => {
                return (
                  <div
                    onClick={() => {
                      availableTimeslots[key] = !availableTimeslots[key];
                    }}
                    className="time-choose"
                  >
                    {key}
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="Add-doctor-components"
      >
        <div className="add-doctor-button">
          <div
            onClick={() => {
              handlesubmit();
            }}
            className="add-doctor-button-btn"
          >
            <Text>Add Details</Text>
          </div>
        </div>

        <div className="add-doctor-button" onClick={() => closehandler(false)}>
          <div className="add-doctor-button-btn">
            <Text>Close</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
