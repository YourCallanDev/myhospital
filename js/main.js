// Initialize storage
if(!localStorage.getItem('patients')) localStorage.setItem('patients', JSON.stringify([]));
if(!localStorage.getItem('users')) localStorage.setItem('users', JSON.stringify([
  {username:'admin', password:'admin', role:'admin'}
]));

// Login function
function login(username, password, role){
  let users = JSON.parse(localStorage.getItem('users'));
  let user = users.find(u => u.username === username && u.password === password && u.role === role);
  if(user){
    localStorage.setItem('currentUser', JSON.stringify(user));
    if(role === 'reception') window.location = 'reception.html';
    if(role === 'triage') window.location = 'triage.html';
    if(role === 'doctor') window.location = 'doctor.html';
    if(role === 'admin') window.location = 'admin.html';
  } else {
    document.getElementById('loginError').innerText = "Invalid credentials!";
  }
}

// Add patient
function addPatient(p){
  let patients = JSON.parse(localStorage.getItem('patients'));
  let newPatient = {
    id: 'P'+Date.now(),
    name: p.name,
    dob: p.dob,
    contact: p.contact,
    symptoms: p.symptoms,
    arrivalTime: new Date().toISOString(),
    triageLevel: 3,
    status: 'waiting',
    notes: []
  };
  patients.push(newPatient);
  localStorage.setItem('patients', JSON.stringify(patients));
  alert('Patient Checked In!');
  location.reload();
}

// Add user (admin)
function addUser(u){
  let users = JSON.parse(localStorage.getItem('users'));
  users.push(u);
  localStorage.setItem('users', JSON.stringify(users));
  alert('User added!');
  location.reload();
}
