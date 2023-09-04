import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './LearnDetail.module.css'; // Import CSS Modules styles
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function LearnDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [car, setCar] = useState(null);

  useEffect(() => {
    // Fetch car data based on the ID and set it to the state
    fetch('/api/cars.json')
      .then(response => response.json())
      .then(data => {
        const foundCar = data.find(car => car.id === id);
        setCar(foundCar);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  return (
    <div className={styles.learnDetailContainer}>
      <Container>
        <h1 className={styles.pageTitle}>Learn Detail Page</h1>
        {car ? (
          <Row>
            <Col sm={6} >
              <Image src={car.imageUrl} thumbnail alt={`${car.modelName} image`} />
            </Col>
            <Col sm={6} >
              <p id="car_name"><b>Car Name:</b> {car.modelName}</p>
              <p id="car_id"><b>ID:</b> {id}</p>
              <p id="car_body_type"><b>Body Type:</b> {car.bodyType}</p>
              <p id="car_model_type"><b>Model Type:</b> {car.modelType}</p>
            </Col>
          </Row>
        ) : (
          <p>Loading...</p>
        )}
      </Container>
    </div>
  );
}

export default LearnDetail;
