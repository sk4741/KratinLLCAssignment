import React from 'react';
import image1 from "./images/parkpicnic.jpg";
import image2 from "./images/dancinfnight.jpg";
import image3 from "./images/boardgame.jpg";

const EventReminders = () => {
  const events = [
    {
      id: 1,
      title: 'Picnic in the Park',
      date: 'June 20, 2023',
      imageUrl: image1,
    },
    {
      id: 2,
      title: 'Dancing Night',
      date: 'July 5, 2023',
      imageUrl: image2,
    },
    {
      id: 3,
      title: 'Board Game Gathering',
      date: 'August 12, 2023',
      imageUrl: image3,
    },
  ];

  return (
    <div className="container mt-3 mb-3 bg-warning bg-gradient card pt-1">
      <h2 className="mb-4">Upcoming Events</h2>
      <div className="row">
        {events.map((event) => (
          <div key={event.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={event.imageUrl} className="card-img-top" alt={event.title} />
              <div className="card-body">
                <h5 className="card-title">{event.title}</h5>
                <p className="card-text">Date: {event.date}</p>
                <a href="/register" className="btn btn-primary">RSVP</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventReminders;
