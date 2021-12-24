<?php
require 'sql.php';

query('
    UPDATE stock
    SET 
        lastLeantTo = "'.$_GET['to'].'", 
        lentLast = CURRENT_TIMESTAMP,
        isLent = 1
    WHERE id='.$_GET['id']
);

echo 'Success! Please wait for redirect...';
echo '
    <meta
    http-equiv="refresh" 
    content="0;URL=\'https://josephcoppin.com/school/y12-compsic-nea-inventory/manage-type.html?type='.$_GET['type'].'\'" 
    />';