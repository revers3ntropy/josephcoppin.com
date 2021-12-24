<?php
require 'sql.php';

$res = query ('
    SELECT name
    FROM types
');

$rows = Array();
while ($row = mysqli_fetch_assoc($res))
    array_push($rows, $row['name']);
echo json_encode($rows);