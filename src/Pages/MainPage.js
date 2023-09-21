import React, { useEffect, useState } from "react";
import "../Styles/MainPage.css";
import Modal from "react-bootstrap/Modal";
import selectOptions from "../Datas/SelectOption";
import Datas from "../Datas/data.json";
import WelcomeData from "../Datas/welcome.json";
import SearchIcon from "../Icons/SearchIcon";

const MainPage = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [items, setItems] = useState(Datas);
  const [data, setData] = useState([]);
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const selectedOption = items.find((option) => option.value === selectedValue);
  function MyVerticallyCenteredModal(props) {
    //BURASI ÇIKTI GÖRMEK İÇİN, GEÇİCİ !!!!!! DÜZENLEEEE

    const selectedHeader = () => {
      if (selectedValue == 1) {
        return <p>{selectOptions[0].label}</p>;
      } else if (selectedValue == 2) {
        return <p>{selectOptions[1].label}</p>;
      } else if (selectedValue == 3) {
        return <p>{selectOptions[2].label}</p>;
      } else if (selectedValue == 4) {
        return <p>{selectOptions[3].label}</p>;
      } else if (selectedValue == 5) {
        return <p>{selectOptions[4].label}</p>;
      } else if (selectedValue == 6) {
        return <p>{selectOptions[4].label}</p>;
      } else if (selectedValue == 7) {
        return <p>{selectOptions[6].label}</p>;
      } else if (selectedValue == 8) {
        return <p>{selectOptions[7].label}</p>;
      } else if (selectedValue == 9) {
        return <p>{selectOptions[8].label}</p>;
      } else if (selectedValue == 10) {
        return <p>{selectOptions[9].label}</p>;
      } else if (selectedValue == 11) {
        return <p>{selectOptions[10].label}</p>;
      } else if (selectedValue == 12) {
        return <p>{selectOptions[11].label}</p>;
      }
    };

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h4> {selectedHeader()}</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {items &&
            items.map((x) => (
              <div className="modal-cards pb-4">
                <div className="modal-card-header mt-4 mb-4">{x.name}</div>
                <div className="row">
                  <div className="col">
                    <img src={x.imageURL} width="100%" alt={x.name} />
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
  console.log("selected value :", selectedValue);
  return (
    <div className=" main-content">
      <div className="main-bg-img">
        <input
          type="text"
          class="input-field"
          placeholder="What do you want to search ?"
        />
        <button className="search-btn">
          <SearchIcon />
        </button>
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
            value={selectedValue}
            onChange={handleSelectChange}
          >
            {selectOptions &&
              selectOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
          </select>
          <button
            className="list-btn mt-3 py-2 col-lg-3 col-sm-12 mx-2 mb-4"
            onClick={() => setModalShow(true)}
          >
            LIST
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
