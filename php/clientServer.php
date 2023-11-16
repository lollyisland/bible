<!-- Client configuration passed from PHP Server -->

<style>
   /* Put any style variable declarations here from PHP */
   :root
   {
   }
</style>
<style id="styleDynamic"></style>

<script>
   const __standalone = true;
   window._php =
   {
      uniqid: "<?php echo uniqid(); ?>",
      user: "<?php echo $user; ?>",
      users: JSON.parse('<?php echo json_encode($users); ?>'),
      device: "<?php echo $device; ?>",
      delimiter: "<?php echo DELIMITER; ?>",
      options:
      {
         inline: (("<?php echo $inline; ?>" == "true") ? true : false), // boolean
         highlight: (("<?php echo $highlight; ?>" == "true") ? true : false), // boolean
         theme: "<?php echo $theme; ?>", // string
         chapter: "<?php echo $chapter; ?>" // string
      }//,
      //unicode: JSON.parse('< ? php echo json_encode($unicode); ? >')
   };
   window.calcDeviceHeight = function()
   {
      $(":root").css(
         {
            "--device-width": window.innerWidth + "px",
            "--device-height": (((_php.device == "desktop") || __standalone) ? window.innerHeight : screen.height) + "px"
         });
   };
   calcDeviceHeight();
</script>
