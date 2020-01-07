import React, { useState } from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import { WHITE, DARK_GREY, DARK_BLUE } from '../config/styles'
import { WHY_REACTJS_ACADEMY } from '../config/images.js'
import { HOME_PAGE } from '../../images/imageNames'
import Layout from '../components/layout'
import Link from '../components/navigation/Link'
import { LinkButton } from '../components/buttons'
import { defaultButtonStyle } from '../components/buttons/Button'
import { TopSection, ColSection } from '../components/layout/Section'
import { Col, Row } from '../components/layout/Grid'
import { H2 } from '../components/text'
import AttendeeQuote from 'src/components/training/AttendeeQuote'
import Ul, { Li } from '../components/layout/Ul'
import FullCurriculumsPartTime from '../components/curriculum/FullCurriculumsPartTime'
import FullCurriculumsGraphQL from '../components/curriculum/FullCurriculumsGraphQL'
import { createSocialMetas } from '../components/utils'
import { RootHeader as Header } from '../components/layout/Header'
import Segment from '../components/elements/Segment'
import TrustedBySection from '../components/training/TrustedBySection'
import UpcomingTrainingSection from '../components/training/UpcomingTrainingSection'
import Box from 'src/components/layout/Box'

const metas = {
  title: 'React & GraphQL Expert Training | React GraphQL Academy',
  description:
    'Looking for React and GraphQL expert training? React GraphQL Academy (formerly React Academy) offers in-person real-world training by our experts. Contact us now!',
  image: WHY_REACTJS_ACADEMY,
  type: 'website',
}

const StyledTabItem = styled(Link).attrs({ className: 'select-technology' })`
  ${defaultButtonStyle}
  &:first-child {
    box-shadow: -5px -5px 15px -5px rgba(0, 0, 0, 0.26);
  }
  &:last-child {
    box-shadow: 5px -5px 15px -5px rgba(0, 0, 0, 0.26);
  }
  position: relative;
  z-index: 1;
  border-bottom: none;
  text-decoration: none;
`
const StyledTabTitle = styled(Box)`
  color: ${WHITE};
`
StyledTabTitle.defaultProps = {
  pb: 1,
}

const TabItem = ({ variant, ...rest }) => (
  <StyledTabItem
    {...(variant ? tabItemVariantProps[variant] : {})}
    {...rest}
    display="inline-block"
  />
)

TabItem.defaultProps = {
  border: '1px solid',
  variant: 'default',
  p: 3,
  borderColor: DARK_BLUE,
}

export const tabItemVariantProps = {
  default: {
    color: WHITE,
    backgroundColor: DARK_BLUE,
  },
  active: {
    color: DARK_GREY,
    bg: WHITE,
    textShadow: 'bold',
  },
}

const TAB_IMMERSIVE = 'react'
const TAB_PARTTIME = 'graphql'

const IndexPage = () => {
  const [selectedTab, setTab] = useState(TAB_IMMERSIVE)

  return (
    <Layout>
      {({ trainings }) => (
        <React.Fragment>
          <Helmet
            title={metas.title}
            meta={[
              {
                name: 'description',
                content: metas.description,
              },
            ]}
          >
            {createSocialMetas(metas)}
          </Helmet>
          <Header
            titleLines={[
              'Take your dev career further',
              'with React GraphQL Academy',
            ]}
            subtitle="In-person courses, workshops and meetups from experts who were the first in
        Europe to teach React. "
            bgImageName={HOME_PAGE}
          />
          <TopSection mt={[0, -225]}>
            <Row>
              <Col lgOffset={1} lg={11}>
                <StyledTabTitle>Select learning experience: </StyledTabTitle>
                <TabItem
                  onClick={() => setTab(TAB_IMMERSIVE)}
                  to="#tab-curriculum"
                  variant={selectedTab === TAB_IMMERSIVE ? 'active' : undefined}
                >
                  Immersive
                </TabItem>
                <TabItem
                  variant={selectedTab === TAB_PARTTIME ? 'active' : undefined}
                  onClick={() => setTab(TAB_PARTTIME)}
                  to="#tab-curriculum"
                >
                  Part-time
                </TabItem>
                <a name="tab-curriculum" />
              </Col>
            </Row>
            <Segment pt={[4, 7]}>
              {selectedTab === TAB_IMMERSIVE ? (
                <FullCurriculumsGraphQL trainings={trainings} />
              ) : (
                <FullCurriculumsPartTime trainings={trainings} />
              )}
            </Segment>
          </TopSection>
          <ColSection
            col={
              <AttendeeQuote
                quote="As a freelance developer, I was tired of doing online courses. [The course] was fantastic - the teachers didn't leave a single question unanswered."
                fullname="Rafa Fraga"
                job="Software Engineer"
                youtubeId="hZZksRcqtkc"
              />
            }
            col2={
              <React.Fragment>
                <H2>Is React GraphQL Academy right for me?</H2>
                <Ul>
                  <Li>
                    For working developers - <strong>not for beginners!</strong>
                  </Li>
                  <Li>
                    <strong>Hands-on project-based</strong> training.
                  </Li>
                  <Li>
                    <strong>collaborative</strong> learning environment.
                  </Li>
                  <Li>
                    <Link
                      to="/react/training/bootcamp"
                      className="is-it-for-me"
                    >
                      Bootcamps
                    </Link>{' '}
                    for accelerated learning.
                  </Li>
                  <Li>
                    <Link
                      to="/react/training/part-time-course/"
                      className="is-it-for-me"
                    >
                      Part-time courses
                    </Link>{' '}
                    for accelerated learning.
                  </Li>
                </Ul>
                <LinkButton
                  to="/blog/are-you-the-perfect-react-graphql-student/"
                  className="is-it-for-me-cta"
                >
                  Blog: Are YOU the Perfect Bootcamp Student?
                </LinkButton>
              </React.Fragment>
            }
          />
          <TrustedBySection showContent />
          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )}
    </Layout>
  )
}

export default IndexPage
