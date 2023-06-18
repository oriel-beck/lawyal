import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import type { CurrentWeather } from '../../types/current-weather';
import type { Forecast } from '../../types/forecast';
import type { LocationType } from '../../types/location';
import { catchError, of } from 'rxjs';
import type { GeolocationType } from '../../types/geolocation';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  geolocationUsed = false;
  constructor(private http: HttpService, private toastr: ToastrService) { }

  getCurrentWeather(citykey: string) {
    return this.http.get<CurrentWeather[]>('currentconditions/v1/' + citykey).pipe(
      catchError(() => {
        this.toastr.error('Failed to get current weather', '', {
          positionClass: 'toast-bottom-left'
        })
        return of([]);
      })
    );
  }

  autocomplete(input: string) {
    return this.http.get<LocationType[]>('locations/v1/cities/autocomplete', { q: input }).pipe(
      catchError((err) => {
        return of([]);
      })
    );
  }

  getForcast(cityckey: string) {
    return this.http.get<Forecast>('forecasts/v1/daily/5day/' + cityckey).pipe(
      catchError(() => {
        this.toastr.error('Failed to get forecast', '', {
          positionClass: 'toast-bottom-left'
        })
        return of({ DailyForecasts: [] } as unknown as Forecast);
      })
    );
  }

  geolocation(lat: number, lon: number) {
    this.geolocationUsed = true;
    return this.http.get<GeolocationType>('locations/v1/cities/geoposition/search', { q: `${lat},${lon}` }).pipe(
      catchError(() => {
        this.toastr.error('Failed to get current location', '', {
          positionClass: 'toast-bottom-left'
        })
        return of({
          Key: "215854",
          LocalizedName: "Tel Aviv",
        })
      })
    );
  }
}

const geolocation: GeolocationType = {
  "Version": 1,
  "Key": "215666",
  "Type": "City",
  "Rank": 75,
  "LocalizedName": "Revadim",
  "EnglishName": "Revadim",
  "PrimaryPostalCode": "",
  "Region": {
    "ID": "MEA",
    "LocalizedName": "Middle East",
    "EnglishName": "Middle East"
  },
  "Country": {
    "ID": "IL",
    "LocalizedName": "Israel",
    "EnglishName": "Israel"
  },
  "AdministrativeArea": {
    "ID": "D",
    "LocalizedName": "Southern District",
    "EnglishName": "Southern District",
    "Level": 1,
    "LocalizedType": "District",
    "EnglishType": "District",
    "CountryID": "IL"
  },
  "TimeZone": {
    "Code": "IDT",
    "Name": "Asia/Jerusalem",
    "GmtOffset": 3.0,
    "IsDaylightSaving": true,
    "NextOffsetChange": "2023-10-28T23:00:00Z"
  },
  "GeoPosition": {
    "Latitude": 31.767,
    "Longitude": 34.817,
    "Elevation": {
      "Metric": {
        "Value": 78.0,
        "Unit": "m",
        "UnitType": 5
      },
      "Imperial": {
        "Value": 255.0,
        "Unit": "ft",
        "UnitType": 0
      }
    }
  },
  "IsAlias": false,
  "SupplementalAdminAreas": [],
  "DataSets": [
    "AirQualityCurrentConditions",
    "AirQualityForecasts",
    "Alerts",
    "DailyPollenForecast",
    "ForecastConfidence",
    "FutureRadar",
    "MinuteCast"
  ]
}

const autocompleteData: LocationType[] = [
  {
    "Version": 1,
    "Key": "213225",
    "Type": "City",
    "Rank": 30,
    "LocalizedName": "Jerusalem",
    "Country": {
      "ID": "IL",
      "LocalizedName": "Israel"
    },
    "AdministrativeArea": {
      "ID": "JM",
      "LocalizedName": "Jerusalem"
    }
  },
  {
    "Version": 1,
    "Key": "329548",
    "Type": "City",
    "Rank": 35,
    "LocalizedName": "Jersey City",
    "Country": {
      "ID": "US",
      "LocalizedName": "United States"
    },
    "AdministrativeArea": {
      "ID": "NJ",
      "LocalizedName": "New Jersey"
    }
  },
  {
    "Version": 1,
    "Key": "306735",
    "Type": "City",
    "Rank": 42,
    "LocalizedName": "Jerez de la Frontera",
    "Country": {
      "ID": "ES",
      "LocalizedName": "Spain"
    },
    "AdministrativeArea": {
      "ID": "AN",
      "LocalizedName": "Andalusia"
    }
  },
  {
    "Version": 1,
    "Key": "465",
    "Type": "City",
    "Rank": 51,
    "LocalizedName": "Jeremie",
    "Country": {
      "ID": "HT",
      "LocalizedName": "Haiti"
    },
    "AdministrativeArea": {
      "ID": "GA",
      "LocalizedName": "Grande Anse"
    }
  },
  {
    "Version": 1,
    "Key": "224190",
    "Type": "City",
    "Rank": 51,
    "LocalizedName": "Jerash",
    "Country": {
      "ID": "JO",
      "LocalizedName": "Jordan"
    },
    "AdministrativeArea": {
      "ID": "JA",
      "LocalizedName": "Jerash"
    }
  },
  {
    "Version": 1,
    "Key": "244895",
    "Type": "City",
    "Rank": 55,
    "LocalizedName": "Jerada",
    "Country": {
      "ID": "MA",
      "LocalizedName": "Morocco"
    },
    "AdministrativeArea": {
      "ID": "02",
      "LocalizedName": "l'Oriental"
    }
  },
  {
    "Version": 1,
    "Key": "232887",
    "Type": "City",
    "Rank": 55,
    "LocalizedName": "Jerécuaro",
    "Country": {
      "ID": "MX",
      "LocalizedName": "Mexico"
    },
    "AdministrativeArea": {
      "ID": "GUA",
      "LocalizedName": "Guanajuato"
    }
  },
  {
    "Version": 1,
    "Key": "3558846",
    "Type": "City",
    "Rank": 55,
    "LocalizedName": "Jerez",
    "Country": {
      "ID": "MX",
      "LocalizedName": "Mexico"
    },
    "AdministrativeArea": {
      "ID": "ZAC",
      "LocalizedName": "Zacatecas"
    }
  },
  {
    "Version": 1,
    "Key": "236610",
    "Type": "City",
    "Rank": 55,
    "LocalizedName": "Jerez de García Salinas",
    "Country": {
      "ID": "MX",
      "LocalizedName": "Mexico"
    },
    "AdministrativeArea": {
      "ID": "ZAC",
      "LocalizedName": "Zacatecas"
    }
  },
  {
    "Version": 1,
    "Key": "313422",
    "Type": "City",
    "Rank": 65,
    "LocalizedName": "Jerablus",
    "Country": {
      "ID": "SY",
      "LocalizedName": "Syria"
    },
    "AdministrativeArea": {
      "ID": "HL",
      "LocalizedName": "Aleppo"
    }
  }
]

const forecastData: Forecast = {
  "Headline": {
    "EffectiveDate": "2023-06-18T08:00:00+03:00",
    "EffectiveEpochDate": 1687064400,
    "Severity": 7,
    "Text": "Becoming warmer, then noticeably cooler again Sunday",
    "Category": "cooler",
    "EndDate": "2023-06-18T20:00:00+03:00",
    "EndEpochDate": 1687107600,
    "MobileLink": "http://www.accuweather.com/en/il/jerusalem/213225/daily-weather-forecast/213225?lang=en-us",
    "Link": "http://www.accuweather.com/en/il/jerusalem/213225/daily-weather-forecast/213225?lang=en-us"
  },
  "DailyForecasts": [
    {
      "Date": "2023-06-15T07:00:00+03:00",
      "EpochDate": 1686801600,
      "Temperature": {
        "Minimum": {
          "Value": 60.0,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 78.0,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 1,
        "IconPhrase": "Sunny",
        "HasPrecipitation": false
      },
      "Night": {
        "Icon": 33,
        "IconPhrase": "Clear",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/il/jerusalem/213225/daily-weather-forecast/213225?day=1&lang=en-us",
      "Link": "http://www.accuweather.com/en/il/jerusalem/213225/daily-weather-forecast/213225?day=1&lang=en-us"
    },
    {
      "Date": "2023-06-16T07:00:00+03:00",
      "EpochDate": 1686888000,
      "Temperature": {
        "Minimum": {
          "Value": 68.0,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 84.0,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 1,
        "IconPhrase": "Sunny",
        "HasPrecipitation": false
      },
      "Night": {
        "Icon": 33,
        "IconPhrase": "Clear",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/il/jerusalem/213225/daily-weather-forecast/213225?day=2&lang=en-us",
      "Link": "http://www.accuweather.com/en/il/jerusalem/213225/daily-weather-forecast/213225?day=2&lang=en-us"
    },
    {
      "Date": "2023-06-17T07:00:00+03:00",
      "EpochDate": 1686974400,
      "Temperature": {
        "Minimum": {
          "Value": 64.0,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 92.0,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 1,
        "IconPhrase": "Sunny",
        "HasPrecipitation": false
      },
      "Night": {
        "Icon": 38,
        "IconPhrase": "Mostly cloudy",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/il/jerusalem/213225/daily-weather-forecast/213225?day=3&lang=en-us",
      "Link": "http://www.accuweather.com/en/il/jerusalem/213225/daily-weather-forecast/213225?day=3&lang=en-us"
    },
    {
      "Date": "2023-06-18T07:00:00+03:00",
      "EpochDate": 1687060800,
      "Temperature": {
        "Minimum": {
          "Value": 61.0,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 80.0,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 1,
        "IconPhrase": "Sunny",
        "HasPrecipitation": false
      },
      "Night": {
        "Icon": 33,
        "IconPhrase": "Clear",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/il/jerusalem/213225/daily-weather-forecast/213225?day=4&lang=en-us",
      "Link": "http://www.accuweather.com/en/il/jerusalem/213225/daily-weather-forecast/213225?day=4&lang=en-us"
    },
    {
      "Date": "2023-06-19T07:00:00+03:00",
      "EpochDate": 1687147200,
      "Temperature": {
        "Minimum": {
          "Value": 62.0,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 79.0,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 1,
        "IconPhrase": "Sunny",
        "HasPrecipitation": false
      },
      "Night": {
        "Icon": 33,
        "IconPhrase": "Clear",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/il/jerusalem/213225/daily-weather-forecast/213225?day=5&lang=en-us",
      "Link": "http://www.accuweather.com/en/il/jerusalem/213225/daily-weather-forecast/213225?day=5&lang=en-us"
    }
  ]
}

const currentWeatherData: CurrentWeather[] = [
  {
    "LocalObservationDateTime": "2023-06-15T12:47:00+03:00",
    "EpochTime": 1686822420,
    "WeatherText": "Mostly sunny",
    "WeatherIcon": 2,
    "HasPrecipitation": false,
    "PrecipitationType": null,
    "IsDayTime": true,
    "Temperature": {
      "Metric": {
        "Value": 23.4,
        "Unit": "C",
        "UnitType": 17
      },
      "Imperial": {
        "Value": 74.0,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "MobileLink": "http://www.accuweather.com/en/il/jerusalem/213225/current-weather/213225?lang=en-us",
    "Link": "http://www.accuweather.com/en/il/jerusalem/213225/current-weather/213225?lang=en-us"
  }
]