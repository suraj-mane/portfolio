import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="suraj-mane" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        {/* <ArticlesSection sectionId="articles" heading="Apps / Websites I've Built" sources={['Medium']} /> */}
        {/* <AboutSection sectionId="about" heading="About Portfolio Minimal" /> */}
        <InterestsSection sectionId="details" heading="Skills & Technologies" />
        <ProjectsSection sectionId="features" heading="Apps / Websites I've Built" />
        <ContactSection sectionId="github" heading="Reach Out to Me!" />
      </Page>
    </>
  );
}
