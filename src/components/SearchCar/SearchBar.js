import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MyButton from '../UI/MyButton';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import CarResult from './CarResult';
import { getCarsList } from '../../actions/carsAction';

const SearchBar = () => {
  const [driverType, setDriverType] = useState('');
  const [rentDate, setRentDate] = useState('');
  const [rentTime, setRentTime] = useState('');
  const [passenger, setPassenger] = useState('');

  const [focus, setFocus] = useState(false);
  const { getCarsResult, getCarsError, getCarsLoading } = useSelector((state) => state.CarsReducer);
  const [filteredCars, setFilteredCars] = useState(useSelector((state) => state.CarsReducer.getCarsResult));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarsList());
  }, [dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFocus(false);

    if (getCarsResult) {
      let inputDateTime = rentDate + "T" + rentTime + ":05.563Z";
      setFilteredCars(
        getCarsResult.filter((car) => {
          if (passenger === "") {
            if (driverType === "withDriver") {
              return (
                car.available === true &&
                Date.parse(car.availableAt) < Date.parse(inputDateTime)
              );
            } else {
              console.log(Date.parse(car.availableAt), Date.parse(inputDateTime));
              return (
                car.available === false &&
                Date.parse(car.availableAt) < Date.parse(inputDateTime)
              );
            }
          } else {
            if (driverType === "withDriver") {
              return (
                car.available === true &&
                Date.parse(car.availableAt) < Date.parse(inputDateTime) &&
                car.capacity >= passenger
              );
            } else {
              return (
                car.available === false &&
                Date.parse(car.availableAt) < Date.parse(inputDateTime) &&
                car.capacity >= passenger
              );
            }
          }
        })
      );
    }

    // console.log(driverType, rentDate, rentTime, passenger);
  };

  return (
    <>
      {focus && <div className="filter" onClick={() => setFocus(false)}></div>}
      <div className="searchPage">
        <section id="search" >
          <Container className="border rounded pe-0" onClick={() => setFocus(true)}>
            <Form onSubmit={(event) => handleSubmit(event)}>
              <Row className="m-3">
                <Col md={11} className="p-0">
                  <Row className="row-cols-sm-2 row-cols-lg-4 row-cols-1">
                    <Col className="pe-3 ps-0">
                      <Form.Label htmlFor="selectDriverType">Tipe Driver</Form.Label>
                      <Form.Select name="selectDriverType"
                        value={driverType}
                        onChange={(event) => setDriverType(event.target.value)}
                        required
                      >
                        <option value="">Pilih Tipe Driver</option>
                        <option value="withDriver">Dengan Sopir</option>
                        <option value="withoutDriver">Tanpa Sopir (Lepas Kunci)</option>
                      </Form.Select>
                    </Col>
                    <Col className="pe-3 ps-0">
                      <Form.Label htmlFor="inputDate">Tanggal</Form.Label>
                      <input className="form-control" type="date" name="inputDate"
                        value={rentDate}
                        onChange={(event) => setRentDate(event.target.value)}
                        required
                      />
                    </Col>
                    <Col className="pe-3 ps-0">
                      <Form.Label htmlFor="inputTime">Waktu Jemput/Ambil</Form.Label>
                      <input className="form-control" type="time" name="inputTime"
                        value={rentTime}
                        onChange={(event) => setRentTime(event.target.value)}
                        required
                      />
                    </Col>
                    <Col className="pe-3 ps-0">
                      <Form.Label htmlFor="inputPassenger">Jumlah Penumpang (optional)</Form.Label>
                      <input className="form-control" type="text" name="inputPassenger"
                        placeholder="Jumlah Penumpang"
                        value={passenger}
                        onChange={(event) => setPassenger(event.target.value)}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col sm={1} className="p-0 d-flex align-items-end">
                  <MyButton type="submit" className="button-global">Cari Mobil</MyButton>
                </Col>
              </Row>
            </Form>
          </Container>
        </section>
        <CarResult data={filteredCars ? filteredCars : getCarsResult} loading={getCarsLoading} error={getCarsError} />
      </div>
    </>
  );
};

export default connect()(SearchBar);