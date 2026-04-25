const logout = async () => {
  console.log("Initiating logout...");
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/users/logout`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Include cookies in the request
      },
    );
    const result = await response.json();
    if (!result.success) {
      console.error(`Logout failed: ${result.message}`);
      alert("Logout failed. Please try again.");
      return;
    }
    alert("Logout successful!");
    window.location.href = "/login";
  } catch (error) {
    console.error(`Error while logging out: ${error.message}`);
  }
};

export default logout;
