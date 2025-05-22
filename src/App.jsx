import { useState } from 'react'
import { FriendList } from './components/friendList'
import { AddFriend } from './components/AddFriend'
import { SplitBillForm } from './components/SplitBillForm'
import './App.css'


function App() {

  const [addFriendBox, setAddFriendBox] = useState(false)

  const [splitBillBox, setSplitBillBox] = useState(false)
  const [friendName, setFriendName] = useState("")
  const [selectedFriendIndex, setSelectedFriendIndex] = useState(null)

  const [listItems, setListItems] = useState([])

  function AddFriendBoxDisplayHandler() {
    setAddFriendBox(!addFriendBox)
    setSplitBillBox(false)
  }

  function splitBillHandler(e) {

    setSplitBillBox(true)
    const clickItemIndex = e.target.parentElement.id
    setFriendName(listItems[clickItemIndex].name)
    setSelectedFriendIndex(clickItemIndex)

  }

  function updateFriendStatus(statusMessage) {

    const newList = [...listItems]
    newList[selectedFriendIndex].status = statusMessage
    setListItems(newList)

  }




  return (
    <div id="mainParent">
      <div id="main">

        <div id="freindListAndAddFriend">

          <FriendList listItems={listItems} splitBillHandler={splitBillHandler} />

          <AddFriend addFriendBox={addFriendBox} setListItems={setListItems} listItems={listItems} />

          <button onClick={AddFriendBoxDisplayHandler} id='AddFrndBtn'>{!addFriendBox ? "Add Friend" : "Close"}</button>

        </div>

        {splitBillBox ? <SplitBillForm 
        updateFriendStatus={updateFriendStatus} 
        friendName={friendName} 
        /> : console.log("page nahi dekhe ga")}

      </div>
    </div>
  )
}

export default App
