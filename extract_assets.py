import fitz # PyMuPDF
import os
from PIL import Image

pdf_path = r"C:\Users\dell\Downloads\PROFILE_TOOT_002_compressed.pdf"
output_dir = r"c:\Users\dell\Documents\antigravity\friendly-nobel\public\assets"
os.makedirs(os.path.join(output_dir, "raw"), exist_ok=True)
os.makedirs(os.path.join(output_dir, "projects"), exist_ok=True)
os.makedirs(os.path.join(output_dir, "portraits"), exist_ok=True)
os.makedirs(os.path.join(output_dir, "clients"), exist_ok=True)
os.makedirs(os.path.join(output_dir, "documents"), exist_ok=True)

doc = fitz.open(pdf_path)
print(f"Total pages: {len(doc)}")

# Render high-res page images to allow crisp cropping
for page_num in range(len(doc)):
    page = doc[page_num]
    pix = page.get_pixmap(dpi=200) # High DPI
    page_img_path = os.path.join(output_dir, "raw", f"page_{page_num+1}.png")
    pix.save(page_img_path)

print("All raw pages rendered. Now extracting specific crops...")

# Page 49: Dad formal portrait (middle left)
p49 = Image.open(os.path.join(output_dir, "raw", "page_49.png"))
w, h = p49.size
dad_formal = p49.crop((int(w * 0.17), int(h * 0.32), int(w * 0.38), int(h * 0.88)))
dad_formal.save(os.path.join(output_dir, "portraits", "dad_formal.png"))

# Page 50: Dad on-site in high-vis vest
p50 = Image.open(os.path.join(output_dir, "raw", "page_50.png"))
w50, h50 = p50.size
dad_site = p50.crop((int(w50 * 0.23), int(h50 * 0.28), int(w50 * 0.49), int(h50 * 0.88)))
dad_site.save(os.path.join(output_dir, "portraits", "dad_site.png"))

# Projects:
# Page 8: Alfanar Factory
p8 = Image.open(os.path.join(output_dir, "raw", "page_8.png"))
p8.crop((int(p8.width * 0.05), int(p8.height * 0.24), int(p8.width * 0.95), int(p8.height * 0.82))).save(os.path.join(output_dir, "projects", "alfanar_factory.png"))

# Page 9: Princess Nora Housing PN05 (50 Villas Foundations)
p9 = Image.open(os.path.join(output_dir, "raw", "page_9.png"))
p9.crop((int(p9.width * 0.05), int(p9.height * 0.28), int(p9.width * 0.95), int(p9.height * 0.85))).save(os.path.join(output_dir, "projects", "pnu_housing_villas.png"))

# Page 10: Princess Nora Admin/Library/Tunnels PN03
p10 = Image.open(os.path.join(output_dir, "raw", "page_10.png"))
p10.crop((int(p10.width * 0.05), int(p10.height * 0.28), int(p10.width * 0.95), int(p10.height * 0.88))).save(os.path.join(output_dir, "projects", "pnu_library_tunnels.png"))

# Page 11: Princess Nora Academic Colleges & Bridge PN01
p11 = Image.open(os.path.join(output_dir, "raw", "page_11.png"))
p11.crop((int(p11.width * 0.05), int(p11.height * 0.28), int(p11.width * 0.95), int(p11.height * 0.85))).save(os.path.join(output_dir, "projects", "pnu_academic_bridge.png"))

# Page 12: SPEMACO Tower
p12 = Image.open(os.path.join(output_dir, "raw", "page_12.png"))
p12.crop((int(p12.width * 0.05), int(p12.height * 0.24), int(p12.width * 0.95), int(p12.height * 0.86))).save(os.path.join(output_dir, "projects", "spemaco_tower.png"))

# Page 13: KAP-1 Security Project Quaiayeh Site 49
p13 = Image.open(os.path.join(output_dir, "raw", "page_13.png"))
p13.crop((int(p13.width * 0.05), int(p13.height * 0.24), int(p13.width * 0.95), int(p13.height * 0.85))).save(os.path.join(output_dir, "projects", "kap1_quaiayeh.png"))

# Page 14: KAP-1 Security Project Madinah Site 231
p14 = Image.open(os.path.join(output_dir, "raw", "page_14.png"))
p14.crop((int(p14.width * 0.05), int(p14.height * 0.24), int(p14.width * 0.95), int(p14.height * 0.85))).save(os.path.join(output_dir, "projects", "kap1_madinah.png"))

# Page 15: Strategic Water Reservoir Jeddah Briman (170M Liters)
p15 = Image.open(os.path.join(output_dir, "raw", "page_15.png"))
p15.crop((int(p15.width * 0.05), int(p15.height * 0.28), int(p15.width * 0.95), int(p15.height * 0.85))).save(os.path.join(output_dir, "projects", "jeddah_water_reservoir_1.png"))

# Page 16: Strategic Water Reservoir Jeddah Briman Part 2
p16 = Image.open(os.path.join(output_dir, "raw", "page_16.png"))
p16.crop((int(p16.width * 0.05), int(p16.height * 0.28), int(p16.width * 0.95), int(p16.height * 0.85))).save(os.path.join(output_dir, "projects", "jeddah_water_reservoir_2.png"))

# Page 17, 18, 19, 20: El-Deyar Residence
p17 = Image.open(os.path.join(output_dir, "raw", "page_17.png"))
p17.crop((int(p17.width * 0.05), int(p17.height * 0.4), int(p17.width * 0.95), int(p17.height * 0.85))).save(os.path.join(output_dir, "projects", "eldeyar_residence_1.png"))

p18 = Image.open(os.path.join(output_dir, "raw", "page_18.png"))
p18.crop((int(p18.width * 0.05), int(p18.height * 0.4), int(p18.width * 0.95), int(p18.height * 0.85))).save(os.path.join(output_dir, "projects", "eldeyar_residence_pool.png"))

# Page 21: Prince Sultan Hospital
p21 = Image.open(os.path.join(output_dir, "raw", "page_21.png"))
p21.crop((int(p21.width * 0.05), int(p21.height * 0.26), int(p21.width * 0.95), int(p21.height * 0.85))).save(os.path.join(output_dir, "projects", "prince_sultan_hospital.png"))

# Page 22: Derma Clinic
p22 = Image.open(os.path.join(output_dir, "raw", "page_22.png"))
p22.crop((int(p22.width * 0.05), int(p22.height * 0.24), int(p22.width * 0.95), int(p22.height * 0.85))).save(os.path.join(output_dir, "projects", "derma_clinic.png"))

# Page 29 & 30: Oliver Brown Cafe
p30 = Image.open(os.path.join(output_dir, "raw", "page_30.png"))
p30.crop((int(p30.width * 0.05), int(p30.height * 0.22), int(p30.width * 0.95), int(p30.height * 0.85))).save(os.path.join(output_dir, "projects", "oliver_brown_cafe.png"))

# Page 32 & 33 & 34: Saffori Land Khafji & Reception
p32 = Image.open(os.path.join(output_dir, "raw", "page_32.png"))
p32.crop((int(p32.width * 0.05), int(p32.height * 0.26), int(p32.width * 0.95), int(p32.height * 0.85))).save(os.path.join(output_dir, "projects", "saffori_land_khafji.png"))

p33 = Image.open(os.path.join(output_dir, "raw", "page_33.png"))
p33.crop((int(p33.width * 0.05), int(p33.height * 0.28), int(p33.width * 0.95), int(p33.height * 0.85))).save(os.path.join(output_dir, "projects", "saffori_reception.png"))

# Page 35: Mokka & More Cafe
p35 = Image.open(os.path.join(output_dir, "raw", "page_35.png"))
p35.crop((int(p35.width * 0.05), int(p35.height * 0.28), int(p35.width * 0.95), int(p35.height * 0.85))).save(os.path.join(output_dir, "projects", "mokka_and_more.png"))

# Page 36: Saffori Land Hafr Al-Batin
p36 = Image.open(os.path.join(output_dir, "raw", "page_36.png"))
p36.crop((int(p36.width * 0.05), int(p36.height * 0.28), int(p36.width * 0.95), int(p36.height * 0.85))).save(os.path.join(output_dir, "projects", "saffori_hafr_batin.png"))

# Page 37 & 38: Xtreme Zone Hafr Al-Batin
p37 = Image.open(os.path.join(output_dir, "raw", "page_37.png"))
p37.crop((int(p37.width * 0.05), int(p37.height * 0.28), int(p37.width * 0.95), int(p37.height * 0.85))).save(os.path.join(output_dir, "projects", "xtreme_zone.png"))

# Page 39: Concrete pump & Reinforcement
p39 = Image.open(os.path.join(output_dir, "raw", "page_39.png"))
p39.crop((int(p39.width * 0.05), int(p39.height * 0.28), int(p39.width * 0.95), int(p39.height * 0.85))).save(os.path.join(output_dir, "projects", "concrete_pump_rebar.png"))

# Page 44: Luxury Villa Exterior
p44 = Image.open(os.path.join(output_dir, "raw", "page_44.png"))
p44.crop((int(p44.width * 0.05), int(p44.height * 0.28), int(p44.width * 0.95), int(p44.height * 0.85))).save(os.path.join(output_dir, "projects", "luxury_villa_facade.png"))

# Page 46: Contemporary Commercial Mall Strip
p46 = Image.open(os.path.join(output_dir, "raw", "page_46.png"))
p46.crop((int(p46.width * 0.05), int(p46.height * 0.28), int(p46.width * 0.95), int(p46.height * 0.85))).save(os.path.join(output_dir, "projects", "commercial_strip_mall.png"))

# Page 47 & 48: Clients
p47 = Image.open(os.path.join(output_dir, "raw", "page_47.png"))
p47.crop((int(p47.width * 0.08), int(p47.height * 0.3), int(p47.width * 0.92), int(p47.height * 0.82))).save(os.path.join(output_dir, "clients", "clients_grid_1.png"))

p48 = Image.open(os.path.join(output_dir, "raw", "page_48.png"))
p48.crop((int(p48.width * 0.08), int(p48.height * 0.3), int(p48.width * 0.92), int(p48.height * 0.82))).save(os.path.join(output_dir, "clients", "clients_grid_2.png"))

# Page 49 & 50 Full photos
p49.crop((int(p49.width * 0.05), int(p49.height * 0.28), int(p49.width * 0.95), int(p49.height * 0.85))).save(os.path.join(output_dir, "portraits", "team_celebration.png"))
p50.crop((int(p50.width * 0.05), int(p50.height * 0.28), int(p50.width * 0.95), int(p50.height * 0.85))).save(os.path.join(output_dir, "portraits", "site_engineers_team.png"))

print("Cropping and asset extraction complete!")
