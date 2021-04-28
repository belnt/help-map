<?php

class Point {
    public $x, $y, $distance, $data;

    public function __construct($pointData) {
        $this->x = (float)$pointData['lat'];
        $this->y = (float)$pointData['lon'];
        $this->data = $pointData;
    }

    public function distanceTo(Point $point) {
        $lat1 = $this->x;
        $lon1 = -$this->y;
        $lat2 = $point->x;
        $lon2 = -$point->y;

        $theta = $lon1 - $lon2;
        $dist = sin(deg2rad($lat1)) * sin(deg2rad($lat2)) +  cos(deg2rad($lat1)) * cos(deg2rad($lat2)) * cos(deg2rad($theta));
        $dist = acos($dist);
        $dist = rad2deg($dist);
        $miles = $dist * 60 * 1.1515;

        $distance = $miles * 1.609344;

        $point->distance = $distance;

        return $distance;
    }

    public function getNearPlace($places_available) {
        $points = [];
        foreach ($places_available as $dpoint) {
            $points[] = new Point($dpoint);
        }

        $curNearestPoint = $points[0];
        $curNearestDistance = $this->distanceTo($curNearestPoint);

        foreach ($points as $point) {
            $distance = $this->distanceTo($point);

            if ($distance < $curNearestDistance) {
                $curNearestPoint = $point;
                $curNearestDistance = $distance;
            }
        }

        return $curNearestPoint;
    }
}
