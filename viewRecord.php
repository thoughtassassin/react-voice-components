<?php

include_once('database.php');
$stmt = $dbh->prepare('SELECT * FROM `comment` WHERE id = ?');
$stmt->execute(array($_GET['id']));

?>
<!doctype html>
<html>
    <head>
        <meta charset="utf-8" />
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet" />
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" />
        <link href="style.css" rel="stylesheet" />
    </head>
    <body>
        <ul>
            <?php while ($row = $stmt->fetch()) { ?>
                <li>
                    Name: <?php echo $row['name']; ?>
                </li>
                <li>
                    Email: <?php echo $row['email']; ?>
                </li>
                <li>
                    Comment: <?php echo $row['comment']; ?>
                </li>
            <?php } ?>
        </ul>
    </body>
</html>
