import axios from "axios";

export const indexEventsServices = () => {
  axios.get("http://localhost:3030/events").then(function (response) {
    // handle success
    console.log(response);
    return response;
  });
};
