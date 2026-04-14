/**
 * Utility to submit form data to a Google Apps Script Web App (Excel Script)
 * @param {Object} data - The form data object
 * @returns {Promise<boolean>} - Returns true if successful, false otherwise
 */
export const submitToExcel = async (data) => {
  const SCRIPT_URL = import.meta.env.VITE_EXCEL_SCRIPT_URL;
  
  if (!SCRIPT_URL) {
    console.error("VITE_EXCEL_SCRIPT_URL is not defined in .env");
    return false;
  }

  try {
    // Send as a POST request (most Google Apps Scripts prefer POST or GET with params)
    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors", // Required for Google Apps Script Web App redirects
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        timestamp: new Date().toLocaleString(),
      }),
    });

    // With no-cors, we can't read the response body, but usually if it doesn't throw, it's sent.
    return true;
  } catch (error) {
    console.error("Error submitting form:", error);
    return false;
  }
};
