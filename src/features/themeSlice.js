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
    data: {
        data: {
            "design": {
                "theme": 1,
                "header": {
                    "img": "http://localhost:3000/assets/MainBanner.png",
                    "enable": true
                },
                "title": {
                    "enable": true,
                    "color": "blank",
                    "text": "Discover Your Rashi, Gemstones, Rudraksha and Bracelet Recommendation"
                },
                "form": {
                    "color": "blue"
                },
                "tableimage": {
                    "img": "http://localhost:3000/assets/sidebar.png",
                    "enable": false
                },
                "footer": {
                    "img": "http://localhost:3000/assets/creative-img.jpg",
                    "enable": true
                },
                "rudraksh": [
                    {
                        "name": "one-Mukhi Rudraksha",
                        "img": null,
                        "description": null,
                        "link": null
                    },
                    {
                        "name": "Two-Mukhi Rudraksha",
                        "img": null,
                        "description": null,
                        "link": null
                    },
                    {
                        "name": "Three-Mukhi Rudraksha",
                        "img": null,
                        "description": null,
                        "link": null
                    },
                    {
                        "name": "Four-Mukhi Rudraksha",
                        "img": null,
                        "description": null,
                        "link": null
                    },
                    {
                        "name": "Six-Mukhi Rudraksha",
                        "img": null,
                        "description": null,
                        "link": null
                    },
                    {
                        "name": "Seven-Mukhi Rudraksha",
                        "img": null,
                        "description": null,
                        "link": null
                    },
                    {
                        "name": "Nine-Mukhi Rudraksha",
                        "img": null,
                        "description": null,
                        "link": null
                    },
                    {
                        "name": "Thirteen-Mukhi Rudraksha",
                        "img": null,
                        "description": null,
                        "link": null
                    }
                ],
                "gems": [
                    {
                        "name": "Moonga",
                        "img": null,
                        "description": null,
                        "link": null
                    },
                    {
                        "name": "Panna",
                        "img": null,
                        "description": null,
                        "link": null
                    },
                    {
                        "name": "Ruby",
                        "img": null,
                        "description": null,
                        "link": null
                    },
                    {
                        "name": "Neelam",
                        "img": null,
                        "description": null,
                        "link": null
                    },
                    {
                        "name": "Opal",
                        "img": null,
                        "description": null,
                        "link": null
                    },
                    {
                        "name": "Pukhraj(Yellow sapphire)",
                        "img": null,
                        "description": null,
                        "link": null
                    },
                    {
                        "name": "Amethyst",
                        "img": null,
                        "description": null,
                        "link": null
                    }
                ],
                "bracelet": [
                    {
                        "name": "Sun stone",
                        "img": null,
                        "description": null,
                        "link": "hello"
                    },
                    {
                        "name": "Amethyst",
                        "img": null,
                        "description": null,
                        "link": "hello"
                    },
                    {
                        "name": "7-chakra",
                        "img": null,
                        "description": null,
                        "link": "hello"
                    },
                    {
                        "name": "Natural turquise",
                        "img": null,
                        "description": null,
                        "link": "hello"
                    },
                    {
                        "name": "Cat eye",
                        "img": null,
                        "description": null,
                        "link": "hello"
                    },
                    {
                        "name": "Golden obsidian",
                        "img": "test",
                        "description": null,
                        "link": "hello"
                    },
                    {
                        "name": "Green aventurian",
                        "img": null,
                        "description": null,
                        "link": "hello"
                    },
                    {
                        "name": "Rudraksh crystal",
                        "img": "test",
                        "description": null,
                        "link": "hello"
                    },
                    {
                        "name": "Dalmatian",
                        "img": null,
                        "description": null,
                        "link": "hello"
                    },
                    {
                        "name": "Rose quartz",
                        "img": "test",
                        "description": null,
                        "link": "hello"
                    },
                    {
                        "name": "Tiger eye",
                        "img": "test",
                        "description": null,
                        "link": "hello"
                    },
                    {
                        "name": "Sodalite",
                        "img": null,
                        "description": null,
                        "link": "hello"
                    },
                    {
                        "name": "Hematite",
                        "img": null,
                        "description": null,
                        "link": "hello"
                    }
                ],
                "resultbox": {
                    "userinput": true,
                    "rashidetails": true,
                    "gems": true,
                    "bracelet": true,
                    "rudraksh": true,
                    "product": true
                }
            }
        }
      },
}

export const themeSlice = createSlice({
    name: 'themeStyle',
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