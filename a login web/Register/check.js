function CheckForm(thisForm) {
			with(thisForm) {
				if (userid.value == "") {
					alert("Please Input UserId");
					return false;
				}
				if (pwd.value.length < 8 || pwd.value.length > 20) {
					alert("Be Sure that Password's Length Between 8 and 20");
					return false;
				}
				if (pwd.value != repassword.value) {
					alert("Be Sure that Two Passwords you Input is the Same");
					return false;
				}
				window.open('../Register/NewUser.html');
			}
		}