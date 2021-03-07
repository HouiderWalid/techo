<!DOCTYPE html>
<html dir="auto" lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel</title>
    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Cairo', sans-serif;
            text-align: start;
        }
    </style>
    <link rel="stylesheet" type="text/css" href="{{ mix('css/app.css')  }}">
    <script type="" src="{{ mix('js/app.js') }}" defer></script>
    <script src="https://use.fontawesome.com/1f3b2c2137.js" defer></script>
</head>
<body class="position-relative">
    <div id="app">
        <router-view></router-view>
    </div>
</body>
</html>
