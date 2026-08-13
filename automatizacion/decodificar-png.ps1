param(
    [Parameter(Mandatory = $true)][string]$Base64File,
    [Parameter(Mandatory = $true)][string]$OutputPng
)

$raw = Get-Content -LiteralPath $Base64File -Raw

# Extraer el valor si viene envuelto como JSON: {"result":"data:image/png;base64,..."} o "data:image/...;base64,..."
$json = $raw | ConvertFrom-Json -ErrorAction SilentlyContinue
if ($null -ne $json) {
    $b64 = $json.result
    if ($null -eq $b64) { $b64 = $json.Value }
    if ($null -eq $b64) { $b64 = $raw }
} else {
    $b64 = $raw
}

$b64 = [string]$b64
$b64 = $b64 -replace '^data:image/png;base64,', ''
$b64 = ($b64 -replace '["\s]', '')

if ($b64 -match '^[A-Za-z0-9+/=]+$') {
    [System.IO.File]::WriteAllBytes($OutputPng, [System.Convert]::FromBase64String($b64))
    Write-Output "OK: $OutputPng ($((Get-Item $OutputPng).Length) bytes)"
} else {
    Write-Error "El contenido de $Base64File no parece base64 de imagen PNG."
    exit 1
}