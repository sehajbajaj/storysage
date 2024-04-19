const TailwindSpinner = () => (
  <div className="flex justify-center items-center fixed inset-0 z-50 bg-white bg-opacity-75">
    {" "}
    {/* Make the spinner overlay full-screen without scrolling */}
    <div className="border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full w-12 h-12 animate-spin"></div>
  </div>
);

export default TailwindSpinner;
