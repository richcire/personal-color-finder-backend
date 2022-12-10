//question data for front end
const QUESTIONS = {
  1: {
    Q: "How is your skin color?",
    A: {
      a: ["Bright", 2],
      b: ["Dark", 3],
    },
  },
  2: {
    Q: "what is your eye color?",
    A: {
      a: ["Bright", 4],
      b: ["Dark", 3],
    },
  },
  3: {
    Q: "When it comes to color makeup, which one goes better, pink or coral?",
    A: {
      a: ["Pink", 4],
      b: ["Coral", 5],
    },
  },
  4: {
    Q: "What about when you're dressed in black?",
    A: {
      a: ["The facial features are evident", 7],
      b: ["Face looks dark", 6],
    },
  },
  5: {
    Q: "Which accessory color suits you best?",
    A: {
      a: ["Gold", 8],
      b: ["Silver", 6],
    },
  },
  6: {
    Q: "Do subdued colors (ocher, mustard, moss, maroon, etc.) go well with you?",
    A: {
      a: ["Yes", 8],
      b: ["No", 9],
    },
  },
  7: {
    Q: "How is the thickness of your eyebrows?",
    A: {
      a: ["It's soft/normal", 8],
      b: ["it's dark", 10],
    },
  },
  8: {
    Q: "Does your skin burn well?",
    A: {
      a: ["Yes", 9],
      b: ["No", 11],
    },
  },
  9: {
    Q: "what is your image?",
    A: {
      a: ["soft and warm image", 12],
      b: ["strong and cool image", 10],
    },
  },
  10: {
    Q: "Which color goes well with you?",
    A: {
      a: ["vivid primary colors", 13],
      b: ["soft pastel colors", 14],
    },
  },
  11: {
    Q: "what is your hair color??",
    A: {
      a: ["dark brown, dark black", 14],
      b: ["light brown, soft black", 9],
    },
  },
  12: {
    Q: "Do clothes with high brightness and saturation look good on you?",
    A: {
      a: ["Yes", "springWarm"],
      b: ["No", "fallWarm"],
    },
  },
  13: {
    Q: "Which sweater color suits you?",
    A: {
      a: ["Warm color with yellow", 12],
      b: ["Cool color with blue", "summerCool"],
    },
  },
  14: {
    Q: "What color suits you if you wear a dark suit?",
    A: {
      a: ["Black, gray", "winterCool"],
      b: ["Dark brown", "fallWarm"],
    },
  },
};

//data describing spring warm personal color
const SPRING_WARM = {
  explanation:
    "'Spring Warm' usually goes well with mild pastel colors with a lot of white.\nThe advantage of 'Spring Warm Tone' is that it has a clear and lively skin tone.\nHowever, be aware that dark tones or dark shadow makeup are not suitable.",
  cardOne: {
    cardImg: "https://www.ifamily.co.kr/image/arda/result/graph_spring_wl.jpg",
    cardContent:
      "The color that harmonizes with you is a mild pastel tone with a lot of whitishness. This is far from dull pastels mixed with grey. The colors of 'Spring Warm Light' are pale tones and light tones, giving a light and mild feeling.",
  },
  cardTwo: {
    cardImg: "https://www.ifamily.co.kr/image/icolor/cometic_swl.png",
    cardContent:
      "Best styling makeup\nEyes: Lightly apply an apricot or peach color shadow. Use a brown eyeliner, but it is better to emphasize well-curled eyelashes rather than lines.\nCheek: Choose a fluorescent coral or whitish pink color.\nLip: Glossy coral color rather than matte, Alternatively, a light pink color with a yellow base suits it well.",
  },
  cardThree: {
    cardImg:
      "https://www.icolor.io/icolor/image/icolor/color_view/fashion_swl_01.jpg",
    cardContent:
      "The soft and clear color of the yellow base suits well. When you wear a light color, you get a unique feeling of vitality. Please be careful of dull autumn colors or artificial colors, as they are dry and stiff and do not look comfortable.",
  },
  cardFour: {
    cardImg:
      "https://www.icolor.io/icolor/image/icolor/color_view/fashion_swl_03.jpg",
    cardContent:
      "The lively and transparent feeling of the spring light type is really unique! So it goes well with neat colors and fine patterns. However, styles such as hip, funky, street, and surgical are often difficult to digest. Be careful with clothes with a lot of geometric patterns or clothes with a lot of gloss.",
  },
  cardFive: {
    cardImg:
      "https://www.icolor.io/icolor/image/icolor/color_view/fashion_swl_04.jpg",
    cardContent:
      "Such a lovely and innocent atmosphere with a curved mood can bring out the original delicate vitality. Muddy colors with low brightness and saturation can kill the bright and clear energy of spring worms, so it is recommended to use bright and clear colors.",
  },
};

//data describing sumemr cool personal color
const SUMMER_COOL = {
  explanation:
    "'Summer Cool' generally goes well with high-brightness, subtle pastel tones.\nThe advantage of 'Summer Cool Tone' is a fresh skin tone.\nHowever, be aware that skin irregularities can be easily noticed because of bright and transparent skin. You should.",
  cardOne: {
    cardImg: "https://www.ifamily.co.kr/image/arda/result/graph_summer_cl.jpg",
    cardContent:
      "The color that harmonizes with you is a high-brightness, soft pastel color with a slight hint of gray and blue. The color of 'summer cool' is white or light gray mixed to give a fresh feeling.",
  },
  cardTwo: {
    cardImg: "https://www.ifamily.co.kr/image/icolor/cometic_scl.png",
    cardContent:
      "Best styling makeup\nEyes: Lightly apply a pink color shadow with a lot of white light and a shimmery feel. Draw a clear and thin line with a black eyeliner.\nCheeks: You can add a sense of innocence by gently applying blush in a whiteish pink or lavender color to the center of the cheeks.\nLip: Pink color Fill the entire lips and apply. A glossy body tint suits you well.",
  },
  cardThree: {
    cardImg:
      "https://www.icolor.io/icolor/image/icolor/color_view/fashion_scl_01.jpg",
    cardContent:
      "Soft and clear colors that look like fog go well with it, and when you wear white, you can feel the unique feeling of cleanness and soft brilliance. Colors mixed with fluorescent and white are also the best colors.",
  },
  cardFour: {
    cardImg:
      "https://www.icolor.io/icolor/image/icolor/color_view/fashion_scl_03.jpg",
    cardContent:
      "Summer light type should maintain soft and gentle energy. Silk and chiffon materials that are not too glossy go well together. Flat plain cotton clothes are fine too! Avoid overly patterned knits or tweeds.",
  },
  cardFive: {
    cardImg:
      "https://www.icolor.io/icolor/image/icolor/color_view/fashion_scl_04.jpg",
    cardContent:
      "Static energy with a curvy mood and understated neatness can really bring out the original atmosphere! Always be careful not to overdo it! Also, for summer cool that go well with pastel tones mixed with white, dark colors such as black can make you look tired, so you need to be careful.",
  },
};

//data describing fall warm personal color
const FALL_WARM = {
  explanation:
    "'Autumn warm' is generally a type that goes well with low-intensity dark and shady colors.\nThe advantage of 'autumn warm tone' is that you can show off your sexy and sensual charm thanks to the dark skin tone. \nHowever, it is a tone that has certain pros and cons as it is somewhat far from innocent and girly makeup.",
  cardOne: {
    cardImg: "https://www.ifamily.co.kr/image/arda/result/graph_autumn_wd.jpg",
    cardContent:
      "The color that harmonizes with you is a deep yellow or reddish color. ‘Autumn Warm’ goes well with low-brightness dark colors mixed with red rather than high-brightness pastel tones mixed with white.",
  },
  cardTwo: {
    cardImg: "https://www.ifamily.co.kr/image/icolor/cometic_awd.png",
    cardContent:
      "Make-up\nEyes: Lay a yellowish brown shadow as a base, and use an ashy brown or khaki shadow for deep shading.\nCheek: Apply an orange-brown blusher in an oblique direction. A natural connection with shading gives a healthy and sensual look.\nLip: To emphasize eye makeup, apply skin-tone lipstick. It adds sophistication and luxury.",
  },
  cardThree: {
    cardImg:
      "https://www.icolor.io/icolor/image/icolor/color_view/fashion_awd_01.jpg",
    cardContent:
      "The vivid and deep colors of the raw base suit it well. Dark colors are luxurious and comfortable. Pale tones, dull colors, and primary colors can feel childish. Low-brightness, medium-high chroma color best! I recommend dark brown rather than black, and oatmeal color rather than pure white.",
  },
  cardFour: {
    cardImg:
      "https://www.icolor.io/icolor/image/icolor/color_view/fashion_awd_03.jpg",
    cardContent:
      "Autumn warm types have luxurious and stable energy. The antique mood is natural, and you can comfortably handle large patterns and heavy textures. A stiff shirt, cotton, linen, or knit is recommended. However, it can be difficult to create artificial-looking animated graphics and flimsy chiffon lace.",
  },
  cardFive: {
    cardImg:
      "https://www.icolor.io/icolor/image/icolor/color_view/fashion_awd_04.jpg",
    cardContent:
      "Autumn warm type suits luxurious and mature clothes. I like the combination of simple, neat clothes and colorful accessories. And a lovely and vivid mood is difficult to digest. Please be careful of fashion that is too casual and young.",
  },
};

//data describing winter cool personal color
const WINTER_COOL = {
  explanation:
    "'Winter Cool' is a type that goes well with colors mixed with black with low brightness and low saturation.\nThe advantage of 'Winter Cool' is that it exudes a chic and proud charm thanks to the white skin tone. \nHowever, you need to be careful as it can look pale if you wear delicate makeup in pastel tones.",
  cardOne: {
    cardImg: "https://www.ifamily.co.kr/image/arda/result/graph_winter_cd.jpg",
    cardContent:
      "The colors that harmonize with you are dark and deep colors with low saturation and low brightness. For ‘Winter Cool’, a dark color mixed with dark red or black is better suited than pastel tones mixed with white.",
  },
  cardTwo: {
    cardImg: "https://www.ifamily.co.kr/image/icolor/cometic_wcd.png",
    cardContent:
      "Makeup\nEyes: Apply beige color shadow with silver pearl. Draw a sharp and neat eye line with black color. Use artificial eyelashes or mascara to accentuate your eyelashes.\nCheeks: It's better not to use blusher because redness will come up.\nLip: Tone-down wine or deep burgundy lipsticks look good.",
  },
  cardThree: {
    cardImg:
      "https://www.icolor.io/icolor/image/icolor/color_view/fashion_wcd_01.jpg",
    cardContent:
      "It goes well with deep colors with a sense of weight. It is the type that suits black the best, and achromatic colors and all black are luxurious and sophisticated. Gray or warm colors are difficult to produce. In particular, when wearing cool colors, the skin color is evened out and you can feel the cleanness unique to winter.",
  },
  cardFour: {
    cardImg:
      "https://www.icolor.io/icolor/image/icolor/color_view/fashion_wcd_03.jpg",
    cardContent:
      "Winter cool type has chic and static energy. That's why I can handle the bold mood comfortably. We recommend stiff see-through, enamel, silk, sequins, and velvet materials. However, chiffon lace, flower patterns, and animation printing in a delicate mood can be difficult to create an atmosphere with conflicting energies.",
  },
  cardFive: {
    cardImg:
      "https://www.icolor.io/icolor/image/icolor/color_view/fashion_wcd_04.jpg",
    cardContent:
      "Winter cool type suits chic and mature clothes. Bold accessories or clothes that fall in straight lines are good. In particular, white pearls go well with accessories. Because it has a strong presence, even a little heavy coordination can be handled quite luxuriously. On the contrary, be careful of fashion that is lovely and too young.",
  },
};

exports.QUESTIONS = QUESTIONS;
exports.SPRING_WARM = SPRING_WARM;
exports.SUMMER_COOL = SUMMER_COOL;
exports.FALL_WARM = FALL_WARM;
exports.WINTER_COOL = WINTER_COOL;
