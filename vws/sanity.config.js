import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
// import Logo from './src/logo.jsx'
import {theme} from 'https://themer.sanity.build/api/hues?preset=verdant&default=bcb9b2;lightest:faf6ae;darkest:212323&primary=faf6ae;400&caution=fff700;200'
import {
  Article,
  Browser,
  Browsers,
  House,
  BookOpen,
  Phone,
  Gear,
  Repeat,
  Image,
  Megaphone,
  Wrench,
  CarProfile,
  MapPin
} from '@phosphor-icons/react'

export default defineConfig({
  name: 'default',
  title: 'vws',

  projectId: 'hlge0026',
  dataset: 'production',
  studio: {
    components: {
      // logo: Logo
    }
  },

  plugins: [
    //myLogoPlugin(),
    deskTool({
      structure: (S) => 
        S.list()
        .title("Site Management")
        .items([
          S.listItem()
          .title("Pages")
          .id("pages")
          .icon(Article)
          .child(
            S.list()
            .title("Pages")
            .items([
              S.listItem()
                .title("Single Use Pages")
                .id("pages")
                .icon(Browser)
                .child(
                  S.list()
                    .title("Single Use Pages")
                    .items([
                      S.listItem()
                      .title("Home")
                      .id("homepage")
                      .icon(House)
                      .child(
                        S.document()
                        .schemaType("homePage")
                        .documentId("homePage")
                        .title("Home")
                      ),

                      S.listItem()
                      .title("Services Page")
                      .id("servicesPage")
                      .icon(Wrench)
                      .child(
                        S.document()
                        .schemaType("servicePage")
                        .documentId("servicePage")
                        .title("Services Page")
                      ),
    
                      S.listItem()
                      .title("Portfolio")
                      .id("portfolioPage")
                      .icon(BookOpen)
                      .child(
                        S.document()
                        .schemaType("portfolioPage")
                        .documentId("portfolioPage")
                        .title("Portfolio")
                      ),

                      S.listItem()
                      .title("Contact")
                      .id("contactPage")
                      .icon(Phone)
                      .child(
                        S.document()
                        .schemaType("contactPage")
                        .documentId("contactPage")
                        .title("Contact")
                      ),

                      S.listItem()
                      .title("Locations")
                      .id("locationPageStatic")
                      .icon(MapPin)
                      .child(
                        S.document()
                        .schemaType("locationPage")
                        .documentId("locationPage")
                        .title("Locations")
                      ),
                    ])
                ),

                S.divider(),

                S.listItem()
                .title("Dynamic Services")
                .id("services")
                .icon(Browsers)
                .child(
                  S.document()
                  .schemaType("services")
                  .documentId("services")
                  .title("Dynamic Services")
                ),

                S.divider(),

                S.listItem()
                .title("Dynamic Locations")
                .id("locations")
                .icon(Browsers)
                .child(
                  S.document()
                    .schemaType("serviceLocations")
                    .documentId("serviceLocations")
                    .title("Location List"),
                ),
              ])
          ),

          S.divider(),

          S.listItem()
          .title("Project List")
          .id("projects")
          .icon(CarProfile)
          .child(
            S.document()
              .schemaType("projectList")
              .documentId("projectList")
              .title("Project List"),
          ),

          S.divider(),

          S.listItem()
          .title("Reusable Sections")
          .id("reusableSections")
          .icon(Repeat)
          .child(
            S.list()
            .title("Reusable Sections")
            .items([

              S.listItem()
              .title("FAQ Section")
              .id("faqSection")
              .icon(Megaphone)
              .child(
                S.document()
                .schemaType("faqSection")
                .documentId("faqSection")
                .title("FAQs")
              ),
            ])
          ),

          S.divider(),

          //Site Settings Menu
          S.listItem()
          .title("Site Settings")
          .id("siteSettings")
          .icon(Gear)
          .child(
            S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
            .title("Site Settings")
          ),

        ]),
    }), 
    visionTool()],

  schema: {
    types: schemaTypes,
  },
})

