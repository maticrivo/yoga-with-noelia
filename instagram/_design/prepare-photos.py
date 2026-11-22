"""Prepara las fotos reales de las clases para el mosaico.

Recorta a 4:3, aplica un blanco y negro cálido (para unificar las fotos
nocturnas, las de interior y las que ya venían en blanco y negro) y guarda
los archivos que usa poster.html en source/.

Requiere macOS (sips) para convertir los HEIC.
"""

import subprocess
import tempfile
from pathlib import Path

from PIL import Image, ImageEnhance, ImageOps

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "source"


def load(path: Path) -> Image.Image:
    if path.suffix.lower() == ".heic":
        with tempfile.NamedTemporaryFile(suffix=".jpg", delete=False) as tmp:
            tmp_path = Path(tmp.name)
        subprocess.run(
            [
                "sips",
                "-s",
                "format",
                "jpeg",
                "-s",
                "formatOptions",
                "100",
                str(path),
                "--out",
                str(tmp_path),
            ],
            check=True,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
        )
        image = Image.open(tmp_path).convert("RGB")
        tmp_path.unlink(missing_ok=True)
        return image
    return Image.open(path).convert("RGB")


def crop_ratio(
    image: Image.Image,
    ratio: float = 4 / 3,
    center_x: float = 0.5,
    center_y: float = 0.5,
    width_ratio: float = 1.0,
) -> Image.Image:
    width, height = image.size
    crop_width = min(width, height * ratio) * width_ratio
    crop_height = crop_width / ratio
    left = width * center_x - crop_width / 2
    top = height * center_y - crop_height / 2
    left = max(0, min(left, width - crop_width))
    top = max(0, min(top, height - crop_height))
    return image.crop(
        (round(left), round(top), round(left + crop_width), round(top + crop_height))
    )


def warm_bw(image: Image.Image, contrast: float = 1.06) -> Image.Image:
    gray = ImageEnhance.Contrast(ImageOps.grayscale(image)).enhance(contrast)
    return ImageOps.colorize(
        gray,
        black="#2a3631",
        white="#fbf5ea",
        mid="#8c7c6d",
    )


def save(image: Image.Image, name: str, size: tuple[int, int] = (2400, 1800)) -> None:
    image.resize(size, Image.LANCZOS).save(
        SOURCE / name,
        format="JPEG",
        quality=95,
        subsampling=1,
        optimize=True,
        progressive=True,
    )
    print(f"source/{name}")


# Ashtanga: grupo en guerrero II, de noche, ya venía en blanco y negro.
save(warm_bw(crop_ratio(load(SOURCE / "IMG_3198.jpeg"))), "real-ashtanga.jpg")

# Flow: clase de interior. Recorte centrado en las tres alumnas.
flow = load(SOURCE / "IMG_0599.heic")
w, h = flow.size
flow = flow.crop(
    (
        int(w * 0.10),
        int(h * 0.08),
        int(w * 0.603),
        int(h * 0.75),
    )
)
save(warm_bw(flow), "real-flow.jpg")

# Somática: postura de niño, de noche.
save(
    warm_bw(
        crop_ratio(
            load(SOURCE / "IMG_3199.jpeg"),
            center_x=0.59,
            center_y=0.49,
            width_ratio=0.80,
        )
    ),
    "real-somatico.jpg",
)

# Alternativa: clase de tercera edad con pelotas.
save(
    warm_bw(
        crop_ratio(
            load(SOURCE / "IMG_6762.HEIC"),
            center_x=0.43,
            center_y=0.45,
            width_ratio=0.55,
        )
    ),
    "real-tercera-edad.jpg",
)

# Hero sepia para la web y para el mosaico.
hero = load(ROOT.parent / "src" / "public" / "new-hero.jpeg")
warm_bw(hero, contrast=1.04).save(
    ROOT.parent / "src" / "public" / "new-hero-sepia.jpg",
    format="JPEG",
    quality=95,
    subsampling=1,
    optimize=True,
    progressive=True,
)
print("src/public/new-hero-sepia.jpg")
