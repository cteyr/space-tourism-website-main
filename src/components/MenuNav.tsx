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
              <p id="optionMenu">Home</p>
            </MenuItem>
            <MenuItem onClick={() => { navigate('/destination'); popupState.close(); }}>
              <p id="optionMenu">Destination</p>
            </MenuItem>
            <MenuItem onClick={() => { navigate('/crew'); popupState.close(); }}>
            <p id="optionMenu">Crew</p>
            </MenuItem>
            <MenuItem onClick={() => { navigate('/technology'); popupState.close(); }}>
              <p id="optionMenu">Technology</p>
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}

export { MenuNav };