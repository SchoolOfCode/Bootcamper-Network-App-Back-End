const express = require("express");
const router = express.Router();
const axios = require("axios").default;

router.get("/events", async (req, res) => {
  try {
    const authRequest = await axios(`https://secure.meetup.com/oauth2/authorize
        ?client_id=dn1onu9tlngh7kgq4ng5jvk1e3
        &redirect_uri=http://localhost:3000
        &response_type=anonymous_code`);
    const authcode = authRequest.code;
    console.log(
      `Data back from meetup: Authcode: ${authcode} & AuthRequest data:${authRequest}`
    );
    return;
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
