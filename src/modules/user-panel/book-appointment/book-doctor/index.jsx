import React, { useState } from "react";
import Text from "../../../../components/text";
import "./index.scss";
const BookDoctor = (props) => {
  const [aptime, setAptime] = useState(null);
  const {
    name,
    gender,
    speciality,
    hospital,
    availableTimeslots,
    registerno,
  } = props.timeslot;
  const { closehandler } = props;
  return (
    <div className="book-doctor">
      <div className="add-doctor-button" onClick={() => closehandler(false)}>
        <div className="add-doctor-button-btn">
          <Text>Close</Text>
        </div>
      </div>
      <div className="list">
        <div className="name">
          <Text>Name: {name}</Text>
        </div>
        <div className="gender">
          <Text>Gender: {gender}</Text>
        </div>
        <div className="speciality">
          <Text>Speciality: {speciality}</Text>
        </div>
        <div className="hospital">
          <Text>Hospital: {hospital}</Text>
        </div>
        <div className="registerno">
          <Text>Register No: {registerno}</Text>
        </div>
      </div>
      {aptime ? (
        <div>
          <div className="time">
            <div>{aptime}</div>
            <span
              className="close-btn"
              onClick={() => {
                setAptime(null);
              }}
            >
              X
            </span>
          </div>
          <div
            className="book-doctor-button"
            onClick={() => closehandler(false)}
          >
            <div className="add-doctor-button-btn">
              <Text>Book Appointment</Text>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Text size="H6">TimeSlots Available :</Text>
          <div className="timeslots">
            {
                // eslint-disable-next-line
            Object.keys(availableTimeslots).map((key) => {
              if (availableTimeslots[key] === true)
                return (
                  <div
                    onClick={() => {
                      setAptime(key);
                    }}
                    className="time-choose"
                  >
                    {key}
                  </div>
                );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDoctor;
