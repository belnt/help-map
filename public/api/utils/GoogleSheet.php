<?php

class GoogleSheet {
    public static function getData($params) {
        $help_type = $params['help_type'];
        switch ($help_type) {
            case 'can_help':
                $gid = '1xm5cOX0kAtl9AHXkfPZTuXhlZHcEIeXlpQ_DKd-_G0Y';
                break;
            case 'need_help':
                $gid = '1-iQTkbae_kzJsno4mn_-6g43w7sm68W5mdHC5WMQD7M';
                break; 
        }

        $g_table = 'http://tools.aimylogic.com/api/googlesheet2json?sheet='.$params['sheet'].'&id=' . $gid;
        $g_table_info = file_get_contents($g_table);
        $google_data = json_decode($g_table_info, true);
        $google_copy = [];
        $index = 0;
        foreach ($google_data as $key => $data) {
            if($data["point"]) {
                $google_copy[$index] = $data;                
            } else {
                continue;
            }
            switch ($data['status']) {
                case 'Актуально':
                    $status = 'actual';
                    break;
                case 'Надо еще':
                    $status = 'stillneed';
                    break;
                case 'Пока не надо':
                    $status = 'notyet';
                    break;
                case 'Больше не надо':
                    $status = 'nomore';
                    break;
                case 'Везут':
                    $status = 'inprocess';
                    break;
                
                default:
                    $status = 'actual';
                    break;
            }
            $google_copy[$index]['status'] = $status;
            if($help_type == 'can_help') {
                $google_copy[$index]['code'] = 'A-'.($key + 2);
            } else {
                $google_copy[$index]['code'] = 'B-'.($key + 2);
            }
            $index = $index + 1;
        }

        return $google_copy;
    }
}
