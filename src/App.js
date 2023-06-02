import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import ShowSummary from './screens/ShowSummary';
import BookingForm from './screens/BookingForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summary/:id" element={<ShowSummary />} />
        <Route path="/booking/:id" element={<BookingForm />} />
      </Routes>
    </Router>
  );
};

export default App;

