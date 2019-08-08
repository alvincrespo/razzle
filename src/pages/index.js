import React, { useState } from "react"
import { connect } from "react-redux"
import uuid from "react-uuid"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "@emotion/styled"

const SkillForm = ({ addSkill }) => {
  const [skill, setSkill] = useState()

  const onSetSkill = evt => {
    setSkill(evt.target.value)
  }

  const onAddSkill = () => {
    addSkill(skill)
  }

  return (
    <div>
      <p>
        Skill: <input type="text" onChange={onSetSkill} />
      </p>
      <button onClick={onAddSkill}>Add Skill</button>
    </div>
  )
}
const mapStateToProps = ({ skills }) => {
  return { skills }
}

const mapDispatchToProps = dispatch => {
  return { addSkill: skill => dispatch({ type: `ADD_SKILL`, skill }) }
}

const ConnectedSkillForm = connect(
  null,
  mapDispatchToProps
)(SkillForm)

const H1 = styled.h1`
  font-size: 10rem;
  text-align: center;
  margin: 5rem 0;
  color: yellow;
  text-shadow: 6px 5px #000000;
}`

export const query = graphql`
  {
    postgres {
      allSkills {
        nodes {
          id
          name
          description
        }
      }
    }
  }
`

const IndexPage = ({ data, skills }) => (
  <Layout>
    <SEO title="Home" />
    <H1>Razzle</H1>
    <ul>
      {data.postgres.allSkills.nodes.slice(0, 3).map(skill => (
        <li key={skill.id}>
          <strong>{skill.name}</strong>
        </li>
      ))}
      {skills.map(s => (
        <li key={uuid()}>
          <strong>{s}</strong>
        </li>
      ))}
    </ul>
    <ConnectedSkillForm />
  </Layout>
)

const ConnectedIndexPage = connect(mapStateToProps)(IndexPage)

export default ConnectedIndexPage
