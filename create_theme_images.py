from PIL import Image, ImageDraw, ImageFont, ImageFilter
import random
import os

# Ensure img directory exists
if not os.path.exists('img'):
    os.makedirs('img')

def create_gradient(width, height, c1, c2, direction='diagonal'):
    base = Image.new('RGB', (width, height), c1)
    top = Image.new('RGB', (width, height), c2)
    mask = Image.new('L', (width, height))
    mask_data = []
    
    for y in range(height):
        for x in range(width):
            if direction == 'diagonal':
                mask_data.append(int(255 * (x + y) / (width + height)))
            else:
                mask_data.append(int(255 * y / height))
                
    mask.putdata(mask_data)
    base.paste(top, (0, 0), mask)
    return base

def draw_text_centered(draw, text, w, h, font_size=60):
    try:
        # Try to use a default font, fallback to default
        font = ImageFont.truetype("arial.ttf", font_size)
    except:
        font = ImageFont.load_default()
    
    # Get bounding box
    bbox = draw.textbbox((0, 0), text, font=font)
    text_w = bbox[2] - bbox[0]
    text_h = bbox[3] - bbox[1]
    
    x = (w - text_w) // 2
    y = (h - text_h) // 2
    
    # Shadow
    draw.text((x+2, y+2), text, font=font, fill=(0,0,0, 128))
    # Text
    draw.text((x, y), text, font=font, fill=(255,255,255))

# Dimensions for Hero Images (16:9 roughly)
W, H = 1920, 1080

# 1. Cyberpunk (Dark Blue/Magenta)
img_cyber = create_gradient(W, H, (20, 0, 50), (0, 200, 255))
draw = ImageDraw.Draw(img_cyber)
# Add some neon lines
for i in range(20):
    y = random.randint(0, H)
    draw.line([(0, y), (W, y + random.randint(-100, 100))], fill=(255, 0, 255, 100), width=2)
draw_text_centered(draw, "CYBERPUNK NEON", W, H)
img_cyber.save('img/hero_cyber.png')

# 2. Ghibli Nature (Sky Blue/Green)
img_ghibli = create_gradient(W, H, (135, 206, 235), (144, 238, 144), direction='vertical')
draw = ImageDraw.Draw(img_ghibli)
# Clouds
for i in range(10):
    x = random.randint(0, W)
    y = random.randint(0, H//2)
    r = random.randint(50, 150)
    draw.ellipse([x, y, x+r, y+r/1.5], fill=(255, 255, 255, 200))
draw_text_centered(draw, "GHIBLI NATURE", W, H)
img_ghibli.save('img/hero_ghibli.png')

# 3. Hyper Realism (Skin Tone/Gold/Dark)
img_real = create_gradient(W, H, (50, 30, 20), (255, 215, 0))
draw = ImageDraw.Draw(img_real)
draw_text_centered(draw, "HYPER REALISM", W, H)
img_real.save('img/hero_realism.png')

# 4. Abstract 3D (Purple/Silver fluid)
img_abstract = create_gradient(W, H, (100, 50, 200), (200, 200, 200))
draw = ImageDraw.Draw(img_abstract)
# Circles
for i in range(30):
    x = random.randint(0, W)
    y = random.randint(0, H)
    r = random.randint(20, 200)
    draw.ellipse([x, y, x+r, y+r], outline=(255,255,255, 100), width=5)
draw_text_centered(draw, "ABSTRACT 3D", W, H)
img_abstract.save('img/hero_abstract.png')

# 5. Isometric (Pastel Pink/Blue)
img_iso = create_gradient(W, H, (255, 182, 193), (173, 216, 230))
draw = ImageDraw.Draw(img_iso)
# Grid lines
for i in range(0, W, 50):
    draw.line([(i, 0), (i, H)], fill=(255, 255, 255, 50), width=1)
for i in range(0, H, 50):
    draw.line([(0, i), (W, i)], fill=(255, 255, 255, 50), width=1)
draw_text_centered(draw, "ISOMETRIC WORLD", W, H)
img_iso.save('img/hero_isometric.png')

print("Generated 5 images in img/ folder.")
