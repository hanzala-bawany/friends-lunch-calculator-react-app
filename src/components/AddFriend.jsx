 import "./AddFriend.css"
 import { useState } from "react"



export const AddFriend = ({addFriendBox,setListItems,listItems}) => {

    const [nameValue,setNameValue] = useState()
    const [imgUrlValue,setImgUrlValue] = useState()

    function setName(e){
       setNameValue(e.target.value)
    }
    function setImgUrl(e){
        setImgUrlValue(e.target.value)
    }


    function addFriendIntoList(){

        const listItemsArr = [...listItems]
        setListItems([...listItemsArr,{name : nameValue , imgUrl : imgUrlValue,status: "we are equal"}])

        setNameValue("")
        setImgUrlValue("")

    }

    return (
        <div style={{   display : addFriendBox ? "flex" : "none"}}  id="addFriend">
            <div className="name">
                <label for="Fname">Friend Name :</label>
                <input value={nameValue} onChange={setName} placeholder="Friend Name" type="text" id="Fname" />
            </div>

            <div className="img">
                <label  for="imgUrl">Img URL :</label>
                <input value={imgUrlValue} onChange={setImgUrl} placeholder="Img URL"  type="text" id="imgUrl" />
            </div>

            <button onClick={addFriendIntoList} id="AddBtn">ADD</button>
        </div>
    )
}
