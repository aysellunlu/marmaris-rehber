import React, { useEffect, useState } from "react";
import "../Styles/MainPage.css";
import Modal from "react-bootstrap/Modal";
import BigChef from "../img/bigchefs.png";
import selectOptions from "../Datas/SelectOption";
import Datas from "../Datas/data.json";
import WelcomeData from "../Datas/welcome.json";
import axios from "axios";

function MyVerticallyCenteredModal(props) {
  const [items, setItems] = useState(Datas);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/data')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h4>Restaurants & Cafes</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {items &&
          items.map((x) => (
            <div className="modal-cards pb-4">
              <div className="modal-card-header mt-4 mb-4">{x.name}</div>
              <div className="row">
                <div className="col">
                  <img src={x.imageURL} width="100%" />
                </div>
                <div className="col">
                  <div className="modal-card-text mb-2">
                    <b>Service: </b> {x.servicesType}
                  </div>
                  <div className="modal-card-text mb-2">
                    <b>Address: </b> {x.address}
                  </div>
                  <div className="modal-card-text mb-2">
                    <b>Working Hours: </b> {x.workingHours}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </Modal.Body>
    </Modal>
  );
}
const MainPage = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className=" main-content">
      <div className="main-bg-img">
        <input
          type="text"
          class="input-field"
          placeholder="What do you want to search ?"
        />
        <button className="search-btn">ARA</button>
      </div>
      <div className="marmaris-center-container container-fluid">
        <div className="marmaris-center-header p-3 mt-4">
          {WelcomeData[0].title}
        </div>
        <div className="main-page-text container-fluid">
          {WelcomeData[0].text}
        </div>
        <div className="select-container col-lg-8 col-sm-12 mt-3 row container">
          <select
            class="form-select col-lg col-sm-12 mx-2 mt-3"
            aria-label="Default select example"
          >
            {selectOptions &&
              selectOptions.map((opt) => (
                <option value={opt.value}>{opt.label}</option>
              ))}
          </select>
          <button
            className="list-btn mt-3 py-2 col-lg-3 col-sm-12 mx-2"
            onClick={() => setModalShow(true)}
          >
            List
          </button>
        </div>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </div>
  );
};

export default MainPage;
