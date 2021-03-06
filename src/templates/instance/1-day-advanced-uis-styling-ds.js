import React from 'react'
import BaseTemplate from './baseTemplate'
import Curriculum from 'src/components/curriculum/workshops/CurriculumStylingAndAdvUI'
import TargetAudienceList from 'src/components/curriculum/workshops/CurriculumStylingAndAdvUI/TargetAudienceList'
import { REACT_WORKSHOP, ADVANCED_REACT, REACT_BOOTCAMP } from 'src/config/data'

export const crossSellTypes = [ADVANCED_REACT, REACT_BOOTCAMP, REACT_WORKSHOP]

const Page = props => (
  <BaseTemplate
    {...props}
    type={REACT_WORKSHOP}
    crossSellTypes={crossSellTypes}
    targetAudienceList={TargetAudienceList}
    curriculum={Curriculum}
    curriculumProps={{
      section: { isOpen: true },
    }}
  />
)

export default Page
