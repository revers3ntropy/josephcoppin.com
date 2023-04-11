<?php
require 'sql.php';

$type = $_GET['type'];

$typeIDRes = query ('SELECT id FROM types WHERE name="'.$type.'"');

$typeID = -1;
while ($row = mysqli_fetch_assoc($typeIDRes))
    $typeID = $row['id'];

if ($typeID == -1) {
    // unknown type
    echo 'TYPE ERROR: No type -1';
    exit;
}

query('INSERT INTO stock (type, info) VALUES ('.$typeID.', "'.$_GET['info'].'")');

echo 'Success! PLease wait for redirect...';
echo '<meta http-equiv="refresh" content="0;URL=\'https://josephcoppin.com/school/y12-compsic-nea-inventory/manage-type.html?type='.$type.'\'" />';