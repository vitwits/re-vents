import { useState } from "react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar";
import { Container } from "semantic-ui-react";
import { Route } from "react-router";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";
import HomePage from "../../features/home/HomePage";

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setFormOpen(true);
  };

  const handleCreateFormOpen = () => {
    setSelectedEvent(null);
    setFormOpen(true);
  };

  return (
    <>
      <Route exact path='/' component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar handleCreateFormOpen={handleCreateFormOpen} />
            <Container className='main'>
              <Route exact path='/events' component={EventDashboard} />
              <Route path='/events/:id' component={EventDetailedPage} />
              <Route path='/createEvent' component={EventForm} />

              {/* <EventDashboard
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          handleSelectEvent={handleSelectEvent}
          selectedEvent={selectedEvent}
        /> */}
            </Container>
          </>
        )}
      />
    </>
  );
}

export default App;
