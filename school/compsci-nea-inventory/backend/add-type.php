<?php
require 'sql.php';

$name = $_GET['name'];

query('INSERT INTO types (name) VALUES ("'.$name.'")');

echo 'Success! PLease wait for redirect...';
echo '<meta http-equiv="refresh" content="0;URL=\'https://josephcoppin.com/school/y12-compsic-nea-inventory/manage-types.html\'" />';