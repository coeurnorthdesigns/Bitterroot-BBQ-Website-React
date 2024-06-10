import React from 'react'

import { Helmet } from 'react-helmet'

import Banner2 from '../components/banner2'
import Navbar3 from '../components/navbar3'
import Banner33 from '../components/banner33'
import Banner12 from '../components/banner12'
import Banner1 from '../components/banner1'
import Features7 from '../components/features7'
import Features72 from '../components/features72'
import Features71 from '../components/features71'
import Banner11 from '../components/banner11'
import Features73 from '../components/features73'
import Features74 from '../components/features74'
import Features75 from '../components/features75'
import Features78 from '../components/features78'
import ContactForm7 from '../components/contact-form7'
import Footer15 from '../components/footer15'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Bitterroot BBQ North Idaho</title>
        <meta
          name="description"
          content="BBQ Catering For Your Private Events in Coeur d'Alene Idaho\n"
        />
        <meta property="og:title" content="Bitterroot BBQ North Idaho" />
        <meta
          property="og:description"
          content="BBQ Catering For Your Private Events in Coeur d'Alene Idaho\n"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/de88ffdc-48f2-4695-ad95-b013be7d9f27/9193f81d-722a-4a91-bf39-d470f0576eeb?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <Banner2
        video1Src="/istockphoto-1273297994-640_adpp_is(1).mp4"
        rootClassName="banner2-root-class-name"
      ></Banner2>
      <Navbar3 link1="Home" link3="Pricing" link4="Contact"></Navbar3>
      <Banner33
        action1="Contact Us"
        content1="Pricing starts at $16.95 per person"
        heading1="Welcome to Bitterroot BBQ! We strive to provide our clients with the best traditional BBQ catering experience that will leave a lasting impression on you and your guests. We offer Certified Angus Beef as well as natural and organic meat options. Wherever possible, we use organic, non-gmo, and gluten free ingredients and all our sides are made from scratch. We are committed to delivering an exceptional BBQ experience that exceeds your expectations. From weddings, corporate events, to social gatherings, we have you covered. Contact us today to explore our menus and learn more about our services."
        image1Src="/adobestock_743988751-1500w.jpeg"
        rootClassName="banner33-root-class-name"
      ></Banner33>
      <Banner12 heading1="OUR MENU."></Banner12>
      <Banner1 heading1="MEAT"></Banner1>
      <Features7
        feature1Title="BRISKET"
        feature3Title="PORK RIBS"
        rootClassName="features7-root-class-name"
        feature1Description="Certified Angus Beef brisket. The king of Texas BBQ meats!"
        feature3Description="St. Louis cut pork spare ribs dry rubbed and smoked. Served with our home made bourbon BBQ sauce on the side."
      ></Features7>
      <Features72
        feature1Title="SANTA MARIA TRI-TIP"
        feature3Title="CLOVERDALE MEATS SAUSAGES"
        feature1Description="Seasoned with salt, pepper, garlic, and fresh parsley. Slow smoked and finished with a sear over hot coals."
        feature3Description="Cloverdale Meats is a family run company that makes high quality meats and sausages. Their all-beef hotdogs are served in Major League Baseball stadiums across the country. Choose from Louisiana Red Hots, Jalapeno Cheddar Sausage, German Sausage or Kielbasa. All are gluten free and no MSG. Made in the USA!"
      ></Features72>
      <Features71
        feature1Title="PULLED PORK"
        feature3Title="BBQ YARD BIRD"
        feature1Description="Slow cooked pork shoulder smoked to perfection and fall apart tender. Try it with our home made Carolina mustard sauce!"
        feature3Description="Bone in, skin on chicken thighs finished with our home made bourbon BBQ sauce. You are going to need extra napkins."
      ></Features71>
      <Banner11 heading1="SIDES"></Banner11>
      <Features73
        feature1Title="BBQ BEANS"
        feature3Title="POTATO SALAD"
        feature1Description="Made from scratch and takes 18 hours start to finish. Beans, bacon, and BBQ goodness!"
        feature3Description="No BBQ is complete without potato salad."
      ></Features73>
      <Features74
        feature1Title="MAC N' CHEESE"
        feature3Title="GREEN SALAD"
        feature1Description="Macaroni noodles in a creamy bechamel sauce loaded with Cheddar, Pepper Jack and Parmesan cheeses. Topped with bacon. Add fried Jalapeno's for an extra kick!"
        feature3Description="Served with home made Caesar dressing. Feel free to ask about other options."
      ></Features74>
      <Features75
        feature1Title="COLESLAW"
        feature3Title="CORN BREAD"
        feature1Description="Organic cabbage and carrots with homemade dressing."
        feature3Description="Choose from Regular or Jalapeno Cheddar."
      ></Features75>
      <Features78
        feature1Title="ROLLS"
        feature1Description="Brioche sandwich rolls."
      ></Features78>
      <ContactForm7
        email="Coeur d’Alene, ID"
        phone="(208) 704-0592"
        action="Send"
        heading1="Contact us to make an order."
      ></ContactForm7>
      <Footer15
        copyright="Copyright © 2024 Bitterroot BBQ.   All Rights Reserved."
        termsLink="Psalm 127:1 Unless the Lord builds the house, the builders labor in vain."
      ></Footer15>
    </div>
  )
}

export default Home
