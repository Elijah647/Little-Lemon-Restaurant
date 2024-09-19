import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import Booking from './Booking';
import BookingForm from './BookingForm';
import { fetchAPI } from './localStorageAPI';

jest.mock('./localStorageAPI', () => ({
  fetchAPI: jest.fn().mockResolvedValue(["17:00", "18:00"]), // Mock return values
  store: jest.fn(),
  submitApi: jest.fn().mockResolvedValue(true),
}));

describe('Booking Component', () => {
  test('renders Booking page', () => {
    render(
      <MemoryRouter>
        <Booking />
      </MemoryRouter>
    );
    const bookingHeader = screen.getByText(/booking/i);
    expect(bookingHeader).toBeInTheDocument();
  });

  test('renders static text for date label', () => {
    render(
      <MemoryRouter>
        <BookingForm availableTimes={[]} updateAvailableTimes={() => {}} submitForm={() => {}} />
      </MemoryRouter>
    );
    
    const dateLabel = screen.getByLabelText(/select date/i);
    expect(dateLabel).toBeInTheDocument();
  });

  test('dispatches updateAvailableTimes action on date change', () => {
    const mockUpdateAvailableTimes = jest.fn();
    render(
      <MemoryRouter>
        <BookingForm availableTimes={["17:00", "18:00"]} updateAvailableTimes={mockUpdateAvailableTimes} submitForm={() => {}} />
      </MemoryRouter>
    );

    const dateInput = screen.getByLabelText(/select date/i);
    fireEvent.change(dateInput, { target: { value: '2024-09-18' } });
    expect(mockUpdateAvailableTimes).toHaveBeenCalledWith('2024-09-18');
  });

  test('can submit the form', () => {
    const mockSubmit = jest.fn();
    render(
      <MemoryRouter>
        <BookingForm 
          availableTimes={["17:00", "18:00"]} 
          updateAvailableTimes={() => {}} 
          submitForm={mockSubmit} 
        />
      </MemoryRouter>
    );
  
    fireEvent.change(screen.getByLabelText(/select date/i), { target: { value: '2024-09-18' } });
    fireEvent.change(screen.getByLabelText(/select time/i), { target: { value: '17:00' } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: 2 } });
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Birthday' } });
  
    // Directly submit the form without relying on getByRole
    fireEvent.submit(screen.getByRole('button', { name: /submit/i }).closest('form')); 
  
    expect(mockSubmit).toHaveBeenCalledWith({
      date: '2024-09-18',
      time: '17:00',
      guests: 2,
      occasion: 'Birthday',
    });
  });
});