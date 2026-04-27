import React, { useEffect, useState } from "react";
import UserMessage from "../UserMessage/UserMessage";

const ApiRegistrationForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [baseUrl, setBaseUrl] = useState("");
  const [messageType, setMessageType] = useState("");
  const [message, setMessage] = useState("");
  const [owners, setOwners] = useState([]);
  const [selectedOwner, setSelectedOwner] = useState("");
  // get all the owners to show in the dropdown
  useEffect(() => {
    getOwners();
  }, []);

  const getOwners = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/users/owners`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        },
      );
      const result = await response.json();
      if (result.success) {
        setOwners(result.owners);
      }
    } catch (error) {
      console.error("Failed to fetch owners:", error);
    }
  };
  const timer = () => {
    setTimeout(() => {
      setMessage("");
      setMessageType("");
    }, 3000);
  };
  const handleRegister = (event) => {
    event.preventDefault();
    try {
      if (!name && !description && !baseUrl) {
        setMessageType("error");
        setMessage("Please fill the form");
        return;
      }
      if (!name) {
        setMessageType("error");
        setMessage("Please enter the API name");
        return;
      }
      if (!description) {
        setMessageType("error");
        setMessage("Please enter the API description");
        return;
      }
      if (!baseUrl) {
        setMessageType("error");
        setMessage("Please enter the API base URL");
        return;
      }
      if (!selectedOwner) {
        setMessageType("error");
        setMessage("Please select an owner for this API");
        return;
      }
      handleApiCall();
    } catch (error) {
      console.log(error);
    } finally {
      timer();
    }
  };
  const handleApiCall = async () => {
    try {
      setMessageType("");
      setMessage("Please wait...");
      const response = await fetch(`${import.meta.env.VITE_API_URL}/apis`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          description: description,
          base_url: baseUrl,
          owner_id: selectedOwner,
        }),
        credentials: "include",
      });
      const result = await response.json();
      if (!result.success) {
        setMessageType("error");
        setMessage(result.message);
        return;
      }
      setMessageType("success");
      setMessage(result.message);

      setName("");
      setDescription("");
      setBaseUrl("");
    } catch (error) {
      console.error("Register failed:", error);
      setMessageType("error");
      setMessage("Some went wrong. Please try again!");
    }
  };
  return (
    <form className="registerForm">
      <div className="registerContent">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Enter the API name"
          name="name"
          id="name"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
      </div>
      <div className="registerContent">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          placeholder="Enter the API description"
          name="description"
          id="description"
          onChange={(event) => setDescription(event.target.value)}
          value={description}
        />
      </div>
      <div className="registerContent">
        <label htmlFor="baseUrl">Base URL</label>
        <input
          type="text"
          placeholder="Enter the API base URL"
          name="baseUrl"
          id="baseUrl"
          onChange={(event) => setBaseUrl(event.target.value)}
          value={baseUrl}
        />
      </div>
      <div className="registerContent">
        <label htmlFor="owner">Owner</label>
        <select
          name="owner"
          id="owner"
          onChange={(event) => setSelectedOwner(event.target.value)}
          value={selectedOwner}
        >
          <option value="">Select an owner</option>
          {owners.map((owner) => (
            <option key={owner.id} value={owner.id}>
              {owner.name}
            </option>
          ))}
        </select>
      </div>
      <UserMessage type={messageType} message={message} />
      <button className="registerButton" onClick={handleRegister}>
        Register
      </button>
    </form>
  );
};

export default ApiRegistrationForm;
