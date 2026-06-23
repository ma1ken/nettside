import fitz
pdf = r"frontend/src/Pages/My Work/DS4800 - Eksamen.pdf"
doc = fitz.open(pdf)
seen = set()
for pno, page in enumerate(doc, start=1):
    for img in page.get_images(full=True):
        xref = img[0]
        if xref in seen:
            continue
        seen.add(xref)
        b = doc.extract_image(xref)
        print(f"p{pno:02d} xref{xref} {b.get('width')}x{b.get('height')} {b.get('ext')}")
