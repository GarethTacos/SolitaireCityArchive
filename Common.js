<!--

// remove frames
if (top!=self)
{
	top.location=location
}

// Solitaire City for Windows
function WindowsReleaseDate() {
	document.write("September&nbsp;19th&nbsp;2011");
}
function WindowsVersion() {
	document.write("5.02")
}
function WindowsSize() {
	document.write("24.2&nbsp;MB");
}
function WindowsBuyNow(){
	document.write("Price: <strong>$9.95</strong> - Unlimited free updates&nbsp!");
}

// Solitaire City for Macintosh
function MacReleaseDate() {
	document.write("September&nbsp;22nd&nbsp;2011");
}
function MacVersion() {
	document.write("5.01")
}
function MacSize() {
	document.write("23.5&nbsp;MB");
}

// Solitaire City for PocketPC
function PPCReleaseDate() {
	document.write("May&nbsp;27th&nbsp;2007");
}
function PPCVersion() {
	document.write("3.00")
}
function PPCSize() {
	document.write("7.90&nbsp;MB");
}
function CABSize() {
	document.write("3.26&nbsp;MB");
}

// Solitaire Setty
function SettyReleaseDate() {
	document.write("May&nbsp;25th&nbsp;2007");
}
function SettyVersion() {
	document.write("2.00")
}
function SettySize() {
	document.write("8.57&nbsp;MB");
}

function DisplayDigitalSmokeTMs() {
	document.write("Solitaire City and Digital Smoke are trademarks of Digital Smoke LLC<br>");
}
function DisplayAppleTMs() {
	document.write("iPod is a trademark of Apple Inc., registered in the U.S. and other countries. iPhone is a trademark of Apple Inc.<br>");
}
function DisplayNintendoTMs() {
	document.write("Nintendo and Wii are trademarks of Nintendo<br>");
}

// Functions

function goto_URL(object)
{
   	window.location.href=object.options[object.selectedIndex].value;
}

function DisplayDate()
{
	var days = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"); 
	var months = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
	var today = new Date();
	var day = today.getDay();
	var month = today.getMonth();
	var year = today.getYear();
	var date = today.getDate();	
	if (year<1900)
	{
		year=year+1900;
	}
	if ((date==1)||(date==21)||(date==31))
	{
		var symbol="st";
	}
	else if ((date==2)||(date==22))
	{
		var symbol="nd";
	}
	else if ((date==3)||(date==23))
	{
		var symbol="rd";
	}
	else
	{
		var symbol="th";
	}
	document.write(days[day] + " " + date + symbol + " " + months[month] + ", " + year);
}

function CreateWindow(URL,Width,Height)
{
	var xWindow=(screen.width-Width)/2;
	var yWindow=(screen.height-Height)/2;
	NewWindow=window.open(URL,"",'left='+xWindow+',top='+yWindow+',width='+Width+',height='+Height+',resizable=no,scrollbars=no,menubar=no,toobar=no,location=no,directories=no,status=no,framewidth=0,frameheight=0,marginwidth=0,marginheight=0,border=1');
	NewWindow.focus();
}

function CreateWindowScrollBars(URL,Width,Height)
{
	var xWindow;
	var yWindow;
	
	Width+=100;
	Height+=80;
	if (Width>screen.width)
	{
		Width=screen.width;
	}
	if (Height>screen.height-100)
	{
		Height=screen.height-100;
		yWindow=0;
	}		
	else
	{
		yWindow=(screen.height-Height)/2;	
	}
	xWindow=(screen.width-Width)/2;
	NewWindow=window.open(URL,"",'left='+xWindow+',top='+yWindow+',width='+Width+',height='+Height+',resizable=yes,scrollbars=yes,menubar=no,toobar=no,location=no,directories=no,status=no,framewidth=0,frameheight=0,marginwidth=0,marginheight=0,border=1');
	NewWindow.focus();
}

function Display(Text) {
	document.write(Text);
}

function IsValidEmailAddress(str)
{
	// are regular expressions supported?
	var supported = 0;
	if (window.RegExp)
	{
		var tempStr = "a";
		var tempReg = new RegExp(tempStr);
		if (tempReg.test(tempStr))
			supported = 1;
	}
	if (!supported) 
		return (str.indexOf(".") > 2) && (str.indexOf("@") > 0);
	var r1 = new RegExp("(@.*@)|(\\.\\.)|(@\\.)|(^\\.)");
	var r2 = new RegExp("^.+\\@(\\[?)[a-zA-Z0-9\\-\\.]+\\.([a-zA-Z]{2,3}|[0-9]{1,3})(\\]?)$");
	return (!r1.test(str) && r2.test(str));
}

function ValidateFormEntries()
{
	strEmail=document.getElementById("email").value;
	if (!IsValidEmailAddress(strEmail))
	{
		alert('Please enter a valid E-mail address so we can reply to you.');
		event.returnValue=false;
		return;
	}

	if (!grecaptcha.getResponse())
	{
		alert("Please click in the reCAPTCHA box to show that you're not a robot");
		event.returnValue=false;
		return;
	}	
}

// -->
