"use client"

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutItem, {AboutItemProps} from "@/fragments/AboutItem";
import {ABOUT_ITEMS, HEADER_DATA} from "../../data/exampleData";
import Grid from "@/generics/Grid";

export default function PortfolioHome() {
  const aboutMeGrid: JSX.Element[] = ABOUT_ITEMS.map((props: AboutItemProps, index: number) => (<AboutItem key={index} {...props} />))

  return (
    <div>
      <Header {...HEADER_DATA.NAV_PROPS}/>
      <Hero />
      <Grid gridItems={aboutMeGrid}/>
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
    <Contact>
    <Footer>
  </Page>
*/