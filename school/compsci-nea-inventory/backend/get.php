<?php
require 'sql.php';

$res = query ('
    SELECT 
       stock.info as info,
       stock.lastLeantTo as lastLeantTo,
       UNIX_TIMESTAMP(stock.lentLast) as lentLast,
       stock.info as info,
       stock.id as id,
       stock.isLent as isLent,
       types.name as type
    FROM stock, types
    WHERE stock.type = types.id
');

$rows = Array();
while ($row = mysqli_fetch_assoc($res))
    array_push($rows, $row);
echo json_encode($rows);