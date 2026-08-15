from PIL import Image
import os

raw_dir = r"c:\Users\dell\Documents\antigravity\friendly-nobel\public\assets\raw"
portraits_dir = r"c:\Users\dell\Documents\antigravity\friendly-nobel\public\assets\portraits"

p49 = Image.open(os.path.join(raw_dir, "page_49.png"))
w49, h49 = p49.size
print("P49 size:", w49, h49)

# On page 49, the dad is the man in dark suit with glasses and red tie standing at the far left!
# Let's inspect coordinates on the far left:
dad_formal_exact = p49.crop((int(w49 * 0.08), int(h49 * 0.38), int(w49 * 0.22), int(h49 * 0.82)))
dad_formal_exact.save(os.path.join(portraits_dir, "dad_formal.png"))

# On page 50, the dad is the second person from the left (wearing black shirt, bright neon yellow vest with reflector stripes, and glasses):
p50 = Image.open(os.path.join(raw_dir, "page_50.png"))
w50, h50 = p50.size
print("P50 size:", w50, h50)
dad_site_exact = p50.crop((int(w50 * 0.23), int(h50 * 0.28), int(w50 * 0.46), int(h50 * 0.82)))
dad_site_exact.save(os.path.join(portraits_dir, "dad_site.png"))

print("Precise portrait crops saved!")
