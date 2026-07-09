import { createSlice } from "@reduxjs/toolkit";
import type { Attraction } from "@/lib/tourist-data";
import { attractions as allAttractions, experiences as allExperiences } from "@/lib/tourist-data";

interface TouristState {
  attractions: Attraction[];
  experiences: { title: string; places: string; duration: string; tip: string }[];
}

const initialState: TouristState = {
  attractions: allAttractions,
  experiences: allExperiences,
};

const touristSlice = createSlice({
  name: "tourist",
  initialState,
  reducers: {},
});

export const selectAttractions = (state: { tourist: TouristState }) => state.tourist.attractions;
export const selectExperiences = (state: { tourist: TouristState }) => state.tourist.experiences;
export const selectAttractionBySlug = (slug: string) => (state: { tourist: TouristState }) =>
  state.tourist.attractions.find((a) => a.slug === slug);

export default touristSlice.reducer;
