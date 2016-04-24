# SimpleSlider
jQuery plugin that provides a draggable slider to intuitively compare two images

## Installation

### Step 1: Link required files
```html
<!-- jQuery -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-beta1/jquery.min.js"></script>
<!-- jQuery UI -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
<!-- jQuery UI Touch Punch -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js"></script>
<!-- SimpleSlider JS file -->
<link href="jquery.simple-slider.js" rel="stylesheet" />
<!-- SimpleSlider CSS file -->
<link href="simple-slider.css" rel="stylesheet" />
```

### Step 2: Create HTML Markup
```html
<div id="comparison">
    <img src="img/before.jpg">
    <img src="img/after.jpg">
</div>
```

### Step 3: Call SimpleSlider
```html
$(document).ready( function() {
    $('#comparison').simpleSlider();
});
```
