import React, { useState } from "react";
import Text from "../../../components/text";
import "./index.scss";
import BookDoctor from "./book-doctor";
const BookAppointment = ({ closehandler }) => {
  const [Doctortime, setDoctortime] = useState(false);
  const [timeslot, setTimeslot] = useState([]);
  const doctors = [
    {
      name: "EL",
      registerno: 12121,
      speciality: "General Physician",
      gender: "Male",
      hospital: "SIMS",
      availableTimeslots: {
        "1:00": true,
        "2:00": true,
        "3:00": true,
        "4:00": true,
        "5:00": true,
        "6:00": true,
        "7:00": true,
        "8:00": true,
        "9:00": true,
        "10:00": true,
        "11:00": true,
        "12:00": true,
        "13:00": true,
        "14:00": true,
        "15:00": true,
        "16:00": true,
        "17:00": true,
        "18:00": true,
        "19:00": true,
        "21:00": true,
        "22:00": true,
        "23:00": true,
        "24:00": true,
      },
    },
    {
      name: "Sasuke",
      registerno: 23133,
      speciality: "Ophthalmologist",
      gender: "Male",
      hospital: "Ramachandra",
      availableTimeslots: {
        "1:00": true,
        "2:00": true,
        "3:00": true,
        "4:00": true,
        "5:00": true,
        "6:00": true,
        "7:00": true,
        "8:00": true,
        "9:00": true,
        "10:00": true,
        "11:00": true,
        "12:00": true,
        "13:00": true,
        "14:00": true,
        "15:00": true,
        "16:00": true,
        "17:00": true,
        "18:00": true,
        "19:00": true,
        "21:00": true,
        "22:00": true,
        "23:00": true,
        "24:00": true,
      },
    },
    {
      name: "Naruto",
      registerno: 421423,
      speciality: "Pediatrician",
      gender: "Male",
      hospital: "MMM",
      availableTimeslots: {
        "1:00": true,
        "2:00": true,
        "3:00": true,
        "4:00": true,
        "5:00": true,
        "6:00": true,
        "7:00": true,
        "8:00": true,
        "9:00": true,
        "10:00": true,
        "11:00": true,
        "12:00": true,
        "13:00": true,
        "14:00": true,
        "15:00": true,
        "16:00": true,
        "17:00": true,
        "18:00": true,
        "19:00": true,
        "21:00": true,
        "22:00": true,
        "23:00": true,
        "24:00": true,
      },
    },
    {
      name: "Zavi",
      registerno: 122321,
      speciality: "Dermatologist",
      gender: "Male",
      hospital: "Global",
      availableTimeslots: {
        "1:00": true,
        "2:00": true,
        "3:00": true,
        "4:00": true,
        "5:00": true,
        "6:00": true,
        "7:00": true,
        "8:00": true,
        "9:00": true,
        "10:00": true,
        "11:00": true,
        "12:00": true,
        "13:00": true,
        "14:00": true,
        "15:00": true,
        "16:00": false,
        "17:00": true,
        "18:00": true,
        "19:00": true,
        "21:00": true,
        "22:00": true,
        "23:00": true,
        "24:00": true,
      },
    },
    {
      name: "Zavi",
      registerno: 122321,
      speciality: "Dermatologist",
      gender: "Male",
      hospital: "Global",
      availableTimeslots: {
        "1:00": true,
        "2:00": true,
        "3:00": true,
        "4:00": true,
        "5:00": true,
        "6:00": true,
        "7:00": true,
        "8:00": true,
        "9:00": true,
        "10:00": true,
        "11:00": true,
        "12:00": true,
        "13:00": true,
        "14:00": true,
        "15:00": true,
        "16:00": true,
        "17:00": true,
        "18:00": true,
        "19:00": true,
        "21:00": true,
        "22:00": true,
        "23:00": true,
        "24:00": true,
      },
    },
    {
      name: "Zavi",
      registerno: 122321,
      speciality: "Dermatologist",
      gender: "Male",
      hospital: "Global",
      availableTimeslots: {
        "1:00": true,
        "2:00": true,
        "3:00": true,
        "4:00": true,
        "5:00": true,
        "6:00": true,
        "7:00": true,
        "8:00": true,
        "9:00": true,
        "10:00": true,
        "11:00": true,
        "12:00": true,
        "13:00": true,
        "14:00": true,
        "15:00": true,
        "16:00": true,
        "17:00": true,
        "18:00": true,
        "19:00": true,
        "21:00": true,
        "22:00": true,
        "23:00": true,
        "24:00": true,
      },
    },
  ];
  return (
    <div>
      {Doctortime ? (
        <div>
          <BookDoctor closehandler={setDoctortime} timeslot={timeslot} />
        </div>
      ) : (
        <div className="view-doctors">
          <div
            className="add-doctor-button"
            onClick={() => closehandler(false)}
          >
            <div className="add-doctor-button-btn">
              <Text>Close</Text>
            </div>
          </div>
          {doctors.length > 0 ? (
            <div className="list">
              {doctors.map((doctor) => {
                return (
                  <div
                    style={{ cursor: "pointer" }}
                    className="doctor-list"
                    onClick={() => {
                      setDoctortime(true);
                      setTimeslot(doctor);
                    }}
                  >
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
                      <Text>Hospital: {doctor.hospital}</Text>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div>
              <Text size="H5">
                No Doctors Available now, please try later &#8709;
              </Text>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BookAppointment;
