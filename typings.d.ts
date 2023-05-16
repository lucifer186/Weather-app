interface CurrentWeather {
    is_day: number
    temperature: Float
    time: DateTime
    weathercode: Int
    winddirection: Int
    windspeed: Int
  }
  interface Daily {
    apparent_temperature_max: [Float]
    apparent_temperature_min: [Float]
    precipitation_hours: [Int]
    precipitation_probability_max: [Int]
    precipitation_sum: [Float]
    rain_sum: [Float]
    showers_sum: [Float]
    snowfall_sum: [Int]
    sunrise: [DateTime]
    sunset: [DateTime]
    temperature_2m_max: [Float]
    temperature_2m_min: [Float]
    time: [Date]
    uv_index_clear_sky_max: [number]
    uv_index_max: [number]
    weathercode: [Int]
    winddirection_10m_dominant: [Int]
    windgusts_10m_max: [Float]
    windspeed_10m_max: [Float]
  }

  interface DailyUnits {
    apparent_temperature_max: String
    apparent_temperature_min: String
    precipitation_hours: String
    precipitation_probability_max: String
    precipitation_sum: String
    rain_sum: String
    showers_sum: String
    snowfall_sum: String
    sunrise: String
    sunset: String
    temperature_2m_max: String
    temperature_2m_min: String
    time: String
    uv_index_clear_sky_max: String
    uv_index_max: String
    weathercode: String
    winddirection_10m_dominant: String
    windgusts_10m_max: String
    windspeed_10m_max: String
  }

  interface Hourly {
    apparent_temperature: [Float]
    cloudcover: [Int]
    cloudcover_high: [Int]
    cloudcover_low: [Int]
    cloudcover_mid: [Int]
    dewpoint_2m: [Float]
    precipitation_probability: [Int]
    pressure_msl: [Float]
    rain: [Float]
    relativehumidity_2m: [Int]
    showers: [Float]
    snow_depth: [Int]
    snowfall: [Int]
    surface_pressure: [Float]
    temperature_2m: [Float]
    time: [DateTime]
    uv_index: [Float]
    uv_index_clear_sky: [Float]
    vapor_pressure_deficit: [Float]
    visibility: [Int]
    weathercode: [Int]
  }

  interface HourlyUnits {
    apparent_temperature: String
    cloudcover: String
    cloudcover_high: String
    cloudcover_low: String
    cloudcover_mid: String
    dewpoint_2m: String
    precipitation_probability: String
    pressure_msl: String
    rain: String
    relativehumidity_2m: String
    showers: String
    snow_depth: String
    snowfall: String
    surface_pressure: String
    temperature_2m: String
    time: String
    uv_index: String
    uv_index_clear_sky: String
    vapor_pressure_deficit: String
    visibility: String
    weathercode: String
  }
  interface Root {
    current_weather: CurrentWeather
    daily: Daily
    daily_units: DailyUnits
    elevation: Int
    generationtime_ms: Float
    hourly: Hourly
    hourly_units: HourlyUnits
    latitude: Float
    longitude: Float
    timezone: String
    timezone_abbreviation: String
    utc_offset_seconds: Int
  }