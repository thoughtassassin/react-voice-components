<?php

include_once('database.php');


if (isset($_POST)) {

    $stmt = $dbh->prepare('INSERT into `comment` (name, email, comment) VALUES (?, ?, ?)');
    $stmt->execute(array($_POST['name'], $_POST['email'], $_POST['comment']));
}

echo 'Thank you for your request.';

?>
