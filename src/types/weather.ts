export interface CurrentWeather {
    coord:      Coord;
    weather:    Weather[];
    base:       string;
    main:       Main;
    visibility: number;
    wind:       Wind;
    clouds:     Clouds;
    dt:         number;
    sys:        Sys;
    timezone:   number;
    id:         number;
    name:       string;
    cod:        number;
}
export type Clouds = {
    all: number;
}

export type Coord = {
    lon: number;
    lat: number;
}

export type Main = {
    temp:       number;
    feels_like: number;
    temp_min:   number;
    temp_max:   number;
    pressure:   number;
    humidity:   number;
}

export type Sys = {
    type:    number;
    id:      number;
    country: string;
    sunrise: number;
    sunset:  number;
}

export type Weather = {
    id:          number;
    main:        string;
    description: string;
    icon:        string;
}

export type Wind = {
    speed: number;
    deg:   number;
}
/**
 * 
 */
export interface ForecastWeather {
    city:    City;
    cod:     string;
    message: number;
    cnt:     number;
    list:    List[];
}

export interface City {
    id:         number;
    name:       string;
    coord:      Coord;
    country:    string;
    population: number;
    timezone:   number;
}

export interface List {
    dt:         number;
    sunrise:    number;
    sunset:     number;
    temp:       Temp;
    feels_like: FeelsLike;
    pressure:   number;
    humidity:   number;
    weather:    Weather[];
    speed:      number;
    deg:        number;
    gust:       number;
    clouds:     number;
    pop:        number;
    rain?:      number;
}

export interface FeelsLike {
    day:   number;
    night: number;
    eve:   number;
    morn:  number;
}

export interface Temp {
    day:   number;
    min:   number;
    max:   number;
    night: number;
    eve:   number;
    morn:  number;
}

