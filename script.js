
document.getElementById('raidForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var numDrives = parseInt(document.getElementById('numDrives').value);
    var driveCapacity = parseInt(document.getElementById('driveCapacity').value);
  
    if (isNaN(numDrives) || isNaN(driveCapacity)) {
      alert('Please enter valid numbers.');
      return;
    }
  
    var totalCapacity = numDrives * driveCapacity;
    var numRaid6Arrays = Math.floor(numDrives / 2);
    var raid6Capacity = (numDrives - 2) * driveCapacity;
    var totalUsableCapacity = numRaid6Arrays * raid6Capacity;
    var faultTolerance = 2;
  
    var result = document.getElementById('result');
    result.innerHTML = 'RAID 60 Configuration Summary:<br>';
    result.innerHTML += 'Total Usable Capacity: ' + totalUsableCapacity + ' GB<br>';
    result.innerHTML += 'Fault Tolerance: Can tolerate up to ' + faultTolerance + ' drive failures per RAID 6 array';
  });
  
