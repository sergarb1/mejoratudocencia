param(
    [Parameter(Mandatory=$true, HelpMessage="Ruta al archivo MP3")]
    [string]$Mp3Path,

    [Parameter(Mandatory=$false, HelpMessage="Ruta al PNG de la story (por defecto: story exportado)")]
    [string]$StoryPng = "02-vacaciones-story.png",

    [Parameter(Mandatory=$false, HelpMessage="Nombre del video de salida (sin extensión)")]
    [string]$OutputName = "02-vacaciones-story-video"
)

$ErrorActionPreference = "Stop"

if (-not (Test-Path $Mp3Path)) {
    Write-Error "No se encuentra el MP3: $Mp3Path"
    exit 1
}
if (-not (Test-Path $StoryPng)) {
    Write-Error "No se encuentra la imagen: $StoryPng`nExportala primero desde story.html con el botón 'Descargar Story'"
    exit 1
}

# Get audio duration from ffmpeg
Write-Host "Leyendo duración del audio..." -ForegroundColor Cyan
$duration = & ffmpeg -i $Mp3Path 2>&1 | Select-String -Pattern "Duration: (\d+:\d+:\d+\.\d+)" | ForEach-Object { $_.Matches.Groups[1].Value }

if (-not $duration) {
    Write-Error "No se pudo leer la duración del MP3"
    exit 1
}

Write-Host "Duración: $duration" -ForegroundColor Green
Write-Host "Generando video..." -ForegroundColor Cyan

# Create video: loop image for audio duration, add audio track
& ffmpeg -loop 1 -i $StoryPng -i $Mp3Path `
    -c:v libx264 -t $duration -pix_fmt yuv420p -vf "scale=1080:1920:force_original_aspect_ratio=decrease,pad=1080:1920:(ow-iw)/2:(oh-ih)/2" `
    -c:a aac -b:a 192k -shortest `
    -y "$OutputName.mp4"

if ($LASTEXITCODE -eq 0) {
    Write-Host "Video creado: $OutputName.mp4" -ForegroundColor Green
} else {
    Write-Error "Error al generar el video"
}
