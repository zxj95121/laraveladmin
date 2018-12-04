<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;

use App\Models\AdminConfigWeb as ConfigModel;
use Storage;
class HomeController extends BaseController
{
    public function home()
    {
    	$config = ConfigModel::first();

    	$assign = array(
    		'web_name' => $config['web_name'],
    		'web_image' => '/upload/' . $config['web_image']
    	);
    	return view('welcome', $assign);
    }
}
