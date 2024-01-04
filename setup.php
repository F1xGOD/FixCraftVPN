<?php
$id = (int)$_REQUEST['id'];
header('Content-Type: application/json');
if ($id % 2 == 0) echo('{"id" : "' . $id . '", "success" : "1"}');
else echo('{"id" : "' . $id . '", "success" : "0", "error" : "Could not delete"}');
?>
