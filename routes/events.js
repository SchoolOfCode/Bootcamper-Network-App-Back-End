const express = require("express");
const router = express.Router();
const axios = require("axios");

// router.use((req, res, next) => {
//   req.helen = "notecstaticslkdflskdj";
//   next();
// });

//STEP ONE - GET
router.use("/events", async (req, res, next) => {
  try {
    const headers = { Accept: "application/json" };
    const authRequest = await axios.get(
      `https://secure.meetup.com/oauth2/authorize?client_id=dn1onu9tlngh7kgq4ng5jvk1e3&redirect_uri=http://localhost:5000&response_type=anonymous_code`,
      { headers }
    );
    req.authcode = authRequest.data.code;
    console.log(`Data back from meetup: Authcode:`, req.authcode);
    next();
  } catch (error) {
    console.log(error);
  }
});

//STEP TWO - POST
router.use("/events", async (req, res, next) => {
  try {
    const { authcode } = req;
    const headers = { Accept: "application/json" };
    const steptworesponse = await axios.post(
      `https://secure.meetup.com/oauth2/access?client_id=dn1onu9tlngh7kgq4ng5jvk1e3&client_secret=4nh62hot4j3humqfu83a940pp6&grant_type=anonymous_code&redirect_uri=http://localhost:5000&code=${authcode}`,
      { headers }
    );
    req.accesstoken = steptworesponse.data.access_token;
    // console.log(`Step 2 Access Token`, steptworesponse.data);
    console.log(`req.accesstoken`, req.accesstoken);

    next();
  } catch (error) {
    console.error(`ERROR`, error);
  }
});

//STEP THREE - POST
router.use("/events", async (req, res, next) => {
  try {
    const { accesstoken } = req;
    console.log(`access token step 3`, accesstoken);
    const headers = {
      Accept: "application/json",
      Authorization: `Bearer ${accesstoken}`,
    };
    const stepthreeresponse = await axios({
      url: `https://api.meetup.com/sessions?&email=bootcampertweetbot@gmail.com&password=bootcamp20`,
      headers,
      method: "POST",
    });
    console.log(`line 58`);
    req.oauthtoken = stepthreeresponse.data.oauth_token;
    console.log(`Step three:`, stepthreeresponse.data);
    next();
  } catch (error) {
    console.log(`STEP THREE ERROR`, error.response);
  }
});

//REQUEST TO GET MEET UP DATA
router.use("/events", async (req, res, next) => {
  try {
    const { oauthtoken } = req;
    console.log(`oauthtoken`, oauthtoken);
    const headers = {
      Accept: "application/json",
      Authorization: `Bearer ${oauthtoken}`,
    };
    const eventrequest = await axios({
      url: `https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&page=20`,
      headers,
      method: "GET",
    });
    console.log(`EVENTS:`, eventrequest);
    res.json(eventrequest.data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
