import "../router/testcomponent.style.css";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import NbackTest from "../nback-test/starttest.component";
const ButtonNbackTest = () => {
  useEffect(() => {
    setting[0].s.push(null);
    document.getElementById("button").addEventListener("click", StartTest);
  }, []);

  const [show, setShow] = useState(false);
  const [showComponent, setShowComponent] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [setting, setSetting] = useState([
    {
      numberOfArraySample: "",
      t: 1000,
      isi: 1000,
      n: 1,
      s: [
        3, 8, 2, 2, 2, 5, 5, 1, 7, 5, 2, 3, 9, 4, 1, 6, 4, 4, 4, 4, 3, 3, 1, 4,
        1,
      ],
      mode: "demo",
    },
  ]);
  let input = {
    numberOfArraySample: "",
    t: 1000,
    isi: 1000,
    n: 1,
    s: setting[0].s,
    mode: "demo",
  };

  const getSettingFromUser = (event) => {
    event.preventDefault();
    const Elements = event.target.elements;
    for (const iterator of Elements) {
      if (iterator.value !== "" && iterator.name !== "mode") {
        input[iterator.name] = parseInt(iterator.value);
      }
      if (iterator.name === "mode") {
        if (document.getElementById("radio1").checked) {
          let radio_value1 = document.getElementById("radio1").value;
          input.mode = radio_value1;
        }
        if (document.getElementById("radio2").checked) {
          let radio_value2 = document.getElementById("radio2").value;
          input.mode = radio_value2;
        }
        if (iterator.name === "numberOfArraySample") {
          let valueNumberOfArraySample = iterator.value;
          if (valueNumberOfArraySample > input.s.length) {
            input.s.map((item) => {
              while (input.s.length <= valueNumberOfArraySample) {
                input.s.push(item);
              }
            });
          }
        }
      }
    }
    setting.pop(1);
    if (setting.length === 0) {
      let tempSetting = setting;
      tempSetting.push(input);
      setSetting(tempSetting);
    }
  };

  const StartTest = () => {
    setShowComponent(true);
    console.log(setting);
  };
  return (
    <>
      {showComponent === false ? (
        <>
          <section className="sectionStartTest">
            <div className="container">
              <div className="row featureRow">
                <div className="offset-2 col-8">
                  <div className="jumbotron featurejumbotron fontfa">
                    <div className="container">
                      <Button
                        variant="primary"
                        className=" offset-3 col-6 py-3 mt-5"
                        onClick={handleShow}
                      >
                        تنظیمات
                      </Button>
                      <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        animation={true}
                      >
                        <Modal.Header closeButton></Modal.Header>
                        <Modal.Body className="textModal fontfa">
                          <Form onSubmit={getSettingFromUser}>
                            <Form.Group controlId="formBasicNumberOfElement">
                              <Form.Label>تعداد مجموعه محرک‌ها</Form.Label>
                              <Form.Control
                                min="0"
                                type="number"
                                name="numberOfArraySample"
                                defaultValue={input.numberOfArraySample}
                              />
                            </Form.Group>
                            <Form.Group controlId="formBasicTimeShow">
                              <Form.Label> زمان نمایش محرک‌ها</Form.Label>
                              <InputGroup className="mb-3 ">
                                <Form.Control
                                  min="0"
                                  defaultValue={input.t}
                                  type="number"
                                  name="t"
                                  placeholder="به عنوان مثال هزار میلی‌ثانیه"
                                  className="textModal"
                                />
                                <InputGroup.Append>
                                  <InputGroup.Text>ms</InputGroup.Text>
                                </InputGroup.Append>
                              </InputGroup>
                            </Form.Group>
                            <Form.Group controlId="formBasicTimeRest">
                              <Form.Label> فاصله بین محرک‌ها</Form.Label>
                              <InputGroup className="mb-3">
                                <Form.Control
                                  min="0"
                                  defaultValue={input.isi}
                                  type="number"
                                  name="isi"
                                  placeholder="به عنوان مثال هزار میلی‌ثانیه"
                                  className="textModal"
                                />
                                <InputGroup.Append>
                                  <InputGroup.Text>ms</InputGroup.Text>
                                </InputGroup.Append>
                              </InputGroup>
                            </Form.Group>
                            <Form.Group controlId="formBasicSelectTarget">
                              <Form.Label>مقدار تعداد برو عقب</Form.Label>
                              <Form.Control
                                type="text"
                                name="n"
                                min="0"
                                defaultValue={input.n}
                              />
                              <Form.Text className="text-muted">
                                این اعداد باید یک عدد بدون اعشار باشد{" "}
                              </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formSelect">
                              <Form.Label> : انتخاب حالت</Form.Label>
                              {["radio"].map((type) => (
                                <div
                                  key={`default-${type}`}
                                  className="mb-3 mx-2"
                                  style={{ textAlign: "left" }}
                                >
                                  <Form.Check
                                    name="mode"
                                    value="demo"
                                    label="demo"
                                    type={type}
                                    id="radio1"
                                  />
                                  <Form.Check
                                    name="mode"
                                    value="test"
                                    type={type}
                                    label="test"
                                    id="radio2"
                                  />
                                </div>
                              ))}
                            </Form.Group>
                            <hr />
                            <Button variant="secondary" onClick={handleClose}>
                              بستن
                            </Button>
                            <Button
                              variant="primary"
                              type="submit"
                              onClick={handleClose}
                              className="ml-3"
                            >
                              ذخیره
                            </Button>
                          </Form>
                        </Modal.Body>
                      </Modal>
                      <div className="fontfa">
                        <div className="text">
                          <button
                            className="btn btn-primary col-md-6 col-6 py-3 mb-5"
                            type="button"
                            id="button"
                          >
                            {" "}
                            <h6 className="linkstyle">شروع آزمون</h6>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : showComponent === true ? (
        <>
          <NbackTest
            t={setting[0].t}
            isi={setting[0].isi}
            n={setting[0].n}
            s={setting[0].s}
            mode={setting[0].mode}
          />
        </>
      ) : null}
    </>
  );
};
export default ButtonNbackTest;
