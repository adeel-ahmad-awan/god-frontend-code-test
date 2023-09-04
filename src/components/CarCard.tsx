import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import styles from './CarCard.module.css';

const CarCard = ({ car, onLearnClick, onShopClick }) => {
  const { id, bodyType, modelName, modelType, imageUrl } = car;

  const handleLearnButtonClick = () => {
    onLearnClick(id);
  };

  const handleShopButtonClick = () => {
    onShopClick(id);
  };

  return (
    <div key={id}>
      <Card className={styles.productListCard}>
        <Card.Body>
          <Card.Title className={styles.productListCardTitle}>{bodyType}</Card.Title>
          <Card.Text className={styles.productListCardText}>
            <span className={styles.productListCardTextModalName}>{modelName} </span>
            <span className={styles.productListCardTextModalType}>{modelType}</span>
          </Card.Text>
          <Card.Img className={styles.productListCardImg} variant="top" src={imageUrl} />
          <Container>
            <Row>
              <Col xs={6} className={styles.productListCardButtonLearnParent}>
                <Button id={`learn_${id}`} className={styles.productListCardButton} variant="link" onClick={handleLearnButtonClick}>
                  Learn
                  <Image className={styles.productListCardButtonSvg} src="/images/chevron-small.svg" thumbnail alt='chevron-small' />
                </Button>
              </Col>
              <Col xs={6} className={styles.productListCardButtonShopParent}>
                <Button id={`shop_${id}`} className={styles.productListCardButton} variant="link" onClick={handleShopButtonClick}>
                  Shop
                  <Image className={styles.productListCardButtonSvg} src="/images/chevron-small.svg" thumbnail alt='chevron-small' />
                </Button>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CarCard;
