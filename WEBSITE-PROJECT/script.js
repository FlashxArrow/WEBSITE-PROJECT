var i=0;
var text="CREATIVITY HAS NO LIMITS";
function typing()
{
	if(i<text.length) 
		{
			
			document.getElementById("welcome-text").innerHTML+=text.charAt(i);
			i++;
			setTimeout(typing,50);
		}
}
typing();



