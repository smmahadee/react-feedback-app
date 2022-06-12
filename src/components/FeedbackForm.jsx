import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { FeedbackContext } from './context/FeedbackContext';
import Card from './shared/Card';
import Button from './shared/Button';
import FeedbackRating from './FeedbackRating';

function FeedbackForm() {
  const [text, setText] = useState('');
  const [btnDesabled, setBtnDesabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(10);

  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  const handleTextChange = e => {
    if (text.trim() === '') {
      setBtnDesabled(true);
      setMessage('');
    } else if (text.trim() !== '' && text.trim().length < 10) {
      setBtnDesabled(true);
      setMessage('Plese enter at least 10 character');
    } else {
      setBtnDesabled(false);
      setMessage('');
    }

    setText(e.target.value);
  };

  const handleSelect = rating => {
    setRating(rating);
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    if (text.trim().length >= 10) {
      const newFeedback = {
        text,
        rating,
      };

      if (feedbackEdit.edit) {
        updateFeedback(feedbackEdit.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
    }
    setText('');
  };

  useEffect(() => {
    if (!feedbackEdit.edit) return;

    setText(feedbackEdit.text);
    setRating(feedbackEdit.rating);
    setBtnDesabled(false);

    console.log(feedbackEdit);
  }, [feedbackEdit]);

  return (
    <Card>
      <form onSubmit={handleFormSubmit}>
        <FeedbackRating selected={rating} select={handleSelect} />
        <h2>How would you rate your service with us?</h2>
        <div className='input-group'>
          <input
            type='text'
            value={text}
            onChange={handleTextChange}
            placeholder='Write a review'
          />
          <Button type='submit' isDisabled={btnDesabled}>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
