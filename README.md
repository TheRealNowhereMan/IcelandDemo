# GildedRose

INSTALLATION
------------
1. Clone the GildedRose repository or download as a .zip file and 
extract it to a local drive.

2. Open the SpecRunner.html file in a web browser.

NOTES
-----
The HTML file uses the Jasmine Spec Runner v2.0.1 to test the logic 
of the inventory management code by running the source code located 
in "src/gilded_rose.js" followed by the Jasmine spec located in 
"spec/gilded_rose_spec.js".

The input values are defined in an array in the program source, then 
adjusted using the adjust_quality() function. The expected outputs 
are defined in an array in the test spec. The two arrays are then 
compared to ensure the adjust_quality() function has applied the 
rules correctly.

Further details are provided in code commentary.