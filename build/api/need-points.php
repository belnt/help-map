<?php
require_once 'utils/GoogleSheet.php';

header('Content-type: text/plain; charset=utf-8');
header('Access-Control-Allow-Origin: *');

$data = file_get_contents('php://input');
$input_data = json_decode($data, true);

$google_data = GoogleSheet::getData([
    'help_type' => 'need_help',
    'sheet' => 1
]);

$return = [];

foreach ($google_data as $key => $data) {
    $str = explode(", ", $data['point']);

    $return[$key]['date'] = $data['отметкавремени'];
    $return[$key]['status'] = $data['status'];
    $return[$key]['nickname'] = $data['имяконтактадляобращения'];
    $return[$key]['address'] = $data['адрес'];
    $return[$key]['lat'] = $str[0];
    $return[$key]['lon'] = $str[1];
    $return[$key]['contact'] = $data['контакт'];
    $return[$key]['help'] = $data['нуждаюсьвпомощи'];
    $return[$key]['is_auto'] = $data['наличиетранспорта'];
    $return[$key]['comments'] = $data['вашкомментарий'];
    $return[$key]['code'] = $data['code'];
}

$data_responce = [
    'points' => $return
];

header('Content-type: application/json');
echo json_encode($data_responce);
