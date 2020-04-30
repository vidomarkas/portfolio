import React, { useState, useRef } from "react";

function HelloMessage() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [formResponse, setFormResponse] = useState("");

  // Form & input handlers

  const onMessageChange = (e) => {
    setMessage(e.target.value);
  };
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };

  // Reference to response box to display & hide it after certain amount of time

  const responseBox = useRef();

  // Build and send form data object

  let formData = new FormData();
  formData.append("message", message);
  formData.append("email", email);

  const sendMessage = () => {
    fetch(
      "https://www.vdomarkas.com/wp/wp-json/contact-form-7/v1/contact-forms/161/feedback",
      {
        method: "post",
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setFormResponse(data);
        if (data.status === "mail_sent") {
          setMessage("");
          setEmail("");
        }

        if (responseBox.current) {
          responseBox.current.style.display = "block";
          setTimeout(() => {
            responseBox.current.style.display = "none";
          }, 5000);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // Display the response

  const showResponse = (formResponse) => {
    if (formResponse.status === "mail_sent") {
      return (
        <p className="hello-message-response-box-success">
          {formResponse.message}
        </p>
      );
    } else if (formResponse.status === "validation_failed") {
      return (
        <p className="hello-message-response-box-error">
          {formResponse.message}
        </p>
      );
    } else {
      return (
        <p className="hello-message-response-box-warning">
          {formResponse.message}
        </p>
      );
    }
  };

  return (
    <div className="card card-padding">
      <h2 className="card-heading">Message</h2>
      <form
        action=""
        className="hello-message"
        onSubmit={(e) => handleSubmit(e)}
      >
        <textarea
          name=""
          id=""
          cols="30"
          rows="4"
          placeholder="Write something to Viktoras..."
          value={message}
          onChange={(e) => onMessageChange(e)}
        ></textarea>

        <div className="hello-message-wrapper">
          <input
            className="hello-message-email"
            type="email"
            name="email"
            id=""
            placeholder="Email"
            value={email}
            onChange={(e) => onEmailChange(e)}
          />

          <input type="submit" value="Send" className="btn hello-message-btn" />
        </div>
        <div ref={responseBox} className="hello-message-response-box">
          {showResponse(formResponse)}
        </div>
      </form>
    </div>
  );
}

export default HelloMessage;
