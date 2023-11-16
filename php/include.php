<?php
   include_once "library.php";

   include validatePath("php/manifest.php");
   include validatePath("php/thirdParty.php");
   include validatePath("php/debug.php");
   include validatePath("js/includeStaticJS.php");
   include validatePath("php/clientServer.php");
   include validatePath("css/includeDynamicCSS.php");
   include validatePath("js/includeDynamicJS.php");
   //include validatePath("kjv/includeStatic.php");
?>
   <script type="text/javascript" src="../../js/lightning/lightning.js"></script>
   <link rel="stylesheet" href="../../js/lightning/lightning.css" type="text/css">
