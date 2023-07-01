import *  as React from "react"
import { graphql } from "gatsby"

const LinkPage = ({data, children}) => {
    window.location.href = data.json.originURL
    return (
    <div>
        <h1>Amazing Link Redirects will go here!</h1>
        <p>Here is the original URL: {data.json.originURL}</p>
        <p>Here is the shortened ID: {data.json.shortenedId}</p>
    </div>
    )
  }

  export const query = graphql`
  query ($shortenedId: String) {
    json(shortenedId: {eq: $shortenedId}) {
      shortenedId
      originURL
    }
  }
`

export const Head = () => <title>Link</title>
  
export default LinkPage