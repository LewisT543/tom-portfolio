"use client"

import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import AboutItem, {AboutItemProps} from "@/fragments/AboutItem";
import {ABOUT_ITEMS, CARD_PROPS, H_CARD_PROPS, HEADER_DATA, HERO_PROPS} from "../../data/exampleData";
import Grid from "@/components/Grid";
import Card from "@/components/Card";
import HorizontalCard from "@/components/HorizontalCard";

export default function PortfolioHome() {
  const aboutMeGrid: JSX.Element[] = ABOUT_ITEMS.map((props: AboutItemProps, index: number) => (<AboutItem key={index} {...props} />))

  return (
    <div>
      <Header {...HEADER_DATA.NAV_PROPS}/>
      <Hero {...HERO_PROPS}/>
      <Grid gridItems={aboutMeGrid}/>
      <Card {...CARD_PROPS}/>
      <HorizontalCard {...H_CARD_PROPS} />
    </div>
  )
}

/*
  <Page>
    <Header>
    <Hero>
    <About>
    <Services>
    <Work>
    <Testimonials>
    <Contact>
    <Footer>
  </Page>
*/