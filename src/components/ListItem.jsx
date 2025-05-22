import "./ListItem.css"


export const ListItem = ({ splitBillHandler, ItemDetail, index }) => {

  const { name, imgUrl, status } = ItemDetail


  return (
    <div id={index} className="listItem">

      <div className="imgContainer">
        <img src={imgUrl} alt="img" />
      </div>

      <div className="nameAndStatus">
        <h3>{name}</h3>
        <div style={{
          color: status.startsWith("you") ? "rgb(84 220 41)"  : status.startsWith("we") ? "black" : "red", 
          fontWeight: "500"
        }} className="status">{status}</div>
      </div>

      <button onClick={splitBillHandler} id="selectBtn">Select</button>

    </div>
  )
}

