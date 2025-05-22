import React, { useState } from 'react'
import "./FriendList.css"
import { ListItem } from './ListItem'

export const FriendList = ({ listItems, splitBillHandler }) => {


  return (

    <div id="friendList">

      {
        listItems.map((item, index) => {
          return <ListItem  index={index} splitBillHandler={splitBillHandler} ItemDetail={item} />
        })
      }

    </div>

  )
}
