import TaskBar from "../../components/taskBar/taskBar";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <section className="dashboard">
        <TaskBar/>
      <div className="tasks__container">
        <div className="tasks">a</div>
        <div className="urgent__tasks">a</div>
        <div className="important__tasks">a</div>
        <div className="notImportant__tasks">a</div>
      </div>
    </section>
  );
};

export default Dashboard;
