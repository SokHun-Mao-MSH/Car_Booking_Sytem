document.addEventListener("DOMContentLoaded", () => {
  const bookingForm = document.getElementById("dataform");

  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const pickUpLocation = document.getElementById("pickup-location").value;
    const pickUpDate = document.getElementById("pickup-date").value;
    const dropOffLocation = document.getElementById("dropof-location").value;
    const dropOffDate = document.getElementById("dropof-date").value;
    const carType = document.getElementById("car-type").value;
    const passengers = document.getElementById("passengers").value;

    const bookingData = {
      name,
      phone,
      pickUpLocation,
      pickUpDate,
      dropOffLocation,
      dropOffDate,
      carType,
      passengers,
    };

    let dataair = JSON.parse(localStorage.getItem("dataair")) || [];
    dataair.push(bookingData);
    localStorage.setItem("dataair", JSON.stringify(dataair));
    alert("Booking saved successfully!");
    bookingForm.reset();
  });
});
