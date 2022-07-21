import React, { useState } from "react";

import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  Grid,
  Card,
  CardContent,
  Menu,
  MenuItem
} from "@material-ui/core";

function FormAdv() {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    linkedin: "",
    template: "",
    college: "",
    branch: "",
    from: "",
    to: "",
    skills: "",
    phone: "",
    cgpa: "",
    companyName: "",
    designation: "",
    roles: ""
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const handlePrev = () => {
    setActiveStep(activeStep - 1);
  };
  const [menuOpen, setMenuOpen] = useState(null);

  const handleMenuOpen = (e) => {
    setMenuOpen(e.currentTarget);
  };
  const handleMenuClose = () => {
    setMenuOpen(null);
  };
  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <>
            <Grid>
              <Card
                style={{
                  maxWidth: 650,
                  padding: "20px 5px",
                  margin: "0 auto",
                  backgroundColor: "cornsilk",
                  borderRadius: "30px"
                }}
              >
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Personal Details
                  </Typography>
                  <form>
                    <Grid container spacing={1}>
                      <Grid xs={12} sm={6} item>
                        <TextField
                          defaultValue={data.fname}
                          onChange={handleInput}
                          placeholder="Enter first name"
                          label="First Name"
                          variant="outlined"
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid xs={12} sm={6} item>
                        <TextField
                          defaultValue={data.lname}
                          onChange={handleInput}
                          placeholder="Enter last name"
                          label="Last Name"
                          variant="outlined"
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          defaultValue={data.email}
                          onChange={handleInput}
                          type="email"
                          placeholder="Enter email"
                          label="Email"
                          variant="outlined"
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          defaultValue={data.linkedin}
                          onChange={handleInput}
                          type="text"
                          placeholder="Enter linkedIn"
                          label="Linkedin"
                          variant="outlined"
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          defaultValue={data.phone}
                          onChange={handleInput}
                          type="text"
                          placeholder="Enter phone number"
                          label="Phone"
                          variant="outlined"
                          fullWidth
                          required
                        />
                      </Grid>
                      <br />
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="secondary"
                          fullWidth
                          onClick={handlePrev}
                          disabled={activeStep === 0}
                        >
                          Prev
                        </Button>
                        <br />
                        <Button
                          type="submit"
                          variant="contained"
                          color="secondary"
                          fullWidth
                          onClick={handleNext}
                        >
                          {activeStep === 2 ? "Finish" : "Next"}
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </Grid>
          </>
        );
      case 1:
        return (
          <>
            <Grid>
              <Card
                style={{
                  maxWidth: 650,
                  padding: "20px 5px",
                  margin: "0 auto",
                  backgroundColor: "cornsilk",
                  borderRadius: "30px"
                }}
              >
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Education
                  </Typography>
                  <form>
                    <Grid item xs={12}>
                      <TextField
                        defaultValue={data.branch}
                        onChange={handleInput}
                        label="Branch"
                        multiline
                        rows={2}
                        placeholder="Enter Course Name"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        defaultValue={data.cgpa}
                        onChange={handleInput}
                        type="number"
                        placeholder="Enter CGPA"
                        label="CGPA"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <br />

                    <Grid item xs={12}>
                      <Button
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        color="primary"
                        variant="contained"
                        onClick={handleMenuOpen}
                      >
                        Select College
                      </Button>
                      <Menu
                        open={Boolean(menuOpen)}
                        anchorEl={menuOpen}
                        onClose={handleMenuClose}
                      >
                        <MenuItem onClick={handleMenuClose}>USICT</MenuItem>
                        <MenuItem onClick={handleMenuClose}>MAIT</MenuItem>
                        <MenuItem onClick={handleMenuClose}>MSIT</MenuItem>
                      </Menu>
                    </Grid>
                    <br />
                    <Grid item xs={12}>
                      <TextField
                        defaultValue={data.from}
                        onChange={handleInput}
                        type="number"
                        placeholder="Attended From"
                        label="Attended From"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        defaultValue={data.to}
                        onChange={handleInput}
                        type="number"
                        placeholder="Attended To"
                        label="Attended To"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <br />

                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        fullWidth
                        onClick={handlePrev}
                        disabled={activeStep === 0}
                      >
                        Prev
                      </Button>
                      <br />
                      <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        fullWidth
                        onClick={handleNext}
                      >
                        {activeStep === 2 ? "Finish" : "Next"}
                      </Button>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </Grid>
          </>
        );

      case 2:
        return (
          <>
            <Grid>
              <Card
                style={{
                  maxWidth: 650,
                  padding: "20px 5px",
                  margin: "0 auto",
                  backgroundColor: "cornsilk",
                  borderRadius: "30px"
                }}
              >
                <CardContent>
                  <h3>Add Experiences</h3>
                  <form>
                    <Grid container spacing={1}>
                      <Grid xs={12} sm={6} item>
                        <TextField
                          defaultValue={data.companyName}
                          onChange={handleInput}
                          placeholder="Enter Company name"
                          label="Company Name"
                          variant="outlined"
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid xs={12} sm={6} item>
                        <TextField
                          defaultValue={data.designation}
                          onChange={handleInput}
                          placeholder="Enter your designation "
                          label="Designation"
                          variant="outlined"
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid xs={12} item>
                        <TextField
                          defaultValue={data.roles}
                          onChange={handleInput}
                          placeholder="Enter your roles "
                          label="Roles"
                          variant="outlined"
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="secondary"
                          fullWidth
                          onClick={handlePrev}
                          disabled={activeStep === 0}
                        >
                          Prev
                        </Button>
                        <br />
                        <Button
                          type="submit"
                          variant="contained"
                          color="secondary"
                          fullWidth
                          onClick={handleNext}
                        >
                          {activeStep === 2 ? "Finish" : "Next"}
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </Grid>
          </>
        );
    }
  }

  return (
    <div>
      {/* this activeStep tells which step is active in 0 based indexing */}
      <Stepper activeStep={activeStep}>
        <Step>
          <StepLabel>Personal Details</StepLabel>
        </Step>
        <Step>
          <StepLabel>Education</StepLabel>
        </Step>
        <Step>
          <StepLabel>Experience</StepLabel>
        </Step>
      </Stepper>

      {activeStep === 3 ? (
        <Typography variant="h2" align="center">
          {" "}
          Resume Generated
        </Typography>
      ) : (
        getStepContent(activeStep)
      )}
    </div>
  );
}
export default FormAdv;
