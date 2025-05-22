import { useState } from "react";
import "./SplitBillForm.css"

export const SplitBillForm = ({ friendName, updateFriendStatus }) => {

    const [totalExpense, setTotalExpense] = useState()
    const [yourExpense, setYourExpense] = useState()
    const [freindExpense, setFreindExpense] = useState()
    const [billPayer, setBillPayer] = useState("you")

    function totalExpenseValue(e) {
        setTotalExpense(e.target.value)
    }
    function yourExpenseValue(e) {
        setYourExpense(e.target.value)
    }
    function freindExpenseValue(e) {
        setFreindExpense(e.target.value)
    }
    function billPayerValue(e) {
        setBillPayer(e.target.value)
    }


    function splitBillFunctionalityHandler() {

        const statusMassage = billPayer === "you" ? `you own ${freindExpense} Rs` : `${friendName} own ${yourExpense} Rs`


        setBillPayer("you")
        setFreindExpense("")
        setTotalExpense("")
        setYourExpense("")

        updateFriendStatus(statusMassage)
    }


    return (
        <div id="splitForm">
            <h2>Split a bill with {friendName}</h2>

            <div id="splitFormFunctionality">

                <div id="totalExpense">
                    <span>total expense</span>
                    <input value={totalExpense} onChange={totalExpenseValue} placeholder="Ex : 4000" type="text" />
                </div>

                <div id="yourExpense">
                    <span>your expense</span>
                    <input value={yourExpense} onChange={yourExpenseValue} placeholder="Ex : 2500" type="text" />
                </div>

                <div id="friendExpense">
                    <span>{friendName} expense</span>
                    <input value={freindExpense} onChange={freindExpenseValue} placeholder="Ex : 1500" type="text" />
                </div>

                <div id="billPayerName">
                    <span>who is paying the bill </span>
                    <select value={billPayer} onChange={billPayerValue} name="" id="selecter">
                        <option value="you">you</option>
                        <option value={friendName}>{friendName}</option>
                    </select>
                </div>

            </div>

            <button onClick={splitBillFunctionalityHandler} id="spliBillBtn">Split Bill</button>
        </div>
    )
}
