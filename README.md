# VWS | VehicleWrapService.com

<img width="600" alt="Screenshot 2023-09-05 at 5 45 46 PM" src="https://github.com/homeroochoa47/vws/assets/104741653/bc8966e1-f5c6-4442-b1bb-9bb7c56b0117">

Vehicle Wrap service is a headless Next.js website for a vehicle wrapping business. It's paired with Sanity CMS on the backend to allow for easy content editing when needed.


## Live website

You can check out the live version of the website [here](https://www.vehiclewrapservice.com).

## Features
- The frontend is built and statically rendered with Next.js.
  - I used Tailwind CSS for styling, as well as a couple of other UI related packages for sliders and miscellaneous components.
    - The layout was designed to be fully responsive for both mobile and desktop layouts (and everything in between too).
  - The site contains lots of dynamically created pages, such as those for services and locations. These pages are templated and manageable via the CMS.
  - The contact form throughout the site is connected to the customer's HubSpot account via the HubSpot API.
    - Google ReCaptcha is built in but not activated per the customer's request.
- The backend is a customizable headless CMS that was configured to allow for the client to be able to update pages for their services, locations, and projects via pre-made template pages.



## Technologies Used

- [Next.js](https://nextjs.org/) - Using the pages directory, rendering everything statically.
- [Sanity](https://www.sanity.io/) - Providing page/content management and image hosting via their CDN.
- [Tailwind CSS](https://tailwindcss.com/) - Used for styling.
- [Vercel](https://vercel.com/) - For hosting.
