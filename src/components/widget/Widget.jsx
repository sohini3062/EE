import "./widget.scss";
import { userColumns, userRows } from "../../datatablesource";
const Widget = ({ type }) => {
  let data;

  switch (type) {
    case "transformer":
      data = {
        title: "Transformers",
        isAvailable: true,
        link: "See all transformers",
      };
      break;
    case "alerts":
      data = {
        title: "Alerts",
        isAvailable:true,
        link: "View all alerts",
      };
      break;
    case "orders":
      data = {
        title: "Tranformers Ordered",
        isAvailable:true,
        link: "Check Status",
      };
      break;
    case "users":
      data = {
        title: "Users",
        isAvailable:true,
        link: "See details",
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isAvailable} {userRows.length}
        </span>
        <span className="link">{data.link}</span>
      </div>
    </div>
  );
};

export default Widget;
