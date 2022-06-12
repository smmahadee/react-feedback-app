import { useContext } from 'react';
import { FeedbackContext } from './context/FeedbackContext';

export default function FeedbackStats() {
  const {feedback} = useContext(FeedbackContext);
  // calculating average
  let average = Math.ceil(
    feedback.reduce((acc, item) => acc + item.rating, 0) / feedback.length
  );

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} reviews</h4>
      <h4>Average Rating : {average}</h4>
    </div>
  );
}

