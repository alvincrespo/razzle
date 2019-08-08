import React from "react"
import { connect } from "react-redux"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "@emotion/styled"

const Counter = ({ counter, increment }) => (
  <div>
    <p>Count: {counter.count}</p>
    <button onClick={increment}>Increment</button>
  </div>
)
const mapStateToProps = ({ counter }) => {
  return { counter }
}

const mapDispatchToProps = dispatch => {
  return { increment: () => dispatch({ type: `INCREMENT` }) }
}

const ConnectedCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

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

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <H1>Razzle</H1>
    <ConnectedCounter />
    <ul>
      {data.postgres.allSkills.nodes.slice(0, 3).map(skill => (
        <li key={skill.id}>
          <strong>{skill.name}</strong>
        </li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage
