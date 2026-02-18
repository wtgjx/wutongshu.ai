from PIL import Image, ImageDraw, ImageFont
import os

def create_image(filename, text, color1, color2):
    width, height = 400, 600
    img = Image.new('RGB', (width, height), color1)
    draw = ImageDraw.Draw(img)
    
    # Simple gradient effect (top to bottom)
    for y in range(height):
        r = int(color1[0] + (color2[0] - color1[0]) * y / height)
        g = int(color1[1] + (color2[1] - color1[1]) * y / height)
        b = int(color1[2] + (color2[2] - color1[2]) * y / height)
        draw.line([(0, y), (width, y)], fill=(r, g, b))
        
    # Add text
    try:
        font = ImageFont.truetype("arial.ttf", 40)
    except IOError:
        font = ImageFont.load_default()
        
    draw.text((20, 50), text, fill="white", font=font)
    
    # Save
    base_dir = r"c:\Users\DELL\Desktop\Vlog\img"
    if not os.path.exists(base_dir):
        os.makedirs(base_dir)
    img.save(os.path.join(base_dir, filename))
    print(f"Created {filename}")

# Colors (RGB)
# Cyberpunk: Neon Pink/Blue
create_image("hero_cyber.png", "CYBERPUNK", (255, 0, 128), (0, 255, 255))
# Space: Deep Blue/Purple
create_image("hero_space.png", "SPACE OPERA", (0, 0, 50), (100, 0, 200))
# Fantasy: Dark Green/Gold
create_image("hero_fantasy.png", "DARK FANTASY", (0, 50, 0), (200, 150, 0))
# Mecha: Grey/Red
create_image("hero_mecha.png", "MECHA", (50, 50, 50), (200, 0, 0))
