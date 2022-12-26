setlocal disableDelayedExpansion
for /f "delims=" %%A in ('forfiles /s /m *.json /c "cmd /c echo @relpath"') do (
  set "file=%%~A"
  setlocal enableDelayedExpansion
  mongoimport --uri mongodb+srv://cgreggescalante:RKrNSiYr9QeZ576@cluster0.lufxlxq.mongodb.net/flashback --collection play --type json --file !file:~2! --jsonArray
  endlocal
)