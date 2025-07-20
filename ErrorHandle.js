// Error Handling
try {
  throw new Error("Oops, something went wrong!");
} catch (err) {
  console.error("Error caught:", err.message);
} finally {
  console.log("This always runs.");
}