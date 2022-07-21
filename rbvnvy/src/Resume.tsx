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
  Box,
  CardContent,
  Menu,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText
} from "@material-ui/core";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const StyledBox = styled(Box)``;
function Resume() {
  return (
    <div>
      <Card
        style={{
          width: 580,
          height: 670,
          padding: "5px 5px",

          borderRadius: "10px"
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
            OWEN RICHARDSON
          </h1>
        </Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "-14px 0px 0px 0px"
          }}
        >
          <Box>example@xyz.com</Box>
          <Box>+91 9628829839</Box>
          <Box>New Delhi</Box>
        </Box>
        <Box
          style={{
            backgroundColor: "#fcd772",
            padding: "0px 0px 0px 20px"
          }}
        >
          <h4
            style={{
              fontFamily: "Lucida Console"
            }}
          >
            PROFESSIONAL SUMMARY
          </h4>
        </Box>
        <Box
          style={{
            fontFamily: "Monaco",
            margin: "-10px 0px 0px 0px",
            padding: "0px 20px 0px 20px"
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          pariatur quia, quisquam fugiat perspiciatis eaque modi! Ipsa magnam
          reiciendis accusantium quidem corrupti, quas numquam dolorum sed
          aliquam vitae, perferendis quisquam.
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
            WORK HISTORY
          </h4>
        </Box>
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
              {" "}
              Virtusa Consultancy
            </h5>
            FullStack Java Developer Intern
          </Box>
          <Box
            style={{
              width: "350px",
              height: "100px",
              padding: "0px 20px 0px 0px"
            }}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              animi unde ipsa velit odio dignissimos repellat illo ullam nulla
              amet consequuntur perferendis dolor dicta ipsum, corporis illum.
              Aliquam, velit odio.
            </p>
          </Box>
        </Box>
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
              {" "}
              Wallmag global pvt LTD
            </h5>
            Backend Java Developer Intern
          </Box>
          <Box
            style={{
              width: "350px",
              height: "100px",
              padding: "0px 20px 0px 0px"
            }}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              animi unde ipsa velit odio dignissimos repellat illo ullam nulla
              amet consequuntur perferendis dolor dicta ipsum, corporis illum.
              Aliquam, velit odio.
            </p>
          </Box>
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
            <h5 style={{ fontFamily: "Verdana" }}>
              XYZ ABC Institute of Engineering and Tech
            </h5>
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
              <h5 style={{ fontFamily: "Garamond" }}>2018-2022</h5>
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
            Btech in Computer Sciene engineering
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
    </div>
  );
}
export default Resume;
