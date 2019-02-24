import React from "react"
import styled from "@emotion/styled"
// import { Link } from "gatsby"



const Card = styled.div`
  border-radius: 2px;
  height: 50%;
  width: 20%;
  min-width: 400px;
  min-height: 650px;
  background-color: #f2efe9;
`;

const Card_Header = styled.div`
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15%;

  h1 {
    font-size: 2rem;
    color: #212121;
    letter-spacing: 4px;
  }
`;

const StyledHr = styled.hr`
  border-top: 1px solid #212121;
  margin: 0 30px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  opacity: .5;
`;

const Card_Body = styled.ul`
  border-radius: 2px;
  height: 85%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content:center;
`;

const List_item = styled.li`
  list-style-type: none;
  font-size: 1rem;
  text-align: center;
  padding: 10px 10px;
  margin-bottom: 4px;
`;

const SubButton = styled.button`
  background-color: transparent;
  font-size: 1.5em;
  color: #212121;
  padding: .5em 2.5em;
  margin-top: 10px;
  border: 2px solid #212121;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
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
      <StyledHr />
      <Card_Body>
        {props.type === "individual" ? IndividualListItem : ""} 
        {props.type === "church" ? ChurchListItems_List_Item : ""} 
        <SubButton>PURCHASE</SubButton>
      </Card_Body>
    </Card>
  )
}
    



export default Subscription