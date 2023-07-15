import homePage from "./documents/homePage"
import siteSettings from "./documents/siteSettings"
import review from "./objects/reviewCard"
import valueCard from "./objects/valueCard"
import gallery from "./documents/gallery"
import faqSection from "./documents/faqSection"
import services from "./documents/services"
import servicePage from "./documents/servicePage"
import portfolioPage from "./documents/portfolioPage"
import product from "./objects/product"
import contactPage from "./documents/contactPage"
import projectList from "./documents/projectList"
import project from "./objects/project"
import service from "./objects/service"
import partner from "./objects/partner"
import serviceLocations from "./documents/serviceLocations"
import location from "./objects/location"
import locationPageStatic from "./documents/locationPageStatic"
import aboutStat from "./objects/aboutStat"

export const schemaTypes = [
    //documents
    homePage, 
    portfolioPage,
    siteSettings,
    gallery,
    faqSection,
    services,
    contactPage,
    projectList,
    servicePage,
    serviceLocations,
    locationPageStatic,

    //objects
    review,
    valueCard,
    service,
    product,
    project,
    partner,
    location,
    aboutStat,

]