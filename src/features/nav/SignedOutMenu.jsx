import React from 'react'
import { Button, Menu } from "semantic-ui-react";

const SignedOutMenu = () => {
  return (
      <Menu.Item position='right'>
          <Button basic inverted content='Login' />
          <Button
            basic
            inverted
            content='Regisgter'
            style={{ marginLeft: "0.5em" }}
          />
        </Menu.Item>
  )
}

export default SignedOutMenu
