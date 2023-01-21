function login()
	{
		var uname = document.getElementById("email").value;
		var pwd = document.getElementById("pwd1").value;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(uname =='')
		{
			alert("please enter email id.");
		}
		else if(pwd=='')
		{
        	alert("enter the password");
		}
		else if(!filter.test(uname))
		{
			alert("Enter valid email id.");
		}
		else if(pwd.length < 8 )
		{
			alert(" your Password must be  in atleat 8 characters.");
		}
		else
		{
	alert('Thank You for Login & You are Redirecting to tvminfotech Website');

       window.location = "https://tvminfotech.com/";
			}
	}
