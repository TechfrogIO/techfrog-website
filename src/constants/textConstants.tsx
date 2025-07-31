import React from "react";
import { ExternalLink } from "../components/ExternalLink";
import { ProjectCardDataProps } from "../components/ProjectCard";
import { DetailsListProps } from "../pages/InfoPage";

export const COMPANY_NAME = "Techfrog, LLC";
export const COPY_START_DATE = "2025";
export const COMPANY_HEADING = `About ${COMPANY_NAME}`;
const COMPANY_WEBSITE_GITHUB_NAME = "Github Repository: techfrog-website";
const COMPANY_WEBSITE_GITHUB_URL = "https://github.com/TechfrogIO/techfrog-website";

export const RESUME_NAME = "Josh Wittlieff";
export const RESUME_HEADING = "Front-end Engineering & Software Development Experience";

const AMZN_ABA_NAME = "Amazon Brand & Retail Analytics";
const AMZN_ABA_WEBSITE_NAME = `Tool Overview on Amazon.com: ${AMZN_ABA_NAME}`;
const AMZN_ABA_WEBSITE_URL = "https://sell.amazon.com/blog/brand-analytics";
const AMZN_APLUS_NAME = "A+ Content";
const AMZN_APLUS_WEBSITE_NAME = `Tool Overview on Amazon.com: ${AMZN_APLUS_NAME}`;
const AMZN_APLUS_WEBSITE_URL = "https://sell.amazon.com/tools/a-content";
const AMZN_MYE_NAME = "Manage Your Experiments";
const AMZN_MYE_WEBSITE_NAME = `Tool Overview on Amazon.com: ${AMZN_MYE_NAME}`;
const AMZN_MYE_WEBSITE_URL = "https://sell.amazon.com/tools/manage-your-experiments";
const AMZN_SELLING_PARTNERS_TOOL = "Amazon.com Selling Partner Tool";

export const COMPANY_DETAILS: DetailsListProps[] = [
  {
    id: "freelance",
    content: "Full-stack freelance engineer with enterprise-level industry experience.",
  },
  {
    id: "fee",
    content:
      "Specializes in Front-end Engineering (React-based web applications, web accessibility, user-friendly UX, build from UX mock-ups if required) with the applications backed by AWS services",
  },
  {
    id: "llc",
    content:
      "LLC incorporated in Arizona, USA with Professional Liability insurance through biBERK [Parent company: Berkshire Hathaway]",
  },
];

export const RESUME_DETAILS: DetailsListProps[] = [
  {
    id: "frontEnd",
    content:
      "Enterprise-level development of applications for Amazon Selling Partners; applications were integrated with AWS services",
  },
  {
    id: "access",
    content:
      "Applications were developed for international use, including right-to-left languages, and met latest accessibility standards (plus set up accessibility testing for use during development)",
  },
  {
    id: "mockups",
    content:
      "Application features were either developed from scratch using a style guide, or developed based on mock-ups provided by UX designers",
  },
  {
    id: "techFEE",
    content: (
      <>
        Front-end experience:
        <ul>
          <li>
            HTML5, CSS / Emotion CSS, Javascript / TypeScript, React, Redux, Storybook (UX & accessibility testing at
            React component level), Jest, Enzyme, React Testing Library, integration tests, ESLint, Prettier, JSDoc,
            Webpack, Babel, Yarn, NodeJS, integrating with RESTful APIs
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "techSDE",
    content: (
      <>
        Backend/AWS services experience (full-stack knowledge was required for on-call rotations):
        <ul>
          <li>
            Java, JUnit, Mockito, DynamoDB / NoSQL, S3, Lambda, Amplify, SNS, SQS, CloudWatch, Cognito, API Gateway
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "techDev",
    content: (
      <>
        Development experience:
        <ul>
          <li>
            Git version control, code reviews (both giving and receiving feedback), project planning & management
            (Agile, Scrum, Kanban, hybrid types - team dependent), working from Figma UX mock-ups, code
            pipelines/testing/deployment (beta, pre-prod, prod)
          </li>
        </ul>
      </>
    ),
  },
];

export const PROJECT_CARD_DATA: ProjectCardDataProps[] = [
  {
    id: "tf1",
    toolName: "Techfrog.io Website",
    projectName: "Company Info and Resume Pages",
    projectDetails: (
      <>
        <ExternalLink linkText="techfrog.io" linkAddress="http://techfrog.io" />
        <span> & </span>
        <ExternalLink linkText="techfrog.io/resume" linkAddress="http://techfrog.io/resume" />
        <span>
          &nbsp;are a demo of a React application utilizing many of the above-listed font-end technologies; all files
          are available in a public repository on Github as an example of app configuration and coding style.
        </span>
      </>
    ),
    toolLink: {
      linkAddress: COMPANY_WEBSITE_GITHUB_URL,
      linkText: COMPANY_WEBSITE_GITHUB_NAME,
    },
  },
  {
    id: "aplus",
    toolName: `${AMZN_SELLING_PARTNERS_TOOL}: ${AMZN_APLUS_NAME}`,
    projectName: "Product Manager Page",
    projectDetails:
      "Developed the tool used to review, add, or remove A+ content to product pages. The Selling Partner is able to search for a single product, or product family (ex: all colors of a specific shoe style) by id or name, and see which content is currently displayed (if any), and apply new content to some or all of the product listings at once.",
    toolLink: {
      linkAddress: AMZN_APLUS_WEBSITE_URL,
      linkText: AMZN_APLUS_WEBSITE_NAME,
    },
  },
  {
    id: "aplus",
    toolName: `${AMZN_SELLING_PARTNERS_TOOL}: ${AMZN_APLUS_NAME}`,
    projectName: "Technical Specifications Module & Editor",
    projectDetails:
      "Developed the A+ Content module (displayed on Amazon product pages) and module editor (in content creator tool) that allows Selling Partners to create tables listing in-depth product specifications. Within two months of launch, the module was featured on over 58,000 product pages.",
    toolLink: {
      linkAddress: AMZN_APLUS_WEBSITE_URL,
      linkText: AMZN_APLUS_WEBSITE_NAME,
    },
  },
  {
    id: "aplus",
    toolName: `${AMZN_SELLING_PARTNERS_TOOL}: ${AMZN_APLUS_NAME}`,
    projectName: "A+ Content Manager - Global Messaging",
    projectDetails:
      "Developed a native AWS micro-service used to globally message all users through the A+ Content Manager (ex. known delays or bugs, new feature releases).",
    toolLink: {
      linkAddress: AMZN_APLUS_WEBSITE_URL,
      linkText: AMZN_APLUS_WEBSITE_NAME,
    },
  },
  {
    id: "mye",
    toolName: `${AMZN_SELLING_PARTNERS_TOOL}: ${AMZN_MYE_NAME}`,
    projectName: "A/B Testing for Optimizing Product Listings",
    projectDetails:
      "Improved A-B testing for existing allowable product detail tests, and added new tests for other non-text based listing details such as A+ Content and Brand Story. Also updated existing front-end features to ensure they met current web content accessibility standards.",
    toolLink: {
      linkAddress: AMZN_MYE_WEBSITE_URL,
      linkText: AMZN_MYE_WEBSITE_NAME,
    },
  },
  {
    id: "aba",
    toolName: `${AMZN_SELLING_PARTNERS_TOOL}: ${AMZN_ABA_NAME}`,
    projectName: "Shared Components Library",
    projectDetails:
      "Developed a shared components library that was used by both Brand Analytics and Retail Analytics, which provided reliable thoroughly tested components with set styles and UX for both teams to utilize. The components were compatible with international languages, including right-to-left languages, as well as met current accessibility standards.",
    toolLink: {
      linkAddress: AMZN_ABA_WEBSITE_URL,
      linkText: AMZN_ABA_WEBSITE_NAME,
    },
  },
  {
    id: "fba",
    toolName: "Fulfillment by Amazon (FBA) Support Ops",
    projectName: "FBA Support Ops Portal & Scripts",
    projectDetails:
      "Developed an application to centralize team information, announcements, and tools. Also developed and maintained the browser plug-in scripts stored on the Portal, which modified and improved existing tools to reduce handle time for cases; for reference, 254,764 cases were resolved in 2015 by the team, with an average of 30 seconds to 10 minutes faster resolve time per case (dependent on case type) when using the scripts.",
  },
];

export const EDUCATION_DATA = [
  {
    id: "degree1",
    college: "Milwaukee School of Engineering",
    degree: "Bachelor of Science",
    major: "Mechanical Engineering",
    minor: "Physics",
    graduation: "May 2002",
  },
  {
    id: "degree2",
    college: "Arizona State University",
    degree: "Bachelor of Art",
    major: "Digital Art - 3D Animation & Imaging",
    graduation: "May 2008",
  },
];
