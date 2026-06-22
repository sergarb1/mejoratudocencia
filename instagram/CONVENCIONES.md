# Convenciones para posts de Instagram

## layout.png (1254×1254)

- **Área blanca:** x=40-1216, y=37-1223
- **Zona segura para texto:** x=80-1180 (1100px), y=60-960 (900px)
- **Zona segura con decoraciones finas (solo líneas laterales):** y=37-982
- **Decoraciones mayores empiezan en:** y=983+
- **Elementos decorativos:**
  - Línea azul izq: x=30-35, recorre todo el alto
  - Línea verde dcha: x=1220-1225, recorre todo el alto
  - Barra degradada arriba: y=0-36
  - Estrella amarilla centrada: y=1040-1080 (x≈620-640)
  - Hoja/bola verde centrada: y=1140 (x≈580-680)
  - Puntos oscuros centrados: y=1090, y=1170
- html2canvas scale: 1080/1254

## Estructura de cada slide

Todos los slides siguen la misma estructura:

```css
.slide .content {
  padding: 60px 90px 300px;   /* 300px bottom = brand a salvo en y~960 */
  justify-content: space-between;
}
```

```
.content (space-between)
  .top (flex: 1, justify-content: space-between)
    ... contenido principal ...
  .bottom-brand (marca al fondo, dentro del área blanca)
```

### Slide 1 (Cover)
- `.top` con `.top-inner` (flex: 1, center) para contenido centrado + `.swipe` al fondo de `.top`
- `.bottom-brand` fuera de `.top`

### Slide 2 (contenido con pocos elementos)
- `.top` flex: 1, `justify-content: space-between` — distribuye hijos uniformemente en todo el alto

### Slide 3+ (contenido denso)
- `.top` flex: 1, sin space-between (flex-start) — el contenido fluye naturalmente, `.bottom-brand` fuera

## Alineación vertical
- Todo el contenido vive en y=60 a y=960 (zona blanca limpia, 900px útiles)
- `.bottom-brand` termina en y~960 (antes de decoraciones)
- `justify-content: space-between` dentro de `.top` distribuye hijos uniformemente

## Tamaños de fuente (para canvas 1254×1254 → export 1080×1080)

| Elemento | px |
|----------|----|
| emoji-xl | 80 |
| h1 cover | 104 |
| hook cover | 32 |
| sub cover | 26 |
| swipe | 24 |
| h2 | 72 |
| sub2 | 26 |
| ciclo num | 46 |
| ciclo desc | 24 |
| ciclo emoji | 38 |
| extra | 17 |
| gap ciclos | 20 |
| tip | 26 |
| h3 | 64 |
| sub3 | 26 |
| regla icon | 46 |
| regla tit | 22 |
| regla desc | 14 |
| reglas grid gap | 16 |
| divider margin | 32+24 |
| results item | 22 |
| results check | 30 |
| cta | 28 |
| cta mt | 32 |
| cta small | 18 |
| bottom-brand | 24 |

## html2canvas
- No funciona desde `file://` (CORS)
- Servir con `python -m http.server`
- Esperar `document.fonts.ready` antes de capturar
- `scale: 1080/1254` produce PNG de 1080×1080
