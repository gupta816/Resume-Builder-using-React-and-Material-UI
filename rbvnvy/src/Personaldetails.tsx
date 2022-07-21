import React, { useState } from "react";
import resume1 from "./resume1.png";
import resume2 from "./resume2.png";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  Grid,
  Box,
  Card,
  CardContent,
  Menu,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Radio,
  FormHelperText
} from "@material-ui/core";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import SchoolIcon from "@mui/icons-material/School";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { v4 as uuidv4 } from "uuid";
function Personaldetails() {
  const olddata = {
    template: "",
    fname: "Anakin",
    lname: "Skywalker",
    email: "example@xyz.com",
    linkedin: "linkedin/anakin",
    phone: "+9192929393939",

    address: "New delhi",
    companies: [
      {
        id: "1",
        cname: "Company XYZ",
        designation: "Associate FullStack XYZ developer",
        roles:
          "lnbd  dnb dshan asnm  ds ns  sdns dn dn dn nds nd ns dndn ms, sc sm s d dn snd sdnms asm asd mas snm dnm ndasm dms n snsnnmsns sns dsn nsd nmsd snm dnm dn dsnm s nmdas sn sn dmd nmsd nm sn snds mn asnd nmsd ds nmsddsn"
      }
    ],
    education: [
      {
        id1: "1",
        college: "XYZ . MNO college of science and technology ",
        from: "2000",
        to: "2004",
        branch: "XYZ in vdjbnh shs s shjj",
        cgpa: "10"
      }
    ]
  };
  const [data, setData] = useState(olddata);
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((previousState) => ({ ...previousState, [name]: value }));
  };

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    event.preventDefault();
    setActiveStep(activeStep + 1);
    if (activeStep == 4) {
      setActiveStep(0);
      getStepContent(activeStep);
      setData(olddata);
    }
  };

  const handlePrev = () => {
    event.preventDefault();
    setActiveStep(activeStep - 1);
  };

  const handleChangeInput = (id, event) => {
    const newCompanies = data.companies.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });
    setData((prevState) => ({
      ...prevState,
      companies: newCompanies
    }));
  };
  const handleAddFields = () => {
    setData((prevState) => ({
      ...prevState,
      companies: [
        ...prevState.companies,
        {
          id: uuidv4()
        }
      ]
    }));
  };

  const handleRemoveFields = (id) => {
    const values = [...data.companies];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setData((prevState) => ({
      ...prevState,
      companies: values
    }));
  };
  const handleChangeInputEdu = (id, event) => {
    const newEducation = data.education.map((i) => {
      if (id === i.id1) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });
    setData((prevState) => ({
      ...prevState,
      education: newEducation
    }));
  };
  const handleAddFieldsEdu = () => {
    setData((prevState) => ({
      ...prevState,
      education: [
        ...prevState.education,
        {
          id1: uuidv4()
        }
      ]
    }));
  };
  const handleRemoveFieldsEdu = (id) => {
    const valuesE = [...data.education];
    valuesE.splice(
      valuesE.findIndex((valueE) => valueE.id1 === id),
      1
    );
    setData((prevState) => ({
      ...prevState,
      education: valuesE
    }));
  };
  const [errorState, setErrorState] = useState({
    fname: { error: false, msg: "" },
    lname: { error: false, msg: "" }
  });

  const validate = (values) => {
    // const errors = {
    //   fname: { error: false, msg: "" },
    //   lname: { error: false, msg: "" }
    // };
    var errorExist = false;
    if (values.fname == "Anakin" || values.fname.length == 0) {
      //error.fname = { error: true, msg: "Enter First name" };
      setErrorState({
        ...errorState,
        fname: { error: true, msg: "Enter First name" }
      });
      errorExist = true;
    }
    if (values.lname == "Skywalker" || values.lname.length == 0) {
      //errors.lname = { error: true, msg: "Enter Last name" };
      setErrorState({
        ...errorState,
        lname: { error: true, msg: "Enter last name" }
      });
      errorExist = true;
    }
    //console.log(errors);
    return errorExist;
  };
  const handleClick = (e) => {
    if (!validate(data)) {
      handleNext();
    }
  };

  function getResume(template) {
    if (template == "template1")
      return (
        <>
          <Card
            style={{
              width: 550,
              height: 670,
              padding: "20px 5px",
              float: "left",
              backgroundColor: "#edf779",
              borderRadius: "10px"
            }}
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                height: "60px",
                justifyContent: "space-between",
                margin: "0px 30px 1px 30px"
              }}
            >
              <h1
                style={{
                  color: "#4d5452"
                }}
              >
                {data.fname + " "}
                {data.lname}
              </h1>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  padding: "85px 0px 0px 0px"
                }}
              >
                <LocationOnIcon />
                <span> {data.address}</span>
              </div>
            </Box>
            <br />
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                height: "65px",
                justifyContent: "space-between",
                width: "80%",
                margin: "-15px 30px 10px 30px"
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap"
                }}
              >
                <MailOutlineIcon />
                &nbsp;&nbsp;{" "}
                <a href={"mailto:" + data.email} target="_blank">
                  {data.email}
                </a>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap"
                }}
              >
                <PhoneIcon /> &nbsp;
                <span>{data.phone}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap"
                }}
              >
                <LinkedInIcon />
                &nbsp;&nbsp;
                <a href={data.linkedin}>{data.linkedin}</a>
              </div>
            </Box>
            <br />
            <hr color="gray" />
            <Box
              style={{
                margin: "10px 30px 20px 30px"
              }}
            >
              <Box
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  height: "40px"
                }}
              >
                <SchoolIcon /> &nbsp;
                <h2> Education</h2>
              </Box>
              <ul>
                {data.education.map((curr) => {
                  return (
                    <li>
                      <Grid xs={12} item style={{ margin: "0px 0px 3px 0px" }}>
                        <strong>{curr.college}</strong>
                      </Grid>
                      <Grid xs={12} item style={{ margin: "0px 0px 3px 0px" }}>
                        <i>
                          {curr.from} {curr.to}
                        </i>
                      </Grid>

                      <Grid xs={12} item style={{ margin: "0px 0px 3px 0px" }}>
                        <div> {curr.branch}</div>
                      </Grid>
                      <Grid xs={12} item>
                        <div> CGPA: {curr.cgpa}</div>
                      </Grid>
                    </li>
                  );
                })}
              </ul>
            </Box>
            <hr color="gray" />

            <Box
              style={{
                margin: "0px 30px 0px 30px"
              }}
            >
              <Box
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  height: "40px"
                }}
              >
                <WorkOutlineIcon /> &nbsp;
                <h2>Professional Experience</h2>
              </Box>
              <ul>
                {data.companies.map((curr) => {
                  return (
                    <li>
                      <Grid xs={12} item style={{ margin: "0px 0px 3px 0px" }}>
                        <strong>{curr.cname}</strong>
                      </Grid>
                      <Grid xs={12} item style={{ margin: "0px 0px 3px 0px" }}>
                        <i>{curr.designation}</i>
                      </Grid>

                      <Grid xs={12} item>
                        <div> {curr.roles}</div>
                      </Grid>
                    </li>
                  );
                })}
              </ul>
            </Box>
          </Card>
        </>
      );
    else {
      return (
        <>
          <Card
            style={{
              width: 550,
              height: 670,
              padding: "20px 5px",
              float: "left",

              borderRadius: "5px"
            }}
          >
            <Box
              style={{
                display: "flex",
                justifyContent: "center"
              }}
            >
              <h1
                style={{
                  fontFamily: "Lucida Console",
                  color: "#706f6b"
                }}
              >
                {data.fname + " "}
                {data.lname}
              </h1>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "-14px 0px 0px 0px"
              }}
            >
              <Box>{data.email}</Box>
              <Box>{data.phone}</Box>
              <Box>{data.address}</Box>
            </Box>
            <Box
              style={{
                backgroundColor: "#fcd772",
                padding: "0px 20px 0px 20px"
              }}
            >
              <h4
                style={{
                  fontFamily: "Lucida Console"
                }}
              >
                EDUCATION
              </h4>
            </Box>
            <ul>
              {data.education.map((curr) => {
                return (
                  <li>
                    <Grid xs={12} item>
                      <strong>{curr.college}</strong>
                    </Grid>
                    <Grid xs={12} item>
                      <i>
                        {curr.from}-{curr.to}
                      </i>
                    </Grid>

                    <Grid xs={12} item>
                      <div> {curr.branch}</div>
                    </Grid>
                    <Grid xs={12} item>
                      <div> C.G.P.A: {curr.cgpa}</div>
                    </Grid>
                  </li>
                );
              })}
            </ul>

            <Box>
              <Box
                style={{
                  backgroundColor: "#fcd772",
                  padding: "0px 20px 0px 20px",
                  margin: "0px 0px -20px 0px"
                }}
              >
                <h4
                  style={{
                    fontFamily: "Lucida Console"
                  }}
                >
                  PROFESSIONAL EXPERIENCE
                </h4>
              </Box>

              {data.companies.map((curr) => {
                return (
                  <Box
                    style={{
                      display: "flex"
                    }}
                  >
                    <Box
                      style={{
                        width: "200px",
                        height: "100px",
                        padding: "0px 0px 0px 20px"
                      }}
                    >
                      <h5
                        style={{
                          fontFamily: "Verdana"
                        }}
                      >
                        {curr.cname}
                      </h5>
                      {curr.designation}
                    </Box>
                    <Box
                      style={{
                        width: "350px",
                        height: "100px",
                        padding: "0px 20px 0px 0px"
                      }}
                    >
                      <p>{curr.roles}</p>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Card>
        </>
      );
    }
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <>
            {getResume(data.template)}
            <Grid>
              <Card
                style={{
                  width: 650,
                  padding: "20px 5px",
                  margin: "0px auto",
                  backgroundColor: "cornsilk",
                  borderRadius: "10px"
                }}
              >
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Select Resume Template
                  </Typography>
                  <Grid container spacing={1}>
                    <Grid item xs={12} sm={6}>
                      <Button>
                        <img
                          src={resume1}
                          style={{
                            width: "200px",
                            height: "300px"
                          }}
                        />
                        <Radio
                          name="template"
                          value="template1"
                          color="primary"
                          onChange={handleInput}
                          checked={data.template === "template1"}
                        />
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Button>
                        <img
                          src={resume2}
                          style={{
                            width: "200px",
                            height: "300px"
                          }}
                        />
                        <Radio
                          name="template"
                          value="template2"
                          color="primary"
                          onChange={handleInput}
                          checked={data.template === "template2"}
                        />
                      </Button>
                    </Grid>
                  </Grid>
                  <br />
                  <br />

                  <Grid item xs={12} sm={6}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="secondary"
                      onClick={handleNext}
                    >
                      {activeStep === 3 ? "Finish" : "Next"}
                    </Button>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </>
        );
      case 1:
        return (
          <>
            {getResume(data.template)}
            <Grid>
              <Card
                style={{
                  width: 650,
                  padding: "20px 5px",
                  float: "right",
                  backgroundColor: "cornsilk",
                  borderRadius: "10px"
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
                          name="fname"
                          onChange={handleInput}
                          placeholder="Enter first name"
                          label="First Name"
                          variant="outlined"
                          fullWidth
                          required
                        />
                        {errorState.fname.error == true ? (
                          <p style={{ color: "red" }}>{errorState.fname.msg}</p>
                        ) : (
                          <></>
                        )}
                      </Grid>

                      <Grid xs={12} sm={6} item>
                        <TextField
                          name="lname"
                          onChange={handleInput}
                          placeholder="Enter last name"
                          label="Last Name"
                          variant="outlined"
                          fullWidth
                          required
                        />
                        {errorState.lname.error == true ? (
                          <p style={{ color: "red" }}>{errorState.lname.msg}</p>
                        ) : (
                          <></>
                        )}
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          name="email"
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
                          name="linkedin"
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
                          name="phone"
                          onChange={handleInput}
                          type="text"
                          placeholder="Enter phone number"
                          label="Phone"
                          variant="outlined"
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          name="address"
                          onChange={handleInput}
                          type="text"
                          placeholder="Enter City"
                          label="City"
                          variant="outlined"
                          fullWidth
                          required
                        />
                      </Grid>
                      <br />
                      <br />
                      <br />
                      <br />

                      <Grid item xs={12} sm={6}>
                        <Button
                          type="submit"
                          variant="outlined"
                          color="secondary"
                          onClick={handlePrev}
                          style={{ margin: "0px 20px 0px 0px" }}
                          disabled={activeStep === 0}
                        >
                          Prev
                        </Button>
                        <Button
                          type="submit"
                          variant="contained"
                          color="secondary"
                          onClick={handleClick}
                        >
                          {activeStep === 3 ? "Finish" : "Next"}
                        </Button>
                      </Grid>
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
            {getResume(data.template)}

            <Grid>
              <Card
                style={{
                  maxWidth: 650,
                  padding: "20px 5px",
                  margin: "0 auto",
                  backgroundColor: "cornsilk",
                  borderRadius: "10px"
                }}
              >
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Education Details
                  </Typography>
                  <form>
                    {data.education.map((edu) => (
                      <>
                        <Box
                          key={edu.id1}
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                            width: "80%"
                          }}
                        >
                          <Box
                            style={{
                              flexBasis: "100%",
                              height: 0,
                              flexGrow: 1
                            }}
                          >
                            <FormControl fullWidth>
                              <InputLabel>College Name</InputLabel>

                              <Select
                                name="college"
                                value={data.education.college}
                                sx={{ width: "500px" }}
                                onChange={(event) =>
                                  handleChangeInputEdu(edu.id1, event)
                                }
                              >
                                <MenuItem value="" disabled>
                                  <em>Select</em>
                                </MenuItem>
                                <MenuItem value="University School of Information Technology">
                                  University School of Information Technology
                                </MenuItem>
                                <MenuItem value="Maharaja Agrasen Institute of Technology">
                                  Maharaja Agrasen Institute of Technology
                                </MenuItem>
                                <MenuItem value="Maharaja Agrasen Institute of Technology">
                                  Maharaja Agrasen Institute of Technology
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </Box>
                          <br />
                          <br />
                          <br />
                          <br />
                          <Box
                            style={{
                              flexGrow: 1
                            }}
                          >
                            <TextField
                              name="from"
                              label="From"
                              variant="outlined"
                              type="number"
                              defaultValue=""
                              onChange={(event) =>
                                handleChangeInputEdu(edu.id1, event)
                              }
                            />
                          </Box>
                          &nbsp;
                          <Box
                            style={{
                              flexGrow: 1
                            }}
                          >
                            <TextField
                              name="to"
                              label="to"
                              variant="outlined"
                              type="number"
                              defaultValue=""
                              onChange={(event) =>
                                handleChangeInputEdu(edu.id1, event)
                              }
                            />
                          </Box>
                          &nbsp;
                          <Box
                            style={{
                              flexGrow: 1
                            }}
                          >
                            <TextField
                              style={{ margin: "20px 0px 0px 0px" }}
                              name="branch"
                              label="branch"
                              variant="outlined"
                              defaultValue=""
                              onChange={(event) =>
                                handleChangeInputEdu(edu.id1, event)
                              }
                            />
                          </Box>
                          &nbsp;
                          <Box
                            style={{
                              flexGrow: 1
                            }}
                          >
                            <TextField
                              style={{ margin: "20px 0px 0px 0px" }}
                              name="cgpa"
                              label="cgpa"
                              variant="outlined"
                              type="number"
                              defaultValue=""
                              onChange={(event) =>
                                handleChangeInputEdu(edu.id1, event)
                              }
                            />
                          </Box>
                        </Box>
                        <IconButton
                          disabled={data.education.length === 1}
                          onClick={() => handleRemoveFieldsEdu(edu.id1)}
                        >
                          <RemoveIcon />
                        </IconButton>
                        <IconButton
                          disabled={data.education.length == 3}
                          onClick={handleAddFieldsEdu}
                        >
                          <AddIcon />
                        </IconButton>
                      </>
                    ))}
                    <br />
                    <Grid item xs={12} sm={6}>
                      <Button
                        type="submit"
                        variant="outlined"
                        color="secondary"
                        onClick={handlePrev}
                        style={{ margin: "0px 20px 0px 0px" }}
                        disabled={activeStep === 0}
                      >
                        Prev
                      </Button>

                      <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        onClick={handleNext}
                      >
                        {activeStep === 3 ? "Finish" : "Next"}
                      </Button>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </Grid>
          </>
        );

      case 3:
        return (
          <>
            {getResume(data.template)}
            <Grid>
              <Card
                style={{
                  maxWidth: 650,
                  padding: "20px 5px",
                  margin: "0 auto",
                  backgroundColor: "cornsilk",
                  borderRadius: "10px"
                }}
              >
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Experiences
                  </Typography>
                  <form>
                    {data.companies.map((company) => (
                      <>
                        <Box
                          key={company.id}
                          style={{
                            display: "flex",
                            justifyContent: "space-between"
                          }}
                        >
                          <Box>
                            <TextField
                              style={{ margin: "20px 0px 0px 0px" }}
                              name="cname"
                              label="Company name"
                              variant="outlined"
                              defaultValue=""
                              onChange={(event) =>
                                handleChangeInput(company.id, event)
                              }
                            />
                          </Box>
                          &nbsp;
                          <Box>
                            <TextField
                              style={{ margin: "20px 0px 0px 0px" }}
                              name="designation"
                              label="Designation"
                              variant="outlined"
                              defaultValue=""
                              onChange={(event) =>
                                handleChangeInput(company.id, event)
                              }
                            />
                          </Box>
                          &nbsp;
                          <Box>
                            <TextField
                              style={{ margin: "20px 0px 0px 0px" }}
                              name="roles"
                              label="Expereinces"
                              variant="outlined"
                              multiline={true}
                              defaultValue=""
                              onChange={(event) =>
                                handleChangeInput(company.id, event)
                              }
                            />
                          </Box>
                        </Box>
                        <IconButton
                          disabled={data.companies.length === 1}
                          onClick={() => handleRemoveFields(company.id)}
                        >
                          <RemoveIcon />
                        </IconButton>
                        <IconButton
                          disabled={data.companies.length == 3}
                          onClick={handleAddFields}
                        >
                          <AddIcon />
                        </IconButton>
                      </>
                    ))}

                    <br />

                    <Grid item xs={12} sm={6}>
                      <Button
                        type="submit"
                        variant="outlined"
                        color="secondary"
                        onClick={handlePrev}
                        style={{ margin: "0px 20px 0px 0px" }}
                        disabled={activeStep === 0}
                      >
                        Prev
                      </Button>

                      <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        onClick={handleNext}
                      >
                        {activeStep === 3 ? "Finish" : "Next"}
                      </Button>
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
          <StepLabel>Select Your Resume</StepLabel>
        </Step>
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

      {activeStep === 4 ? (
        <>
          {console.log(data)}
          {getResume(data.template)}
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "150px 0px 0px 0px"
            }}
          >
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              onClick={handleNext}
            >
              Reset
            </Button>
          </Box>
        </>
      ) : (
        getStepContent(activeStep)
      )}
    </div>
  );
}
export default Personaldetails;
