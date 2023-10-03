import React from 'react'
import Header from '../../Components/Header/Header'
import StickyHeadTable from '../../Components/Table/StickyHeadTable'

export default function ViewPosting() {
  return (
    <div>
        <Header title="View Earlier Posting" />
        <div style={{height:"auto", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <div>
        <StickyHeadTable />
        </div>
        </div>
    </div>
  )
}
