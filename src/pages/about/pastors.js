import React from "react"

import Layout from "../../components/layout"
import Pastors from "../../components/Pastors/pastors"
import PastorsList from "../../components/Pastors/pastor_list"
import PastorsSupport from "../../components/Pastors/pastors_support"
import PathwaysSection from "../../components/Pastors/pathways"


const PastorsPage = () => (
  <Layout>
    <Pastors />
    <PastorsList />
    <PastorsSupport />
    <PathwaysSection />
  </Layout>
)

export default PastorsPage
