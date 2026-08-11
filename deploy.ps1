$ErrorActionPreference = "Continue"

Set-Location $PSScriptRoot

$nodeDir = "C:\Users\Aakash\AppData\Local\nodejs\node-v20.18.1-win-x64"
$env:PATH = "$nodeDir;" + $env:PATH

Write-Host "Building site..."
& "$nodeDir\npm.cmd" run build
if ($LASTEXITCODE -ne 0) { throw "build failed" }

$origin = git config --get remote.origin.url
if (-not $origin) { throw "no git remote found" }

$tmp = Join-Path $env:TEMP "kp-gh-pages"
if (Test-Path $tmp) { Remove-Item $tmp -Recurse -Force }
git clone -q . $tmp
if ($LASTEXITCODE -ne 0) { throw "clone failed" }
git -C $tmp config user.name "aakashprabu88-cell"
git -C $tmp config user.email "aakashprabu88-cell@users.noreply.github.com"
git -C $tmp checkout --orphan gh-pages 2>$null
git -C $tmp rm -rf . 2>$null
Copy-Item -Path "$PSScriptRoot\out\*" -Destination $tmp -Recurse -Force
git -C $tmp add -A
git -C $tmp commit -m "deploy kp-cuts"
if ($LASTEXITCODE -ne 0) { throw "commit failed" }
git -C $tmp remote set-url origin $origin
git -C $tmp push origin gh-pages --force
if ($LASTEXITCODE -ne 0) { throw "push failed" }

Remove-Item $tmp -Recurse -Force
Write-Host "Done. Live at https://aakashprabu88-cell.github.io/kp-cuts/"
