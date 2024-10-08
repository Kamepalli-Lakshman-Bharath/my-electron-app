document.addEventListener("DOMContentLoaded", async () => {
  const deviceIdElement = document.getElementById("deviceId");

  try {
    const deviceId = await window.electron.getDeviceId();
    deviceIdElement.innerHTML = `Your Device ID: <strong>${deviceId}</strong>`;
  } catch (error) {
    console.error("Error fetching device ID:", error);
  }
});
