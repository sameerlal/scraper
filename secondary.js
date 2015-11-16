/* Version 2
*  Set a timeout and console log.
*/
function logarithm(){
} 
function EmmausBot(){
	var i = 0;
	while(i<100){
	var hi = document.getElementsByName("yop_poll_answer[2]");
	hi[6].checked=true;
	var button = document.getElementsByClassName("yop_poll_vote_button")[0].click();
	location.reload();
	i++
	console.log("Sent" + i + "th request to server.");
	// Errors encountered at 20 ms delay. Sent 3% of requests to server.
	window.setTimeout(logarithm, 30);
	}
}
EmmausBot();

