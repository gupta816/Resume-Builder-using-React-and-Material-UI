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
function Temp() {
  const olddata = {
    template: "",
    fname: "Anakin",
    lname: "Skywalker",
    email: "example@xyz.com",
    linkedin: "linkedin/anakin",
    phone: "+9192929393939",
    college: "XYZ . MNO college of science and technology ",
    from: "0000",
    to: "0000",
    branch: "XYZ in vdjbnh shs s shjj",
    cgpa: "10",
    address: "New delhi"
  };
  const [data, setData] = useState(olddata);
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((previousState) => ({ ...previousState, [name]: value }));

    console.log(data);
  };

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    if (activeStep == 4) {
      setActiveStep(0);
      getStepContent(activeStep);
      setData(olddata);
    }
  };

  const handlePrev = () => {
    setActiveStep(activeStep - 1);
  };
  const [inputFields, setInputFields] = useState([
    {
      id: "1",
      cname: "Company XYZ",
      designation: "Associate FullStack XYZ developer",
      roles:
        "lnbd  dnb dshan asnm  ds ns  sdns dn dn dn nds nd ns dndn ms, sc sm s d dn snd sdnms asm asd mas snm dnm ndasm dms n snsnnmsns sns dsn nsd nmsd snm dnm dn dsnm s nmdas sn sn dmd nmsd nm sn snds mn asnd nmsd ds nmsddsn"
    }
  ]);
  const handleChangeInput = (id, event) => {
    const newCompanies = data.companies.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });
    setData((prevState) => ({
      ...prevState,
      [prevState.companies]: newCompanies
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
      companies: [...prevState.companies, values]
    }));
  };
  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);
  };
  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      { id: uuidv4(), firstName: "", lastName: "" }
    ]);
  };

  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
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
    debugger;
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
              height: 570,
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
                margin: "0px 30px 0px 30px"
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
                  maxWidth: "140px",
                  height: "66px",
                  margin: "23px 0px 0px 0px"
                }}
              >
                <LocationOnIcon />
                {data.address}
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
                margin: "-15px 30px 0px 30px"
              }}
            >
              <div>
                <MailOutlineIcon fontSize="string" />{" "}
                <a href={"mailto:" + data.email} target="_blank">
                  {data.email}
                </a>
              </div>

              <div>
                <PhoneIcon fontSize="string" /> {data.phone}
              </div>
              <div>
                <LinkedInIcon fontSize="string" />{" "}
                <a href={data.linkedin}>{data.linkedin}</a>
              </div>
            </Box>
            <br />
            <hr color="gray" />
            <Box
              style={{
                margin: "0px 30px 0px 30px"
              }}
            >
              <h2>
                <SchoolIcon fontSize="string" /> Education
              </h2>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between"
                }}
              >
                <div>
                  <strong>{data.college}</strong>
                </div>
                <div>
                  <strong>
                    {data.from + "-"}
                    {data.to}
                  </strong>
                </div>
              </Box>

              <div>{data.branch}</div>
              <div>CGPA:{data.cgpa}</div>
            </Box>
            <hr color="gray" />

            <Box
              style={{
                margin: "0px 30px 0px 30px"
              }}
            >
              <h2>
                <WorkOutlineIcon fontSize="string" />
                {"  "}
                Professional Experience
              </h2>
              <ul>
                {inputFields.map((curr) => {
                  return (
                    <li>
                      <Grid xs={12} item>
                        <strong>{curr.cname}</strong>
                      </Grid>
                      <Grid xs={12} item>
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

            <Box>
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
                  PROFESSIONAL EXPERIENCE
                </h4>
              </Box>

              {inputFields.map((curr) => {
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
            <Box
              style={{
                display: "flex",
                margin: "-20px 0px 0px 0px",
                justifyContent: "space-between"
              }}
            >
              <Box
                style={{
                  padding: "0px 0px 0px 20px"
                }}
              >
                <h5 style={{ fontFamily: "Verdana" }}>{data.college}</h5>
              </Box>
              <Box
                style={{
                  padding: "0px 20px 0px 0px"
                }}
              >
                <Box
                  style={{
                    padding: "0px 0px 0px 20px"
                  }}
                >
                  <h5 style={{ fontFamily: "Garamond" }}>
                    {data.from + "-"}
                    {data.to}
                  </h5>
                </Box>
              </Box>
            </Box>

            <Box>
              <p
                style={{
                  fontFamily: "Verdana",
                  padding: "0px 0px 0px 20px",
                  margin: "-12px 0px 0px 0px"
                }}
              >
                {data.branch}
              </p>
            </Box>
            <Box>
              <p
                style={{
                  fontFamily: "Arial",
                  padding: "0px 0px 0px 20px",
                  margin: "-2px 0px 0px 0px"
                }}
              >
                CGPA:9.7
              </p>
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
                  borderRadius: "30px"
                }}
              >
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Select Resume Template
                  </Typography>
                  <Grid container spacing={1}>
                    <Grid item xs={12} sm={6}>
                      <Button style={{ cursor: "pointer" }}>
                        <label>
                          <img
                            src={resume1}
                            style={{
                              width: "200px",
                              height: "300px",
                              cursor: "pointer"
                            }}
                          />
                          <Radio
                            name="template"
                            value="template1"
                            color="primary"
                            onChange={handleInput}
                            checked={data.template === "template1"}
                            style={{
                              visibility: "hidden"
                            }}
                          />
                        </label>
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Button style={{ cursor: "pointer" }}>
                        <label>
                          <img
                            src={resume2}
                            style={{
                              width: "200px",
                              height: "300px",
                              cursor: "pointer"
                            }}
                          />
                          <Radio
                            name="template"
                            value="template2"
                            color="primary"
                            onChange={handleInput}
                            checked={data.template === "template2"}
                            style={{
                              visibility: "hidden"
                            }}
                          />
                        </label>
                      </Button>
                    </Grid>
                  </Grid>

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
                      <Grid item xs={12} sm={6}>
                        <Button
                          type="submit"
                          variant="outlined"
                          color="secondary"
                          onClick={handlePrev}
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
                  width: 650,
                  padding: "20px 5px",
                  float: "right",
                  backgroundColor: "cornsilk",
                  borderRadius: "30px"
                }}
              >
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Education
                  </Typography>
                  <form>
                    <Grid
                      style={{
                        width: "160px"
                      }}
                    >
                      <FormControl>
                        <InputLabel>College Name</InputLabel>

                        <Select
                          name="college"
                          onChange={handleInput}
                          value={data.college}
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
                    </Grid>
                    <br />
                    <Grid item xs={12}>
                      <TextField
                        name="branch"
                        onChange={handleInput}
                        label="Branch"
                        placeholder="Enter Course Name"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <br />
                    <Grid item xs={12}>
                      <TextField
                        name="cgpa"
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
                      <TextField
                        name="from"
                        onChange={handleInput}
                        type="number"
                        placeholder="Attended From"
                        label="Attended From"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <br />
                    <Grid item xs={12}>
                      <TextField
                        name="to"
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

                    <Grid item xs={12} sm={6}>
                      <Button
                        type="submit"
                        variant="outlined"
                        color="secondary"
                        onClick={handlePrev}
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
                  borderRadius: "30px"
                }}
              >
                <CardContent>
                  <h3>Recent Experiences(upto 3)</h3>
                  <form>
                    {companies.map((company) => (
                      <div key={company.id}>
                        <TextField
                          xs={12}
                          sm={6}
                          name="cname"
                          label="Company name"
                          variant="filled"
                          defaultValue=""
                          onChange={(event) =>
                            handleChangeInput(company.id, event)
                          }
                        />
                        <br />
                        <br />

                        <TextField
                          xs={12}
                          sm={6}
                          name="designation"
                          label="Designation"
                          variant="filled"
                          defaultValue=""
                          onChange={(event) =>
                            handleChangeInput(company.id, event)
                          }
                        />
                        <br />
                        <br />
                        <TextField
                          xs={12}
                          sm={6}
                          name="roles"
                          label="Roles"
                          variant="filled"
                          multiline={true}
                          rows={3}
                          defaultValue=""
                          onChange={(event) =>
                            handleChangeInput(company.id, event)
                          }
                        />
                        <br />
                        <br />

                        <IconButton
                          disabled={companies.length === 1}
                          onClick={() => handleRemoveFields(company.id)}
                        >
                          <RemoveIcon />
                        </IconButton>
                        <IconButton
                          disabled={companies.length == 3}
                          onClick={handleAddFields}
                        >
                          <AddIcon />
                        </IconButton>
                      </div>
                    ))}
                    <br />
                    <Grid item xs={12} sm={6}>
                      <Button
                        type="submit"
                        variant="outlined"
                        color="secondary"
                        onClick={handlePrev}
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
export default Temp;
