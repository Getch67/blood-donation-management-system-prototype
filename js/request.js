document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('blood-request-form');
  const statusList = document.getElementById('status-list');

  const sampleRequests = [
    { id: 1, facilityName: 'Central Hospital', bloodType: 'A+', units: 2, status: 'Approved', date: '2023-05-15' },
    { id: 2, facilityName: 'City Clinic', bloodType: 'O-', units: 1, status: 'Pending', date: '2023-05-16' },
    { id: 3, facilityName: 'Regional Medical Center', bloodType: 'B+', units: 3, status: 'Rejected', date: '2023-05-14' },
  ];

  sampleRequests.forEach(request => {
    addRequestToStatusList(request);
  });


  function addRequestToStatusList(request) {
    const statusItem = document.createElement('div');
    statusItem.classList.add('status-item', `status-${request.status.toLowerCase()}`);
    statusItem.innerHTML = `
      <h3>Request #${request.id}</h3>
      <p><strong>Facility:</strong> ${request.facilityName}</p>
      <p><strong>Blood Type:</strong> ${request.bloodType}</p>
      <p><strong>Units:</strong> ${request.units}</p>
      <p><strong>Status:</strong> ${request.status}</p>
      <p><strong>Date:</strong> ${request.date}</p>
    `;
    statusList.prepend(statusItem);
  }
});