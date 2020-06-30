import React, { useState } from "react";
import Section from "../../components/section";
import "./index.scss";
import Text from "../../components/text";
import BookAppointment from "./book-appointment";
import ViewAppointment from "./view-appointment";
const UserPanel = () => {
  const [bookappointment, setbookappointment] = useState(false);
  const [viewappointment, setviewappointment] = useState(false);

  return (
    <div className="userPanel">
      {bookappointment ? (
        <Section
          heading={{ text: "Choose your Doctor" }}
          subheading={{
            text: "Click on the profile to book your appointment right now.",
          }}
        >
          <BookAppointment closehandler={setbookappointment} />
        </Section>
      ) : viewappointment ? (
        <Section
          heading={{ text: "See your Appointments" }}
          subheading={{
            text: "We are waiting to see you.",
          }}
        >
          <ViewAppointment closehandler={setviewappointment} />
        </Section>
      ) : (
        <div>
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
            heading={{ text: "Welcome User" }}
            subheading={{ text: "What do you want to do today" }}
          >
            <div className="options-available">
              <div
                className="option"
                onClick={() => {
                  setbookappointment(true);
                  setviewappointment(false);
                }}
              >
                <div className="Heading">
                  <Text size="H5">Book an Appointment</Text>
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
                  setbookappointment(false);
                  setviewappointment(true);
                }}
              >
                <div className="Heading">
                  <Text size="H5">View Your Appointments</Text>
                </div>
                <div className="option-image">
                  <img
                    className="image"
                    src={require("../../assets/special.png")}
                    alt="Doctor"
                  />
                </div>
              </div>
            </div>
          </Section>
        </div>
      )}
    </div>
  );
};

export default UserPanel;
