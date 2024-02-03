import "./taskBar.css"
import React from "react"

const TaskBar = () => {
    return(
        <nav className="taskBar">
            <ul className="taskBar__list">
                <button className="buttons__list"><img src="../../img/calendar.png" alt="" className="taskbaIcon"/></button>
                <button className="buttons__list"><img src="../../img/papelera.png" alt="Papelera" className="taskbaIcon" /></button>
                <label className="ui-switch">
                    <input type="checkbox" />
                    <div className="slider">
                        <div className="circle"></div>
                    </div>
                </label>

            </ul>
        </nav>
    )
}

export default TaskBar