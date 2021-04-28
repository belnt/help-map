<?php
require_once 'utils/Coors.php';

header('Content-type: text/plain; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

$data = file_get_contents('php://input');
$input_data = json_decode($data, true);

$hook = 'https://hook.integromat.com/x88kk1rnf4cd7l7pjf622b7p69ung75f';

$city = $input_data['city'];
$address = $input_data['address'];
$type = $input_data['type'];

$geoposition = Coors::getGeoposition($input_data);

$input_data['point'] = $geoposition['lat'].', '.$geoposition['lon'];
$input_data['address'] = $input_data['city'].', '.$input_data['address'];

unset($input_data['city']);

$result = file_get_contents($hook, false, stream_context_create(
    [
        'http' => [
            'method'  => 'POST',
            'header'  => 'Content-type: application/json',
            'content' => json_encode($input_data)
        ]
    ]
));
