import React from 'react';
import Card from './shared/Card';
import { useParams, Navigate, useNavigate } from 'react-router-dom';

export default function TestParams() {
  const params = useParams();
  const Navigate = useNavigate();

 

 const handleSubmit = () => {
  console.log('submitted')
  Navigate('/about');
 }

  return (
    <Card>
      <h1>POST PAGE {params.id}</h1>
      <button onClick={handleSubmit}>Submit</button>
    </Card>
  );
}
