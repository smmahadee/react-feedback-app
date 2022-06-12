import React from 'react'
import FeedbackItem from './FeedbackItem'

import { useContext } from 'react';
import { FeedbackContext } from './context/FeedbackContext';

export default function FeedbackList() {

 const { feedback } = useContext(FeedbackContext);


  if(!feedback) return <p>Not feedback yet</p>;

  return (
    <div className="feedback-list">
    
    {feedback.map(item => <FeedbackItem key={item.id} item={item} />)}
    </div>  
  )
}

