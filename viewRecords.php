<?php

include_once('database.php');
$stmt = $dbh->prepare('SELECT * FROM `comment`');
$stmt->execute();

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
                    <a href="viewRecord.php?id=<?php echo $row['id']; ?>"><?php echo $row['name']; ?></a>
                </li>
            <?php } ?>
        </ul>
    </body>
</html>
