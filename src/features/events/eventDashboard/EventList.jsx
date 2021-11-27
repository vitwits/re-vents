import React from "react";
import EventListItem from "./EventListItem";

const EventList = ({ events, handleSelectEvent, handleDeleteEvent }) => {
  return (
    <>
      {events.map((event) => (
        <EventListItem
          event={event}
          key={event.id}
          handleSelectEvent={handleSelectEvent}
          handleDeleteEvent={handleDeleteEvent}
        />
      ))}
    </>
  );
};

export default EventList;
