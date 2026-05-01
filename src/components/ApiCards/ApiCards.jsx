import { useEffect, useState } from "react";
import "./apicards.css";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { Link } from "react-router-dom";
const ApiCards = () => {
  const [data, setData] = useState([]);
  const [loadingApiId, setLoadingApiId] = useState(null);
  const [addedApis, setAddedApis] = useState([]);
  // const [show, setShow] = useState(true);
  const [visibleKeys, setVisibleKeys] = useState({});
  useEffect(() => {
    getApisData();
  }, []);

  const getApisData = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/apis`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch API data");
      }

      const result = await response.json();

      if (result.success) {
        setData(result.apis);
        console.log(result.apis);
      }
    } catch (error) {
      console.error("Error fetching API data:", error);
    }
  };
  const handleAddApiClick = async (api_id) => {
    try {
      setLoadingApiId(api_id);

      const response = await fetch(`${import.meta.env.VITE_API_URL}/apikeys`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ api_id }),
      });

      const result = await response.json();

      if (result.success) {
        setAddedApis((prev) => [...prev, api_id]);
      } else {
        alert("Failed to add API");
      }
    } catch (error) {
      console.error("Error adding API:", error);
    } finally {
      setLoadingApiId(null);
    }
  };
  const toggleVisibility = (id) => {
    setVisibleKeys((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <div className="consumerApiCards">
      {data && data.length > 0
        ? data.map((api) => {
            const isLoading = loadingApiId === api.id;
            const isAdded = addedApis.includes(api.id);

            return (
              <div className="apiCard" key={api.id}>
                <h2 className="apiCardName">{api.name}</h2>
                <p className="apiCardDescription">{api.description}</p>
                {api.user_id === null ? (
                  <button
                    className="apiCardButton"
                    disabled={isLoading || isAdded}
                    onClick={() => handleAddApiClick(api.id)}
                  >
                    {isLoading
                      ? "Adding..."
                      : isAdded
                        ? "Added ✓"
                        : "Add as API"}
                  </button>
                ) : (
                  <div className="showApikey">
                    <label htmlFor="apikey">Api Key</label>
                    <input
                      // type={`${!show ? "text" : "password"}`}
                      type={visibleKeys[api.id] ? "text" : "password"}
                      id={`apikey-${api.id}`}
                      name="apikey"
                      value={api.api_key}
                      readOnly
                    />
                    <button
                      className="eyeButton"
                      onClick={() => toggleVisibility(api.id)}
                    >
                      {/* {!show ? (
                        <IoMdEyeOff onClick={() => setShow(true)} />
                      ) : (
                        <IoEye onClick={() => setShow(false)} />
                      )} */}
                      {visibleKeys[api.id] ? <IoMdEyeOff /> : <IoEye />}
                    </button>
                    <div className="apiDetails">
                      <Link to={`/consumer/api/detail/${api.id}`}>
                        <button className="apiDetailButton">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        : "API not found"}
    </div>
  );
};

export default ApiCards;
