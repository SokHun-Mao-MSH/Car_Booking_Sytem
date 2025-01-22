document.addEventListener("DOMContentLoaded", () => {
  const bookingForm = document.querySelector("form");

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

    let datapremium = JSON.parse(localStorage.getItem("datapremium")) || [];
    datapremium.push(bookingData);
    localStorage.setItem("datapremium", JSON.stringify(datapremium));
    alert("Booking saved successfully!");
    bookingForm.reset();
  });
});
