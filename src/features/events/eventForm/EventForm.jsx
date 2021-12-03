import cuid from "cuid";
import React, { useState } from "react";
import { Form, Header, Segment, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createEvent, updateEvent } from "../eventActions";

const EventForm = ({ match, history }) => {
  const dispatch = useDispatch();
  const selectedEvent = useSelector((state) =>
    state.event.events.find((evt) => evt.id === match.params.id)
  );

  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleFormSubmit = () => {
    selectedEvent
      ? dispatch(updateEvent({ ...selectedEvent, ...values }))
      : dispatch(
          createEvent({
            ...values,
            id: cuid(),
            hostedBy: "Bob",
            attendees: [],
            hostPhotoURL: "/assets/user.png",
          })
        );
    history.push("/events");
  };

  return (
    <Segment clearing>
      <Header content={selectedEvent ? "Edit the event" : "Create new event"} />
      <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <input
            type='text'
            name='title'
            placeholder='Event title'
            value={values.title}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            name='category'
            placeholder='Category'
            value={values.category}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            name='description'
            placeholder='Description'
            value={values.description}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            name='city'
            placeholder='City'
            value={values.city}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            name='venue'
            placeholder='Venue'
            value={values.venue}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='date'
            name='date'
            placeholder='Date'
            value={values.date}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Button type='submit' floated='right' content='Submit' positive />
        <Button
          type='submit'
          floated='right'
          content='Cancel'
          as={Link}
          to='/events'
        />
      </Form>
    </Segment>
  );
};

export default EventForm;
