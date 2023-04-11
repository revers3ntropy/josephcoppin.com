<?php
// username and password from here
require 'secure.php';

/* shows errors
ini_set('display_errors', true);
error_reporting(E_ALL);
//*/


$connection = mysqli_connect('p:localhost', $username, $password, "josephco_y12_nea_inventory")
or die('connection to sql server failed');

function query ($query) {
    global $connection;
    return mysqli_query($connection, $query);
}
