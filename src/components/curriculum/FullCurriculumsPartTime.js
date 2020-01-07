import React from 'react'

import { Col, Row } from '../layout/Grid'
import { H4 } from '../text'
import { Tabs, TabList, TabItem, TabContent, ContentItem } from '../layout/Tabs'
import CurriculumReactBootcamp from './CurriculumReactBootcamp'
import CurriculumReactFundamentals from './CurriculumReactFundamentals'
import CurriculumReactPartTime from './CurriculumReactPartTime'
import CurriculumAdvancedReact from './CurriculumAdvancedReact'

import CurriculumReactWorkshops from './CurriculumReactWorkshops'
import selectUpcomingTrainings from '../training/selectUpcomingTrainings'
import {
  REACT_BOOTCAMP,
  REACT_PART_TIME,
  ADVANCED_REACT,
  REACT_FUNDAMENTALS,
  REACT_WORKSHOP,
} from '../../config/data'

const FullCurriculumsPartTime = ({ trainings }) => {
  const commonCurriculumProps = {
    trainings,
    showTitle: false,
  }

  return (
    <React.Fragment>
      <Row>
        <Col lg={10} lgOffset={1}>
          <H4>Choose a part-time course</H4>
        </Col>
      </Row>
      <Tabs defaultValue={REACT_BOOTCAMP}>
        <TabList lgOffset={1}>
          <TabItem name={REACT_PART_TIME}>React Part-time Course</TabItem>
          <TabItem name={ADVANCED_REACT}>GraphQL Part-time Course</TabItem>
        </TabList>

        <TabContent>
          <ContentItem name={REACT_BOOTCAMP}>
            <CurriculumReactBootcamp {...commonCurriculumProps} />
          </ContentItem>
          <ContentItem name={REACT_FUNDAMENTALS}>
            <CurriculumReactFundamentals {...commonCurriculumProps} />
          </ContentItem>
          <ContentItem name={ADVANCED_REACT}>
            <CurriculumAdvancedReact {...commonCurriculumProps} />
          </ContentItem>
          <ContentItem name={REACT_PART_TIME}>
            <CurriculumReactPartTime {...commonCurriculumProps} />
          </ContentItem>
          <ContentItem name={REACT_WORKSHOP}>
            <CurriculumReactWorkshops
              trainings={allReactWorkshops}
              showTitle={false}
            />
          </ContentItem>
        </TabContent>
      </Tabs>
    </React.Fragment>
  )
}

export default FullCurriculumsPartTime
