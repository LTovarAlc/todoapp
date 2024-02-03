import "./taskBar.css"
import React from "react"

const TaskBar = () => {
    return(
        <nav className="taskBar">
            <ul className="taskBar__list">
                <li className="buttons__list"><img src="../../img/calendar.png" alt="" className="taskbaIcon"/></li>
                <li className="buttons__list"><img src="../../img/papelera.png" alt="Papelera" className="taskbaIcon" /></li>
                <li className="buttons__list">
                <label className="ui-switch">
                    <input type="checkbox" />
                    <div className="slider">
                        <div className="circle"></div>
                    </div>
                </label>
                </li>
            </ul>
        </nav>
    )
}

export default TaskBar