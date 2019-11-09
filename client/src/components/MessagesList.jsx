import React from "react";

//pass in props object.
const MessagesList = () => {
  //create a ul element and map over messages that was passed in from props, pass in message and index to map method, in the map method create an li for each elment that is being iterated over. create a span element for {message.senderId} and a p element for {message.text}
  return (
    <div>
      <h1>MessagesList</h1>
    </div>
  );
};

export default MessagesList;
