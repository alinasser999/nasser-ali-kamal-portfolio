import os
from PIL import Image

output_dir = r"c:\Users\dell\Documents\antigravity\friendly-nobel\public\assets"

# Page 6: Org chart
p6 = Image.open(os.path.join(output_dir, "raw", "page_6.png"))
p6.crop((int(p6.width * 0.05), int(p6.height * 0.16), int(p6.width * 0.95), int(p6.height * 0.85))).save(os.path.join(output_dir, "documents", "org_chart.png"))

# Page 23: CR Certificate
p23 = Image.open(os.path.join(output_dir, "raw", "page_23.png"))
p23.crop((int(p23.width * 0.05), int(p23.height * 0.25), int(p23.width * 0.95), int(p23.height * 0.86))).save(os.path.join(output_dir, "documents", "cr_certificate.png"))

# Page 24: VAT Certificate
p24 = Image.open(os.path.join(output_dir, "raw", "page_24.png"))
p24.crop((int(p24.width * 0.05), int(p24.height * 0.15), int(p24.width * 0.5), int(p24.height * 0.86))).save(os.path.join(output_dir, "documents", "vat_certificate.png"))

# Page 25: National Address
p25 = Image.open(os.path.join(output_dir, "raw", "page_25.png"))
p25.crop((int(p25.width * 0.05), int(p25.height * 0.15), int(p25.width * 0.5), int(p25.height * 0.86))).save(os.path.join(output_dir, "documents", "national_address.png"))

# Page 26: Saudization Certificate
p26 = Image.open(os.path.join(output_dir, "raw", "page_26.png"))
p26.crop((int(p26.width * 0.05), int(p26.height * 0.15), int(p26.width * 0.55), int(p26.height * 0.86))).save(os.path.join(output_dir, "documents", "saudization_certificate.png"))

print("Additional documents extracted successfully!")
