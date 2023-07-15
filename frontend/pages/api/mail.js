// const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
const hubspotPortalId=process.env.HUBSPOT_PORTAL_ID
const hubspotFormGuid=process.env.HUBSPOT_FORM_ID
const hubspotPrivateAppKey=process.env.HUBSPOT_PRIVATE_KEY

const handler = async (req, res) => {
  if (req.method === "POST") {
    // const { recaptchaToken, inputData } = req.body;
    
    // Verify CAPTCHA
    // try {
    //   const verificationUrl = 'https://www.google.com/recaptcha/api/siteverify';
    //   const verificationParams = new URLSearchParams();
    //   verificationParams.append('secret', recaptchaSecret);
    //   verificationParams.append('response', recaptchaToken);

    //   const verificationResponse = await fetch(verificationUrl, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/x-www-form-urlencoded',
    //     },
    //     body: verificationParams.toString(),
    //   });

    //   const { success } = await verificationResponse.json();
    //   console.log(success)

    //   if (!success) {
    //     return res.status(400).json({ message: "CAPTCHA verification failed" });
    //   }
    // } catch (error) {
    //   console.log(error);
    //   return res.status(500).json({ message: "Internal Server Error" });
    // }

    const data = {
        "fields": [
            {
            "objectTypeId": "0-1",
            "name": "firstname",
            "value": inputData.firstname
            },
            {
            "objectTypeId": "0-1",
            "name": "lastname",
            "value": inputData.lastname
            },
            {
            "objectTypeId": "0-1",
            "name": "email",
            "value": inputData.email
            },
            {
            "objectTypeId": "0-1",
            "name": "phone",
            "value": inputData.phone
            },
            {
            "objectTypeId": "0-1",
            "name": "city",
            "value": inputData.city
            },
            {
              "objectTypeId": "0-1",
              "name": "make_of_vehicle",
              "value": inputData.make_of_vehicle
            },
            {
            "objectTypeId": "0-1",
            "name": "model_of_vehicle",
            "value": inputData.model_of_vehicle
            },
            {
            "objectTypeId": "0-1",
            "name": "year_of_vehicle",
            "value": inputData.year_of_vehicle
            },
            {
            "objectTypeId": "0-1",
            "name": "tell_us_about_your_project_",
            "value": inputData.tell_us_about_your_project_
            },
            {
                "objectTypeId": "0-1",
                "name": "hs_lead_status",
                "value": "New Leads"
            },
        ],
    }

    try {
        const hubspotEndpoint = `https://api.hsforms.com/submissions/v3/integration/secure/submit/${hubspotPortalId}/${hubspotFormGuid}`;
      
        const response = await fetch(hubspotEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${hubspotPrivateAppKey}`,
          },
          body: JSON.stringify(data),
        });
      
        if (response.ok) {
          return res.status(200).json({ status: "Ok" });
        } else {
          const errorMessage = await response.text();
          console.log(errorMessage);
          return res.status(500).json({ message: errorMessage });
        }
      } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
      }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};

export default handler;
