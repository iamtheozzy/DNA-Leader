import React from "react"
import styled from "@emotion/styled"
// import { Link } from "gatsby"



const Card = styled.div`
  border-radius: 2px;
  height: 50%;
  width: 20%;
  min-width: 400px;
  min-height: 650px;
  background-color: transparent;
  margin: 0 3rem;
`;

const Card_Header = styled.div`
  border: 1px solid #f2efe9;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15%;

  h1 {
    font-size: 2rem;
    font-weight: 400;
    color: #f2efe9;
    letter-spacing: 4px;
  }
`;


const Card_Body = styled.ul`
  border-radius: 2px;
  border: 1px solid #f2efe9;
  padding: 0 4rem;
  height: 85%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-startd;
  align-content:center;
  color: #f2efe9;
`;

const List_item = styled.li`
  font-size: 1rem;
  text-align: left;
  letter-spaceing: 2px;
`;

const SubButton = styled.a`
  background-color: transparent;
  font-size: 1.5em;
  color: #f2efe9;
  padding: .5em 2.5em;
  border: 2px solid #f2efe9;
  text-align: center;
  margin: 2rem auto 0 auto;
`

const individual_items = [ "Unlimited access to the DNA of a Leader Training Classes", "Stewardship Map Online: Weekly Spiritual Planning Tool", "Personal Leadership Diagnostic", "Customized Growth Focus", "Mission Statement Builder", "Leadership Insight Videos from world leaders", "Public Leadership Diagnostic tools and More!" ]

const church_items = [ "Church List Item","Church List Item","Church List Item","Church List Item","Church List Item","Church List Item","Church List Item",  ]


const Subscription = ( props ) => {

  const IndividualListItem = individual_items.map((key) => 
    <List_item>{key}</List_item>
  )
  const ChurchListItems_List_Item = church_items.map((key) => 
    <List_item>{key}</List_item>
  )

  return (
    <Card>
      <Card_Header>
        <h1>{props.title}</h1>
      </Card_Header>
      <Card_Body>

        {props.type === "individual" ? IndividualListItem : ""} 
        {props.type === "church" ? ChurchListItems_List_Item : ""} 
        <SubButton href="https://dnaofaleader.thoughtindustries.com/catalog">PURCHASE</SubButton>
      </Card_Body>
    </Card>
  )
}
    



export default Subscription