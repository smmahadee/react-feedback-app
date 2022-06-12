import { v4 as uuidv4 } from 'uuid';
import { createContext, useState } from 'react';
import { feedbackData } from '../../data/feedbackDataCopy';

export const FeedbackContext = createContext();

const FeedbackProvider = ({ children }) => {
  const [feedback, setfeedback] = useState(feedbackData);
  const [feedbackEdit, setfeedbackEdit] = useState({});

  const deleteFeedback = id => {
    if (window.confirm('Are you sure you want to delete ?')) {
      setfeedback(feedback.filter(f => f.id !== id));
    }
  };

  const addFeedback = newFeedback => {
    newFeedback.id = uuidv4();
    setfeedback([newFeedback, ...feedback]);

    console.log(feedback);
  };

  const editFeedback = item => {
    setfeedbackEdit({ ...item, edit: true });
  };

  const updateFeedback = (id, updItem) => {
    setfeedback(
      feedback.map(item => (item.id === id ? { ...item, ...updItem } : item))
    );
    setfeedbackEdit({});
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        addFeedback,
        deleteFeedback,
        feedbackEdit,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackProvider;
