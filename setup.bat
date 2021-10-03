title Whimsey Studios Devtool Setup

@echo off
cls
color 0a

echo *******************************************************************************
echo                      Whimsey Digital (Shanghai) Co., Ltd.
echo            Copyright 2020-2021 Whimsey Digital All Rights Reserved.
echo *******************************************************************************

call npm run build

copy dist\define.d.ts define.d.ts
copy dist\define.js define.js
copy dist\define.js.map define.js.map

copy dist\devtool.d.ts devtool.d.ts
copy dist\devtool.js devtool.js
copy dist\devtool.js.map devtool.js.map

copy dist\msgdef.d.ts msgdef.d.ts
copy dist\msgdef.js msgdef.js
copy dist\msgdef.js.map msgdef.js.map

copy dist\pluginx.d.ts pluginx.d.ts
copy dist\pluginx.js pluginx.js
copy dist\pluginx.js.map pluginx.js.map

call npm pack

del /f /q define.d.ts
del /f /q define.js
del /f /q define.js.map

del /f /q devtool.d.ts
del /f /q devtool.js
del /f /q devtool.js.map

del /f /q msgdef.d.ts
del /f /q msgdef.js
del /f /q msgdef.js.map

del /f /q pluginx.d.ts
del /f /q pluginx.js
del /f /q pluginx.js.map

pause
