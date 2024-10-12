import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { useNavigate } from 'react-router-dom';

const MenuNav = () => {

  const navigate = useNavigate(); 

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button id="hamburgerButtom" variant="contained" {...bindTrigger(popupState)}>
            <div className="hamburger"></div>
          </Button>
          <Menu id="menu" {...bindMenu(popupState)}>
            <MenuItem onClick={() => { navigate('/'); popupState.close(); }}>
              Home
            </MenuItem>
            <MenuItem onClick={() => { navigate('/destination'); popupState.close(); }}>
              Destination
            </MenuItem>
            <MenuItem onClick={() => { navigate('/crew'); popupState.close(); }}>
              Crew
            </MenuItem>
            <MenuItem onClick={() => { navigate('/technology'); popupState.close(); }}>
              Technology
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}

export { MenuNav };