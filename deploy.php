<?php

echo shell_exec("del /F .\.vercel\project.json");
echo shell_exec("vercel --prod");
echo shell_exec("del /F .\.vercel\project.json");