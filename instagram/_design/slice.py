"""Corta el póster de 3240×2700 en las seis piezas de 1080×1350 (4:5)
y arma las vistas previas. Se ejecuta desde build.sh."""

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
POSTS = ROOT / "posts"
HE_POSTS = ROOT / "posts-he"
ALTERNATES = ROOT / "alternativas"

PIECES = [
    ("01-marca", 0, 0),
    ("02-hero", 1, 0),
    ("03-sobre-mi", 2, 0),
    ("04-vinyasa-ashtanga", 0, 1),
    ("05-vinyasa-flow", 1, 1),
    ("06-vinculacion-corporal", 2, 1),
]

HE_PIECES = [
    ("01-marca-he", 0, 0),
    ("02-hero-he", 1, 0),
    ("03-sobre-mi-he", 2, 0),
    ("04-vinyasa-ashtanga-he", 0, 1),
    ("05-vinyasa-flow-he", 1, 1),
    ("06-vinculacion-corporal-he", 2, 1),
]

TILE_W = 1080
TILE_H = 1350
# La grilla de Instagram muestra un recorte 3:4 del post 4:5.
GRID_CROP_W = 1013
GRID_CROP_LEFT = (TILE_W - GRID_CROP_W) // 2

POSTS.mkdir(exist_ok=True)
HE_POSTS.mkdir(exist_ok=True)
ALTERNATES.mkdir(exist_ok=True)


def save_jpg(image: Image.Image, path: Path) -> None:
    image.save(
        path,
        format="JPEG",
        quality=95,
        subsampling=1,
        optimize=True,
        progressive=True,
    )


def crop_tile(sheet: Image.Image, column: int, row: int) -> Image.Image:
    return sheet.crop(
        (
            column * TILE_W,
            row * TILE_H,
            (column + 1) * TILE_W,
            (row + 1) * TILE_H,
        )
    )


def grid_tile(tile: Image.Image) -> Image.Image:
    return tile.crop(
        (GRID_CROP_LEFT, 0, GRID_CROP_LEFT + GRID_CROP_W, TILE_H)
    )


poster = Image.open(ROOT / "_design" / ".poster-render.png").convert("RGB")
if poster.size != (TILE_W * 3, TILE_H * 2):
    raise SystemExit(f"El póster mide {poster.size}, se esperaba 3240×2700")

for name, column, row in PIECES:
    save_jpg(crop_tile(poster, column, row), POSTS / f"{name}.jpg")

# Vista previa de cómo se ve la grilla 3:4 del perfil.
gap = 10
grid = Image.new(
    "RGB",
    (GRID_CROP_W * 3 + gap * 2, TILE_H * 2 + gap),
    "white",
)
for name, column, row in PIECES:
    tile = grid_tile(Image.open(POSTS / f"{name}.jpg").convert("RGB"))
    grid.paste(tile, (column * (GRID_CROP_W + gap), row * (TILE_H + gap)))
grid.save(POSTS / "grid-preview.jpg", quality=92, optimize=True, progressive=True)

# Póster completo (4:5) a mitad de tamaño, para revisar el diseño.
poster.resize((1620, 1350), Image.LANCZOS).save(
    ROOT / "_design" / "poster-preview.jpg",
    quality=90,
    optimize=True,
    progressive=True,
)

# Versión en hebreo: seis piezas independientes para el segundo slide.
he_poster = Image.open(ROOT / "_design" / ".poster-he-render.png").convert("RGB")
if he_poster.size != (TILE_W * 3, TILE_H * 2):
    raise SystemExit(f"El póster hebreo mide {he_poster.size}, se esperaba 3240×2700")

for name, column, row in HE_PIECES:
    save_jpg(crop_tile(he_poster, column, row), HE_POSTS / f"{name}.jpg")

he_grid = Image.new(
    "RGB",
    (GRID_CROP_W * 3 + gap * 2, TILE_H * 2 + gap),
    "white",
)
for name, column, row in HE_PIECES:
    tile = grid_tile(Image.open(HE_POSTS / f"{name}.jpg").convert("RGB"))
    he_grid.paste(tile, (column * (GRID_CROP_W + gap), row * (TILE_H + gap)))
he_grid.save(HE_POSTS / "preview-he.jpg", quality=92, optimize=True, progressive=True)

he_poster.resize((1620, 1350), Image.LANCZOS).save(
    ROOT / "_design" / "poster-he-preview.jpg",
    quality=90,
    optimize=True,
    progressive=True,
)

# Alternativas, ya renderizadas como una sola pieza 1080×1350.
alternate_render = ROOT / "_design" / ".poster-alt-render.png"
if alternate_render.exists():
    alternate = Image.open(alternate_render).convert("RGB")
    if alternate.size != (TILE_W, TILE_H):
        raise SystemExit(
            f"La alternativa mide {alternate.size}, se esperaba 1080×1350"
        )
    save_jpg(alternate, ALTERNATES / "yoga-tercera-edad.jpg")

he_alternate_render = ROOT / "_design" / ".poster-he-alt-render.png"
if he_alternate_render.exists():
    he_alternate = Image.open(he_alternate_render).convert("RGB")
    if he_alternate.size != (TILE_W, TILE_H):
        raise SystemExit(
            f"La alternativa hebrea mide {he_alternate.size}, se esperaba 1080×1350"
        )
    save_jpg(he_alternate, ALTERNATES / "yoga-tercera-edad-he.jpg")

print(
    f"{len(PIECES)} piezas ES, {len(HE_PIECES)} piezas HE y alternativas generadas."
)
