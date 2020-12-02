import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "177232814199-80h8v6jgj0pnj7ip2philfh7c24a9n7q.apps.googleusercontent.com",
        scope: "email",
      });
    });
  }

  render() {
    return <div>GoogleAuth</div>;
  }
}

export default GoogleAuth;
