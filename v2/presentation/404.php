<?php
$requestUrl = $_SERVER['REQUEST_URI'];
$url = parse_url($requestUrl);
$path = pathinfo($url['path']);
$newUrl = $requestUrl;
// switch them to .htm away from the old .phtml pages
$newUrl = str_replace('.phtml', '.htm', $newUrl);
// remove the e-gineer prefix directory if it exists
if (strpos($newUrl, '/e-gineer') === 0) {
	$newUrl = substr($newUrl, 9);
}
// move them into the v1 directory for old things
if ( (strpos($newUrl, '/articles') === 0) ||
     (strpos($newUrl, '/instructions') === 0) ||
     (strpos($newUrl, '/domainator') === 0) ) {
    $newUrl = "/v1$newUrl";
}
// move to directories, rather than pages if possible
$newUrl = str_replace('index.htm', '', $newUrl);
if (strcmp($newUrl, $requestUrl)) {
    // Permanently redirect them to the new location
    header('HTTP/1.1 301 Moved Permanently');
    header('Location: '.$newUrl); 
    // Here is a HTML page to do the redirect if the 301 headers fail
?>
<html>
<head>
<title>e-gineer - Page moved</title>
<meta http-equiv="refresh" content="1;url=<?php echo $newUrl ?>">
<style>
body {
    font-family: Verdana, Arial, Helvetica, Sans Serif;
    font-size: 0.8em;
}
h1 {
    font-size: 1.3em;
}
#movedBox {
    border: 2px solid red;
    background-color: #fee;
    padding: 1em;
}
P.movedUrl {
    margin-left: 2em;
    font-weight: bold;
}
</style>
</head>
<body>
<div id="movedBox">
<h1>Page moved</h1>
<p>
The URL for this page has permanently changed. You are now being redirected to the new location. Please update the link to:
</p>
<p class="movedUrl">
<a href="<?php echo $newUrl ?>"><?php echo $newUrl ?></a>
</p>
</div>
</body>
</html>
<?php
}
else {
    header("HTTP/1.0 404 Not Found");
    // Here is a HTML page with a not found message for browsers that don't have friendly error messages turned on
?>
<html>
<head>
<title>e-gineer - Page not found</title>
<style>
body {
    font-family: Verdana, Arial, Helvetica, Sans Serif;
    font-size: 0.8em;
}
h1 {
    font-size: 1.3em;
}
#notFoundBox {
    border: 2px solid red;
    background-color: #fee;
    padding: 1em;
}
P.notFoundUrl {
    margin-left: 2em;
    font-weight: bold;
}
</style>
</head>
<body>
<div id="notFoundBox">
<h1>Page not found</h1>
<p>
The page you requested could not be found.
</p>
<p class="notFoundUrl">
<a href="<?php echo $newUrl ?>"><?php echo $newUrl ?></a>
</p>
</div>
</body>
</html>
<?php
}
?>