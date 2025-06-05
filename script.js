function volume_sphere() {
    //Write your code here
	event.preventDefault();
	let r=parseInt(document.getElementById("radius").value);
	
    let v=document.getElementById("volume");
	if (!isNaN(r)&&r>0) {
    let volume = (4 / 3) * Math.PI * r * r * r;
    v.value = volume.toFixed(4); // Set the value of the input field
  } else {
    v.value = "Nan";
  }
}

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
