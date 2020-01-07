import React from 'react'

import { Col, Row } from '../layout/Grid'
import { H4 } from '../text'
import { Tabs, TabList, TabItem, TabContent, ContentItem } from '../layout/Tabs'
import CurriculumReactPartTime from './CurriculumReactPartTime'
import CurriculumGraphQLPartTime from './CurriculumGraphQLPartTime'

import {
  REACT_BOOTCAMP,
  REACT_PART_TIME,
  ADVANCED_REACT,
  GRAPHQL_PART_TIME,
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
      <Tabs defaultValue={REACT_PART_TIME}>
        <TabList lgOffset={1}>
          <TabItem name={REACT_PART_TIME}>React Part-time Course</TabItem>
          <TabItem name={GRAPHQL_PART_TIME}>GraphQL Part-time Course</TabItem>
        </TabList>

        <TabContent>
          <ContentItem name={REACT_PART_TIME}>
            <CurriculumReactPartTime {...commonCurriculumProps} />
          </ContentItem>
          <ContentItem name={GRAPHQL_PART_TIME}>
            <CurriculumGraphQLPartTime {...commonCurriculumProps} />
          </ContentItem>
        </TabContent>
      </Tabs>
    </React.Fragment>
  )
}

export default FullCurriculumsPartTime
