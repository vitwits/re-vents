import React from "react";
import EventListItem from "./EventListItem";

const EventList = ({ events, handleSelectEvent }) => {
  return (
    <>
      {events.map((event) => (
        <EventListItem
          event={event}
          key={event.id}
          handleSelectEvent={handleSelectEvent}
        />
      ))}
    </>
  );
};

export default EventList;
