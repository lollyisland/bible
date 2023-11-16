<?php include "php/init.php"; ?>
<!DOCTYPE html>
<html class="<?php echo implode(" ", $class["html"]); ?>">
   <head>
      <title><?php echo $title; ?></title>
      <?php include "php/include.php"; ?>
   </head>
   <body class="<?php echo implode(" ", $class["body"]); ?>" data-group="search">
      <?php include "php/content.php"; ?>
   </body>
</html>