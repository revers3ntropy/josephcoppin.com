<?php
require 'sql.php';

query('DELETE FROM types WHERE name="'.$_GET['type'].'"');

echo 'Success! Please wait for redirect...';
echo '<meta http-equiv="refresh" content="0;URL=\'https://josephcoppin.com/school/y12-compsic-nea-inventory/manage-types.html\'" />';