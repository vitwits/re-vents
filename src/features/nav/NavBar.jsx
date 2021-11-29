import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";
import SignedOutMenu from "./SignedOutMenu";
import SignedInMenu from "./SignedInMenu";

const NavBar = ({ handleCreateFormOpen }) => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item as={NavLink} to='/' header>
          <img
            src='/assets/logo.png'
            alt='logo'
            style={{ marginRight: "1.5em" }}
          />
          Re-vents
        </Menu.Item>
        <Menu.Item as={NavLink} to='/events' name='Events' />
        {authenticated && 
        <Menu.Item as={NavLink} to='/createEvent'>
          <Button positive inverted content='Create Event' />
        </Menu.Item>}
        {authenticated ? <SignedInMenu setAuthenticated={setAuthenticated} /> : <SignedOutMenu setAuthenticated={setAuthenticated} />}
        
        
      </Container>
    </Menu>
  );
};

export default NavBar;
