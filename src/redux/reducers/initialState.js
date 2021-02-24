const initialState = {
  tracker: {
    selectedCountries: { value: "", options: null },
    country: null,
    countries: [],
    history: {},
    countryHistory: {},
  },
  apiStatus: 0,
  map: null,
};

export default initialState;
