import { useState } from "react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar";
import { Container } from "semantic-ui-react";
import { Route, Routes } from "react-router";
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
      <NavBar handleCreateFormOpen={handleCreateFormOpen} />
      <Container className='main'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='events' element={<EventDashboard />} />
          <Route path='events/:id' element={<EventDetailedPage />} />
          <Route path='createEvent' element={<EventForm />} />
        </Routes>
        {/* <EventDashboard
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          handleSelectEvent={handleSelectEvent}
          selectedEvent={selectedEvent}
        /> */}
      </Container>
    </>
  );
}

export default App;
