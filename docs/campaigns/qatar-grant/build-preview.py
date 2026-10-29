from pathlib import Path
import re, base64

R = Path(__file__).resolve().parents[3]

def uri(p):
    ext = p.suffix.lower()
    mime = {
        '.woff': 'font/woff',
        '.svg': 'image/svg+xml',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.webp': 'image/webp'
    }.get(ext, 'application/octet-stream')
    return 'data:' + mime + ';base64,' + base64.b64encode(p.read_bytes()).decode()

s = (R / 'qatar-grant.html').read_text(encoding='utf-8')
s = re.sub(r'<link rel="preload"[^>]+>', '', s)
s = re.sub(r'<script src="content/js/(?:qatar-grant|lang)\.js" defer></script>', '', s)

css = (R / 'content/css/qatar-grant.css').read_text(encoding='utf-8')
css = re.sub(r"url\('([^']+)'\)", lambda m: "url('" + uri((R / 'content/css' / m[1]).resolve()) + "')", css)
s = s.replace('<link rel="stylesheet" href="content/css/qatar-grant.css">', '<style>' + css + '</style>')

s = re.sub(r'src="(content/assets/[^\"]+)"', lambda m: 'src="' + uri(R / m[1]) + '"', s)
s = re.sub(r'href="\./([^\"]+)"', lambda m: 'href="https://hagzz.el7lm.com/' + m[1] + '"', s)

js = ''.join('<script>' + (R / 'content/js' / name).read_text(encoding='utf-8') + '</script>' for name in ['qatar-grant.js', 'lang.js'])
s = s.replace('<link rel="stylesheet" href="/content/css/grant-popup.css">', '<style>' + (R / 'content/css/grant-popup.css').read_text(encoding='utf-8') + '</style>')
s = s.replace('<script src="/content/js/grant-popup.js" defer></script>', '')

popup = (R / 'content/js/grant-popup.js').read_text(encoding='utf-8').replace('/content/assets/images/icon/emoji.png', uri(R / 'content/assets/images/icon/emoji.png'))
s = s.replace('</body>', js + '<script>' + popup + '</script></body>')

p = R / 'docs/campaigns/qatar-grant/Hagzz-Qatar-Grant-Preview.html'
p.write_text(s, encoding='utf-8')
print('Standalone preview generated, bytes:', p.stat().st_size)
