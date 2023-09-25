// mengambil informasi atau value dari id yang dimasukkan pada formulir

var formulir = document.getElementById('formulir')
var nama = document.getElementById('nama')
var role = document.getElementById('role')
var availability = document.getElementById('availability')
var usia = document.getElementById('usia')
var lokasi = document.getElementById('lokasi')
var pengalaman = document.getElementById('pengalaman')
var email = document.getElementById('email')

// mengakses element HTML berdasarkan id nya

var dataNama = document.getElementById('dataNama')
var dataAvailability = document.getElementById('dataAvailability')
var dataUsia = document.getElementById('dataUsia')
var dataLokasi = document.getElementById('dataLokasi')
var dataPengalaman = document.getElementById('dataPengalaman')
var dataEmail = document.getElementById('dataEmail')



// event saat formulir di submit
formulir.addEventListener('submit', function (event) {

    // agar form tidak benar benar mengirimkan data ke server dan merefresh halaman
    event.preventDefault()

    // set value dari input formulir ke data person
    dataNama.innerText = nama.value
    dataAvailability.innerText = availability.value
    dataUsia.innerText = usia.value
    dataLokasi.innerText = lokasi.value
    dataPengalaman.innerText = pengalaman.value
    dataEmail.innerText = email.value


})