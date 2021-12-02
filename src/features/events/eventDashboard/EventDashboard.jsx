import React from "react";
import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import { useSelector } from "react-redux";

const EventDashboard = () => {
  const {events} = useSelector(state => state.event);

  // const handleCreateEvent = (event) => {
  //   setEvents([...events, event]);
  // };

  // const handleUpdateEvent = (updatedEvent) => {
  //   setEvents(
  //     events.map((evt) => (evt.id === updatedEvent.id ? updatedEvent : evt))
  //   );
  //   // handleSelectEvent(null);
  // };

  const handleDeleteEvent = (eventId) => {
    // setEvents(events.filter((evt) => evt.id !== eventId));
  };

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList
          events={events}
          handleDeleteEvent={handleDeleteEvent}
        />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Event Filters</h2>
      </Grid.Column>
    </Grid>
  );
};

export default EventDashboard;
