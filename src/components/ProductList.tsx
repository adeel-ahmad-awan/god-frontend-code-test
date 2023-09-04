import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import Image from 'react-bootstrap/Image';
import 'react-multi-carousel/lib/styles.css';
import { useRouter } from 'next/router';
import CarCard from './CarCard';
import CarNavbar from './CarNavbar';
import styles from './ProductList.module.css'; // Import CSS Modules styles

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 630 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 630, min: 0 },
    items: 1.2
  }
};

const CarouselButtonGroup = ({ next, previous }) => {
  return (
    <div className={styles.productListCustomArrow}> {/* Use CSS Modules class */}
      <button id='carousel_right' className={`${styles.block} ${styles.productListCustomArrowRightButton}`} onClick={previous}>
        <span className={styles.block}>
          <Image className={styles.productListCustomArrowRightImg} src="/images/chevron-circled.svg" thumbnail alt='chevron-circled' />
        </span>
      </button>
      <button id='carousel_left' className={`${styles.block} ${styles.productListCustomArrowLeftButton}`} onClick={next}>
        <span className={styles.block}>
          <Image className={styles.productListCustomArrowLeftImg} src="/images/chevron-circled.svg" thumbnail alt='chevron-circled' />
        </span>
      </button>
    </div>
  );
};

export default function ProductList() {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Fetch cars data and set it to the state
    fetch('/api/cars.json')
      .then(response => response.json())
      .then(data => {
        setCars(data);
        setFilteredCars(data); // Initialize filtered cars with all cars
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const filterCars = (selectedBodyType) => {
    return cars.filter(car => {
      const isMatchingBodyType =
        selectedBodyType === 'all' || car.bodyType.toLowerCase() === selectedBodyType.toLowerCase();
      return isMatchingBodyType;
    });
  };

  const handleSelectBodyType = event => {
    setSelectedBodyType(event.target.value);
    setFilteredCars(filterCars(event.target.value));
  };

  const handleLearnButtonClick = id => {
    router.push(`/learn/${id}`);
  };

  const handleShopButtonClick = id => {
    router.push(`/shop/${id}`);
  };

  const [selectedBodyType, setSelectedBodyType] = useState('all');

  const hasFilteredCars = filteredCars.length > 0;

  return (
    <>
      <CarNavbar
        selectedBodyType={selectedBodyType}
        onSelectBodyType={handleSelectBodyType}
      />
      {hasFilteredCars ? (
        <Carousel
          responsive={responsive}
          arrows={false}
          renderButtonGroupOutside={true}
          customButtonGroup={<CarouselButtonGroup />}
          renderDotsOutside={true}
          ssr={true}
        >
          {filteredCars.map(car => (
            <CarCard
              key={car.id}
              car={car}
              onLearnClick={handleLearnButtonClick}
              onShopClick={handleShopButtonClick}
            />
          ))}
        </Carousel>
      ) : (
        <h4 className="empty_filter_text">No cars match the selected criteria.</h4>
      )}
    </>
  );
}
