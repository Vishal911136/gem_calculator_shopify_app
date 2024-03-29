import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchThemeSettings = createAsyncThunk(
    'themeStyle/fetchSettings',
    async (apiKey) => {
      const response = await axios.get(apiKey); // Assuming apiKey includes the full URL
      return response.data; // Assuming the API returns the theme settings directly
    }
  );

const initialState = {
    data:{
        "design": {
            "theme": 1,
            "header": {
                "enable": true,
                "img": "/assets/guid4.png"
            },
            "title": {
                "enable": true,
                "text": "this is sample template",
                "color": "red"
            },
            "form": {
                "color": "red"
            },
            "tableimage": {
                "enable": true,
                "img": "/assets/guid4.png"
            },
            "resultbox": {
                "userinput": true,
                "rashidetails": true,
                "gems": true,
                "bracelet": true,
                "rudraksh": true,
                "product": true
            },
            "footer": {
                "enable": true,
                "img": "/assets/guid4.png"
            }
        },
        "rudraksh":[
            {
                "name": "one-Mukhi Rudraksha",
                "img": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/1-mukhi-rudraksha.webp",
                "description": "spiritual enlightenment, peace, prosperity, and good luck",
                "link": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/1-mukhi-rudraksha.webp"
            },
            {
                "name": "Two-Mukhi Rudraksha",
                "img": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/2-mukhi-rudraksha.webp",
                "description": "Enhances leadership qualities, courage, and self-confidence",
                "link": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/2-mukhi-rudraksha.webp"
            },
            {
                "name": "Three-Mukhi Rudraksha",
                "img": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/3-mukhi-rudraksha.webp",
                "description": "freed from sins, karmic debts and past life memories",
                "link": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/3-mukhi-rudraksha.webp"
            },
            {
                "name": "Four-Mukhi Rudraksha",
                "img": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/4-mukhi-rudraksha.webp",
                "description": "This Rudraksha positively affects speech of the person",
                "link": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/4-mukhi-rudraksha.webp"
            },
            {
                "name": "Six-Mukhi Rudraksha",
                "img": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/6-mukhi-rudraksha.webp",
                "description": "It gives Health, Wealth and Happiness as well as Luxuries and Pleasures",
                "link": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/6-mukhi-rudraksha.webp"
            },
            
            {
                "name": "Seven-Mukhi Rudraksha",
                "img": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/7-mukhi-rudraksha.webp",
                "description": "it gives Wealth and Happiness also enhances the Spiritual Growth",
                "link": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/7-mukhi-rudraksha.webp"
            },
            {
                "name": "Nine-Mukhi Rudraksha",
                "img": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/9-mukhi-rudraksha.webp",
                "description": "this Rudraksha protects from the malefic effects of all the 9 planets",
                "link": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/9-mukhi-rudraksha.webp"
            },
            {
                "name": "Thirteen-Mukhi Rudraksha",
                "img": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/13-mukhi-rudraksha.webp",
                "description": "It helps to achieve perfection in Alchemy, Research work and Medicines",
                "link": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/13-mukhi-rudraksha.webp"
            }
        ],
        "gems":[
            {
                "name": "Moonga",
                "img": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/Moonga.png",
                "description": "calming emotions and helping alleviate feelings of anxiety",
                "link": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/Moonga.png"
            },
            {
                "name": "Panna",
                "img": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/Panna.png",
                "description": "providing good health, wisdom, prosperity, creative skills and blissful marital life",
                "link": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/Panna.png"
            },
            {
                "name": "Ruby",
                "img": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/ruby-manik.webp",
                "description": "boost of self-confidence and passion toward life",
                "link": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/ruby-manik.webp"
            },
            {
                "name": "Neelam",
                "img": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/Neelam.png",
                "description": "provides protection from accidents and problems caused due to the natural disaster",
                "link": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/Neelam.png"
            },
            {
                "name": "Opal",
                "img": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/opal-1.webp",
                "des": "turns its wearer into a loving, caring and affectionate person",
                "link": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/opal-1.webp"
            },
            {
                "name": "Pukhraj(Yellow sapphire)",
                "img": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/Pukhraj(Yellow%20sapphire).png",
                "des": "Success in business, jobs, academics,Improved financial status",
                "link": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/Pukhraj(Yellow%20sapphire).png"
            },
            {
                "name": "Amethyst",
                "img": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/amethyst.webp",
                "des": "protected from anxiety, anger, curses and jealousy",
                "link": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/amethyst.webp"
            }
        ],
        "bracelet":[
            {
                "name": "Sun stone",
                "img": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/sunstone.webp",
                "description": "lighten up one's bad moods and can be a natural anti-depressant",
                "link": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/sunstone.webp"
            },
            {
                "name": "Amethyst",
                "img": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/amethyst-bracelet.webp",
                "description": "promote relaxation, relieving stress and anxiety",
                "link": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/amethyst-bracelet.webp"
            },
            {
                "name": "7-chakra",
                "img": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/7-chakra-bracelet.webp",
                "description": "promote relaxation, relieving stress and anxiety",
                "link": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/7-chakra-bracelet.webp"
            },
            {
                "name": "Natural turquise",
                "img": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/turquoise-bracelet.webp",
                "description": "Enhances leadership qualities, courage, and self-confidence",
                "link": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/turquoise-bracelet.webp"
            },
            {
                "name": "Cat eye",
                "img": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/silliminate-bracelet.webp",
                "description": "enhancing its capacity for thought and decision-making",
                "link": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/silliminate-bracelet.webp"
            },
            {
                "name": "Golden obsidian",
                "img": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/golden-obsidian-bracelet.webp",
                "description": "promote self-reflection and inner growth",
                "link": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/golden-obsidian-bracelet.webp"
            },
            {
                "name": "Green aventurian",
                "img": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/aventurine-bracelet.webp",
                "description": "acts as a money magnet as it attracts good luck, fortune and wealth",
                "link": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/aventurine-bracelet.webp"
            },
            {
                "name": "Rudraksh crystal",
                "img": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/rudraksha-crystal-bracelet.webp",
                "description": "promotes overall health, invites wealth, abundance and prosperity",
                "link": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/rudraksha-crystal-bracelet.webp"
            },
            {
                "name": "Dalmatian",
                "img": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/dalmatian-bracelet.webp",
                "des": "It increases loyalty and is beneficial for long term relationships",
                "link": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/dalmatian-bracelet.webp"
            },
            {
                "name": "Rose quartz",
                "img": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/rose-quartz-bracelet.webp",
                "des": "Balances the heart chakra and helps in attracting potential love",
                "link": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/rose-quartz-bracelet.webp"
            },
            {
                "name": "Tiger eye",
                "img": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/tigers-eye-bracelet.webp",
                "des": "help block out bad energy and increase your internal power",
                "link": ""
            },
            {
                "name": "Sodalite",
                "img": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/sodalite-bracelet.webp",
                "des": "brings order and calmness to the mind",
                "link": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/sodalite-bracelet.webp"
            },
            {
                "name": "Hematite",
                "img": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/hematite-gunmetal-bracelet.webp",
                "des": "reducing stress and anxiety",
                "link": "https://gemescalculatorfrontend.bloomxapi.in/design1/assets/hematite-gunmetal-bracelet.webp"
            }
        ]
    }
}

export const themeSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
      // Your reducers for synchronous actions here
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchThemeSettings.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchThemeSettings.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.data = action.payload; // Assuming the payload is the complete theme data
        })
        .addCase(fetchThemeSettings.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });

export default themeSlice.reducer;