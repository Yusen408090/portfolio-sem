from pathlib import Path
import re
from xml.sax.saxutils import escape
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
root = Path(__file__).resolve().parents[1]
styles = {
'body': ParagraphStyle('body', fontName='Helvetica', fontSize=10, leading=14, textColor=HexColor('#334155'), spaceAfter=5),
'h1': ParagraphStyle('h1', fontName='Helvetica-Bold', fontSize=27, leading=32, textColor=HexColor('#312e81'), spaceAfter=8),
'h2': ParagraphStyle('h2', fontName='Helvetica-Bold', fontSize=11, leading=15, textColor=HexColor('#4f46e5'), spaceBefore=14, spaceAfter=7, keepWithNext=True),
'h3': ParagraphStyle('h3', fontName='Helvetica-Bold', fontSize=10.5, leading=14, textColor=HexColor('#1e293b'), spaceBefore=6, spaceAfter=5, keepWithNext=True)
}
def markup(s):
    s = escape(s)
    s = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', r'<link href="\2" color="#4f46e5">\1</link>', s)
    return re.sub(r'\*\*(.+?)\*\*', r'<b>\1</b>', s)
story=[]
for line in (root/'assets/CV_Yuan_Sen.md').read_text(encoding='utf-8-sig').splitlines():
    if not line.strip(): continue
    kind='body'
    for prefix,style in [('### ','h3'),('## ','h2'),('# ','h1')]:
        if line.startswith(prefix): kind=style;line=line[len(prefix):];break
    if line.startswith('- '): line='• '+line[2:]
    story.append(Paragraph(markup(line), styles[kind]))
def decorate(c,doc):
    c.setStrokeColor(HexColor('#c7d2fe'));c.setLineWidth(1)
    c.line(42, A4[1]-30, A4[0]-42, A4[1]-30)
SimpleDocTemplate(str(root/'assets/CV_Yuan_Sen.pdf'),pagesize=A4,rightMargin=42,leftMargin=42,topMargin=42,bottomMargin=38,title='CV - Yuan Sen',author='Yuan Sen').build(story,onFirstPage=decorate,onLaterPages=decorate)
print('CV generado')
