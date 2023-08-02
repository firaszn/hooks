import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import RatingStars from 'react-rating-stars-component';

const Filter = ({ setTitleFilter, setRateFilter, rateFilter }) => {
  const [resetKey, setResetKey] = useState(0);

  const resetFilters = () => {
    setTitleFilter('');
    setRateFilter(0);
    setResetKey((prevKey) => prevKey + 1);
  };

  return (
    <div>
     
      <RatingStars
        key={resetKey}
        count={5}
        size={30}
        half={false}
        onChange={(rate) => setRateFilter(rate)}
        value={rateFilter}
      />
      <Button style={{ display: 'flex', justifyContent: 'flex-start' }} variant="outline-primary" onClick={resetFilters}>
        Reset
      </Button>
    </div>
  );
};

export default Filter;
