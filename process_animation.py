import os
from PIL import Image
import numpy as np

def advanced_chroma_key(img_path):
    img = Image.open(img_path).convert("RGBA")
    # Convert to float for precise math
    data = np.array(img).astype(float)
    
    r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]
    
    # 1. Detect Key Color (assume top-left pixel is background if mostly green)
    # Or just use standard pure green (0, 255, 0) or the average of corners
    key_color = data[0, 0, :3] # Top-left pixel RGB
    
    # 2. Calculate Color Distance in 3D RGB space
    # Euclidean distance from key color
    # dist = sqrt((r-kr)^2 + (g-kg)^2 + (b-kb)^2)
    diff = data[:, :, :3] - key_color
    dist = np.sqrt(np.sum(diff**2, axis=2))
    
    # 3. Generate Alpha Mask (Soft Keying)
    # Pixels very close to key_color -> Alpha 0
    # Pixels far from key_color -> Alpha 255
    # Smooth transition in between for anti-aliasing
    
    # Tuning parameters for "Sequence Frames" (usually clean 3D renders)
    # Thresholds need to be tight for clean background but allow soft edges
    low_thresh = 50.0   # Below this distance = fully transparent
    high_thresh = 100.0 # Above this distance = fully opaque
    
    # Smoothstep function
    alpha = (dist - low_thresh) / (high_thresh - low_thresh)
    alpha = np.clip(alpha, 0.0, 1.0)
    
    # Curve alpha for sharpness
    # alpha = alpha * alpha * (3 - 2 * alpha) # Standard smoothstep curve
    
    # 4. Despill (Green Suppression)
    # If a pixel is semi-transparent or opaque but has high green, suppress it
    # Simple algorithm: G should not exceed average of R and B by much
    # New G = min(G, (R + B) * 1.1)
    
    # Only apply to semi-transparent or fringe pixels
    # But for safety, apply to all. 
    # If G > R and G > B, clamp it.
    
    limit = np.maximum(r, b) * 0.95 + 10 # slightly lenient
    # Or average: (r+b)/2
    
    # Common despill: G' = min(G, (R+B)/2)
    spill_val = (r + b) / 2.0
    g_new = np.minimum(g, spill_val * 1.2) # Allow some green (1.2x) to keep vibrancy if needed, or 1.0 for strict removal
    
    # Only replace G where it was reduced
    g_final = g_new
    
    # Update data
    data[:, :, 1] = g_final
    data[:, :, 3] = alpha * 255.0
    
    # data[:, :, 3] = alpha * 255.0
    
    # Do NOT crop individually to ensure consistent frame size for animation
    # result = Image.fromarray(data.astype(np.uint8))
    # bbox = result.getbbox()
    # if bbox:
    #     result = result.crop(bbox)
        
    return Image.fromarray(data.astype(np.uint8))

def create_animated_webp(input_dir, output_path, frame_count=7, duration=100):
    frames = []
    print(f"Processing {frame_count} frames from {input_dir} using Advanced Math Key...")
    
    # Store dimensions of first frame to force consistency
    target_size = None
    
    for i in range(1, frame_count + 1):
        filename = f"序列帧{i}.png"
        path = os.path.join(input_dir, filename)
        if os.path.exists(path):
            print(f"  - Processing {filename}...")
            
            img = advanced_chroma_key(path)
            
            # Resize
            # Keep quality high, maybe 200px width
            w, h = img.size
            if w > 1: # valid image
                new_w = 200
                new_h = int(h * (new_w / w))
                
                # Check consistency
                if target_size is None:
                    target_size = (new_w, new_h)
                elif (new_w, new_h) != target_size:
                     print(f"    Warning: Dimension mismatch {new_w}x{new_h} vs {target_size}. Forcing resize.")
                     # Force consistent size
                     new_w, new_h = target_size
                
                img = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
                frames.append(img)
        else:
            print(f"  - Warning: {filename} not found.")

    if frames:
        print(f"Saving high-quality animated WebP to {output_path}...")
        frames[0].save(
            output_path,
            save_all=True,
            append_images=frames[1:],
            duration=duration,
            loop=0,
            optimize=True,
            quality=90,
            format='WEBP'
        )
        print("Done!")
    else:
        print("No frames found to animate.")

if __name__ == "__main__":
    img_dir = r"c:\Users\DELL\Desktop\Vlog\img"
    output_file = os.path.join(img_dir, "back_animation.webp")
    create_animated_webp(img_dir, output_file)
