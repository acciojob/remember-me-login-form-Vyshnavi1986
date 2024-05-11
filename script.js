@@ -1,20 +1,20 @@
//your JS code here. If required.
const savedusername = localStorage.getItem("username");
const savedpassword = localStorage.getItem("password");

if(savedpassword && savedpassword){
if(savedusername && savedpassword){
	const existingButton = document.createElement("button");
	existingButton.Id = "existing";
	existingButton.id = "existing";
	existingButton.textContent = "Login as existing user";
	document.body.appendChild = (existingButton);
	document.body.appendChild(existingButton);

	existingButton.addEventListener('click', function(){
		alert("Logged in as.");
		alert(`Logged in as ${savedusername}.`);
	});

}

const loginForm = document.getElementById("loginForm").addEventListener("submit", function(event){
document.getElementById("loginForm").addEventListener("submit", function(event){
	event.preventDefault();

	const username = document.getElementById('username').value;
@@ -29,7 +29,7 @@ const loginForm = document.getElementById("loginForm").addEventListener("submit"
		localStorage.removeItem('username');
		localStorage.removeItem('password');
	}
	alert("Logged in as.");
	alert(`Logged in as ${username}.`);

});