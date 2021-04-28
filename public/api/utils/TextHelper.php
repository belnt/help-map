<?php

class TextHelper {
    public static function num2word($num, $words) {
        $num = $num % 100;
        if ($num > 19) {
            $num = $num % 10;
        }
        switch ($num) {
            case 1: {
                return($words[0]);
            }
            case 2: case 3: case 4: {
                return($words[1]);
            }
            default: {
                return($words[2]);
            }
        }
    }

    public static function setMeters($val){
        $km = floor($val);
        $m = ($val - $km) * 1000;
        $return = '';
        if($km){
            $kmText = $km . ' ' . TextHelper::num2word($km, ['километр', 'километра', 'километров']);
            if($m != 0){
                $return = $kmText . ' ' . $m . ' метров';
            } else {
                $return = $kmText;
            }
        } else {
            $return = $m . ' метров';
        }

        return $return;
    }
}
