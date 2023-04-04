const Notification = (props) => {
  const { className, logo, text } = props;
  return (
    <div className={className}>
      <img src={logo} className="logo" />
      <p className="message">{text}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <div className="Notification-list-container">
      <Notification
        logo="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        text="Information Message"
        className="primary-bg-color"
      />
      <Notification
        logo="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        text="Success Message"
        className="success-bg-color"
      />
      <Notification
        logo="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        text="Warning Message"
        className="warning-bg-color"
      />
      <Notification
        logo="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        text="Error Message"
        className="danger-bg-color"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
