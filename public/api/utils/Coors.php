<?php 

class Coors {
    public static function getGeoposition($params) {
        $geocode_api = 'https://geocode-maps.yandex.ru/1.x/?format=json&apikey=3394fc7a-f6b3-491f-a0fa-d7d7b4abfcd3&geocode=';

        $vowels = [" ", ","];

        //строка запроса для yandex
        //$query_string = $params["city"].' '.$params["place_query"];
        $url = str_replace($vowels, "+", $params["city"].' '.$params["address"]);
        //$url = 'Минск+улица+Червякова+14';
        $query_string = rawurlencode($url);


        //находим точку где нахрдится человек - массив
        $geocode_location = file_get_contents($geocode_api.$query_string);
        $geocode_data = json_decode($geocode_location, true);

        $geo_point_str = []; 
        $geo_point_str_use = explode(" ", $geocode_data["response"]["GeoObjectCollection"]["featureMember"][0]["GeoObject"]["Point"]["pos"]);
        $geo_point_str[0] = (float)$geo_point_str_use[1];
        $geo_point_str[1] = (float)$geo_point_str_use[0];

        $data_responce = [
            'lat' => $geo_point_str[0],
            'lon' => $geo_point_str[1]
        ];

        return $data_responce;
    }
}