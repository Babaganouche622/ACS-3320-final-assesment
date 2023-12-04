    // Function to generate a random pastel color in hex format
    function generateRandomPastelColor() {
      // Array of pastel colors from your palette in hex format
      const pastelColors = [
        '#f9eaf5', '#a9cce3', '#7c5f9b', '#eda1f9',
        '#fdebd0', '#fba8a7', '#a2d9ce', '#c8ebe8', '#ffb6c1', '#f8c471', '#f4f9f9'
      ];

      let newColor;
      do {
        // Pick two random pastel colors
        const color1 = pastelColors[Math.floor(Math.random() * pastelColors.length)];
        const color2 = pastelColors[Math.floor(Math.random() * pastelColors.length)];

        // Introduce some randomness to blending
        const blendingRatio = Math.random();

        // Blend the colors to create a pastel mix
        newColor = blendColors(color1, color2, blendingRatio);
      } while (usedColors.includes(newColor));

      usedColors.push(newColor); // Track the used color
      return newColor;
    }

    // Function to blend two colors
    function blendColors(color1, color2, ratio) {
      const hex = (c) => ('0' + Math.round(c).toString(16)).slice(-2);
      const blend = (c1, c2, ratio) => Math.round(c1 + (c2 - c1) * ratio);

      // Convert hex colors to RGB format
      const rgb1 = {
        r: parseInt(color1.slice(1, 3), 16),
        g: parseInt(color1.slice(3, 5), 16),
        b: parseInt(color1.slice(5, 7), 16)
      };

      const rgb2 = {
        r: parseInt(color2.slice(1, 3), 16),
        g: parseInt(color2.slice(3, 5), 16),
        b: parseInt(color2.slice(5, 7), 16)
      };

      // Blend the RGB values
      const blendedR = blend(rgb1.r, rgb2.r, ratio);
      const blendedG = blend(rgb1.g, rgb2.g, ratio);
      const blendedB = blend(rgb1.b, rgb2.b, ratio);

      // Convert blended RGB values back to hex format
      const blendedHexColor = `#${hex(blendedR)}${hex(blendedG)}${hex(blendedB)}`;

      return blendedHexColor;
    }

    const usedColors = []; // Track the used colors

    // make some swatches 
    const swatchCount = 100
    for (let i = 0; i < swatchCount; i += 1) {
      const pastelColor = generateRandomPastelColor(usedColors);
      const swatch = `
				<div 
					class="swatch add-to-cart color-${i}"
          style="background-color: ${pastelColor};"
					data-color="Color ${i}" 
					data-price="${(Math.random() * 10).toFixed(2)}"></div>`
      document.querySelector('.swatches').innerHTML += swatch
    }
