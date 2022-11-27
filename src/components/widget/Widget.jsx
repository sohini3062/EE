import "./widget.scss";
const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "Transformers",
        isMoney: true,
        link: "See all transformers",
      };
      break;
    case "order":
      data = {
        title: "Alerts",
        isMoney: false,
        link: "View all alerts",
      };
      break;
    case "earning":
      data = {
        title: "Tranformers Ordered",
        isMoney: true,
        link: "Check Status",
      };
      break;
    case "balance":
      data = {
        title: "Users",
        isMoney: true,
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
          {data.isMoney} {3}
        </span>
        <span className="link">{data.link}</span>
      </div>
    </div>
  );
};

export default Widget;
