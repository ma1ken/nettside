import fitz, os
pdf = r"frontend/src/Pages/My Work/DS4800 - Eksamen.pdf"
out = r"frontend/src/Images/unimate/extracted"
os.makedirs(out, exist_ok=True)
doc = fitz.open(pdf)
seen = set()
for pno, page in enumerate(doc, start=1):
    for img in page.get_images(full=True):
        xref = img[0]
        if xref in seen:
            continue
        seen.add(xref)
        base = doc.extract_image(xref)
        ext = base.get("ext", "png")
        data = base["image"]
        name = f"p{pno:02d}_xref{xref}.{ext}"
        with open(os.path.join(out, name), "wb") as f:
            f.write(data)
        print(name)
print("total", len(seen))
