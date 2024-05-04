import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { Grid, Typography } from "@mui/material";

interface HeaderProps {
  title: string;
  toggle: () => void;
  showAddTask: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, toggle, showAddTask }) => {
  return (
    <Grid container className="header">
      <Grid item md={12}>
        <Typography variant="h3" sx={{fontWeight:'bold'}}>{title}</Typography>
      </Grid>
      <Grid item md={12}>
        <Button
          color={showAddTask ? "red" : "green"}
          text={showAddTask ? "Close" : "Add"}
          toggleAddTask={toggle}
        />
      </Grid>
    </Grid>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
